import styled from "styled-components";
import Room from "./Room";
import img1 from "../../../assets/Room_1.jpeg";
import img2 from "../../../assets/Room_2.jpeg";
import img3 from "../../../assets/Room_3.jpeg";

function Rooms() {
  const ROOMS = [
    {
      id: 1,
      img: img1,
      type: "Комфорт",
      price: "900",
    },
    {
      id: 2,
      img: img2,
      type: "Комфорт​​ Smart TV",
      price: "950",
    },
    {
      id: 3,
      img: img3,
      type: "Двокімнатний Люкс ",
      price: "1600",
    },
  ];
  return (
    <Wrapper>
      <Heading>Номери</Heading>
      <SubHeading>Оберіть найкращий варіант для вашого відпочинку.</SubHeading>
      <RoomsContainer>
        {ROOMS.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </RoomsContainer>
    </Wrapper>
  );
}

const Heading = styled("h2")`
  text-align: center;
  font-size: 48px;
  font-weight: 200;
  margin-bottom: 0;
`;

const Wrapper = styled("div")`
  background: #f2f2f2;
  padding-top: 1.5rem;
`;

const RoomsContainer = styled("div")`
display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
`;

const SubHeading = styled("p")`
  font-size: 18px;
  text-align: center;
  margin-bottom: 1rem;
`;

export default Rooms;
