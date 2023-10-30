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
            Explorando Inovações em TI e Gestão para Acadêmicos e Comunidade.
            Este ano, foco em "Inovações Tecnológicas na Indústria".
          </p>
        </StyledFirstContent>

        <StyledSecondContent>
          <StyledIFTOLogoContainer>
            <img src={IFTOLogoImage} alt="IFTO" />
          </StyledIFTOLogoContainer>

          <StyledTextsContainer>
            <h3>
              <a href="https://www.instagram.com/getec.ifto/" target="_blank">
                GETEC
              </a>
            </h3>

            <p>
              <a
                href="https://www.instagram.com/ifto.araguaina/"
                target="_blank"
              >
                IFTO Araguaína
              </a>
            </p>

            <p>
              <a href="https://www.instagram.com/ifto.oficial/" target="_blank">
                IFTO Oficial
              </a>
            </p>

            <p>
              <a
                href="https://chat.whatsapp.com/FER36xApMff1ug8FEFbqdp"
                target="_blank"
              >
                Tira Dúvidas
              </a>
            </p>
          </StyledTextsContainer>
        </StyledSecondContent>
      </StyledContent>

      <StyledCopyright>Copyright &copy; 2023 GETEC.</StyledCopyright>
    </StyledContainer>
  );
}

// 12.5%
