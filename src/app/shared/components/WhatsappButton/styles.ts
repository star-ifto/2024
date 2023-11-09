import styled from "styled-components";

interface IStyledContainerProps {
    buttonSize: string;
}

export const StyledContainer = styled.a<IStyledContainerProps>`
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);
    position: fixed;
    right: 1.875em;
    bottom: 1.875em;
    z-index: 10;

    border-radius: 50%;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({buttonSize}) => buttonSize};
    height: ${({buttonSize}) => buttonSize};

    img {
        width: ${({buttonSize}) => buttonSize};
    }

    &:hover {
        transform: scale(1.15);
    }
`;