import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from '../../../assets/IMG_6166.jpeg'
import img2 from '../../../assets/IMG_6167.jpeg'
import img3 from '../../../assets/IMG_6259.jpeg'
import img4 from '../../../assets/IMG_6266.jpeg'
import img5 from '../../../assets/IMG_6277.jpeg'
import img6 from '../../../assets/IMG_6390.jpeg'
import img7 from '../../../assets/IMG_6392.jpeg'
import img8 from '../../../assets/IMG_6398.jpeg'
import img9 from '../../../assets/IMG_6406.jpeg'
import img10 from '../../../assets/IMG_6423.jpeg'
import img11 from '../../../assets/IMG_8917.jpeg'
import img12 from '../../../assets/IMG_8959.jpeg'
import img13 from '../../../assets/IMG_9022.jpeg'
import img14 from '../../../assets/IMG_9152.jpeg'
import styled from "styled-components";
import { useMemo } from "react";

function Gallery() {
 const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14]
 const isMobile = useMemo(() => window.innerWidth <= 900, []);
  
  return (
    <Wrapper>
      <Heading>Галерея</Heading>
      <GalleryRow>
        {
          images.map((img,index)=>(
            <img key={index} height={isMobile ? '400':'600'} src={img}/>
          ))
        }
      </GalleryRow>
   
    </Wrapper>
  );
}

const Heading = styled('h2')`
  text-align:center;
  font-size:48px;
  font-weight:200;
`

const Wrapper = styled('div')`
  background: #f2f2f2;
  padding:1.5rem 0 2.5rem;
`

const GalleryRow = styled('div')`
  overflow-x:scroll;
  display:flex;
  gap:6px;
  width:100wh;
`

export default Gallery;
