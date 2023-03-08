import logo from './logo.svg';
import './App.css';
import ProForm from './Components/Form';
import View from "./Components/View";
import Put from './Components/Put';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* <ProForm /> */}
       <BrowserRouter>
          <Routes>
            <Route path="/post" element={<ProForm />} />
            <Route path="/view" element={<View />} />
            <Route path='/put' element={<Put />}/>
          </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
