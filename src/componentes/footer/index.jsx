import "./footer.css"


const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://app.aluracursos.com/"><img src="/img/facebook.png" alt="facebook"/></a>
            <a href="https://app.aluracursos.com/"><img src="/img/twitter.png"alt="twitter"/></a>
            <a href="https://app.aluracursos.com/"><img src="/img/instagram.png" alt="instagram"/></a>
        </div>
        <img src="/img/Logo.png" alt="org"/>
        <strong>Desarrollado por Alura | Mario</strong>
    </footer>
}

export default Footer