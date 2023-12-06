import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectProject from "./components/SelectProject";

function App() {
  const[projectState,setProjectState] = useState({
    selectedProjectId :undefined,
    projects: []
  })

  const handleSelectProject=(id)=>{
    setProjectState(prev =>{
      return{
        ...prev,
        selectedProjectId:id
      }
    })
  }

  const handleDelete=()=>{
    setProjectState(prev =>{
      return{
        ...prev,
        selectedProjectId:undefined,
        projects: prev.projects.filter((pro)=> pro.id !== prev.selectedProjectId)
      }
    })
  }

  const handleStartProject=()=>{
    setProjectState(prev =>{
      return{
        ...prev,
        selectedProjectId:null
      }
    })
  }

  const handleCancelProject=()=>{
    setProjectState(prev =>{
      return{
        ...prev,
        selectedProjectId:undefined
      }
    })
  }

 const handleAddProject=(projectsData)=>{
  setProjectState(prev =>{
    const newProjects={
      id:Math.random(),
      ...projectsData
    }
    return {
      ...prev,
      selectedProjectId:undefined,
      projects:[...prev.projects,newProjects]
    }
  })
 }

  console.log(projectState)

  const selectedProject = projectState.projects.find(proj => proj.id === projectState.selectedProjectId)

  let content= <SelectProject project={selectedProject} handleDelete={handleDelete}/>

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} handleCancelProject={handleCancelProject}/>
  }else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected handleStartProject={handleStartProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar handleStartProject={handleStartProject} projects={projectState.projects} handleSelectProject={handleSelectProject}/>
      {content}
      
    </main>
  );
}

export default App;
