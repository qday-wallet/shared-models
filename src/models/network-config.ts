import { Chain, ChainType } from './response-types';

export enum NetworkName {
  // Mainnets
  Railgun = 'Railgun',
  Ethereum = 'Ethereum',
  BNBChain = 'BNB_Chain',
  Polygon = 'Polygon',

  // Testnets
  EthereumRopsten = 'Ethereum_Ropsten',
  EthereumGoerli = 'Ethereum_Goerli',
  PolygonMumbai = 'Polygon_Mumbai',

  // Dev only
  Hardhat = 'Hardhat',
}

export type FeesSerialized = {
  deposit: string;
  withdraw: string;
  nft: string;
};

type BaseToken = {
  symbol: string;
  wrappedSymbol: string;
  wrappedAddress: BaseTokenWrappedAddress;
  decimals: number;
};

export type Network = {
  chain: Chain;
  name: NetworkName;
  publicName: string;
  shortPublicName: string;
  coingeckoId: string;
  baseToken: BaseToken;
  proxyContract: RailgunProxyContract;
  relayAdaptContract: RelayAdaptContract;
  deploymentBlock: RailgunProxyDeploymentBlock;
  isDevOnlyNetwork?: boolean;
  isTestnet?: boolean;
  evmGasType: EVMGasType;
  shouldQuickSync: boolean;
  deprecated?: boolean;
};

enum RailgunProxyContract {
  Ethereum = '0xfa7093cdd9ee6932b4eb2c9e1cde7ce00b1fa4b9',
  EthereumRopsten = '0x1c2A4092e2a436d78FcdF3a178a4E1ed87f0bB8F',
  EthereumGoerli = '0xe8bEa99BB438C2f3D533604D33258d74d5eE4824',
  BNBChain = '0x590162bf4b50f6576a459b75309ee21d92178a10',
  PolygonPOS = '0x19b620929f97b7b990801496c3b361ca5def8c71',
  Hardhat = '0x0165878A594ca255338adfa4d48449f69242Eb8F',
  PolygonMumbai = '0x3ee8306321d992483BDC9c69B8F622Ba3FFF05B6',
}

enum RelayAdaptContract {
  Ethereum = '0x22af4EDBeA3De885dDa8f0a0653E6209e44e5B84',
  EthereumRopsten = '0x95abeff80554b23cefe1d3f8dcff3b7d90e28045',
  EthereumGoerli = '0xD147B7Dfa636a1c50A52bF6A6FE910680274eE24',
  BNBChain = '0x20d868C7F1Eb706C46641ADD2f849c5DBf4dB158',
  PolygonPOS = '0x30D8AD0339e2CF160620589f2DBa1765126A5fDC',
  Hardhat = '0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f',
  PolygonMumbai = '0xf157372693A6536E228d7A9e4f7A588Ae21fe681',
}

export enum RailgunProxyDeploymentBlock {
  Ethereum = 14737691,
  EthereumRopsten = 12226000,
  EthereumGoerli = 7795991,
  BNBChain = 17633701,
  PolygonPOS = 28083766,
  Hardhat = 0,
  PolygonMumbai = 28697343,
}

export enum BaseTokenWrappedAddress {
  EthereumWETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  EthereumRopstenWETH = '0xc778417e063141139fce010982780140aa0cd5ab', // (Ropsten) WETH
  EthereumGoerliWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6', // (Goerli) WETH
  HardhatWETH = '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44', // (Hardhat) WETH
  BinanceWBNB = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
  PolygonWMATIC = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
  PolygonMumbaiWMATIC = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', // (Mumbai) WMATIC
}

/**
 * Type0 = non-EIP-1559 (gasPrice).
 * Type1 = EIP-1559 (maxFeePerGas and maxPriorityFeePerGas).
 */
export enum EVMGasType {
  Type0 = 'Type0',
  Type2 = 'Type2',
}

