import './App.css';
import { Header } from './component/Header';
import Footer from './component/Footer';
import { Content } from './component/Content';


function App() {
var payload = "This is payload"

  return (
    <div className="App">
      <Header/>
      <Content payload={payload}/>
      <Footer/>
    </div>
  );
}

export default App;
