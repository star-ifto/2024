import { Configs } from "../../configs";
import { StyledContainer } from "./styles";
import WhatsappLogoImage from "../../assets/whatsapp-logo.png";

const BUTTON_SIZE = "3.75em";

export function WhatsappButton() {
    return <StyledContainer buttonSize={BUTTON_SIZE} href={Configs.Links.WhatsappGroup} target="_blank">
        <img src={WhatsappLogoImage} alt="Link para grupo no Whatsapp"/>
    </StyledContainer>
}