import logo from './vcela.svg';
import './App.css';

function App(props) {
  console.log(props);
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hap-bee new year!!!
        </p>
      </header>
    </div>
  );
}

export default App;
