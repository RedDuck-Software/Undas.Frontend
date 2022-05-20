import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  PlaceBidWrapper,
  PlaceBidButton,
  PlaceBidDropdown,
  DropdownLine,
  DropdownPrice,
  DropdownInput,
  DropdownButton,
} from "./PlaceBid.styles";

const PlaceBid: React.FC = () => {
  const [isDropdownOpen, setDropdown] = useState(false);

  const toogleDropdown = () => {
    setDropdown(!isDropdownOpen);
  };

  return (
    <PlaceBidWrapper>
      <PlaceBidButton onClick={toogleDropdown}>
        Place a bid{" "}
        {isDropdownOpen ? (
          <IoIosArrowDown size={20} />
        ) : (
          <IoIosArrowUp size={20} />
        )}
      </PlaceBidButton>
      {isDropdownOpen ? (
        <PlaceBidDropdown>
          <DropdownLine>
            Present value <DropdownPrice>2.5</DropdownPrice>
          </DropdownLine>
          <DropdownLine>
            Raise the price <DropdownInput type="number" placeholder="3" />
          </DropdownLine>
          <DropdownLine>
            <DropdownButton disabled>Place a bid</DropdownButton>
          </DropdownLine>
        </PlaceBidDropdown>
      ) : (
        <></>
      )}
    </PlaceBidWrapper>
  );
};

export default PlaceBid;
