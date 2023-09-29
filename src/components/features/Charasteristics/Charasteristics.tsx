import { styled } from "styled-components";
import { FiCheck } from "react-icons/fi";
type Props = {
  list: string[];
};
function Charasteristics({ list }: Props) {
  return (
    <List>
      {list.map((option) => (
        <Item>
          <FiCheck />
          {option}
        </Item>
      ))}
    </List>
  );
}

const Item = styled("li")`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const List = styled("ul")`
  list-style: none;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: start;
  li {
    font-size: 18px;
  }
`;
export default Charasteristics;
