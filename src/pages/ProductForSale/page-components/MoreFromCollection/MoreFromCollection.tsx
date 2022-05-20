import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { card01, card02, card03 } from "./imports";
import {
  MoreFromCollectionContainer,
  MoreFromCollectionTop,
  MoreFromCollectionContent,
  CardsContainer,
  ButtonContainer,
} from "./MoreFromCollection.styles";

import { CardItem } from "../../../../components";
import { Button } from "../../../../globalStyles";

const MoreFromCollection: React.FC = () => {
  const [Collection, setCollection] = useState(true);

  const toogleCollection = () => {
    setCollection(!Collection);
  };

  return (
    <MoreFromCollectionContainer>
      {Collection ? (
        <>
          <MoreFromCollectionTop onClick={toogleCollection}>
            More from this collection <IoIosArrowUp />
          </MoreFromCollectionTop>
          <MoreFromCollectionContent>
            <CardsContainer>
              <CardItem image={card01} />
              <CardItem image={card02} />
              <CardItem image={card03} />
            </CardsContainer>
            <ButtonContainer>
              <Button violet big>
                View Collection
              </Button>
            </ButtonContainer>
          </MoreFromCollectionContent>
        </>
      ) : (
        <>
          <MoreFromCollectionTop closed onClick={toogleCollection}>
            More from this collection <IoIosArrowDown />
          </MoreFromCollectionTop>
        </>
      )}
    </MoreFromCollectionContainer>
  );
};

export default MoreFromCollection;
