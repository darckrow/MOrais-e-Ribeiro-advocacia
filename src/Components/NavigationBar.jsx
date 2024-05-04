import { Link } from "react-router-dom"

const navigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="atuacao">Atuação</Link></li>
        <li><Link to="proficionjais">Proficionais</Link></li>
        <li><Link to="puplicacoes">Publicações</Link></li>
        <li><Link to="contato">Contao</Link></li>
      </ul>
    </nav>
  )
}

export default navigationBar