import { Address } from "viem";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import deepMerge from 'lodash.merge'

interface ImportedTokens {
    [chainId: number]: { 
        [address: Address]: { id: Address, symbol: string, name: string, decimals: number } 
    }
}

interface TokensState {
    importedTokens: ImportedTokens,
    actions: {
        importToken: (address: Address, symbol: string, name: string, decimals: number, chainId: number) => void;
        removeToken: (address: Address, chainId: number) => void;
    }
}

export const useTokensState = create(persist<TokensState>((set, get) => ({
    importedTokens: {},
    actions: {
        importToken: (address, symbol, name, decimals, chainId) => {
            const { importedTokens } = get()

            console.log(importedTokens)
            set({
                importedTokens: {
                    ...importedTokens,
                    [chainId]: {
                        ...importedTokens[chainId],
                        [address]: {
                            id: address,
                            symbol,
                            name,
                            decimals
                        }
                    }
                }
            })
        },
        removeToken: (address, chainId) => {
            const { importedTokens } = get();
            
            if (!importedTokens[chainId] || !importedTokens[chainId][address]) {
                return;
            }
            
            const updatedChainTokens = { ...importedTokens[chainId] };
            
            delete updatedChainTokens[address];
            
            set({
                importedTokens: {
                    ...importedTokens,
                    [chainId]: updatedChainTokens
                }
            });
        }
    }
}), { name: 'tokens-storage', storage: createJSONStorage(() => localStorage), merge: (persistedState, currentState) => deepMerge(currentState, persistedState) }))