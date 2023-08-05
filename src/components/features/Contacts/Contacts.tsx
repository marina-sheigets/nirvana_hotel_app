import { styled } from "styled-components";

function Contacts() {
  return (
    <Wrapper>
      <h1>Контакти</h1>
      <p>
        +38 (098) 04101 08 <br />
        +38 (096) 463 84 51
      </p>
      <p>Nirvanarivne@ukr.net</p>
      <p>​вулиця Княгині Ольги 8, Рівне, Рівненська область</p>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  background: #7a282c;
  padding: 0 4rem 2rem;
  gap: 1rem;
  color: white;
  p {
    padding: 0;
    margin: 0;
    font-weight: 300;
  }
`;

export default Contacts;
