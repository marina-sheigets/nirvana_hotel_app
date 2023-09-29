import styled from "styled-components";
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { MENU_ITEMS } from "../../../constants/menuItems";

type Props = {
    handleNavigate:(path:string)=>void,
    activePathname:string
    isOpen:boolean;
    setIsOpen:(val:boolean)=>void

}
function MobileMenu({handleNavigate,activePathname,isOpen,setIsOpen}:Props) {

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <>
        <MenuWrapper>
        <CloseIconWrapper><AiOutlineClose onClick={onToggleOpen}/></CloseIconWrapper>
           { MENU_ITEMS.map((item, index) => (
            <MenuItem
              onClick={() => handleNavigate(item.pathname)}
              key={index}
              active={item.pathname === activePathname}
            >
              {item.label}
            </MenuItem>))}
        

        </MenuWrapper>
        </>
      ) : (
        <IconWrapper>
            <RxHamburgerMenu onClick={onToggleOpen}/>
        </IconWrapper>
       
      )}
    </>
  );
}

const CloseIconWrapper = styled('div')`
display: flex;
width:100vw;
position:fixed;
top: 0;
justify-content:end;
svg {
    width:45px;
    height:45px;
  
}
`
const MenuWrapper = styled(`div`)`
position: fixed;
top: 0;
width:100vw;
background:#f2f2f2;
height:50vh;
transition: left 0.3s ease-in-out;
    display: flex;
    flex-direction:column;
    gap:1rem;
    justify-content:center;
    align-items:center;
`;
const IconWrapper = styled('div')`
    svg {
        width: 40px;
        height: 40px;

    }
    
`
const MenuItem = styled("li")<{ active: boolean }>`
  cursor: pointer;
  color: ${({ active }) => (active ? "#BF2F28" : "inherit")};
`;
export default MobileMenu;
