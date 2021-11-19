import { Button } from '@arwes/core'
import React, { useState, useEffect } from 'react'
import ProjectCard from '../../components/ProjectCard'


const Projects = () => {
  const [repositories, setRepositories] = useState([])

  const loadProjects = async () => {
    const reposData = await (await fetch('https://api.github.com/users/DreadCube/repos')).json()
    setRepositories(reposData)
  }

  useEffect(() => {
    loadProjects()
  }, [])

  console.log(repositories)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
      {repositories.map(r => (
        <ProjectCard
          key={r.id}
          title={r.name}
          description={r.description}
          repoLink={r.html_url}
          topics={r.topics}
        />))}
    </div>
  )
}

export default Projects