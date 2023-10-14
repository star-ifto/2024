import { StyledContainer, StyledImageContainer } from "./styles";

interface ISponsorCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export function SponsorCard({
  image,
  title,
  description,
  link,
}: ISponsorCardProps) {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={image} alt={title} />
      </StyledImageContainer>

      <h2>{title}</h2>

      <p>{description}</p>

      <a href={`https://${link}`} target="_blank">{link}</a>
    </StyledContainer>
  );
}
