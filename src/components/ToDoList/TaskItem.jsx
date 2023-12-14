/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { clog } from "../../lib"

const TaskItem = ({task,onChangeTask,onDeleteTask}) => {
  clog(`TaskItem(${task.id})`);

  const [ editModeOn, setEditModeOn ] = useState(false);
  const [ taskText, setTaskText ] = useState(task.text)
  const onToggleEdit = () => {
    if(editModeOn){
      console.log('task.text === taskText', task.text === taskText);
      if(task.text === taskText){
        console.log('equals, do nothing');
      } else {
        console.log('diff, update reducer');
        const taskClone = {...task};
        taskClone.text = taskText;
        console.log('diff, update reducer with taskClone', taskClone);
        onChangeTask(taskClone);
      }
      
    }
    setEditModeOn( prev => prev =  !prev );
  }

  // change this
  const checkClicked = () => {
    const scopedTask = {...task};
    scopedTask.done = !scopedTask.done;
    console.log('checkClicked, check "done"', scopedTask);
    onChangeTask(scopedTask);
  };

  return (
    <li className="item">
    <label>
      <input className="chk" type="checkbox" checked={task.done} onChange={checkClicked} />
      <span className="lbl">
      { editModeOn ? 
        (
          <input 
            className="txt"
             type="text" 
             value={taskText} 
             onChange={(e)=>setTaskText(e.target.value)} /> 
        )
      :
      taskText
      }
      </span>
      <button className="btn" onClick={() => onToggleEdit(task)}>{ editModeOn ? 'Save' : 'Edit'}</button>
      <button className="btn" onClick={() => onDeleteTask(task.id)}>Delete</button>
    </label>
    </li>
  )
}

function taskItemPropsAreEqual(p, n) {

  const pt = p.task;
  const nt = n.task;

  // existing items do not re-render now
  const condition = pt.id === nt.id && pt.done === nt.done && pt.text === nt.text;
  console.log('taskItemPropsAreEqual', condition, pt.done, nt.done)
   if ( condition){
    console.log('do nothing');
   } else {
    console.log('re-render this bitch');
   }
  return condition;
}

const MemoizedTaskItem = React.memo(TaskItem, taskItemPropsAreEqual);
export default MemoizedTaskItem;
