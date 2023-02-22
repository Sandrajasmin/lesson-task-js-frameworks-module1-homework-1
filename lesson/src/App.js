import logo from './logo.svg';
import './App.css';
import User from './components/user';
import Image from './components/image';

function App() {
  return (
    <div className="App">
      <User text="I am"/>
      <Image altText="Default image"/>
    </div>
  );
}

export default App;
