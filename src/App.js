import './App.css';
import Header from './Header/Header'
import Services from './Services/Services'
import Location from './Location/Location'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import Book from './Book/Book'



function App() {
  return (
    <div className="page">
      <div className='page__content'>
      <Header/>
      <About/>
      <Services/> 
      <Book/> 
      <Location />     
      <Contacts />
      </div>
    </div>
  );
}

export default App;
