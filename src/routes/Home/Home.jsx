import { Link } from 'react-scroll';
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import Imagem1 from '../Home/Logo.jpg';
import Imagem2 from '../Home/sjc.jpg';


const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
    <div className="visible md:invisible bg:hidden block absolute top-36 w-full left-0 right-0 bg-[#000000]">
      <ul className='text-center text-xl p-26 '>
        <Link spy={true} smooth={true} to="Home"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Home</li> </Link>
        <Link spy={true} smooth={true} to="Profissionais"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Profissionais</li> </Link>
        <Link spy={true} smooth={true} to="Publicações"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Publicações</li> </Link>
        <Link spy={true} smooth={true} to="Atuação"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Atuação</li> </Link>
        <Link spy={true} smooth={true} to="Contato"> <li className='hover:text-yellow-500 my-4 py-4 hover:rouded'>Contato</li> </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className="absolute top-0 left-0 w-full flex justify-between z-50 bg-[#000000] opacity-60 text-white sm:py-20 md:py-5 lg:py-5 px-6 py-4">
      <div className="flex items-center flex-1">
          <img class="h-[10rem] absolute top-0 left-0 rounded-br-full" src={Imagem1} alt="Logo" />
      </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-6 mr-0 text-[16px]">
              <Link spy={true} smooth={true} to="Home"> <li className='hover:text-yellow-500 transition cursor-pointer'>Home</li> </Link>
              <Link spy={true} smooth={true} to="Profissionais"> <li className='hover:text-yellow-500 transition cursor-pointer'>Profissionais</li> </Link>
              <Link spy={true} smooth={true} to="Publicações"> <li className='hover:text-yellow-500 transition cursor-pointer'>Publicações</li> </Link>
              <Link spy={true} smooth={true} to="Atuação"> <li className='hover:text-yellow-500 transition cursor-pointer'>Atuação</li> </Link>
              <Link spy={true} smooth={true} to="Contato"> <li className='hover:text-yellow-500 transition cursor-pointer'>Contato</li> </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick} >
          {click ? <FaTimes /> : <TiThMenu />}
        </button>
      </div>
      <div className="mb-12 overflow-hidden">
        <img
          alt="foto_sjc"
          className="h-[58rem] w-full object-cover object-center"
          src={Imagem2} />
      </div>
    </nav>

  )
}
export default Home