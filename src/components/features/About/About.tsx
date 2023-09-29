import styled from "styled-components";
import banner from "../../../assets/main_room_banner.jpeg";
import { DEVICES } from "../../../constants/devices";
import { IoCallOutline } from "react-icons/io5";
import { useMemo } from "react";

function About() {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  const handleCall = () => {
    window.location.href = "tel:0980410108";
  };
  return (
    <Wrapper isMobile={isMobile}>
      <AboutSection isMobile={isMobile}>
        <TextBox
          style={{ height: "100%" }}
        >
          <Heading>Nirvana Рівне</Heading>
          <Paragraph>
            &nbsp; &nbsp; Ласкаво просимо в квартирно-готель Nirvana – місце, де
            Ви захочете перебувати тривалий час, навіть якщо Ви знаходитесь у
            бізнес-поїздці. Наш готель розташований в зручному місці, всього
            кілька хвилин пішки від усього, що може знадобитися мандрівникові.
          </Paragraph>
          <Paragraph className="lastParagraph">
            &nbsp; &nbsp; Ми зібрали все необхідне для тривалої подорожі або
            короткого відпочинку протягом кількох днів. Вишуканий стиль нашого
            готелю і високоякісний сервіс зроблять Ваше перебування з нами
            таким, наче Ви знаходитесь у власному домі.
          </Paragraph>
          <Paragraph>
            &nbsp; &nbsp; Ми створили не просто комфортний, але й затишний
            готель. Поєднання сучасного стилю і затишних номерів допоможе Вам
            завжди почуватися спокійно і приємно. Ми піклуємося про кожну
            дрібницю в нашому готелі, щоб Вам не довелося ні про що турбуватися.
            Просто приїжджайте до нас, і ми зробимо Вашу подорож незабутньою.
          </Paragraph>
          <ButtonWrapper>
            <Button onClick={handleCall}>
              <IoCallOutline />
              Call Now
            </Button>
          </ButtonWrapper>
        </TextBox>
      </AboutSection>
      <RoomImageWrapper isMobile={isMobile}>
        <RoomImage src={banner} />
      </RoomImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column-reverse" : "row")};
  padding: ${({ isMobile }) => (isMobile ? "0rem 1rem" : "1rem 3rem")};
`;
const RoomImageWrapper = styled("div")<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")};
`;

const ButtonWrapper = styled("div")`
  @media only screen and ${DEVICES.lg} {
    display: none;
  }
  @media only screen and ${DEVICES.md} {
    display: none;
  }
  display: flex;
  justify-content: center;
`;

const TextBox = styled("div")`
  position: relative;
  padding: 20px;
  justify-content:center;
  display:flex;
  flex-direction:column;
  background-color: #fff;
  overflow: hidden;
`;
const Button = styled("button")`
  svg {
    width: 20px;
  }
  display: flex;
  gap: 5px;
  width: 160px;
  height: 48px;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1rem;
  color: white;
  background: black;
  font-weight: 300;
  border: none;
  align-items: center;
  justify-content: center;
`;
const Paragraph = styled("p")`
  font-family: "Georgia", sans-serif;
  line-height: 1.5rem;
  display: block;
  padding-right: 2rem;
`;
const Heading = styled("h2")`
  padding-left: 1rem;
`;
const RoomImage = styled("img")`
  width: 100%;
  height:80%;
`;
const AboutSection = styled("div")<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")};
`;

export default About;
