import Header from "../../features/Header/Header";
import ContactForm from "../../features/ContactForm/ContactForm";
import Map from "../../features/Map/Map";
import Footer from "../../features/Footer/Footer";
import { styled } from "styled-components";
import { useMemo } from "react";

function ContactsPage() {
  const isMobile = useMemo(() => window.innerWidth <= 900, []);

  return (
    <div>
      <Header />
      <Block isMobile={isMobile}>
        <ContactForm />
        <Map height={600} width={800}/>
      </Block>
      <Footer />
    </div>
  );
}
const Block = styled("div")<{isMobile:boolean}>`
  display: flex;
  ${({isMobile})=>isMobile? `flex-direction:column`:''};
  gap: 2rem;
  justify-content: space-around;
  width: 100%;
`;
export default ContactsPage;
