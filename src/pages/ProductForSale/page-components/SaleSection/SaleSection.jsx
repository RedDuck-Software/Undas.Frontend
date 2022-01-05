import PutUpForSale from '../PutUpForSale/PutUpForSale';
import PlaceAuction from '../PlaceAuction/PlaceAuction';

import { SaleSectionContainer, ButtonsContainer } from './SaleSection.styles';

const SaleSection = () => {
  return (
    <>
      <SaleSectionContainer>
        <ButtonsContainer>
          <PutUpForSale />
          <PlaceAuction />
        </ButtonsContainer>
      </SaleSectionContainer>
    </>
  );
};

export default SaleSection;
