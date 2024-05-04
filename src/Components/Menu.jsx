{ /*IMPORTAÇÕES DE ARQUIVOS E FOTOS*/}
import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import Imagem1 from '../assets/Logo.jpg';



const Menu = () => {
  { /*UTILIZAÇÃO DE USESTATE PARA NAVEGAÇÃO NO MENU*/}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  { /*MENU PARA TELAS PEQUENAS*/}
  const content = <>
    <div className="visible md:invisible md:hidden block absolute top-36 w-full left-0 right-0 bg-[#000000]">
      <ul className='text-center text-xl p-6 '>
        <Link spy={true} smooth={true} to="/home"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Home</li> </Link>
        <Link spy={true} smooth={true} to="/atuacao"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Profissionais</li> </Link>
        <Link spy={true} smooth={true} to="/publicacoes"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Publicações</li> </Link>
        <Link spy={true} smooth={true} to="/atuacao"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Atuação</li> </Link>
        <Link spy={true} smooth={true} to="/contato"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Contato</li> </Link>
      </ul>
    </div>
  </>

  return (
    <nav>
        { /*MENU RESPONSIVO*/}
      <div className="sticky absolute top-0 left-0 w-full flex justify-between">
        <div className="absolute top-0 left-0 w-full flex justify-between z-50 bg-[#000000] opacity-80 text-white sm:py-20 md:py-5 lg:py-5 px-3 py-4">
          <div className="flex items-center flex-1">
            <img class="h-[10rem] absolute top-0 left-0 rounded-br-full" src={Imagem1} alt="Logo" />
          </div>
          <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-6 mr-0 text-[17px]">
                <Link spy={true} smooth={true} to="/Home"> <li className='hover:text-yellow-500 transition cursor-pointer'>Home</li> </Link>
                <Link spy={true} smooth={true} to="/Profissionais"> <li className='hover:text-yellow-500 transition cursor-pointer'>Profissionais</li> </Link>
                <Link spy={true} smooth={true} to="/Publicacoes"> <li className='hover:text-yellow-500 transition cursor-pointer'>Publicações</li> </Link>
                <Link spy={true} smooth={true} to="/Atuacao"> <li className='hover:text-yellow-500 transition cursor-pointer'>Atuação</li> </Link>
                <Link spy={true} smooth={true} to="/Contato"> <li className='hover:text-yellow-500 transition cursor-pointer'>Contato</li> </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>

          { /*BOTÃO PARA FECHAR E ABRIR MENU EM TELAS PEQUENAS*/}
          <button className='block md:hidden transition' onClick={handleClick} >
            {click ? <FaTimes /> : <TiThMenu />}
          </button>
        </div>
      </div>
     
    </nav>
  )
}
export default Menu