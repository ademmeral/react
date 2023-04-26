import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export async function getPeople(){
    try{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        return resp.data;
    }catch (err) {
        console.warn(err);
        return false;
    }
};

export async function rootAction({request}){
    const data = await request.formData();
    const intent = data.get('intent');

    switch (intent){
        case 'add' : 
            return createPerson(data);

        case 'edit' :
            return updatePerson(data);
        
        default : 
            return request;
    }
};

function createPerson(data){
    const newPerson = {
        name : data.get('name'),
        username : data.get('username'),
        id : nanoid(),
        phone : data.get('phone'),
        email: data.get('email'),
        intent : 'add'
    };
    return newPerson;
};
function updatePerson(data){
    const updatedPerson = {
        name : data.get('name'),
        username : data.get('username'),
        id : data.get('userId'),
        phone : data.get('phone'),
        email: data.get('email'),
        intent : 'edit'
    };
    return updatedPerson;
};


