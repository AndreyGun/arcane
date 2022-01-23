export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAdress;
}
interface IAdress {
    street: string;
    city: string;
}