// import { ViteTemplate as LoveIsBlindness } from './components/ViteTemplate'
// import { Parent as LoveIsBlindness } from './components/MemoComponent'
// import { CandyDispenser as LoveIsBlindness } from './components/CandyDispenser'
// import { ToDoList as LoveIsBlindness } from './components/ToDoList'
import { Projects as LoveIsBlindness } from './components/Projects'
import './App.css'
import { clog } from './lib'

function App() {
  clog('App')
  return (
    <>
      <LoveIsBlindness />
    </>
  )
}

export default App
