import {
  HomeSection,
  AboutSection,
  InscriptionSection,
  TimelineSection,
  SponsorsSection,
  FooterSection,
} from "./shared/components";
import { Configs } from "./shared/configs";
import { GlobalStyle } from "./shared/global/styles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <HomeSection />

        <AboutSection id={Configs.Navigation.About} />

        <InscriptionSection id={Configs.Navigation.Inscription} />

        <TimelineSection id={Configs.Navigation.Timeline} />

        <SponsorsSection id={Configs.Navigation.Sponsors} />

        <FooterSection />
      </main>
    </>
  );
}
