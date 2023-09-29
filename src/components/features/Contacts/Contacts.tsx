import { styled } from "styled-components";
import Map from "../Map/Map";
import { useMemo } from "react";

function Contacts() {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  return (
    <Wrapper>
      <Info isMobile={isMobile}>
        <h1>Контакти</h1>
        <p>
          +38 (098) 04101 08 <br />
          +38 (096) 463 84 51
        </p>
        <p>Nirvanarivne@ukr.net</p>
        <p>вулиця Княгині Ольги 8, Рівне, Рівненська область</p>
      </Info>
      <Map />
    </Wrapper>
  );
}

const Info = styled("div")<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content:center;
  ${({ isMobile }) => (isMobile ? 'width:50%' : "")};
  padding: ${({ isMobile }) => (isMobile ? " 0 1rem 2rem" : "0 4rem 2rem")};
  gap: 1rem;
  color: white;
  p {
    padding: 0;
    margin: 0;
    font-size:1.5rem;
    font-weight: 300;
  }
`;
const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background: #7a282c;
`;

export default Contacts;
