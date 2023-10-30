import styled from "styled-components";

const IMAGE_SIZE = "9em";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.75em;
  margin: 0 auto;
  width: 27.5em;
  height: 27.5em;
  background-color: white;
  padding: 1em;
  border-radius: 1.25em;
  text-align: center;

  h2,
  a {
    font-family: "Black Ops One", sans-serif;
    font-weight: 400;
  }

  h2 {
    color: #842020;
    text-transform: uppercase;
    font-size: 1.15em;
  }

  p {
    line-height: 150%;
    font-size: 1em;
  }

  a {
    text-decoration: none;
    user-select: none;

    img {
      height: 30px;
    }
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${IMAGE_SIZE};
  height: ${IMAGE_SIZE};
  border-radius: 50%;

  img {
    width: ${IMAGE_SIZE};
  }
`;
