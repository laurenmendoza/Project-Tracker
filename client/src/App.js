import React from 'react'
import './App.css'
import ListItem from './Components/list-item.js'
import {nanoid} from 'nanoid'

function App() {

  const [items, setItems] = React.useState(defaultItems())

  //create three default items
  function defaultItems() {
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

  function handleChange(event, id) {
    const {value, type, checked} = event.target
    setItems(prevItems => {
      return prevItems.map(item => {
        if(item.id === id){
          // if(type === "checkbox"){
          //   item.checked = checked
          // } else {
          //   item.value = value
          // }
          type === "checkbox" ? item.checked = checked : item.value = value
        }
        return item
      })
    })
  }

  const itemElements = items.map(item => (
    <ListItem 
      value={item.value}
      checked={item.checked}
      key={item.id}
      id={item.id}
      handleChange={handleChange}
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
