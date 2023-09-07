import "./equipo.css"
import "../colaborador"
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) =>{

    //Destructuracion
    const {/* colorPrimario, */ colorSecundario,titulo, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    // ejemplo

    const obj ={
        backgroundColor:hexToRgba(colorSecundario, 0.6)
    };


    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorSecundario}
                    onChange={(event)=>{
                        actualizarColor(event.target.value, id)
                    }}
                />
            <h3 style={{borderColor:colorSecundario}}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=><Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorSecundario={colorSecundario} 
                    eliminarColaborador={eliminarColaborador} 
                    like={like}
                    />)
                }
            </div>
        </section>}
    </>
    
}

export default Equipo;