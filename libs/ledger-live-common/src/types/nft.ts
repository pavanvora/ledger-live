import type BigNumber from "bignumber.js";
import { CryptoCurrencyIds } from ".";

export type NFTStandards = "ERC721" | "ERC1155";

export type NFTMediaSizes = "preview" | "big" | "original";

export type NFTMedias = Record<
  NFTMediaSizes,
  {
    uri: string;
    mediaType: string; // mime-type
  }
>;

export type NFTMetadata = {
  tokenName: string | null;
  nftName: string | null;
  medias: NFTMedias;
  description: string | null;
  properties: Array<Record<"key" | "value", string>>;
  links: Record<NFTMetadataLinksProviders, string>;
};

export type NFTCollectionMetadata = {
  tokenName: string | null;
};

export type ProtoNFT = {
  // id crafted by live
  id: string;
  // id on chain
  tokenId: string;
  amount: BigNumber;
  contract: string;
  standard: NFTStandards;
  currencyId: CryptoCurrencyIds;
  metadata?: NFTMetadata;
};

export type ProtoNFTRaw = Omit<ProtoNFT, "amount"> & {
  amount: string;
};

export type NFT = Omit<ProtoNFT, "metadata"> & {
  metadata: NFTMetadata;
};

export type NFTMetadataLinksProviders = "opensea" | "rarible" | "explorer";

export type NFTMetadataResponse = {
  status: 200 | 404 | 500;
  result?: {
    contract: string;
    tokenId: string;
    tokenName: string | null;
    nftName: string | null;
    medias: NFTMedias;
    description: string | null;
    properties: Array<Record<"key" | "value", string>>;
    links: Record<NFTMetadataLinksProviders, string>;
  } | null;
};

export type NFTCollectionMetadataResponse = {
  status: 200 | 404 | 500;
  result?: {
    contract: string;
    tokenName: string | null;
  } | null;
};
