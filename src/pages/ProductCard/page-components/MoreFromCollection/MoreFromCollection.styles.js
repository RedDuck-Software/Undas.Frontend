import styled from 'styled-components'

export const MoreFromCollectionContainer = styled.div`
  width: 100%;
  padding: 1.4rem 6rem 0;
`

export const MoreFromCollectionTop = styled.div`
  background: #ffffff;
  border: 1px solid #5d3f92;
  word-spacing: 4px;
  padding: 1rem 2rem 1rem 4.5rem;
  border-radius: ${(props) => (props.closed ? `10px` : '10px 10px 0px 0px')};
  margin-top: 1.4rem;
  cursor pointer;

  display: flex;

  svg {
    position: relative;
    top: 4px;
    margin-left: auto;
  }
`

export const MoreFromCollectionContent = styled.div`
  background: rgba(251, 245, 255, 0.7);
  border: 1px solid #5d3f92;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1.5rem;
  width: 90%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0 7.5rem;
`
