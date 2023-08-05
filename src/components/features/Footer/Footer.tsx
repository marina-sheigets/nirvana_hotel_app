import  { useEffect, useState } from "react";
import { styled } from "styled-components";

function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(0);

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <Wrapper>
      <Text>{`Nirvana © ${currentYear} All Rights Reserved`}</Text>
    </Wrapper>
  );
}

const Wrapper = styled("footer")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 120px;
`;
const Text = styled("p")`
  color: white;
  font-size: 14px;
  font-weight: 200;
`;

export default Footer;
