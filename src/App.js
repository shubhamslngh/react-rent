import './App.css';
import {useState} from 'react'
import Cardsval1 from "./components/GridExample";
import data from './MOCK_DATA.json'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './components/style1.css';
function App() {
 
    const [searchTerm, setSearchTerm] = useState(data);
  return (
    <div className="App">
      <input className='d-flex justify-content-right align-items-center mt-3' type="text"
        class="form-control mr-sm-2"  
        placeholder="Search.." onChange={event => { setSearchTerm(event.target.value) }}></input>
        {data.filter((val)=> {
        if(searchTerm == ""){
        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val    
        }
      }).map((val, key) => {
        return (
          <div className='user' key={key}>
            <p>{val.name}
            <Card display="grid" border="dark">
              <Card.Img variant="top" src="https://picsum.photos/393/160.jpg" />
              <Card.Body>
                <Card.Title>{val.name}</Card.Title>
                <Card.Text>{val.location}</Card.Text>
              </Card.Body>
            </Card></p>
          </div>
        );
       })}
    </div>
  );
}

export default App;
