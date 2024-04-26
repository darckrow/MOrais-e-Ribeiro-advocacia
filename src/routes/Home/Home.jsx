import { Link } from 'react-scroll';
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import Imagem1 from '../Home/Logo.jpg';
import Imagem2 from '../Home/sjc.jpg';
import Imagem3 from '../Home/todos.jpg';

const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
    <div className="lg:hidden block absolute top-40 w-full left-0 right-0 bg-slate-900">
      <ul className='text-center text-xl p-26 '>
        <Link spy={true} smooth={true} to="Home"> <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rouded'>Home</li> </Link>
        <Link spy={true} smooth={true} to="Profissionais"> <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rouded'>Profissionais</li> </Link>
        <Link spy={true} smooth={true} to="Publicações"> <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rouded'>Publicações</li> </Link>
        <Link spy={true} smooth={true} to="Atuação"> <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rouded'>Atuação</li> </Link>
        <Link spy={true} smooth={true} to="Contato"> <li className='my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rouded'>Contato</li> </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 bg-[#000000] text-white lg:py-5 px-10 py-4">
        <div className="flex items-center flex-1">
          <img className="h-[6rem]" src={Imagem1} alt="Logo" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-2 text-[18px]">
              <Link spy={true} smooth={true} to="Home"> <li className='hover:text-fuchsia-600 transition border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li> </Link>
              <Link spy={true} smooth={true} to="Profissionais"> <li className='hover:text-fuchsia-600 transition border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Profissionais</li> </Link>
              <Link spy={true} smooth={true} to="Publicações"> <li className='hover:text-fuchsia-600 transition border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Publicações</li> </Link>
              <Link spy={true} smooth={true} to="Atuação"> <li className='hover:text-fuchsia-600 transition border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Atuação</li> </Link>
              <Link spy={true} smooth={true} to="Contato"> <li className='hover:text-fuchsia-600 transition border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contato</li> </Link>
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
      <div className="bg-cover bg-center">
        <div className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[46rem] w-full object-cover object-center"
            src={Imagem2} />
        </div>

        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Imagem3} alt=""></img>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>

    

    </nav>


  )
}
export default Home