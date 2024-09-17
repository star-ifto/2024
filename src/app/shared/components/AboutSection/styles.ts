import styled from "styled-components";
import { ContentContainer } from "..";

export const StyledContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3%;

  h1 {
    text-align: center;
    width: 100%;
  }

  @media screen and (max-width: 1130px) {
    padding: 6%;
  }
`;

export const StyledTextContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 6%;

  .paragraph {
    line-height: 180%;
  }

  @media screen and (max-width: 1130px) {
    display: flex;
    flex-direction: column;
    gap: 2em;

    .paragraph {
      font-size: 1.25em;
    }
  }
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 240px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;

    gap: 2em;
  }
`;
