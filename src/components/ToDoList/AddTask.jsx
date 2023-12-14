/* eslint-disable react/prop-types */
import { useState } from "react"
import { clog } from "../../lib"

const AddTask = ({onAddTask}) => {
  clog('AddTask');

  const [taskName, setTaskName] = useState("")

  const handleClick = () => {
    onAddTask(taskName)
    setTaskName('')
  }

  return (
    <div className="add-task">
    <input className="txt" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
    <button className="btn" onClick={handleClick}>Add Task</button>
    </div>
  )

}

export default AddTask
