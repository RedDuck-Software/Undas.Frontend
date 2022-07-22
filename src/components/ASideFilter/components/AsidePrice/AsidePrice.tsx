import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setPriceAction } from "../../../../store/reducers/Filter/filterActions";
import { IAction, IState } from "../../ASideFilter";
import {
  HolderElement,
  ElementText,
  AccordionArrow,
  AccordionMenu,
  AccordionElement,
  PriceContainer,
  PriceElement,
  PriceSelect,
  PriceVariations,
  InputPriceContainer,
  InputBlock,
  MinPrice,
  ButtonContainer,
  ApplyButton,
  ApplyBtn,
} from "../../ASideFilter.styles";
import { EthIco, PriceIco, UsdIco } from "../../imports";
import { AsideSection } from "../../types";

interface AsidePriceProps {
  dispatch: React.Dispatch<IAction>;
  state: IState;
}

export const AsidePrice: React.FC<AsidePriceProps> = ({ dispatch, state }) => {
  const dispatchRedux = useDispatch();
  const [min, setMin] = useState<string | number | undefined>("");
  const [max, setMax] = useState<string | number | undefined>("");
  const [priceMenu, setPriceMenu] = useState<boolean>(false);
  const [priceCurrency, setPriceCurrency] = useState([
    {
      currency: "eth",
      text: "Ether (ETH)",
      ico: <EthIco />,
      selected: true,
    },
    {
      currency: "usd",
      text: "United States Dollar (USD)",
      ico: <UsdIco />,
      selected: false,
    },
  ]);

  const variations = priceCurrency.filter((element) => {
    if (!element.selected) {
      return true;
    }
  });

  const currencySelector = (currencyItem: any) => {
    setPriceCurrency((prev) =>
      prev.map((item) => {
        if (currencyItem.currency !== item.currency) {
          item.selected = false;
        }
        if (currencyItem.currency === item.currency) {
          item.selected = true;
        }
        return { ...item };
      }),
    );
  };

  const handlePriceApply = () => {
    dispatchRedux(setPriceAction({ min, max }));
  };

  return (
    <>
      <HolderElement
        onClick={() => {
          if (!state.price) {
            dispatch({ type: AsideSection.menu, payload: true });
          }
          dispatch({ type: AsideSection.price, payload: !state.price });
        }}
        isActive={state.price}
      >
        <PriceIco />
        <ElementText>Price</ElementText>
        <AccordionArrow className={(state.price && "active-price") || ""} />
      </HolderElement>
      <AccordionMenu
        mh="178px"
        className={(state.price && "active-price") || ""}
      >
        <AccordionElement padd="15px 15px 20px 15px" direction="column">
          {priceCurrency.map((item) => {
            if (item.selected)
              return (
                <PriceContainer key={`${item.ico}-${item.selected}`}>
                  <PriceElement
                    className={(priceMenu && "price-menu-active") || ""}
                    onClick={() => {
                      !priceMenu ? setPriceMenu(true) : setPriceMenu(false);
                    }}
                  >
                    {item.ico}
                    <span>{item.text}</span>
                    <AccordionArrow
                      className={(priceMenu && "price-menu-active") || ""}
                    />
                    <PriceSelect
                      className={(priceMenu && "price-menu-active") || ""}
                    >
                      {variations.map((item) => {
                        return (
                          <PriceVariations
                            key={item.text}
                            onClick={() => {
                              currencySelector(item);
                            }}
                          >
                            {item.ico}
                            <span>{item.text}</span>
                          </PriceVariations>
                        );
                      })}
                    </PriceSelect>
                  </PriceElement>
                  <InputPriceContainer>
                    <InputBlock>
                      <MinPrice
                        type="number"
                        id="min"
                        placeholder="Min"
                        min="0"
                        step="0.005"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                      />
                    </InputBlock>
                    <InputBlock className="margin-left">
                      <MinPrice
                        type="number"
                        id="max"
                        placeholder="Max"
                        min="0.01"
                        step="0.1"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </InputBlock>
                  </InputPriceContainer>
                  <ButtonContainer>
                    <ApplyButton onClick={handlePriceApply}>Apply</ApplyButton>
                  </ButtonContainer>
                </PriceContainer>
              );
          })}

          <ApplyBtn>Apply</ApplyBtn>
        </AccordionElement>
      </AccordionMenu>
    </>
  );
};
