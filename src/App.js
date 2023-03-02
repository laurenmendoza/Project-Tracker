import React from 'react'
import logo from './logo.svg'
import './App.css'
import ListItem from './Components/list-item.js'
import {nanoid} from 'nanoid'

function App() {

  const [items, setItems] = React.useState(testItems())

  function testItems() {
    const tasks = ["cleaning","reading","eating"]
    const items = tasks.map(task => (
      {
        value: task,
        checked: false,
        id: nanoid()
      }
    ))
    return items
  }

  const itemElements = items.map(item => (
    <ListItem 
      value={item.value}
      checked={item.checked}
      key={item.id}
    />
  ))

  function addItem() {
    const newItem = {
      value: "",
      checked: false,
      id: nanoid()
    }
    setItems(oldItems => [...oldItems, newItem])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>


        {itemElements}




        <div className="container py-4 px-3 mx-auto">
          <button 
            className="btn btn-primary"
            onClick={addItem}
          >Add Item</button>
        </div>
      </header>
    </div>
  );
}

export default App;
