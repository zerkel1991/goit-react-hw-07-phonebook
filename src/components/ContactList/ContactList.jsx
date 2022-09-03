import s from './ContactList.module.css'
import { useSelector,useDispatch} from "react-redux";
import  {deleteContact}  from '../../redux/actions'

function ContactList() {
  const contactsName = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () =>{

    const normalizedFilter = filter.toLowerCase();

    return contactsName.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  }
  const filteredContacts = getFilteredContacts()

  const dispatch = useDispatch();
  return(

    <ul>
      {filteredContacts.map(el =>(
       <li key = {el.id}>
        <span className={s.span}>{el.name} : </span>
        <span>{el.number}</span>
        <button onClick={()=>  dispatch(deleteContact(el.id))}>Удалить</button>
       </li>
      ))}
    </ul>




  )
}


export default ContactList
