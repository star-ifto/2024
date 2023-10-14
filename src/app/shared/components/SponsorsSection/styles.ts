import { ContentContainer } from "..";
import styled from "styled-components";

export const StyledContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 6%;
  width: 100%;

  h1 {
    text-align: center;
    width: 100%;
  }
`;

export const StyledSponsorsContainer = styled.div`
  margin-top: 6%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  gap: 8em;
`;
