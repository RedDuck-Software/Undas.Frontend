import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";


//Mobile Reward
export const MobileRewardMenuWrap = styled.div`
  display: none;
  padding: 40px 0;
  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 768px) {
    padding: 20px 0 0;
  }
`;
export const RewardAccordion = styled(Accordion)``;
export const RewardAccordionItem = styled(Accordion.Item)`
    margin-bottom: 30px;
`;
export const RewardAccordionHeader = styled(Accordion.Header)`
    button{
        flex-direction: column;
        background-color: #fbf5ff;
        :focus{
            border-color: transparent;
            box-shadow: 0 0 5px rgb(124, 124, 124);
        }
        ::after{
            margin: 0 auto;
        }
    &.accordion-button:not(.collapsed){
        color: #212529;
        background-color: #fbf5ff;
    }    
    &.accordion-button:not(.collapsed)::after{
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e");

    }
    @media (max-width: 576px) {
        padding: 20px 10px;
    }
    }
`;
export const RewardAccordionBody = styled(Accordion.Body)`
    padding: 0;
`;

