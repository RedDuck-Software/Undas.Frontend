import plus18 from "../icons/18.svg";
import allNFTsIcon from "../icons/all-nfts.svg";
import artworkIcon from "../icons/art-work.svg";
import celebrityIcon from "../icons/celebrity.svg";
import metaverses from "../icons/metaverses.svg";
import newIcon from "../icons/new-stars.svg";
import photoIcon from "../icons/photography.svg";
import rwaNFTIcon from "../icons/rwa-nft.svg";
import sportIcon from "../icons/sport.svg";
import { Category, ICategory } from "../types/category";

export const getCategory = (category: Category): ICategory => {
  switch (category) {
    case Category.other:
      return { icon: allNFTsIcon, label: "All NFTs" };
    case Category.new:
      return { icon: newIcon, label: "New" };
    case Category.artwork:
      return { icon: artworkIcon, label: "Artwork" };
    case Category.sport:
      return { icon: sportIcon, label: "Sports" };
    case Category.photography:
      return { icon: photoIcon, label: "Photography" };
    case Category.metaverses:
      return { icon: metaverses, label: "Metaverses" };
    case Category.celebrity:
      return { icon: celebrityIcon, label: "Celebrity" };
    case Category.rwaNFT:
      return { icon: rwaNFTIcon, label: "rwaNFT" };
    case Category.rwaNFTLong:
      return { icon: rwaNFTIcon, label: "Real World Asset NFT" };
    case Category.plus18:
      return { icon: plus18, label: "18+NFTs" };

    default:
      return { icon: "", label: "No such category" };
  }
};
