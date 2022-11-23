interface CardProps {
  //если хоти сделдать пропс не обязательным то добовляем знако вопроса
  //width?: string
  width: string;
  height: string;
}
const Card = ({ width, height }: CardProps) => {
  return <div style={{ width, height, border: "1px solid gray" }}></div>;
};
export default Card;
