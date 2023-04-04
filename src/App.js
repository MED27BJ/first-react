import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import BasicExample from './components/Forma';


function App() {
  var arr=["a@gmail.com","b@gmail.com","w@yahoo.com"];
  let x=arr.length;
  return (
    <div className="App">
    <h3>My First Project React</h3>
      <header className="App-header">
      <div className="cote-gauche">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="socialmedia">
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <div className='nb'>
      <h4>{x} Abonnés</h4>
      </div>
     </div>
        </div>
       <div className='barza'>
       </div>
       
       <div className="elform">
       <BasicExample/>
       </div>
       
      </header>
   </div>
    
  );
}

export default App;
