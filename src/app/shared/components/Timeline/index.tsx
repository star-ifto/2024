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
            title="Mesa Redonda"
            content={`Junte-se a Paulo André, Analista de RH, e Marina Teixeira, Advogada, para uma discussão profunda sobre "Desenvolvimento de Talentos: como identificar, desenvolver e reter talentos dentro da organização".`}
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right>
          <TimelineSimpleContent
            title="Workshop: Experiências de Desenvolvedor"
            content="Aprenda com quem já esteve no seu lugar! Junte-se a Luis Henrique, um ex-aluno do curso de ADS, e explore as experiências e insights valiosos que ele acumulou ao longo de sua jornada de desenvolvimento. Uma oportunidade única para obter conhecimento prático."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00">
          <TimelineSimpleContent
            title="Workshop: Técnicas de Gerenciamento de Projetos"
            content="Aprimore suas habilidades de gerenciamento de projetos com Juan Felipe, um desenvolvedor experiente e acadêmico de ADS. Aprenda técnicas valiosas para garantir o sucesso de seus projetos e otimizar a eficiência."
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
            title="Parcerias Industriais e Ecossistemas de Inovação"
            image=""
            name="Gean Sharly de Sousa Santos"
            description="Profissional com formação em Bacharel em Sistemas de Informação pela ITPAC. Ele é o CEO da Nortesys desde novembro de 1997, desempenhando um papel de liderança na empresa ao longo de várias décadas."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00" right color="secondary">
          <TimelineContentWithImage
            title="Gestão e Tecnologia na Saúde"
            image=""
            name="Izabela"
            description="Gerente na clínica Doutor Hérnia, parte da FRANQUIA DOUTOR HERNIA™, reconhecida por sua liderança no tratamento de patologias da coluna vertebral no Brasil e na América Latina sem recorrer à cirurgia. A clínica é liderada por profissionais com mais de 15 anos de experiência, Dr. André Pêgas de Oliveira e Dr. Laudelino Risso, que introduziram técnicas exclusivas do cenário internacional, incluindo Harvard Medical School e o Hospital Beth Israel."
            right
            womanSpeaker
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" color="secondary">
          <TimelineSimpleContent
            title="Intervalo"
            content="Teremos um breve intervalo de 10 minutos. É o momento perfeito para relaxar, fazer novas conexões e se preparar para a próxima parte empolgante do evento."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right color="secondary">
          <TimelineSimpleContent
            title="Workshop: Programação Fullstack"
            content="Junte-se a Hugo Christian, Desenvolvedor na Nortesys, para uma imersão prática na Programação Fullstack. Descubra as habilidades essenciais e ferramentas para se destacar no mundo da tecnologia. Prepare-se para aprender e se inspirar!"
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" color="secondary">
          <TimelineSimpleContent
            title="Workshop: Técnicas de Oratória"
            content="Aprimore suas habilidades de comunicação! Este workshop irá explorar técnicas essenciais de oratória para ajudá-lo a se expressar com confiança e impacto. Este é o momento de aprimorar suas habilidades de fala."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right color="secondary">
          <TimelineSimpleContent
            title="Oficina: Primeiros Socorros"
            content="Prepare-se para aprender habilidades que podem salvar vidas! Junte-se a Katia Vieira, Bombeira Civil, e adquira conhecimentos práticos sobre primeiros socorros. Esta oficina é uma oportunidade valiosa para saber como agir em situações de emergência."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" color="secondary">
          <TimelineSimpleContent
            title="Encerramento"
            content="Considerações finais referentes ao segundo dia do evento repleto de aprendizado e inspiração."
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
