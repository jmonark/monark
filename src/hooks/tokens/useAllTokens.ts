import {
    DEFAULT_NATIVE_NAME,
    DEFAULT_NATIVE_SYMBOL,
} from '@/constants/default-chain-id';
import {
    TokenFieldsFragment,
    useAllTokensQuery,
} from '@/graphql/generated/graphql';
import { useTokensState } from '@/state/tokensStore';
import { ADDRESS_ZERO } from '@cryptoalgebra/sdk';
import { useMemo } from 'react';
import { Address } from 'viem';
import { useChainId } from 'wagmi';

export function useAllTokens(showNativeToken: boolean = true) {
    const chainId = useChainId();

    const { data: allTokens, loading } = useAllTokensQuery();

    const { importedTokens, actions } = useTokensState();
    const { removeToken } = actions;

    const tokensBlackList: Address[] = useMemo(() => [
        "0x116e699bf25da6d80543850029257c9116692ac2" as Address,
        "0xa590eb1fb2d4e052a32b1c8401ec70cc4ee88764" as Address, 
        "0x1a070f70ba0cb496ac937655c69c2c579eb47359" as Address,
    ], []);

    const mergedTokens = useMemo(() => {
        const tokens = new Map<Address, TokenFieldsFragment>();
        
        if (!allTokens) {
            const _importedTokens = Object.values(importedTokens[chainId] || []);
            for (const token of _importedTokens) {
                tokens.set(token.id.toLowerCase() as Address, {
                    ...token,
                    derivedMatic: 0,
                });
            }
            return [...tokens].map(([, token]) => ({ ...token }));
        }

        if (showNativeToken)
            tokens.set(ADDRESS_ZERO, {
                id: ADDRESS_ZERO,
                symbol: DEFAULT_NATIVE_SYMBOL,
                name: DEFAULT_NATIVE_NAME,
                decimals: 18,
                derivedMatic: 1,
            });

        for (const token of allTokens.tokens.filter(
            (token) => !tokensBlackList.includes(token.id as Address)
        )) {
            tokens.set(token.id.toLowerCase() as Address, { ...token });
        }

        const _importedTokens = Object.values(importedTokens[chainId] || []);

        for (const token of _importedTokens) {
            tokens.set(token.id.toLowerCase() as Address, {
                ...token,
                derivedMatic: 0,
            });
        }

        const problematicTokenId = "0x116e699bf25da6d80543850029257c9116692ac2".toLowerCase() as Address;
        if (tokens.has(problematicTokenId)) {
            // Remove it from storage
            removeToken(problematicTokenId, chainId);
            // Also remove it from the current tokens Map
            tokens.delete(problematicTokenId);
        }

        return [...tokens].map(([, token]) => ({ ...token }));
    }, [allTokens, importedTokens, tokensBlackList, chainId, showNativeToken, removeToken]);

    return useMemo(
        () => ({
            tokens: mergedTokens,
            isLoading: loading || Boolean(allTokens && !mergedTokens.length),
        }),
        [mergedTokens, allTokens, loading]
    );
}
