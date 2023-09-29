import { styled } from "styled-components";
import Form from "./Form";
import { useMemo } from "react";

function ContactForm() {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  return (
    <Wrapper isMobile={isMobile}>
      <Info>
        <Heading>Nirvana</Heading>
        <Text style={{ marginBottom: "2rem" }}>
          Вулиця Княгині Ольги 8, Рівне, Рівненська область
        </Text>
        <Text>+38 (098) 041 01 08</Text>
        <Text style={{ marginBottom: "2rem" }}>+38 (096) 463 84 51</Text>
        <Text style={{ marginBottom: "2rem" }}>Nirvanarivne@ukr.net</Text>
      </Info>
      <Form />
    </Wrapper>
  );
}

const Text = styled("p")`
  font-size: 18px;
  font-weight: 200;
`;

const Heading = styled("h3")`
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;
const Wrapper = styled("div")<{isMobile:boolean}>`
  padding: 2rem;
  width: ${({isMobile})=> isMobile? '90%':'40%'};
`;

const Info = styled("div")``;
export default ContactForm;
