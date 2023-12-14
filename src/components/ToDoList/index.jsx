// import { useState } from 'react'
import { useReducer } from 'react'
import { tasksReducer } from './reducer'
import AddTask from './AddTask'
import TaskList from './TaskList'
import { clog } from '../../lib';

// incremented during "added" action
let nextId = 3; 

// initial values set with this object ... the reducer handles the rest (incrementing id and updating list)
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

function ToDoList() {
  clog('ToDoList');
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    console.log('handleChangeTask', task);
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <div id="to-do-list">
        <h2>Todo (task) List</h2>
        <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      <pre>
        { tasks.length > 0 && JSON.stringify(tasks,null, 2)}
      </pre>
      </div>
    </>
  )
}

export { ToDoList }
