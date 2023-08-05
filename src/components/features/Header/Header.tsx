import React, { useMemo } from "react";
import { styled } from "styled-components";
import logo from '../../../assets/logo_nirvana.png'
import { useNavigate } from "react-router-dom";

type MenuItem = {
  label:string;
  pathname:string
}
function Header() {
  const navigate = useNavigate()
  const activePathname = useMemo(()=> {
    return window.location.pathname;
  },[])
  const menuItems:MenuItem[] = [{label:'Головна',pathname:'/'},{label:'Про нас',pathname:'/about'},{label:'Контакти',pathname:'/contacts'}]
  
  const handleClick = (pathname:string) => {
    navigate(pathname);
  }

  return (
    <Wrapper>
      <Logo>
        <Image src={logo}/>
      </Logo>
      <Menu>
       {
        menuItems.map((item,index)=>(
          <MenuItem onClick={()=>handleClick(item.pathname)} key={index} active={item.pathname === activePathname} >{item.label}</MenuItem>
        ))
       }
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  display: flex;
  padding: 1rem 12rem;
  justify-content: space-between;
`;
const Logo = styled("div")`
  width:300px;
`;

const MenuItem =  styled('li')<{ active: boolean}>`
cursor:pointer;
  color: ${({active})=> active ? '#BF2F28' : 'inherit'}
`
const Image = styled('img')`
  width:100%;
`

const Menu = styled("ul")`
  display: flex;
  width: 60%;
  font-size:1.5rem;
  align-items:center;
  list-style: none;
  justify-content:end;
  gap:1.5rem;
  font-weight:300;
`;
export default Header;
