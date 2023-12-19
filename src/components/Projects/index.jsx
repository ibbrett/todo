import { ProjectCard } from './ProjectCard'
import { clog } from '../../lib'

function Projects() {
  clog('Projects')

  return (
    <div id="projects">
      <ProjectCard />
    </div>
  )
}

export { Projects }
