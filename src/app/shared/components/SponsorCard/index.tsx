import { StyledContainer, StyledImageContainer } from "./styles";
import InstagramLogoImage from "../../assets/instagram-logo.png";

interface ISponsorCardProps {
  image: string;
  title: string;
  description: string;
  instagram: string;
}

export function SponsorCard({
  image,
  title,
  description,
  instagram,
}: ISponsorCardProps) {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <img src={image} alt={title} />
      </StyledImageContainer>

      <h2>{title}</h2>

      <p>{description}</p>

      <a href={`https://instagram.com/${instagram}`} target="_blank">
        <img src={InstagramLogoImage} alt="instagram" />
      </a>
    </StyledContainer>
  );
}
