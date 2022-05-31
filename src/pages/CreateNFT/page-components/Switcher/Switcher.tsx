import React from "react";
import { Form } from "react-bootstrap";

import { SwitcherWrap } from "./Switcher.styles";

interface ISwithcerProps {
  onClick: React.MouseEventHandler;
}

const Switcher: React.FC<ISwithcerProps> = ({onClick}) => {
  return (
    <SwitcherWrap onClick={(event) => onClick(event)}>
      <Form>
        <Form.Switch type="switch" id="switch" label="" />
      </Form>
    </SwitcherWrap>
  );
};

export default Switcher;
