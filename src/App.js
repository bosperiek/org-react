import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Programacion ",
      foto: "https://avatars.githubusercontent.com/u/80241141?s=400&u=a80e32db81704684f4e44b1bae57c858a4176dfe&v=4",
      nombre: "Genesis Rondon",
      puesto: "Desarrolladora de sofware e instructora",
      fav:(true)
    },
    {
      equipo: "Programacion ",
      foto: "https://avatars.githubusercontent.com/u/80241141?s=400&u=a80e32db81704684f4e44b1bae57c858a4176dfe&v=4com/JeanmarieAluraLatam.png",
      nombre: "Daniel lopez guzman",
      puesto: "Desarrollador web",
      fav:(false)
    },
    {
      equipo: "Front End",
      foto: "https://avatars.githubusercontent.com/u/80241141?s=400&u=a80e32db81704684f4e44b1bae57c858a4176dfe&v=4",
      nombre: "Fernando iek",
      puesto: "Desarrollador web",
      fav:(true)
    },
    {
      equipo: "UX y Diseño",
      foto: "https://avatars.githubusercontent.com/u/80241141?s=400&u=a80e32db81704684f4e44b1bae57c858a4176dfe&v=4",
      nombre: "Cristian velazco",
      puesto: "Head de alura e instructor",
      fav:(false)
    },
  ]);

  const [equipos, actualizarEquipo] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar color", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipo(equiposActualizados);
  };

//Crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log("Crear equipo", nuevoEquipo);
  actualizarEquipo([...equipos,{...nuevoEquipo, id: uuid()}])
}

//Crear like

const like =(id)=>{
  console.log("Like", id);
}


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
