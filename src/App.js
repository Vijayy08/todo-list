import { useState } from 'react';
import "./App.css";

function App() {

  let initialList = ['Buy a bomb', 'Buy a detonator']
  const [list, setlist] = useState(initialList);
  const [input, setInput] = useState('');


  const handleText = (event) => {
    setInput(event.target.value)
  }


  const addItem = (event) => {

    event.preventDefault();
 
    if(input === ''){
      alert("Add an item!")
    }
    else {
    var newList = list.concat(input)
    setlist(newList)
    setInput('')
    }
  }

  const handleDel = (element) => {
    var newList = list.filter((item) =>  item.toString() !== element.toString() )
        
    setlist(newList)
  }
 

  const listItem = (element=>(
    <div className="todo">
       <span key={element.toString()}>
         {element}
         </span>
       <button className="del" onClick={() => handleDel(element)}> delete </button>
    </div>
 
  ));

  return (
    <div className="contain">
      <div>
        <h1 className="heading"><u>TO DO LIST</u></h1>
        <h3 className="subhead">Items:</h3>
        <div className="tatti">
          {list.map(listItem)}
        </div>
      </div>

      <form className="form" >
        <div className="input">
          <input className="txtbox" type="text" value={input} onChange={handleText} />
        </div>

        <div>
          <button className="btn" onClick={addItem} type="submit">
            Add items
          </button>
        </div>
      </form>

    </div>
  );
}

export default App;

// add element to list - list
// delete from list
