import React from 'react';

import { SaleSectionContainer, ButtonsContainer } from './SaleSection.styles';

import PutUpForSale from '../PutUpForSale/PutUpForSale';

const SaleSection: React.FC<{ itemId: string }> = ({ itemId }) => {
  return (
    <>
      <SaleSectionContainer>
        <ButtonsContainer>
          <PutUpForSale itemId={itemId} />
        </ButtonsContainer>
      </SaleSectionContainer>
    </>
  );
};

export default SaleSection;
