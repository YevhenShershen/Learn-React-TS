//тут описываем глобальные типы которые будем использовать во всем приложении
//IUser - большая I перед названием означает что это interface
export interface IAdress {
  street: string;
  city: string;
  zipcode: string;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAdress;
}
