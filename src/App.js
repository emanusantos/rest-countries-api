import Header from './header.jsx';
import './App.css';
import Filters from './filters.jsx';
import Countries from './countries.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background">
        <Filters />
        <Countries />
      </div>
    </div>
  );
}

export default App;
