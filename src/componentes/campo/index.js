import "./campo.css"

const Campo = (porps) =>{

    //Destructuracion
     const { type = "text" } = porps;
    
    const manejarCambio = (e) =>{
        porps.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{porps.titulo}</label>
        <input placeholder={porps.placeholder} required={porps.required} 
        value={porps.valor} onChange={manejarCambio}
        type= {type}
        />
    </div>
}

export default Campo 