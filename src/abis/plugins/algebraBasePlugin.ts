export const algebraBasePluginABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_pool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_factory",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_pluginFactory",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "targetIsTooOld",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "volatilityOracleAlreadyInitialized",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint16",
                        "name": "alpha1",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "alpha2",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint32",
                        "name": "beta1",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "beta2",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "gamma1",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "gamma2",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "baseFee",
                        "type": "uint16"
                    }
                ],
                "indexed": false,
                "internalType": "struct AlgebraFeeConfiguration",
                "name": "feeConfig",
                "type": "tuple"
            }
        ],
        "name": "FeeConfiguration",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "newIncentive",
                "type": "address"
            }
        ],
        "name": "Incentive",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "newPlugin",
                "type": "address"
            }
        ],
        "name": "LimitOrderPlugin",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ALGEBRA_BASE_PLUGIN_MANAGER",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "afterFlash",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint160",
                "name": "",
                "type": "uint160"
            },
            {
                "internalType": "int24",
                "name": "tick",
                "type": "int24"
            }
        ],
        "name": "afterInitialize",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "int24",
                "name": "",
                "type": "int24"
            },
            {
                "internalType": "int24",
                "name": "",
                "type": "int24"
            },
            {
                "internalType": "int128",
                "name": "",
                "type": "int128"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "afterModifyPosition",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "zeroToOne",
                "type": "bool"
            },
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "uint160",
                "name": "",
                "type": "uint160"
            },
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "afterSwap",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "beforeFlash",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint160",
                "name": "",
                "type": "uint160"
            }
        ],
        "name": "beforeInitialize",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "int24",
                "name": "",
                "type": "int24"
            },
            {
                "internalType": "int24",
                "name": "",
                "type": "int24"
            },
            {
                "internalType": "int128",
                "name": "",
                "type": "int128"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "beforeModifyPosition",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "uint160",
                "name": "",
                "type": "uint160"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "beforeSwap",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint16",
                        "name": "alpha1",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "alpha2",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint32",
                        "name": "beta1",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "beta2",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "gamma1",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "gamma2",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "baseFee",
                        "type": "uint16"
                    }
                ],
                "internalType": "struct AlgebraFeeConfiguration",
                "name": "_config",
                "type": "tuple"
            }
        ],
        "name": "changeFeeConfiguration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "defaultPluginConfig",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeConfig",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "alpha1",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "alpha2",
                "type": "uint16"
            },
            {
                "internalType": "uint32",
                "name": "beta1",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "beta2",
                "type": "uint32"
            },
            {
                "internalType": "uint16",
                "name": "gamma1",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "gamma2",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "baseFee",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentFee",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "fee",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "secondsAgo",
                "type": "uint32"
            }
        ],
        "name": "getSingleTimepoint",
        "outputs": [
            {
                "internalType": "int56",
                "name": "tickCumulative",
                "type": "int56"
            },
            {
                "internalType": "uint88",
                "name": "volatilityCumulative",
                "type": "uint88"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32[]",
                "name": "secondsAgos",
                "type": "uint32[]"
            }
        ],
        "name": "getTimepoints",
        "outputs": [
            {
                "internalType": "int56[]",
                "name": "tickCumulatives",
                "type": "int56[]"
            },
            {
                "internalType": "uint88[]",
                "name": "volatilityCumulatives",
                "type": "uint88[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "incentive",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "targetIncentive",
                "type": "address"
            }
        ],
        "name": "isIncentiveConnected",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastTimepointTimestamp",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "limitOrderPlugin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pool",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "startIndex",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "amount",
                "type": "uint16"
            }
        ],
        "name": "prepayTimepointsStorageSlots",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newIncentive",
                "type": "address"
            }
        ],
        "name": "setIncentive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            }
        ],
        "name": "setLimitOrderPlugin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "timepointIndex",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "timepoints",
        "outputs": [
            {
                "internalType": "bool",
                "name": "initialized",
                "type": "bool"
            },
            {
                "internalType": "uint32",
                "name": "blockTimestamp",
                "type": "uint32"
            },
            {
                "internalType": "int56",
                "name": "tickCumulative",
                "type": "int56"
            },
            {
                "internalType": "uint88",
                "name": "volatilityCumulative",
                "type": "uint88"
            },
            {
                "internalType": "int24",
                "name": "tick",
                "type": "int24"
            },
            {
                "internalType": "int24",
                "name": "averageTick",
                "type": "int24"
            },
            {
                "internalType": "uint16",
                "name": "windowStartIndex",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as const