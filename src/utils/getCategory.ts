import artworkIcon from "../icons/art-work.svg";
import celebrityIcon from "../icons/celebrity.svg";
import metaverseIcon from "../icons/metaverses.svg";
import photoIcon from "../icons/photography.svg";
import rwaNFTIcon from "../icons/rwa-nft.svg";
import sportIcon from "../icons/sport.svg";
import { Category, ICategory } from "../types/category";

export const getCategory = (category: Category): ICategory => {
  switch (category) {
    case Category.artwork:
      return { icon: artworkIcon, label: "Artwork" };
    case Category.sport:
      return { icon: sportIcon, label: "Sport" };
    case Category.photography:
      return { icon: photoIcon, label: "Protography" };
    case Category.metaverses:
      return { icon: metaverseIcon, label: "Metaverses" };
    case Category.celebrity:
      return { icon: celebrityIcon, label: "Celebrity" };
    case Category.rwaNFT:
      return { icon: rwaNFTIcon, label: "rwaNFT" };
  }
};
