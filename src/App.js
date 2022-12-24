import './styles/App.css';
import './styles/media.css';
import Header from "./components/Header";
import Converter from "./components/Converter";

function App() {

  return (
    <div className="App">
      <Header/>
      <Converter/>
    </div>
  );
}

export default App;
