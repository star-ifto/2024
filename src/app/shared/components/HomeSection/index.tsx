import { ContentContainer, Header, Title } from "..";
import { Configs } from "../../configs";
import { StyledMainContainer, StyledRectangleGroup } from "./styles";
import PeoplesGroupImage from "../../assets/peoples-group.png";
import RectangleGroupImage from "../../assets/rectangle-group.svg";

export function HomeSection() {
  return (
    <ContentContainer className="home" type="primary">
      <Header />

      <StyledMainContainer>
        <div>
          <Title content={`Semana de Tecnologia de Araguaína`} color="white" />

          <p>
            Bem-vindos à Semana de Tecnologia de Araguaína (STAR), um evento
            organizado pelo Instituto Federal do Tocantins (IFTO), em parceria
            com a Prefeitura de Araguaína, a Universidade Federal do Norte do
            Tocantins (UFNT) e o SEBRAE.
          </p>

          <a href={`#${Configs.Navigation.Inscription}`}>Inscrição</a>
        </div>

        <img src={PeoplesGroupImage} alt="Grupo de Pessoas" />
      </StyledMainContainer>

      <StyledRectangleGroup
        src={RectangleGroupImage}
        alt="Grupo de Retângulos"
      />
    </ContentContainer>
  );
}