export const NETWORK_CONFIG: { [name in NetworkName]: Network } = {
  [NetworkName.Railgun]: {
    chain: {
      type: -1,
      id: -1,
    },
    name: NetworkName.Railgun,
    publicName: 'RAILGUN',
    shortPublicName: '',
    coingeckoId: '',
    baseToken: {} as BaseToken,
    proxyContract: RailgunProxyContract.Ethereum,
    relayAdaptContract: RelayAdaptContract.Ethereum,
    deploymentBlock: RailgunProxyDeploymentBlock.Ethereum,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: false,
  },
  [NetworkName.Ethereum]: {
    chain: {
      type: ChainType.EVM,
      id: 1,
    },
    name: NetworkName.Ethereum,
    publicName: 'Ethereum',
    shortPublicName: 'Ethereum',
    coingeckoId: 'ethereum',
    baseToken: {
      symbol: 'ETH',
      wrappedSymbol: 'WETH',
      wrappedAddress: BaseTokenWrappedAddress.EthereumWETH,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.Ethereum,
    relayAdaptContract: RelayAdaptContract.Ethereum,
    deploymentBlock: RailgunProxyDeploymentBlock.Ethereum,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: true,
  },
  [NetworkName.EthereumRopsten]: {
    // DEPRECATED
    chain: {
      type: ChainType.EVM,
      id: 3,
    },
    name: NetworkName.EthereumRopsten,
    publicName: 'Ropsten Testnet',
    shortPublicName: 'Ropsten',
    coingeckoId: 'ethereum',
    baseToken: {
      symbol: 'ETH',
      wrappedSymbol: 'WETH',
      wrappedAddress: BaseTokenWrappedAddress.EthereumRopstenWETH,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.EthereumRopsten,
    relayAdaptContract: RelayAdaptContract.EthereumRopsten,
    deploymentBlock: RailgunProxyDeploymentBlock.EthereumRopsten,
    isDevOnlyNetwork: true,
    isTestnet: true,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: false,
    deprecated: true,
  },
  [NetworkName.EthereumGoerli]: {
    chain: {
      type: ChainType.EVM,
      id: 5,
    },
    name: NetworkName.EthereumGoerli,
    publicName: 'Görli Testnet',
    shortPublicName: 'Görli',
    coingeckoId: 'ethereum',
    baseToken: {
      symbol: 'ETH',
      wrappedSymbol: 'WETH',
      wrappedAddress: BaseTokenWrappedAddress.EthereumGoerliWETH,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.EthereumGoerli,
    relayAdaptContract: RelayAdaptContract.EthereumGoerli,
    deploymentBlock: RailgunProxyDeploymentBlock.EthereumGoerli,
    isTestnet: true,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: true,
  },
  [NetworkName.BNBChain]: {
    chain: {
      type: ChainType.EVM,
      id: 56,
    },
    name: NetworkName.BNBChain,
    publicName: 'BNB Chain',
    shortPublicName: 'BSC',
    coingeckoId: 'binance-smart-chain',
    baseToken: {
      symbol: 'BNB',
      wrappedSymbol: 'WBNB',
      wrappedAddress: BaseTokenWrappedAddress.BinanceWBNB,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.BNBChain,
    relayAdaptContract: RelayAdaptContract.BNBChain,
    deploymentBlock: RailgunProxyDeploymentBlock.BNBChain,
    evmGasType: EVMGasType.Type0,
    shouldQuickSync: true,
  },
  [NetworkName.Polygon]: {
    chain: {
      type: ChainType.EVM,
      id: 137,
    },
    name: NetworkName.Polygon,
    publicName: 'Polygon PoS',
    shortPublicName: 'Polygon',
    coingeckoId: 'polygon-pos',
    baseToken: {
      symbol: 'MATIC',
      wrappedSymbol: 'WMATIC',
      wrappedAddress: BaseTokenWrappedAddress.PolygonWMATIC,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.PolygonPOS,
    relayAdaptContract: RelayAdaptContract.PolygonPOS,
    deploymentBlock: RailgunProxyDeploymentBlock.PolygonPOS,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: true,
  },
  [NetworkName.Hardhat]: {
    chain: {
      type: ChainType.EVM,
      id: 31337,
    },
    name: NetworkName.Hardhat,
    publicName: 'Hardhat Testnet',
    shortPublicName: 'Hardhat',
    coingeckoId: '',
    baseToken: {
      symbol: 'ETH',
      wrappedSymbol: 'WETH',
      wrappedAddress: BaseTokenWrappedAddress.HardhatWETH,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.Hardhat,
    relayAdaptContract: RelayAdaptContract.Hardhat,
    deploymentBlock: RailgunProxyDeploymentBlock.Hardhat,
    isDevOnlyNetwork: true,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: false,
  },
  [NetworkName.PolygonMumbai]: {
    chain: {
      type: ChainType.EVM,
      id: 80001,
    },
    name: NetworkName.PolygonMumbai,
    publicName: 'Mumbai Testnet',
    shortPublicName: 'Mumbai',
    coingeckoId: 'polygon-pos',
    baseToken: {
      symbol: 'MATIC',
      wrappedSymbol: 'WMATIC',
      wrappedAddress: BaseTokenWrappedAddress.PolygonMumbaiWMATIC,
      decimals: 18,
    },
    proxyContract: RailgunProxyContract.PolygonMumbai,
    relayAdaptContract: RelayAdaptContract.PolygonMumbai,
    deploymentBlock: RailgunProxyDeploymentBlock.PolygonMumbai,
    isDevOnlyNetwork: true,
    isTestnet: true,
    evmGasType: EVMGasType.Type2,
    shouldQuickSync: true,
  },
};

export const networkForChain = (chain: Chain): Optional<Network> => {
  return Object.values(NETWORK_CONFIG).find(
    network =>
      network.chain.type === chain.type && network.chain.id === chain.id,
  );
};
