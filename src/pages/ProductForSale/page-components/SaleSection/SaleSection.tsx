import PutUpForSale from '../PutUpForSale/PutUpForSale';
import PlaceAuction from '../PlaceAuction/PlaceAuction';

import { SaleSectionContainer, ButtonsContainer } from './SaleSection.styles';

const SaleSection = ({ itemId }: { itemId: string }) => {
  return (
    <>
      <SaleSectionContainer>
        <ButtonsContainer>
          <PutUpForSale itemId={itemId} />
          <PlaceAuction />
        </ButtonsContainer>
      </SaleSectionContainer>
    </>
  );
};

export default SaleSection;
