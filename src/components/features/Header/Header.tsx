import { useMemo, useState } from "react";
import { styled } from "styled-components";
import logo from "../../../assets/logo_nirvana.png";
import { useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../../../constants/menuItems";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const activePathname = useMemo(() => {
    return window.location.pathname;
  }, []);

  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  const handleClick = (pathname: string) => {
    navigate(pathname);
  };

  return (
    <Wrapper isMobile={isMobile} isOpen={isOpen}>
      <Logo>
        <Image src={logo} />
      </Logo>
      <Menu isMobile={isMobile}>
        {isMobile ? (
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleNavigate={handleClick}
            activePathname={activePathname}
          />
        ) : (
          MENU_ITEMS.map((item, index) => (
            <MenuItem
              onClick={() => handleClick(item.pathname)}
              key={index}
              active={item.pathname === activePathname}
            >
              {item.label}
            </MenuItem>
          ))
        )}
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled("div")<{ isMobile: boolean; isOpen: boolean }>`
  display: flex;
  padding: ${({ isMobile, isOpen }) =>
    isOpen ? "1rem 0" : isMobile ? "1rem 3rem" : "1rem 12rem"};
    gap:  ${({ isMobile }) => (isMobile ? '6rem'  : "0")};

  justify-content:  ${({ isMobile }) => (isMobile ? 'end'  : "space-between")};
  svg {
    cursor: pointer;
  }
`;
const Logo = styled("div")`
  display: flex;
  align-items: center;
  width: 300px;
`;

const MenuItem = styled("li")<{ active: boolean }>`
  cursor: pointer;
  color: ${({ active }) => (active ? "#BF2F28" : "inherit")};
`;
const Image = styled("img")`
  width: 100%;
`;

const Menu = styled("ul")<{ isMobile: boolean }>`
  display: flex;
  width: ${({ isMobile }) => (isMobile ? "10%" : "60%")};
  font-size: 1.5rem;
  align-items: center;
  list-style: none;
  justify-content: end;
  gap: 1.5rem;
  font-weight: 300;
`;
export default Header;
