import PageContainer from '@/components/common/PageContainer';
import PageTitle from '@/components/common/PageTitle';
import PoolsList from '@/components/pools/PoolsList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PoolsPage = () => {
    return (
        <PageContainer>
            <div className="w-full flex justify-between">
                <PageTitle title={'Pools'} showSettings={false} />
                <Link to={'create'}>
                    <Button className="whitespace-nowrap" size={'md'}>
                        Create Pool
                    </Button>
                </Link>
            </div>

            <div className="w-full lg:gap-8 mt-8 lg:mt-16">
                {/* <div className="pb-5 bg-card border border-card-border/60 rounded-3xl"> */}
                <div className="pb-5 bg-[#151419] border border-[#FBFBFB] rounded-3xl">
                    <PoolsList />
                </div>
            </div>
        </PageContainer>
    );
};

export default PoolsPage;
