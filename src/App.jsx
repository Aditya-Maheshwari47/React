import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  
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
          {/* outputing list dynamically using Array */}
          {CORE_CONCEPTS.map((conceptId) => (
            <CoreConcepts key = {conceptId.title}{...conceptId}/>
            ))} 
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* passing 'handleSelect' function as a VALUE to a custom prop name 'onselect'.
               if we use --> <TabButton onSelect = {handleSelect}>State</TabButton>
            */}
            {/* passing custom arguments using () => */}
            <TabButton 
              isSelected={selectedTopic ==='components'}
              onSelect = {() =>handleSelect('components')}>Components</TabButton>
            <TabButton 
              isSelected={selectedTopic ==='props'}
              onSelect = {() =>handleSelect('props')}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic ==='jsx'}
              onSelect = {() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton
              isSelected={selectedTopic ==='state'}
              onSelect = {() =>handleSelect('state')}>State</TabButton>
          </menu>
          {/* Event -> Setter Function -> State Change -> Re-render -> UI Update */}
          
          {/* content conditionality : will render "paragraph" or selectedTopic by selecting*/}
          {!selectedTopic ? <p>Please select a topic</p> : <div id = "tab-content">  
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}
          
        </section>
      </main>
    </div>
  );
}

export default App;
