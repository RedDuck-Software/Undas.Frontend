import styled from 'styled-components';

interface StakingProps {
  closed?: boolean;
}

export const StakingContainer = styled.div``;

export const StakingTop = styled.div<StakingProps>`
  background: #ffffff;
  border: 1px solid #5d3f92;
  ${({ closed }) => (closed ? `` : 'border-bottom: none')};
  word-spacing: 4px;
  padding: 3%;
  border-radius: ${({ closed }) => (closed ? `10px` : '10px 10px 0px 0px')};
  margin-top: 1.4rem;
  cursor pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }
`;

export const StakingForm = styled.form`
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
  width: 100%;
  background: #ffffff;
`;

export const StakingFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3%;
  border: none;
  border-top: 1px solid #5d3f92;
  color: #7c7c7c;
  background: rgba(251, 245, 255, 0.7);

  &:nth-child(1) {
    background: none;
  }
`;

export const StakingLabel = styled.label``;

export const StakingInput = styled.input`
  text-align: center;
  max-width: 4rem;
  background: #893ac2;
  border: 2px solid #893ac2;
  color: #fff;
  border-radius: 5px;

  &::placeholder {
    color: #fff;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 537px) {
    font-size: 0.75rem;
  }
`;

// export const StakingContent = styled.div`
//   border: 1px solid #5d3f92;
//   border-radius: 0px 0px 10px 10px;
//   border-top: none;
// `

// export const StakingTable = styled.table`
//   border-collapse: collapse;
//   width: 100%;
// `

// export const StakingTableHead = styled.thead`
//   background: #ffffff;

//   tr {
//     text-align: left;
//     color: #7c7c7c;
//   }
// `

// export const TableRow = styled.tr`
//   border-top: 1px solid #5d3f92;

//   &:nth-child(3) {
//     display: flex;
//     justify-content: center;
//     padding: 1rem 0 2rem;
//     background: rgba(251, 245, 255, 0.7);
//     border-radius: 0 0 10px 10px;
//   }
// `

// export const TableHeadTitle = styled.th`
//   padding: 3%;
//   font-weight: 400;

//   &:nth-child(2) {
//     text-align: right;
//   }
// `

// export const TableInput = styled.input`
//   width: 67px;
//   height: 28px;
//   background: #893ac2;
//   box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 5px;
//   outline: none;
//   border: none;
//   text-align: center;

//   color: #fff;

//   &::placeholder {
//     color: #fff;
//   }

//   &:focus::placeholder {
//     color: transparent;
//   }
// `

// export const StakingTableBody = styled.tbody``

// export const TableColumn = styled.td`
//   color: #7c7c7c;
//   padding: 3%;
//   background: rgba(251, 245, 255, 0.7) !important;

//   &:nth-child(1) {
//     border-radius: 10px;
//   }

//   &:nth-child(2) {
//     text-align: right;
//   }
// `

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;
  border-top: 1px solid #5d3f92;
  background: rgba(251, 245, 255, 0.7);
  border-radius: 0 0 10px 10px;
`;

export const CongratulationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(251, 245, 255, 0.7);
  border-radius: 0 0 10px 10px;

  span {
    color: #000000;
    font-size: 1.125rem;
    padding-bottom: 1rem;

    @media (max-width: 539px) {
      font-size: 0.8rem;
    }
  }
`;
