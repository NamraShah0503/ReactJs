import './App.css';
import { Header } from './component/Header';
import Footer from './component/Footer';
import { Content } from './component/Content';
import { Users } from './component/Users';
import { Employees } from './employees/Employees';


function App() {
var payload = "This is payload"

  return (
    <div className="App">
      <Header/>
      <Employees/>     
      <Footer/>
    </div>
  );
}

export default App;
