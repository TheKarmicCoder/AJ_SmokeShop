
import './App.css';
import AppRoutes from './components/AppRoutes';
import PlayButton from "./PlayButton";
import NeonText from './components/NeonText';
function App() {
  
  return (
    <div className="App">
         <NeonText />
         
      <div className="overlay"></div>
      <AppRoutes />
      <PlayButton />
    </div>
  );
}

export default App;
