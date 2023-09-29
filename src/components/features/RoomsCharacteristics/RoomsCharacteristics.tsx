import { styled } from "styled-components";
import img1 from "../../../assets/IMG_6398.jpeg";
import Charasteristics from "../Charasteristics/Charasteristics";
import { useMemo } from "react";

function RoomsCharacteristics() {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  const CHARAST1 = [
    "кондиционер",
    "телевізор від 32 дюймів",
    "WI-FI",
    "мікрохвильовка, електрочайник, холодильник, посуд",
    "питна вода",
    "фен, рушники",
    "ліжко з ортопедичним матрацом",
    "диван розкладний з ортопедичним матрацом",
    "нічна підсвітка",
    "міні - бар",
    "room service",
  ];

  return (
    <Wrapper>
      <Heading isMobile={isMobile}>Наповнення номерів</Heading>
      <Block>
        <Charasteristics list={CHARAST1} />
        {
          isMobile ? null : <ImageWrapper>
          <Image width="500" src={img1} />
        </ImageWrapper>
        } 
      </Block>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  background: #7a282c;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
`;
const Block = styled("div")`
  display: flex;
  justify-content: space-around;
`;

const ImageWrapper = styled("div")`
  width: 50%;
  img {
    width: 100%;
  }
`;

const Image = styled("img")`
  width: 50%;
`;
const Heading = styled("h2")<{isMobile:boolean}>`
  text-align: center;
  font-size: ${({isMobile})=>isMobile? '24px':'48px'};
  font-weight: 200;
  padding-top:${({isMobile})=>isMobile? '1.5rem':' 1rem'};
  margin: 2rem 0 1rem;
`;

export default RoomsCharacteristics;
