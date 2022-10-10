import './App.css';
import IngresarTarea from './components/ingresartarea/IngresarTarea';
import { useState } from 'react';
import ListaDeTareas from './components/listadetareas/ListaDeTareas';



function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas])
  }
  const borrar = (id) => {
    const listaFilter = listaTareas.filter((indice => indice === id));
    setListaTareas(listaFilter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <IngresarTarea nuevaTarea={nuevaTarea} />
        <div className='lista'>
          {
            listaTareas.map((e, index) => <ListaDeTareas tarea={e}
              borrar={borrar}
              id={index}
            />
            )

          }
        </div>
      </header>
    </div>
  );
}

export default App;
