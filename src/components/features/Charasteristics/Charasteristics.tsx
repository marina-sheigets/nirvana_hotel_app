import { styled } from "styled-components";
import { FiCheck } from "react-icons/fi";
import { useMemo } from "react";
type Props = {
  list: string[];
};
function Charasteristics({ list }: Props) {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);
  const averageIndex = useMemo(() => list.length / 2, [list]);
  const firstColumnData = useMemo(
    () => list.slice(0, averageIndex + 1),
    [list, averageIndex]
  );
  const secondColumnData = useMemo(
    () => list.slice(averageIndex + 1),
    [list, averageIndex]
  );

  return (
    <>
      {isMobile ? (
        <Lists>
          <List isMobile={isMobile}>
            {firstColumnData.map((option) => (
              <Item>
                                <IconWrapper>

                <FiCheck />
                </IconWrapper>

                {option}
              </Item>
            ))}
          </List>
          <List isMobile={isMobile}>
            {secondColumnData.map((option) => (
              <Item>
                <IconWrapper>

                <FiCheck />
                </IconWrapper>
                {option}
              </Item>
            ))}
          </List>
        </Lists>
      ) : (
        <List isMobile={isMobile}>
          {list.map((option) => (
            <Item>
              <FiCheck />
              {option}
            </Item>
          ))}
        </List>
      )}
    </>
  );
}

const Lists = styled("div")`
  display: flex;
`;
const Item = styled("li")`
  display: flex;
  align-items: start;
  gap: 5px;

`;

const IconWrapper = styled('div')`
width:1rem;
padding-top:3px;
`
const List = styled("ul")<{isMobile:boolean}>`
  list-style: none;
  padding-top:  ${({isMobile})=>isMobile? '0':'2rem'}; 
  display: flex;
  flex-direction: column;
  gap: ${({isMobile})=>isMobile? '1rem':' 1.5rem'};
  justify-content: start;
  li {
    font-size: ${({isMobile})=>isMobile? '1rem':' 18px;'};
  }
`;
export default Charasteristics;
