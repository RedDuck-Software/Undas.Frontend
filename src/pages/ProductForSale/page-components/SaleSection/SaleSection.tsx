import PutUpForSale from '../PutUpForSale/PutUpForSale';

import { SaleSectionContainer, ButtonsContainer } from './SaleSection.styles';

const SaleSection = ({ itemId }: { itemId: string }) => {
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
