import React from 'react';
import ResourceCards from '../Resources/resource/index'
import resources from '../Resources/resources.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function Wrapper(props){
  return <div className="wrapper">{props.children}</div>;
}

function Resources (){
  return(
    <section className="container">
       
          <div className="project">
            
          </div>
         
          <Wrapper id="card-data">
            {resources.map((index) => (
              <ResourceCards key={index.id} image={index.image} name={index.name}  deploy={index.deploy} />
            ))}
          </Wrapper>
          
        </section>
  );
}

export default Resources;