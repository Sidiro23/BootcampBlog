import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResourceCards(props){
  return (
    <div className="resource "> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="resource-title">{props.name}</p>
              <p class="proj-icons-container">
              
              <a href={props.deploy}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a> 
       
             
             </p>
              
        </div>
      </div>
  );
}

export default ResourceCards;