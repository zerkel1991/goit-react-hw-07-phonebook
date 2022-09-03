import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction('addContact',(name,number)=>{
return {
  payload : {
    id:nanoid(),
    name:name,
    number:number,
  }
}

})
const deleteContact = createAction('deleteContact')
const changeFilter = createAction('changeFilter')

export {addContact, deleteContact,changeFilter};
