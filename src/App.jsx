import reactImg from "./assets/react-core-concepts.png"
import comoponentsImg from "./assets/components.png"

import {CORE_CONCEPTS} from './data.js'

const reactDescriptions = ["Fundamental", "Description", "Core"];

// get random value [0,max]
function genRandomInt(max){
  return Math.floor (Math.random() * (max+1));
}
function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" /> 
      <h1>React Essentials</h1>
      <p>
        {/* dynamic values */}
        {description} React concepts you will need for almost any app you are         
        going to build!
      </p>
    </header>
  );
}
//props
function CoreConcepts(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      
    </li>
  );
}
function App() {
  return (
    <div>
      {/* component nesting */}
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts
            title = "Components"
            description = "The core UI The core UI building block - compose the user interface by combining multiple components." 
            image = {comoponentsImg}
          
          />
          <CoreConcepts
            title = {CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description}
            image = {CORE_CONCEPTS[1].image}

          />  
          {/* alternate way using spread operator */}
          <CoreConcepts {...CORE_CONCEPTS[2]}/>   
          <CoreConcepts {...CORE_CONCEPTS[3]}/> 
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
