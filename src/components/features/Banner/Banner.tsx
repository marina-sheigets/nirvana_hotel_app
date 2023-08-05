import React from 'react'
import { styled } from 'styled-components'
import img from '../../../assets/flowers-backgrd.jpg'
function Banner() {
  return (
    <Wrapper>
      <BackgroundImgWrapper> 
        <Header>Про готель</Header>
        </BackgroundImgWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
`
const BackgroundImgWrapper = styled('div')`
display:flex;
justify-content:center;
align-items:center;
  height:500px;
  background: linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${img});
  background-size: cover;
`

const Header = styled('h2')`
  color:white;
  font-size:4rem;
`

export default Banner;