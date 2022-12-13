
import './App.css';
import {RouterProvider} from 'react-router-dom';
import { router } from './Routes/router';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="">
  
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
