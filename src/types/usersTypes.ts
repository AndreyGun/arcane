export interface IUser {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "phone": string;
    "website": string;
    "address": IUserAdress;
    "company": IUserCompany;
}
interface IUserAdress {
    "street": string;
    "suite": string;
    "city": string;
    "zipcode": string;
}
interface IUserCompany {
    "name": string;
    "catchPhrase": string;
    "bs": string;
}