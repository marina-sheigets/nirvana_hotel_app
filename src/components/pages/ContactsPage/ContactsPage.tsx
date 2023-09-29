import Header from "../../features/Header/Header";
import ContactForm from "../../features/ContactForm/ContactForm";
import Map from "../../features/Map/Map";
import Footer from "../../features/Footer/Footer";
import { styled } from "styled-components";

function ContactsPage() {
  return (
    <div>
      <Header />
      <Block>
        <ContactForm />
        <Map />
      </Block>
      <Footer />
    </div>
  );
}
const Block = styled("div")`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  width: 100%;
`;
export default ContactsPage;
