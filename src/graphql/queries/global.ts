import { gql } from "@apollo/client";

export const BUNDLE_FRAGMENT = gql`
    fragment BundleFields on Bundle {
        id
        maticPriceUSD
    }
`

export const NATIVE_PRICE = gql`
    query NativePrice {
        bundles {
            ...BundleFields
        }
    }
`

export const TVL_VOLUME_USD_FRAGMENT = gql`
    fragment TVLVolumeUSDFields on Factory {
        totalValueLockedUSD
        totalVolumeUSD
    }
`

export const TVL_VOLUME_USD = gql`
    query TVLVolumeUSD {
        factories (first: 1) {
            ...TVLVolumeUSDFields
        }
    }
`



