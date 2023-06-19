import './Colaborador.css'

const Colaborador = ({imagem, nome, cargo, corDeFundo}) => {
    return(
    <div className='colaborador'>
        <div className='colaborador-topo' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}></img>
        </div>
        <div className='colaborador-base'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    )
}

export default Colaborador