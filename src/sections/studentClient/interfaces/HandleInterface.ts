import React from "react";

export interface Address {
    id:string;
    street: string;
    postCode: string;
    city: string;
}
export interface Person {
    id:string;
    fName: string;
    lName: string;
    email: string;
    phone?: string;
    street: string;
    postCode: string;
    city: string;

    //address: Address; // id important!! Loading much may not be good
    //photoLink?: string;
}
export interface Role {
    id:string;
    name: string;
}
export interface PersonRole {
    id:string;
    person: Person;
    role: Role;
}
export interface PersonDocument {
    id:string;
    person: Person;
    document: Document;
}
export interface Document {
    id:string;
    documentUrl: string;
    type: DocumentType;
}
export interface DocumentType {
    id:string;
    name: string;
}

export interface Student {
    id:string;
    person: Person;
    linkedInLink:string;
    school:string;
    approved?:boolean;
}

export interface IStudent{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    user: {
        username: string;
        password: string;
    }
    linkedInLink: string;
    school:string;
    eduction:string;
}
