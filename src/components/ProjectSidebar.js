import React from "react";
import Button from "./Button";

const ProjectSidebar = ({handleStartProject,projects,handleSelectProject}) => {
  return (
    <div className="w-1/3 px-8 py-16 bg-stone-900 text-slate-200 md:w-72 rounded-r-xl my-3">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">Your Project</h2>
      <div >
        <Button onClick={handleStartProject}> +Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((e)=>(
          <li key={e.id}>
          <button onClick={()=>handleSelectProject(e.id)} className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{e.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSidebar;
