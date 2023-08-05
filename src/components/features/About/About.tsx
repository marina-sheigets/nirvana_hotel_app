import styled from "styled-components";
import banner from "../../../assets/main_room_banner.jpeg";
import { DEVICES } from "../../../constants/devices";
import { IoCallOutline } from "react-icons/io5";

function About() {
  return (
    <Wrapper>
      <AboutSection>
        <div>
          <Heading>Nirvana ​Рівне</Heading>
          <Paragraph>
            &nbsp; &nbsp; ​Ласкаво просимо в квартирно-готель Nirvana – місце,
            де Ви захочете перебувати тривалий час, навіть якщо Ви знаходитесь у
            бізнес-поїздці. Наш готель розташований в зручному місці, всього
            кілька хвилин пішки від усього, що може знадобитися мандрівникові.
          </Paragraph>
          <Paragraph>
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
        </div>
        <ButtonWrapper>
          <Button>
            <IoCallOutline />
            Call Now
          </Button>
        </ButtonWrapper>
      </AboutSection>
      <RoomImageWrapper>
        <RoomImage src={banner} />
      </RoomImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  display: flex;
  padding: 1rem 3rem;
`;
const RoomImageWrapper = styled("div")`
  width: 50%;
`;

const ButtonWrapper = styled("div")`
  @media only screen and ${DEVICES.lg} {
    display: none;
  }
  @media only screen and ${DEVICES.md} {
    display: none;
  }
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
`;
const AboutSection = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

export default About;
