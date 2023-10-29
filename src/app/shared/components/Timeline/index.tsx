import ExemploPalestranteImage from "../../assets/exemplo-palestrante.jpg";
import { TimelineContainer, TimelineDate, TimelineSimpleContent } from "..";
import { TimelineContentWithImage } from "../TimelineContentWithImage";
import { StyledTimeline } from "./styles";
import { Fragment } from "react";

export function Timeline() {
  return (
    <StyledTimeline>
      {/* // ? DIA 22 / 11 */}
      <Fragment>
        <TimelineDate date="22 de novembro de 2023" />

        <TimelineContainer hour="18:30">
          <TimelineSimpleContent
            title="Boas vindas"
            content="Comece o evento com uma recepção calorosa e uma visão geral empolgante do que está por vir. Saiba o que o dia reserva para você."
          />
        </TimelineContainer>

        <TimelineContainer hour="19:00" right>
          <TimelineSimpleContent
            title="Abertura"
            content="Iniciamos o evento com uma explosão de energia e talento! Desfrute da animação musical envolvente com os alunos Letícia e André, enquanto preparamos o terreno para uma jornada incrível no mundo da tecnologia e gestão."
          />
        </TimelineContainer>

        <TimelineContainer hour="19:30">
          <TimelineContentWithImage
            title="Empreendedorismo e Resiliência: Lições de um Empreendedor de sucesso"
            image=""
            name="Renato Borghetti"
            description="Formado em Engenharia Agronômica pela Universidade Estadual de Montes Claros, um mestrado em Solos e Nutrição de Plantas pela Universidade Federal de Viçosa e um Executive MBA em Administração e Negócios pela FIA Business School. Sócio proprietário da AgroMinas Produtos Agropecuários em Araguaína - TO, onde atua desde junho de 2013."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" right>
          <TimelineSimpleContent
            title="Intervalo"
            content="Teremos um breve intervalo de 10 minutos para relaxar, esticar as pernas e socializar com outros entusiastas da tecnologia e gestão."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00">
          <TimelineSimpleContent
            title="Mesa Redonda / Workshop"
            content={`Junte-se a Paulo André, Analista de RH, e Marina Teixeira, Advogada, para uma discussão profunda sobre "Desenvolvimento de Talentos: como identificar, desenvolver e reter talentos dentro da organização".`}
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" right>
          <TimelineSimpleContent
            title="Sorteio de Brindes"
            content="Participe do sorteio de brindes e tenha a oportunidade de levar para casa algo especial. A sorte está a seu favor!"
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 23 / 11 */}
      <Fragment>
        <TimelineDate date="23 de novembro de 2023" color="secondary" />

        <TimelineContainer hour="19:00" color="secondary">
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00" right color="secondary">
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
            right
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" color="secondary">
          <TimelineSimpleContent
            title="Intervalo"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right color="secondary">
          <TimelineSimpleContent
            title="Mesa Redonda / Workshop / Oficina"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" color="secondary">
          <TimelineSimpleContent
            title="Encerramento"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 24 / 11 */}
      <Fragment>
        <TimelineDate date="24 de novembro de 2023" />

        <TimelineContainer hour="19:00" right>
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
            right
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00">
          <TimelineSimpleContent
            title="Mostra"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:30" right>
          <TimelineSimpleContent
            title="Sorteios"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00">
          <TimelineSimpleContent
            title="Encerramento"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>
      </Fragment>
    </StyledTimeline>
  );
}
