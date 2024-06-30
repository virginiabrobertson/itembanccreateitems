import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'

// Use the RPC endpoint of your choice.
const umi = createUmi('https://api.devnet.solana.com').use(mplTokenMetadata())