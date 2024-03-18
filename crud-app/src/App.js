import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Create';
import Read from './Read';
import Edit from './Edit';

function App() {
  return (
    <>
      {/* <Create/> */}
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </>
  );
}

export default App;
