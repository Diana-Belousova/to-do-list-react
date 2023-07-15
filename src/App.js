import './App.css';
import { List } from './List';
import imageP from './free-sticker-productivity.png';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>To do list...</h1>
      <img className='mainImage' src={imageP} alt="productivity" width={150}/>

      <List />
      </div>
    </div>
  );
}

export default App;
