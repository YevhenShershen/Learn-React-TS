import * as React from "react";
export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}
interface CardProps {
  //если хоти сделдать пропс не обязательным то добовляем знако вопроса
  //width?: string
  width: string;
  height: string;
  //variant:CardVariant Такая запись говорит что мы ожидаем что что то прийдет из перечисления CardVariant
  variant: CardVariant;
  children?: React.ReactNode;
  //функция по умолчанию при нажатии ничего возвращать не будет
  onClickFunction: () => void;
}
//React.FC — это тип "функция", и мы внутри < > указали, какого типа аргумент она принимает, то есть указали, что наши props будут типа CardProps.
//const Card = ({ width, height, children, variant }: CardProps): JSX.Element => { /** */}
//CardProps — это типы для наших props
const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClickFunction,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={onClickFunction}
    >
      {children}
    </div>
  );
};
export default Card;
