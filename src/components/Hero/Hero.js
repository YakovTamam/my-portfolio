import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = props => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! i'm <br />
          Yakov Eliya Tamam <br />
          Welcome To My Portfolio
        </SectionTitle>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
