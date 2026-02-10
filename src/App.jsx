import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';

function App() {
  
  function handleSelect(selectedButton){
    //selectedButton => 'components', 'Props', 'JSX', 'State'
    console.log(selectedButton);
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
            <TabButton onSelect = {() =>handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect = {() =>handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect = {() =>handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect = {() =>handleSelect('State')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
