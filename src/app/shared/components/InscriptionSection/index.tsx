import QRCode from "react-qr-code";
import { GiantParagraph, Title } from "..";
import { StyledContainer, StyledQrCodeContainer } from "./styles";
import { WhatsappLogo } from "phosphor-react";

interface IInscriptionSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const INSCRIPTION_LINK = "https://chat.whatsapp.com/FER36xApMff1ug8FEFbqdp";

export function InscriptionSection({ ...rest }: IInscriptionSectionProps) {
  function handleAccessLink() {
    window.open(INSCRIPTION_LINK, "_blank");
  }

  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Onde fazer a Inscrição?" />

      <GiantParagraph>
        A inscrição do evento será realizada no site oficial de eventos do IFTO.
        O link para acesso será disponibilizado em breve nessa seção. Para se
        manter informado sobre a GETEC e tirar possíveis dúvidas que possam
        surgir, você pode acessar o grupo de tira dúvidas escaneando o QR Code
        ou clicando na opção abaixo.
      </GiantParagraph>

      <StyledQrCodeContainer>
        <div>
          <QRCode
            size={300}
            style={{
              height: "auto",
              maxWidth: "100%",
              width: "100%",
            }}
            value={INSCRIPTION_LINK}
            viewBox={`0 0 256 256`}
            level="L"
          />
        </div>

        <button onClick={handleAccessLink}>
          {/* ACESSAR LINK <ArrowSquareOut size={22} weight="bold" /> */}
          ENTRAR NO GRUPO{" "}
          <WhatsappLogo size={22} weight="duotone" color="#4BCA59" />
        </button>
      </StyledQrCodeContainer>
    </StyledContainer>
  );
}
