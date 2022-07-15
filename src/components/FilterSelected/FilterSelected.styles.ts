import styled from "styled-components";

export const SelectedCollectionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SelectedCollectionsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SelectedCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 15px;
  width: 160px;
  max-height: 36px;
  height: 100%;
  background: #fbf5ff;
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  border-radius: 10px;
`;

export const SelectedCollectionIcon = styled.img`
  margin-right: 5px;
`;
export const RemoveSelectedCollection = styled.img`
  margin-left: auto;
  cursor: pointer;
`;
export const RemoveAllSelectedCollection = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  cursor: pointer;
`;
