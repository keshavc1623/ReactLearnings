import './App.css';
import { DisplayValue } from './components/DisplayValue';
import { Increment } from './components/Incrementor';


function App() {
  return (
    <div className="App">
      < Increment item="value1" />
      < DisplayValue item="value1" />
      < Increment item="value2" />
      < DisplayValue item="value2" />
    </div>
  );
}

export default App;
