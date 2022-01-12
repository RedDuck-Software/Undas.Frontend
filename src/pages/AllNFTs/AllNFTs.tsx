import { SideBar, CardList, Paggination } from '../../components';

import { Background } from '../../globalStyles';
import {
  AllNFTsContainer,
  AllNFTsPagginationContainer,
} from './AllNFTs.styles';

const AllNFTs = () => {
  return (
    <Background>
      <AllNFTsContainer>
        <SideBar />
        <CardList />
      </AllNFTsContainer>
      <AllNFTsPagginationContainer>
        <Paggination />
      </AllNFTsPagginationContainer>
    </Background>
  );
};

export default AllNFTs;
