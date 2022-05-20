import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {
  PriceHistoryTop,
  PriceHistoryContainer,
  PriceHistoryInterface,
  PriceHistoryDropdown,
  PriceHistoryStatsContainer,
  PriceHistoryStatsValue,
  PriceHistoryGraph,
  PriceHistoryGraphContainer,
  PriceHistoryPage,
} from './PriceHistory.styles';

const PriceHistory: React.FC = () => {
  const [isPriceHistoryOpen,] = useState(false);

  /* const tooglePriceHistory = () => {
    setPriceHistory(!isPriceHistoryOpen);
  }; */

  return (
    <>
      {isPriceHistoryOpen ? (
        <>
          <PriceHistoryTop>
            Price History <IoIosArrowUp />
          </PriceHistoryTop>
          <PriceHistoryContainer>
            <PriceHistoryInterface>
              <PriceHistoryDropdown>
                All time <IoIosArrowDown />
              </PriceHistoryDropdown>
              <PriceHistoryStatsContainer>
                <span>All time Avg. Price</span>
                <PriceHistoryStatsValue>
                  <GiHamburgerMenu />
                  0,246
                </PriceHistoryStatsValue>
              </PriceHistoryStatsContainer>
            </PriceHistoryInterface>
            <PriceHistoryGraph>
              <PriceHistoryGraphContainer>0.9</PriceHistoryGraphContainer>
              <PriceHistoryGraphContainer>0.4</PriceHistoryGraphContainer>
              <PriceHistoryGraphContainer>0.2</PriceHistoryGraphContainer>
              <PriceHistoryGraphContainer>0</PriceHistoryGraphContainer>
            </PriceHistoryGraph>
            <PriceHistoryPage>6/34</PriceHistoryPage>
          </PriceHistoryContainer>
        </>
      ) : (
        <>
          <PriceHistoryTop>
            Price History <IoIosArrowDown />
          </PriceHistoryTop>
        </>
      )}
    </>
  );
};

export default PriceHistory;
