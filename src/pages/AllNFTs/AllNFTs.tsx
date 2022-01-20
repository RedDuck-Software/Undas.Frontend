import { SideBar, CardList } from '../../components';

import { Background } from '../../globalStyles';
import { AllNFTsContainer } from './AllNFTs.styles';

const AllNFTs = () => {
  return (
    <Background>
      <AllNFTsContainer>
        <SideBar />
        <CardList />
      </AllNFTsContainer>
    </Background>
  );
};

export default AllNFTs;
