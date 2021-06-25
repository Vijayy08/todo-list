import { useState } from 'react';
import "./App.css";
import Todo from './Todo'

function App() {

  let initialList = ['buy a bomb', 'buy a detonator']
  const [list, setlist] = useState(initialList);
  const [input, setInput] = useState();


  const handleText = (event) => {
    setInput(event.target.value)
  }


  const addItem = (event) => {

    event.preventDefault();
    var newList = list.concat(input)

    setlist(newList)
    setInput('')
  }

  const handleDel = (element) => {
    var newList = list.filter((item) =>  item.toString() !== element.toString() )
        
    setlist(newList)
  }
 

  const listItem = (element=>(
    <div>
       <Todo Item={element} key={element.toString()} />
       <button onClick={() => handleDel(element)}> delete </button>
    </div>
 
  ));

  return (
    <div className="contain">
      <div>
        <h3>Items:</h3>
        <ul>
          {list.map(listItem)}
        </ul>
      </div>

      <form >
        <div className="input">
          <input type="text" value={input} onChange={handleText} />
        </div>

        <div className="btn">
          <button onClick={addItem} type="submit">
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
