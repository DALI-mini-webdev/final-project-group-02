import './App.css';
import firebase from './firebase/index';
import Input from './components/Input'

function App() {
  console.log(firebase);
  console.log(firebase.db);
  return (
    <div className="App">
      <div className="App-header">
        <h3>To Enjoy Dartmouth Greek Life Better...</h3>
        <h1>No Longer Freeze Outside <br></br>
        Searching for Open Houses!</h1>
      </div>
      
      <div className="App-body">
        <Input />
      </div>
      
    </div>
  );
}

export default App;
