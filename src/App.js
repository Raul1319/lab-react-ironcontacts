
import './App.css';
import contactsArr from "./contacts.json";
import { userState } from "react";



function contactRandom() {

  const position = Math.floor(Math.random() * contactsArr.length);
  const positionAleatori = contactsArr[position]
  const copyArr = [...contactsArr];
  copyArr.push(positionAleatori)
  
}

function App() {
  const oscar= '🏆'
  const fiveContacts = contactsArr.slice(0, 5);
  return <div className="App">
    <h2>IronContacts</h2>

    <button onClick={contactRandom}>Random Contact</button>
    <table>

    <tr>
    
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>

    </tr>

    {fiveContacts.map((eachelement) =>{
      return(
         <tr>
        <th><img src={eachelement.pictureUrl} /></th>
        <th><p>{eachelement.name}</p></th>
        <th><p>{eachelement.popularity.toFixed(2)}</p></th>
        <th><p>{eachelement.wonOscar ? oscar : "" }</p></th>
        <th><p>{eachelement.wonEmmy ? oscar : "" }</p></th>
        </tr>
      )
    })}





    </table>

    
  </div>;
}




export default App;
