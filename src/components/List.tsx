//Компонент который является листом для разных типов
//Дженерики, или Generic Types - Дженерик — это каркас, внутренности которого заполняет разработчик.
import React, { FC } from "react";
interface ListProps<T> {
  //массив каких то эллементов любого типа
  items: T[];
  //второй пропс это компонент который необходимо отрисовать(Компонент является функцией который ворвращает Реакт Ноду)
  renderItem: (item: T) => React.ReactNode;
}
export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
