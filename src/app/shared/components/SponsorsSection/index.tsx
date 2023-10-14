import { Title } from "..";
import { SponsorCard } from "../SponsorCard";
import { StyledContainer, StyledSponsorsContainer } from "./styles";
import IFTOTempImage from "../../assets/ifto-temp.png";

interface ISponsorProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ISponsorsSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const SPONSORS: ISponsorProps[] = [
  {
    image: IFTOTempImage,
    title: "Patrocinador",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "ifto.edu.br",
  },
  {
    image: IFTOTempImage,
    title: "Patrocinador",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "ifto.edu.br",
  },
  {
    image: IFTOTempImage,
    title: "Patrocinador",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "ifto.edu.br",
  },
  {
    image: IFTOTempImage,
    title: "Patrocinador",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "ifto.edu.br",
  },
];

export function SponsorsSection({ ...rest }: ISponsorsSectionProps) {
  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Conheça nossos patrocinadores" />

      <StyledSponsorsContainer>
        {SPONSORS.map((sponsor, k) => (
          <SponsorCard
            key={k}
            image={sponsor.image}
            title={sponsor.title}
            description={sponsor.description}
            link={sponsor.link}
          />
        ))}
      </StyledSponsorsContainer>
    </StyledContainer>
  );
}
