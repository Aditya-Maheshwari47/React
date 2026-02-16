import { useState } from 'react';
import Section from './components/Section.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import Tabs from './components/Tabs.jsx';


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'Props', 'JSX', 'State'
    setSelectedTopic(selectedButton);
  }
  let tabcontent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {/* passing custom arguments using () => */}
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}>State</TabButton>
            { //  passing 'handleSelect' function as a VALUE to a custom prop name 'onselect'.
              //  if we use --> <TabButton onSelect = {handleSelect}>State</TabButton>
              //  Event -> Setter Function -> State Change -> Re-render -> UI Update 
              //  content conditionality : will render "paragraph" or selectedTopic by selecting
            }
          </>
        }
      >
        {tabcontent}
      </Tabs>
      <menu></menu>
    </Section>
  );
}