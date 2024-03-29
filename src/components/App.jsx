import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { fetchContacts } from '../redux/contactsOps';
import { selectError, selectIsLoading } from '../redux/contactsSlice';
import './App.css';


const App = () => {
    const dispatch = useDispatch();
     const isLoading = useSelector(selectIsLoading); 
    const error = useSelector(selectError); 

     useEffect(() => {
    dispatch(fetchContacts());
     }, [dispatch]);
    
    
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
        </div>
    )
};
export default App;
