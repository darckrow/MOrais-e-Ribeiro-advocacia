{ /*IMPORTAÇÕES DE ARQUIVOS*/ }
import Imagem2 from '../Home/sjc.jpg';
import Imagem3 from '../Home/todos2.jpg';
import Imagem4 from '../Home/foto1.jpg';
import Imagem5 from '../Home/foto2.jpg';
import Imagem6 from '../Home/foto3.jpg';
import Menu from '../../Components/Menu'
import Caroucel from './caroucel'




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

            <div class="bg-[#800000]"> 
            <Caroucel/>          
            </div>
            
            <div class="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md grid min-h-[25rem] items-start overflow-hidden">
              <div class="p-6 flex flex-col justify-end">
                <h4 class="block antialiased tracking-normal text-4xl font-semibold leading-snug text-white">Advocacia Morais & Ribeiro</h4>
                <h4 class="block antialiased font-sans text-base text-justify leading-relaxed text-white my-9 font-normal">Na Morais & Ribeiro, somos mais do que apenas advogados - somos uma parceria fundada na amizade e no profissionalismo. Confie em nós para representar seus interesses com paixão, profissionalismo e comprometimento. Somos um escritório de atuação full service, 360º, adaptando, entendo e acolhendo cada cliente com sua respectiva demanda.
                  Estamos honrados em fazer parte de sua jornada jurídica e ansiosos para trabalhar juntos na busca por soluções eficazes e justas.
                </h4>
              </div>
            </div>
          </div>
        </section>

      </div>
      
    </nav>
  )
}
export default Home