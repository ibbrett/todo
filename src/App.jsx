// import { ViteTemplate } from './components/ViteTemplate'
import { ToDoList } from './components/ToDoList'
// import { Parent } from './components/MemoComponent';
// import { CandyDispenser } from './components/CandyDispenser';
import './App.css'
import { clog } from './lib'

function App() {
  clog('App')
  return (
    <>
      <ToDoList />
    </>
  )
}

export default App
