{ /*IMPORTAÇÕES DE ARQUIVOS*/ }
import Imagem2 from '../../assets/sjc.jpg';
import Imagem3 from '../../assets/todos2.jpg';
import Imagem4 from '../../assets/foto1.jpg';
import Imagem5 from '../../assets/foto2.jpg';
import Imagem6 from '../../assets/foto3.jpg';
import Menu from '../../Components/Menu';

import Caroucel from './caroucel';




const Home = () => {
  return (
    <nav >
      { /*CHAMANDO COMPONENTE MENU*/}
      <Menu />

      { /* AQUI FOI COLOCADO A IMAGEM DE FUNDO DA HOME*/}
      <div className="mb-12 overflow-hidden">
        <img alt="foto_sjc" className="h-[28rem] w-full object-cover object-center " src={Imagem2} />

        { /*AQUI FOI CRIADO UM CARD COM IMAGEM E TEXTO DA HOME*/}
        <section>
          <div class="mt-10 grid grid-cols-1 lg:grid-cols-2  bg-[#000000]">

            <div class="">
              <img alt="Advogados" className="h-[25rem] w-full object-cover object-center" src={Imagem3} />
            </div>

            <div class="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md grid min-h-[25rem] items-start overflow-hidden">
              <div class="p-6 flex flex-col justify-end">
                <h4 class="block antialiased tracking-normal text-3xl font-semibold leading-snug text-white">Advocacia Morais & Ribeiro</h4>
                <h4 class="block antialiased font-sans text-base text-justify leading-relaxed text-white my-3 font-normal">Na Morais & Ribeiro, somos mais do que apenas advogados - somos uma parceria fundada na amizade e no profissionalismo. Confie em nós para representar seus interesses com paixão, profissionalismo e comprometimento. Somos um escritório de atuação full service, 360º, adaptando, entendo e acolhendo cada cliente com sua respectiva demanda.
                  Estamos honrados em fazer parte de sua jornada jurídica e ansiosos para trabalhar juntos na busca por soluções eficazes e justas.
                </h4>
                <h4 class="block antialiased tracking-normal text-3xl font-semibold leading-snug text-white">Missão</h4>
                <h4 className='block antialiased font-sans text-base text-justify leading-relaxed text-white my-3 font-normal'>
                Missão:
                Na Morais & Ribeiro Advocacia e Consultoria Jurídica, nossa missão é conduzida por três pilares fundamentais: foco, conhecimento e inovação. Estamos comprometidos em fornecer soluções jurídicas e de negócios que transcendam as expectativas de nossos clientes e desafiem os paradigmas tradicionais da advocacia.
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section class="container mx-auto px-8 py-8 lg:py-40">
          <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Imagem4} alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="p-6 relative flex flex-col justify-end">
                  <a href="https://www.linkedin.com/in/nikollymorais/" class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Dra. Nikolly Karoline Morais e Silva</a>
               </div>
           
            </div>
            <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Imagem5} alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
              <div class="absolute inset-0 bg-black/50"></div>
              <div class="p-6 relative flex flex-col justify-end">
                <a  href="https://www.linkedin.com/in/joaopedrorrmoliveira/" class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Dr. João Pedro Ribeiro</a>
            </div>
            </div>
            <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Imagem6} alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
              <div class="absolute inset-0 bg-black/50"></div>
              <div class="p-6 relative flex flex-col justify-end">
                <a href="https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/" class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Dr. Gustavo Santos Ribeiro</a>
            </div>
            </div>
          </div>
        </section>

      </div>
    </nav>
  )
}
export default Home