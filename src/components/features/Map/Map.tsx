import { styled } from "styled-components";

function Map() {
  return (
    <Wrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5813.263066461879!2d26.255333365801192!3d50.61167436525443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1344f3b3daa9%3A0x74d3032634649e9e!2sNirvana!5e0!3m2!1sru!2sua!4v1691257213869!5m2!1sru!2sua"
        width="700"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
`;
export default Map;
