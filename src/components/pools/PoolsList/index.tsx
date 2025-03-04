import { poolsColumns } from "@/components/common/Table/poolsColumns";
import { useActiveFarmingsQuery, usePoolsListQuery } from "@/graphql/generated/graphql";
import { useMemo } from "react";
import { Address } from "viem";
import { ETERNAL_FARMINGS_API, POOL_AVG_APR_API, POOL_MAX_APR_API, fetcher } from "@/constants/api";
import useSWR from "swr";
import PoolsTable from "@/components/common/Table/poolsTable";
import { usePositions } from "@/hooks/positions/usePositions";
import { farmingClient } from "@/graphql/clients";

// Add a blacklist array to filter out specific pool IDs
const BLACKLISTED_POOLS: string[] = [
  // Add blacklisted pool IDs here
  "0x6B13607fA48ABe231810a96885C0916d3c0927ed",
  "0xea104725978e4179a35afa7c53ea8b47feb3b1b8"
];

const PoolsList = () => {
    const { data: pools, loading: isPoolsListLoading } = usePoolsListQuery();
    
    // Filter out blacklisted pools
    const filteredPools = useMemo(() => {
      if (!pools?.pools) return { pools: [] };
      
      return {
        ...pools,
        pools: pools.pools.filter(pool => 
          !BLACKLISTED_POOLS.some(blacklistedId => 
            blacklistedId.toLowerCase() === pool.id.toLowerCase()
          )
        )
      };
    }, [pools]);
    
    
    const { data: activeFarmings, loading: isFarmingsLoading } = useActiveFarmingsQuery({
        client: farmingClient,
    });
    const { positions, loading: isPositionsLoading } = usePositions();

    const { data: poolsMaxApr, isLoading: isPoolsMaxAprLoading } = useSWR(POOL_MAX_APR_API, fetcher);
    const { data: poolsAvgApr, isLoading: isPoolsAvgAprLoading } = useSWR(POOL_AVG_APR_API, fetcher);
    const { data: farmingsAPR, isLoading: isFarmingsAPRLoading } = useSWR(ETERNAL_FARMINGS_API, fetcher);

    const isLoading =
        isPoolsListLoading ||
        isPoolsMaxAprLoading ||
        isPoolsAvgAprLoading ||
        isPositionsLoading ||
        isFarmingsLoading ||
        isFarmingsAPRLoading;

    const formattedPools = useMemo(() => {
        if (isLoading || !filteredPools) return [];

        return filteredPools.pools.map(({ id, token0, token1, fee, totalValueLockedUSD, poolDayData }) => {
            const currentPool = poolDayData[0];
            const lastDate = currentPool ? currentPool.date * 1000 : 0;
            const currentDate = new Date().getTime();

            /* time difference calculations here to ensure that the graph provides information for the last 24 hours */
            const timeDifference = currentDate - lastDate;
            const msIn24Hours = 24 * 60 * 60 * 1000;

            const openPositions = positions?.filter((position) => position.pool.toLowerCase() === id.toLowerCase());
            const activeFarming = activeFarmings?.eternalFarmings.find((farming) => farming.pool === id);

            const poolMaxApr = poolsMaxApr && poolsMaxApr[id] ? Number(poolsMaxApr[id].toFixed(2)) : 0;
            const poolAvgApr = poolsAvgApr && poolsAvgApr[id] ? Number(poolsAvgApr[id].toFixed(2)) : 0;
            const farmApr = activeFarming && farmingsAPR && farmingsAPR[activeFarming.id] > 0 ? farmingsAPR[activeFarming.id] : 0;

            const avgApr = farmApr + poolAvgApr;

            return {
                id: id as Address,
                pair: {
                    token0,
                    token1,
                },
                fee: Number(fee) / 10_000,
                tvlUSD: Number(totalValueLockedUSD),
                volume24USD: timeDifference <= msIn24Hours ? currentPool.volumeUSD : 0,
                fees24USD: timeDifference <= msIn24Hours ? currentPool.feesUSD : 0,
                poolMaxApr,
                poolAvgApr,
                farmApr,
                avgApr,
                isMyPool: Boolean(openPositions?.length),
                hasActiveFarming: Boolean(activeFarming),
            };
        });
    }, [isLoading, filteredPools, positions, activeFarmings, poolsMaxApr, poolsAvgApr, farmingsAPR]);

    return (
        <div className="flex flex-col gap-4">
            <PoolsTable
                columns={poolsColumns}
                data={formattedPools}
                defaultSortingID={"tvlUSD"}
                link={"pool"}
                showPagination={true}
                loading={isLoading}
            />
        </div>
    );
};

export default PoolsList;
