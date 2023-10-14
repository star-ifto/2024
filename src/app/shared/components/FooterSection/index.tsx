import GETECLogoImage from "../../assets/getec-logo.svg";
import IFTOLogoImage from "../../assets/ifto-logo.png";
import {
  StyledContainer,
  StyledContent,
  StyledCopyright,
  StyledFirstContent,
  StyledIFTOLogoContainer,
  StyledSecondContent,
  StyledTextsContainer,
} from "./styles";

export function FooterSection() {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledFirstContent>
          <img src={GETECLogoImage} alt="GETEC" />

          <p>
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            Ullamcorper purus eleifend purus faucibus faucibus.
          </p>
        </StyledFirstContent>

        <StyledSecondContent>
          <StyledIFTOLogoContainer>
            <img src={IFTOLogoImage} alt="IFTO" />
          </StyledIFTOLogoContainer>

          <StyledTextsContainer>
            <h3>Resources</h3>

            <p>Services</p>

            <p>Pricing</p>

            <p>Testimonials</p>

            <p>Blog</p>
          </StyledTextsContainer>
        </StyledSecondContent>
      </StyledContent>

      <StyledCopyright>Copyright &copy; 2023 GETEC.</StyledCopyright>
    </StyledContainer>
  );
}

// 12.5%
