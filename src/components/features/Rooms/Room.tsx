import { styled } from "styled-components";

type Props = {
  room: {
    id: number;
    type: string;
    img: string;
    price: string;
  };
};
function Room({ room }: Props) {
  return (
    <Wrapper>
      <Image  src={room.img} />
      <h2>{room.type}</h2>
      <p>
        <b>{room.price}</b> грн/за добу
      </p>
    </Wrapper>
  );
}

const Image = styled('img')`

max-width: 100%;
  height: 600px;`
const Wrapper = styled('div')`
flex-basis: calc(50% - 2px);
  text-align: center;
`

export default Room;
