import React from 'react';

import { ContainerLine } from './NFTLine.styles';

interface NFTGridProps {
  tokenId: number;
  URI: string;
  name: string;
  price?: number;
  premium?: number;
}

const NFTGrid: React.FC<NFTGridProps> = () => {
  return <ContainerLine>Enot</ContainerLine>;
};

export default NFTGrid;
