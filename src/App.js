import './App.css';
import Banner from './components/Banner';
import logo192 from './logo192.png';
import logo512 from './logo512.png';
export default function App() {
  return (
    <div className='container'>
      <p className="parrafo1">Estamos en JSX</p>
      <Banner titulo="Banner de la Aplicación" subtitulo="Esto es un subtitulo" imagen={logo192}/>
      <p>
        lorem
      </p>
      <Banner imagen={logo512}></Banner>
    </div>
  );
}

//export default App;
