
export interface Address {
    street: string;
    postCode: string;
    city: string;
}
export interface Person {
    fName: string;
    lName: string;
    email: string;
    phone?: string;
    address: Address;
    photoLink?: string;
}
export interface Role {
    name: string;
}
export interface PersonRole {
    person: Person;
    role: Role;
}
export interface PersonDocument {
    person: Person;
    document: Document;
}
export interface Document {
    documentUrl: string;
    type: DocumentType;
}
export interface DocumentType {
    name: string;
}
export interface Student {
    person: Person;
    linkedInLink:string;
    school:string;
    approved?:boolean;
}