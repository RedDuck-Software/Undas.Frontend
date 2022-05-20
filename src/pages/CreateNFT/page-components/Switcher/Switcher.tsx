import React from "react";
import { Form } from "react-bootstrap";

import { SwitcherWrap } from "./Switcher.styles";

const Switcher: React.FC = () => {
  return (
    <SwitcherWrap>
      <Form>
        <Form.Switch type="switch" id="switch" label="" />
      </Form>
    </SwitcherWrap>
  );
};

export default Switcher;
