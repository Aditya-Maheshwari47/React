import Header from './components/Header/Header.jsx'
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from './Examples.jsx';

function App() {
 
  return (
    <>
      {/* component nesting */}
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
