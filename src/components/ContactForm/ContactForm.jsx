import {useState} from "react"
import  {addContact}  from '../../redux/actions'
import { useDispatch } from "react-redux";



const ContactForm = () =>{
const dispatch = useDispatch();
const [name,setName] = useState('');
const [number,setNumber] = useState('');

const handleNameChange = (e) =>{

  setName(e.target.value)
}
const handleNumberChange = (e) =>{

  setNumber(e.target.value)
}

const onSubmitForm = (event) =>{
  event.preventDefault()
  dispatch(addContact(name,number))

  setName('')
  setNumber('')
}


return(
  <form onSubmit={onSubmitForm}>
  <label> Name
<input
type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
value = {name}
onChange={handleNameChange}


/>
</label>
<label> Phone
<input
type="tel"
name="number"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
value = {number}
onChange={handleNumberChange}

/>
</label>

<button type="submit">Добавить</button>
</form>
)

}


export default ContactForm
