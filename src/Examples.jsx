import { useState } from 'react';

import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect(selectedButton){
    //selectedButton => 'components', 'Props', 'JSX', 'State'
    setSelectedTopic(selectedButton);
  }
  let tabcontent = <p>Please select a topic</p> ;
  if(selectedTopic){
    tabcontent = (
      <div id = "tab-content">  
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
    )
  }
    return(
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
          {tabcontent}
        </section>
    )
}