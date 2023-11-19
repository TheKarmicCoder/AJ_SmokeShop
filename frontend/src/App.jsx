
import './App.css';
import AppRoutes from './components/AppRoutes';

import NeonText from './components/NeonText';
function App() {
  
  return (
    <div className="App">
         <NeonText />
         
      <div className="overlay"></div>
      <AppRoutes />
     
    </div>
  );
}

export default App;
