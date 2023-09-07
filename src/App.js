import './App.css';
import { v4 as uuid } from "uuid"
import Footer from './componentes/footer';
import Equipo from './componentes/equipo';
import Formulario from './componentes/formulario/formulario.js';
import Header from './componentes/header/header.js';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';

function App() {
  const [mostraFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/Majoras13.png",
      nombre: "Ma:Rel",
      puesto: "Estudiante",
      fav: true
    }
  ]);

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#d9f7e9",
      colorSecundario:"#57c278"
    }
    ,{
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#E8F8FF",
      colorSecundario:"#82CFFA"
    }
    ,{
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#F0F8E2",
      colorSecundario:"#A6D157"
    }
    ,{
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#FDE7E8",
      colorSecundario:"#E06B69"
    }
    ,{
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#FAE9F5",
      colorSecundario:"#DB6EBF"
    }
    ,{
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFF5D9",
      colorSecundario:"#FFBA05"
    }
    ,{
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FFEEDF",
      colorSecundario:"#FF8A29"
    }
])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostraFormulario);
  }

  //Registro colaborador

  const registrarColaborador= (colaborador)=>{

    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador =(id) =>{
    console.log("Eliminado", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar color equipo

  const actualizarColor = (color, id) =>{
    console.log("Actualizar color", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorSecundario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Favorito

  const like = (id) => {

    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if( colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header/>
      {/* { mostraFormulario ? <Formulario/> : <></>} */}
      { mostraFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo={crearEquipo}
      />}
      
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }

      <Footer/>
    </div>
  );
}

export default App;
