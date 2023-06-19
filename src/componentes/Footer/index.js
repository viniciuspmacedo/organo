import './Footer.css'

const Footer = () => {
    return(
        <footer className='rodape'>
            <nav>
                <a href='#'><img src="/imagens/fb.png" alt='logotipo do facebook'></img></a>
                <a href='#'><img src="/imagens/tw.png" alt='logotipo do twitter' ></img></a>
                <a href='#'><img src="/imagens/ig.png" alt='logotipo do instagram' ></img></a>
            </nav>
            <img src="/imagens/logo.png"></img>
            <p> Desenvolvido por Alura. </p>
        </footer>
    )
}

export default Footer