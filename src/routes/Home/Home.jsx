import { Link } from 'react-scroll';
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
import Imagem1 from '../Home/Logo.jpg';
import Imagem2 from '../Home/sjc.jpg';
import Imagem3 from '../Home/todos2.jpg';
import Imagem4 from '../Home/foto1.jpg';
import Imagem5 from '../Home/foto2.jpg';
import Imagem6 from '../Home/foto3.jpg';


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
      <div className="sticky absolute top-0 left-0 w-full flex justify-between">
        <div className="absolute top-0 left-0 w-full flex justify-between z-50 bg-[#000000] opacity-80 text-white sm:py-20 md:py-6 lg:py-5 px-6 py-4">
          <div className="flex items-center flex-1">
            <img class="h-[10rem] absolute top-0 left-0 rounded-br-full" src={Imagem1} alt="Logo" />
          </div>
          <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-6 mr-0 text-[17px]">
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
      </div>
      <div className="mb-12 overflow-hidden ">
        <img alt="foto_sjc" className="h-[28rem] w-full object-cover object-center " src={Imagem2} />
      </div>

      <section>
        <div class="mt-10 grid grid-cols-1 gap-15 lg:grid-cols-2 ">
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[25rem] items-end overflow-hidden rounded-xl"><img src={Imagem3} alt="bg" className="h-[35rem] absolute inset-0 w-full object-cover object-center" />
            <div class="absolute inset-0 bg-black/0 "></div>
            <div class="p-6 relative flex flex-col justify-end ">
            </div>
          </div>
          <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[25rem] items-start overflow-hidden">
            <div class="absolute inset-0 bg-black/70"></div>
            <div class="p-6 relative flex flex-col justify-end">
              <h4 class="block antialiased tracking-normal text-4xl font-semibold leading-snug text-white">Advocacia Morais & Ribeiro</h4>
              <h4 class="block antialiased font-sans text-base font-light leading-relaxed text-white my-9 font-normal">Na Morais & Ribeiro, somos mais do que apenas advogados - somos uma parceria fundada na amizade e no profissionalismo. Confie em nós para representar seus interesses com paixão, profissionalismo e comprometimento. Somos um escritório de atuação full service, 360º, adaptando, entendo e acolhendo cada cliente com sua respectiva demanda.
                Estamos honrados em fazer parte de sua jornada jurídica e ansiosos para trabalhar juntos na busca por soluções eficazes e justas.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}
export default Home