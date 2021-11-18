import './App.css';
import {Home} from './Components/Home'
import {NavBar} from './Components/NavBar'
import {Table} from './Components/Table'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <Table /> */}
    </div>
  );
}

export default App;
