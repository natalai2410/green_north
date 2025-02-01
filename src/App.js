import './App.css';
import Header from './Header/Header'
import Services from './Services/Services'
import Location from './Location/Location'
import About from './About/About'
import Posts from './Posts/Posts'
import Contacts from './Contacts/Contacts'
import Digits from './Digits/Digits'
import Book from './Book/Book'



function App() {
  return (
    <div className="page">
      <div className='page__content'>
      <Header/>
      <About/>
      <Digits/>
      <Services/> 
       {/* <Book/>  */}
      <Location />   
      <Posts/>  
      <Contacts />
      </div>
    </div>
  );
}

export default App;
