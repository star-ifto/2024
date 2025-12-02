import { Title, AboutCard, GiantParagraph } from "..";
import CalendarImage from "../../assets/calendar.png";
import MoneyImage from "../../assets/money.png";
import CertificateImage from "../../assets/certificate.png";
import {
  StyledCardsContainer,
  StyledContainer,
  StyledTextContainer,
} from "./styles";

interface IAboutSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function AboutSection({ ...rest }: IAboutSectionProps) {
  return (
    <StyledContainer type="secondary" {...rest}>
      <Title content="Sobre o Evento" />

      <StyledTextContainer>
        <GiantParagraph className="paragraph">
          Durante a STAR, os participantes poderão conhecer as últimas
          tendências e avanços em tecnologia por meio de palestras, workshops e
          atividades interativas. É a oportunidade perfeita para aprender, fazer
          contatos e ampliar suas perspectivas profissionais e acadêmicas. Não
          perca a chance de participar e ver como a tecnologia pode moldar o
          futuro.
        </GiantParagraph>

        <GiantParagraph className="paragraph">
          Neste ano teremos diversas atividades, como palestras, minicursos, 
           torneios de programação, e muito mais. Tudo isso organizado por
          alunos do IFTO campus Araguaína, com o apoio de professores e da
          instituição. Venha fazer parte dessa experiência única e contribuir
          para o crescimento da comunidade tecnológica local!
        </GiantParagraph>
      </StyledTextContainer>

      <StyledCardsContainer>
        <AboutCard
          image={CalendarImage}
          title="3 dias de Evento"
          description={
            <>
              <span>Dia 04 a dia 06 de Dezembro</span>
              <br />
              <span>Faça sua reserva</span>
            </>
          }
        />

        <AboutCard
          image={MoneyImage}
          title="GRATUITO"
          description={
            <>
              <span>Participação gratuita no evento!</span>
            </>
          }
        />

        <AboutCard
          image={CertificateImage}
          title={`Certificado de\n participação`}
          description={
            <>
              <span>Certificado gratuito</span>
              <br />
              <span>Necessário inscrição</span>
            </>
          }
        />
      </StyledCardsContainer>
    </StyledContainer>
  );
}
