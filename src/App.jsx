import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components'); //intialize value with 'component'
  
  function handleSelect(selectedButton){
    //selectedButton => 'components', 'Props', 'JSX', 'State'
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      {/* component nesting */}
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
          />
          {/* alternate way using spread operator */}
          <CoreConcepts {...CORE_CONCEPTS[1]}/>  
          <CoreConcepts {...CORE_CONCEPTS[2]}/>   
          <CoreConcepts {...CORE_CONCEPTS[3]}/> 
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* passing 'handleSelect' function as a VALUE to a custom prop name 'onselect'.
               if we use --> <TabButton onSelect = {handleSelect}>State</TabButton>
            */}
            {/* passing custom arguments using () => */}
            <TabButton onSelect = {() =>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect = {() =>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect = {() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect = {() =>handleSelect('state')}>State</TabButton>
          </menu>
          {/* Event -> rightarrow -> Setter Function -> State Change -> Re-render -> UI Update */}
          <div id = "tab-content">  
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
    
        </section>
      </main>
    </div>
  );
}

export default App;
