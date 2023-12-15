import { useReducer, useCallback } from 'react'
import { reducer } from './reducer'
import AddTask from './AddTask'
import TaskList from './TaskList'
import { clog, hlog } from '../../lib'

// incremented during "added" action
let nextId = 3

// initial reducer values
const initialTasks = [
  { id: 0, text: 'Punish the monkey', done: true },
  { id: 1, text: 'Let the organ grinder go', done: false },
  { id: 2, text: 'Memento mori', done: false },
]

function ToDoList() {
  clog('ToDoList')
  const [state, dispatch] = useReducer(reducer, initialTasks)

  const handleAddTask = useCallback(text => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }, [])

  function handleChangeTask(task) {
    hlog('handleChangeTask', task)
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  function handleDeleteTask(id) {
    hlog('handleDeleteTask', 'task id', id)
    dispatch({
      type: 'deleted',
      id: id,
    })
  }

  return (
    <>
      <div id="to-do-list">
        <h2>Todo (task) List</h2>
        <ul style={{ color: 'brown', listStyle: 'none', padding: 0 }}>
          <lh>
            get to know reducer() functions and the useReducer() hook const
          </lh>
          <li style={{ paddingLeft: '24px' }}>
            [state, dispatch] = useReducer(reducer, initialArg, init?) const
          </li>
          <li style={{ paddingLeft: '24px' }}>
            [state, dispatch] = useReducer(reducer, initialTasks)
          </li>
        </ul>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={state}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
        <pre>{state.length > 0 && JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  )
}

export { ToDoList }
