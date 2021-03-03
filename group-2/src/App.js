import './App.css';
import firebase from './firebase/index';
import Input from './components/Input';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';
import { Button } from './components/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

var allHouses = ["Tri Kap", "Chi Gam", "TDX", "GDX", "Psi U", "AXA", "Zete", "Heoret", "SAE", "BG", "Phi Delt"]
var areOpen = ["closed", "closed", "closed", "closed", "closed", "closed", "closed", "closed", "closed", "closed", "closed"]

function HouseList(houseNames) {
  for (var i = 0; i < houseNames.length; i++) {
    if (allHouses.includes(houseNames[i])) {
      var temp = allHouses.indexOf(houseNames[i])
      areOpen[temp] = "open"
    }
  }
}

var newArray = [];

function one(docRef) {
  docRef.get().then((doc) => {
    let data = doc.data();
    return data;
  })
};

function App() {
  console.log(firebase);
  console.log(firebase.db);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/forhouses">
            <Input />
          </Route>
          <Route path="/forstudents">
            <Main />
          </Route>
          <Route path="/">
            <div className="App-header">
              <h3>To Enjoy Dartmouth Greek Life Better...</h3>
              <h1>No Longer Freeze Outside <br></br>
                  Searching for Open Houses!</h1>
                 
          {/* <Button onClick={console.log('hi')}>See what houses are open!</Button> */}
              <div id="largerBox">
                <div id="firstBlockText">
                  {allHouses[0]}<div>{areOpen[0]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[1]} <div>{areOpen[1]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[2]} <div>{areOpen[2]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[3]} <div>{areOpen[3]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[4]} <div>{areOpen[4]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[5]} <div>{areOpen[5]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[6]} <div>{areOpen[6]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[7]} <div>{areOpen[7]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[8]} <div>{areOpen[8]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[9]} <div>{areOpen[9]}</div>
                </div>
                <div id="firstBlockText">
                  {allHouses[10]} <div>{areOpen[10]}</div>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
      
  );
}
  
export default App;