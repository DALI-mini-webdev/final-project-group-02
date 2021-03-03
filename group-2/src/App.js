import './App.css';
import firebase from './firebase/index';
import Input from './components/Input';
import { Button } from './components/Button';
import React, { useState } from 'react';

var allHouses = ["Tri Kap", "Chi Gam", "TDX", "GDX", "Psi U", "AXA", "Zete", "Heoret", "SAE", "BG", "Phi Delt", "Sig Nu"]
var housestring;

const docRef = firebase.db.collection("dates").doc("March 1");

function App() {

    const [AXA, setAXA] = useState('closed');
    const [TDX, setTDX] = useState('closed');
    const [GDX, setGDX] = useState('closed');
    const [ChiGam, setChiGam] = useState('closed');
    const [TriKap, setTriKap] = useState('closed');
    const [PsiU, setPsiU] = useState('closed');
    const [Zete, setZete] = useState('closed');
    const [Heoret, setHeoret] = useState('closed');
    const [SAE, setSAE] = useState('closed');
    const [BG, setBG] = useState('closed');
    const [PhiDelt, setPhiDelt] = useState('closed');
    const [SigNu, setSigNu] = useState('closed');
    

    docRef.get().then((doc) => {
      let data = doc.data();
      housestring = data.houses.split(", ")
      console.log(housestring)

      if (housestring.includes("AXA")) {
        setAXA('open'); 
      }
      else {
        setAXA('closed');
      }
      if (housestring.includes("TDX")) {
        setTDX('open'); 
      }
      else {
        setTDX('closed');
      }
      if (housestring.includes("GDX")) {
        setGDX('open'); 
      }
      else {
        setGDX('closed');
      }
      if (housestring.includes("Chi Gam")) {
        setChiGam('open'); 
      }
      else {
        setChiGam('closed');
      }
      if (housestring.includes("Tri Kap")) {
        setTriKap('open'); 
      }
      else {
        setTriKap('closed');
      }
      if (housestring.includes("Psi U")) {
        setPsiU('open'); 
      }
      else {
        setPsiU('closed');
      }
      if (housestring.includes("Zete")) {
        setZete('open'); 
      }
      else {
        setZete('closed');
      }
      if (housestring.includes("Heoret")) {
        setHeoret('open'); 
      }
      else {
        setHeoret('closed');
      }
      if (housestring.includes("SAE")) {
        setSAE('open'); 
      }
      else {
        setSAE('closed');
      }
      if (housestring.includes("BG")) {
        setBG('open'); 
      }
      else {
        setBG('closed');
      }
      if (housestring.includes("Phi Delt")) {
        setPhiDelt('open'); 
      }
      else {
        setPhiDelt('closed');
      }
      if (housestring.includes("Sig Nu")) {
        setSigNu('open');
      }
      else {
        setSigNu('closed');
      }
    }
    );

    console.log(housestring)
    console.log(AXA)
        
    

    return (
      <div className="App">
        <div className="App-header">
          <h3>To Enjoy Dartmouth Greek Life Better...</h3>
          <h1>No Longer Freeze Outside <br></br>
          Searching for Open Houses!</h1>
          <Button>See what houses are open!</Button>
          <div id="largerBox">
            <div id="firstBlockText">
              {allHouses[0]}<div>{TriKap}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[1]} <div>{ChiGam}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[2]} <div>{TDX}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[3]} <div>{GDX}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[4]} <div>{PsiU}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[5]} <div>{AXA}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[6]} <div>{Zete}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[7]} <div>{Heoret}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[8]} <div>{SAE}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[9]} <div>{BG}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[10]} <div>{PhiDelt}</div>
            </div>
            <div id="firstBlockText">
              {allHouses[11]} <div>{SigNu}</div>
            </div>
          </div>
        </div>
        <div className="App-body">
          <Input />
        </div>
        
      </div>
    );
  }
export default App;