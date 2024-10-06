import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"
import { defineChain } from "viem"

import ETHLogo from '@/assets/tokens/ether.svg'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

// const holeskyChain = defineChain({
//   id: 17000,
//   network: 'holesky',
//   name: 'Holesky',
//   nativeCurrency: { name: 'Holesky Ether', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: [import.meta.env.VITE_INFURA_RPC],
//     },
//     public: {
//       http: [import.meta.env.VITE_INFURA_RPC],
//     },
//   },
//   blockExplorers: {
//     etherscan: {
//       name: 'Etherscan',
//       url: 'https://holesky.etherscan.io',
//     },
//     default: {
//       name: 'Etherscan',
//       url: 'https://holesky.etherscan.io',
//     },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xca11bde05977b3631167028862be2a173976ca11',
//       blockCreated: 77,
//     },
//   },
//   testnet: true,
// })

const rootstockChain = defineChain({
  id: 30,
  network: 'rootstock',
  name: 'Rootstock',
  nativeCurrency: { name: 'Rootstock Bitcoin', symbol: 'RBTC', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'RSK Explorer',
      url: 'https://explorer.rsk.co',
    },
    default: {
      name: 'RSK Explorer',
      url: 'https://explorer.rsk.co',
    },
  },
  contracts: {
    multicall3: {
      address: '0x7afe66f2b22d6a7ef53e93a97e6e4f4154945b92',
      blockCreated: 5061978,
    },
  },
  testnet: false,
})

const chains = [rootstockChain]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains, 
  chainImages: {
    17000: ETHLogo
  },
  defaultChain: rootstockChain,
  themeVariables: {
    '--w3m-accent':  "#F56E0F",
  }
})

function App({ children }: { children: React.ReactNode }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <Layout>
          {children}
        </Layout>
    </WagmiConfig>
  )
}

export default App
