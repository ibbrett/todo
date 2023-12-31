/* eslint-disable react/prop-types */
import MemoizedTaskItem from './TaskItem'
import { clog } from '../../lib'

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  clog('TaskList')
  return (
    <div className="task-list">
      <ul className="list">
        {tasks.map(task => {
          return (
            <MemoizedTaskItem
              key={task.id}
              task={task}
              onChangeTask={onChangeTask}
              onDeleteTask={onDeleteTask}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TaskList
