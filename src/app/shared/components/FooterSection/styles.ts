import styled from "styled-components";

export const StyledContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #051114;
  color: #ffffffb3;
  padding: 4.6875em 12.5% 5.3125em 12.5%;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.6875em;
  border-bottom: 1px solid #ffffff33;
`;

export const StyledFirstContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875em;

  img {
    width: 25em;
  }

  p {
    max-width: 21.25em;
    line-height: 160%;
    font-size: 1em !important;
  }
`;

export const StyledSecondContent = styled.div`
  display: flex;
  gap: 3.75em;
`;

export const StyledIFTOLogoContainer = styled.div`
  padding: 2.1875em 1.5625em;
  background-color: white;
  border-radius: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375em;

  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    color: #ffffff;
    font-size: 1.375em;
  }

  p {
    line-height: 160%;
    font-size: 1.125em;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
`;

export const StyledCopyright = styled.p`
  margin-top: 1.875em;
`;
