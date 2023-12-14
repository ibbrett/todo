/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { clog, mlog, hlog } from "../../lib"

const TaskItem = ({task,onChangeTask,onDeleteTask}) => {
  clog(`TaskItem(${task.id})`);

  const [ editModeOn, setEditModeOn ] = useState(false);
  const [ taskText, setTaskText ] = useState(task.text)
  const onToggleEdit = () => {
    if(editModeOn){
      console.log('task.text === taskText', task.text === taskText);
      if(task.text !== taskText){
        console.log('task has changed, update reducer with taskClone');
        const taskClone = {...task};
        taskClone.text = taskText;
        onChangeTask(taskClone);
      }
      
    }
    setEditModeOn( prev => prev =  !prev );
  }

  // change this
  const handleCheckClicked = () => {
    const scopedTask = {...task};
    scopedTask.done = !scopedTask.done;
    hlog('handleCheckClicked, check "done"', scopedTask);
    onChangeTask(scopedTask);
  };

  return (
    <li className="item">
    <label>
      <input className="chk" type="checkbox" checked={task.done} onChange={handleCheckClicked} />
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
   if (!condition){
    mlog('taskItemPropsAreEqual', condition, pt.done, nt.done, 're-render task')
   }
  return condition;
}

const MemoizedTaskItem = React.memo(TaskItem, taskItemPropsAreEqual);
export default MemoizedTaskItem;
