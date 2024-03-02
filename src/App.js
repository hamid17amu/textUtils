// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from './components/Navbar'
import Textform from "./components/Textform";
import {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }

  const [Mode, setMode] = useState('light')

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#272727';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
      <Alert text={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Textform heading="Enter the text" mode={Mode} />}/>
        </Routes> */}
        <Textform heading="Enter the text" mode={Mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
