import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ASideWrap,
  Holder,
  HolderElement,
  ElementText,
  Arrow,
  AccordionArrow,
  AccordionMenu,
  AccordionElement,
  Switch,
  InputSwitch,
  SliderRound,
  PriceSelect,
  PriceElement,
  ApplyBtn,
  PriceVariations,
} from "./ASideFilterCollection.styles";
import { FilterIco, StatusIco, PriceIco, UsdIco, EthIco } from "./imports";

import { rentAction } from "../../../../store/reducers/Filter/filterActions";

const ASideFilterCollection: React.FC<{ marginTop?: string }> = ({
  marginTop,
}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState<any>({
    status: false,
    price: false,
  });
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

  const newRef: any = useRef();
  const stakingRef: any = useRef();
  return (
    <ASideWrap className={(active && "active") || ""}>
      <Holder marginTop={marginTop}>
        <HolderElement
          onClick={() => {
            !active && setActive(true);
            if (active) {
              setActiveMenu({
                status: false,
                price: false,
              });
              setActive(false);
            }
          }}
        >
          <FilterIco />
          <ElementText>Filter</ElementText>
          <Arrow />
        </HolderElement>
        <HolderElement
          onClick={() => {
            if (!activeMenu.status) {
              setActiveMenu({ status: true });
              !active && setActive(true);
            } else setActiveMenu({ status: false });
          }}
        >
          <StatusIco />
          <ElementText>Statustgt</ElementText>
          <AccordionArrow
            className={(activeMenu.status && "active-status") || ""}
          />
        </HolderElement>
        <AccordionMenu
          mh="146px"
          className={(activeMenu.status && "active-status") || ""}
        >
          <AccordionElement
            onClick={() => {
              newRef.current.checked = !newRef.current.checked;
            }}
          >
            <span>New</span>
            <Switch>
              <InputSwitch type="checkbox" ref={newRef} />
              <SliderRound />
            </Switch>
          </AccordionElement>
          <AccordionElement
            onClick={() => {
              stakingRef.current.checked = !stakingRef.current.checked;
              dispatch(rentAction(stakingRef.current.checked));
            }}
          >
            <span>Staking</span>
            <Switch>
              <InputSwitch type="checkbox" ref={stakingRef} />
              <SliderRound />
            </Switch>
          </AccordionElement>
          <AccordionElement>
            <span>Rent</span>
            <Switch>
              <InputSwitch type="checkbox" />
              <SliderRound />
            </Switch>
          </AccordionElement>
          <AccordionElement>
            <span>Has Offers</span>
            <Switch>
              <InputSwitch type="checkbox" />
              <SliderRound />
            </Switch>
          </AccordionElement>
        </AccordionMenu>
        <HolderElement
          onClick={() => {
            if (!activeMenu.price) {
              setActiveMenu({ price: true });
              !active && setActive(true);
            } else setActiveMenu({ price: false });
          }}
        >
          <PriceIco />
          <ElementText>Price</ElementText>
          <AccordionArrow
            className={(activeMenu.price && "active-price") || ""}
          />
        </HolderElement>
        <AccordionMenu
          mh="178px"
          className={(activeMenu.price && "active-price") || ""}
        >
          <AccordionElement padd="15px 15px 20px 15px" direction="column">
            {priceCurrency.map((item) => {
              if (item.selected)
                return (
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
                  </PriceElement>
                );
            })}
            <PriceSelect className={(priceMenu && "price-menu-active") || ""}>
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
            <ApplyBtn>Apply</ApplyBtn>
          </AccordionElement>
        </AccordionMenu>
        {/* MVP
                <HolderElement>
                    <CategoriesIco/>
                    <ElementText>Categories</ElementText>
                    <AccordionArrow />
                </HolderElement>
                <HolderElement>
                    <CollectionsIco />
                    <ElementText>Collections</ElementText>
                    <AccordionArrow />
                </HolderElement>
                <HolderElement>
                    <ChainsIco />
                    <ElementText>Chains</ElementText>
                    <AccordionArrow />
                </HolderElement>*/}
      </Holder>
    </ASideWrap>
  );
};

export default ASideFilterCollection;
