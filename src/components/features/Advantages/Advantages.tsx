import { styled } from "styled-components";
import img from "../../../assets/flowers-backgrd.jpg";
import { LuClock9, LuWifi, LuCigarette } from "react-icons/lu";
import { GiShoppingCart } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";

function Advantages() {
  const advantages = [
    {
      id: 1,
      label: "Цілодобове поселення",
      icon: <LuClock9 />,
    },
    {
      id: 2,
      label: "Wi-Fi",
      icon: <LuWifi />,
    },
    {
      id: 3,
      label: "Номери для курців та некурців",
      icon: <LuCigarette />,
    },
    {
      id: 4,
      label: "​Міні-магазин та кавовий апарат на території",
      icon: <GiShoppingCart />,
    },
    {
      id: 5,
      label: "Безкоштовна парковка",
      icon: <CiParking1 />,
    },
    {
      id: 6,
      label: "Погодинне поселення",
      icon: <BsClockHistory />,
    },
  ];
  return (
    <Wrapper>
      <AdvantagesList>
        <h2>Переваги</h2>
        {advantages.map((elem) => (
          <Item key={elem.id}>
            {elem.icon}
            {elem.label}
          </Item>
        ))}
      </AdvantagesList>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  margin-top: 1rem;
  padding-right:3rem;
  display: flex;
  height: 600px;
  align-items: center;
  background: url(${img});
  background-size: cover;
  justify-content:end;
`;

const Item = styled("li")`
font-size:1.5rem;
font-weight:300;
  display: flex;
  padding-bottom:1rem;
  gap: 10px;
`;
const AdvantagesList = styled("ul")`
color:white;
gap:1rem;
  border-radius: 10px;
  background-color: #7a282c;
  list-style: none;
  padding: 0 2rem 2rem;
  
`;
export default Advantages;
