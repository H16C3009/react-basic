import logo from './logo.svg';
import './App.css';

// import Basic2 from './components/Basic2'
// import TimerContainer from './components/TimerConainer'
import ApiFetch from './components/ApiFetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
