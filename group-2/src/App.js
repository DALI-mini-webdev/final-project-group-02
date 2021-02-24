import './App.css';
import firebase from './firebase/index';
import Input from './components/Input'
function App() {
  console.log(firebase);
  console.log(firebase.db);
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
