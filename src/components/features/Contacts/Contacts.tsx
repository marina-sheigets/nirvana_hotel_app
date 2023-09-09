import { styled } from "styled-components";
import Map from "../Map/Map";

function Contacts() {
  return (
    <Wrapper>
      <Info>
      <h1>Контакти</h1>
      <p>
        +38 (098) 04101 08 <br />
        +38 (096) 463 84 51
      </p>
      <p>Nirvanarivne@ukr.net</p>
      <p>вулиця Княгині Ольги 8, Рівне, Рівненська область</p>
      </Info>
      <Map/>
    </Wrapper>
  );
}

const Info = styled('div')`
display: flex;
flex-direction: column;

padding: 0 4rem 2rem;
gap: 1rem;
color: white;
p {
  padding: 0;
  margin: 0;
  font-weight: 300;
}
`
const Wrapper = styled("div")`
  display:flex;
  justify-content:space-between;
  background: #7a282c;
`;

export default Contacts;
