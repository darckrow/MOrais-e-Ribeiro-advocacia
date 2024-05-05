{ /*IMPORTAÇÕES DE ARQUIVOS*/ }
import Imagem2 from '../../assets/sjc.jpg';
import Imagem10 from '../../assets/todos1.jpg';
import Imagem3 from '../../assets/todos2.jpg';
import Imagem7 from '../../assets/todos3.jpg';
import Imagem8 from '../../assets/todos4.jpg';
import Imagem4 from '../../assets/foto1.jpg';
import Imagem5 from '../../assets/foto2.jpg';
import Imagem6 from '../../assets/foto3.jpg';
import Navibar from '../../Components/Menu';
import Footer from '../../Components/Footer';

const Home = () => {

  return (
    <nav >
      { /*CHAMANDO COMPONENTE MENU*/}
      <Navibar />

      { /* AQUI FOI COLOCADO A IMAGEM DE FUNDO DA HOME*/}
      <div className="mb-12 overflow-hidden">
        <img alt="foto_sjc" className="h-[28rem] w-full object-cover object-center " src={Imagem2} />
        <div>

          { /* AQUI FOI COLOCADO CAROUSEL DE IMAGENS*/}
          <div class="mt-10 grid grid-cols-1 lg:grid-cols-2  bg-[#000000]">
            <div id="carouselExampleFade" class="carousel slide carousel-fade data-interval=500" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Imagem10} class="h-[25rem] w-full object-cover object-center" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={Imagem3} class="h-[25rem]  w-full object-cover object-center" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={Imagem7} class="h-[25rem]  w-full object-cover object-center" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src={Imagem8} class="h-[25rem]  w-full object-cover object-center" alt="..."></img>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              <div class="p-5 flex flex-col justify-end">
              <h4 class="opacity-80 block antialiased tracking-normal text-3xl font-semibold leading-snug text-white">Advocacia Morais & Ribeiro</h4>
              <h4 class=" opacity-70 block antialiased font-sans text-base text-justify leading-relaxed text-white my-1 font-normal">Na Morais & Ribeiro, somos mais do que apenas advogados - somos uma parceria fundada na amizade e no profissionalismo. Confie em nós para representar seus interesses com paixão, profissionalismo e comprometimento. Somos um escritório de atuação full service, 360º, adaptando, entendo e acolhendo cada cliente com sua respectiva demanda.
                Estamos honrados em fazer parte de sua jornada jurídica e ansiosos para trabalhar juntos na busca por soluções eficazes e justas.
              </h4>
              </div>


            </div>
     
          { /*AQUI FOI CRIADO UM CARD DE TEXTO NA HOME*/}
          <div class=" flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md grid min-h-[25rem] items-start overflow-hidden">
            <div class="p-5 flex flex-col justify-end">
              <h4 class="opacity-80 block antialiased tracking-normal text-3xl font-semibold leading-snug text-white">Quem Somos - sobre nós</h4>
              <h4 className='opacity-70 block antialiased font-sans text-base text-justify leading-relaxed text-white my-3 font-normal'>
                Somos um escritório de advocacia composto por três colegas de faculdade que cultivaram uma relação sólida desde os bancos acadêmicos, nossa sociedade nasceu da visão compartilhada de oferecer serviços jurídicos de excelência, moldados pela experiência adquirida ao longo de nossos anos de estudo e prática. Profissionais altamente qualificados e especializados em diversas áreas do direito, o Dr. Gustavo Santos Ribeiro possui vasta experiência em responsabilidade civil, direito do consumidor e isenção de imposto de renda em casos de doença grave; O Dr. João Pedro Ribeiro destaca-se na esfera trabalhista, com expertise em compliance, danos morais e LGPD; e  a Dra. Nikolly Karoline Morais e Silva é especializada em Advocacia Cível e Direito Tributário, com ênfase em negociação, contratos e resolução de conflitos. Nosso compromisso é oferecer assistência jurídica de alta qualidade, eficiente e adaptada às necessidades únicas de cada cliente.
              </h4>
              <h4 class="opacity-80 block antialiased tracking-normal text-3xl font-semibold leading-snug text-white">Missão</h4>
              <h4 className='opacity-70 block antialiased font-sans text-base text-justify leading-relaxed text-white my-3 font-normal'>Na Morais & Ribeiro Advocacia e Consultoria Jurídica, nossa missão é conduzida por três pilares fundamentais: foco, conhecimento e inovação. Estamos comprometidos em fornecer soluções jurídicas e de negócios que transcendam as expectativas de nossos clientes e desafiem os paradigmas tradicionais da advocacia.</h4>
              <h4 class="opacity-80 block antialiased tracking-normal text-3xl font-semibold leading-snug text-white">Visão</h4>
              <h4 class="opacity-70 block antialiased font-sans text-base text-justify leading-relaxed text-white my-3 font-normal">Uma Sociedade de Advogados alinhada às transformações sociais e seus reflexos nas dinâmicas jurídicas, adotando e adaptando-se às inovações tecnológicas em constante evolução.</h4>
        
            </div>
          </div>
        </div>
        <div>
         
          </div>

          { /*AQUI FOI CRIADO 3 CARDS COM FOTO E NOME DOS ADVOGADOS*/}
          <section class="container mx-auto px-8 py-8 lg:py-0">
            <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Imagem4} alt="bg" class="h-[40rem] absolute inset-0 h-full w-full object-cover object-center" />
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="p-6 relative flex flex-col justify-end">
                  <a href="https://www.linkedin.com/in/nikollymorais/" class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Dra. Nikolly Karoline Morais e Silva</a>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Imagem5} alt="bg" class="h-[40rem] absolute inset-0 h-full w-full object-cover object-center" />
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="p-6 relative flex flex-col justify-end">
                  <a href="https://www.linkedin.com/in/joaopedrorrmoliveira/" class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Dr. João Pedro Ribeiro</a>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Imagem6} alt="bg" class="h-[40rem] absolute inset-0 h-full w-full object-cover object-center" />
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="p-6 relative flex flex-col justify-end">
                  <a href="https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/" class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Dr. Gustavo Santos Ribeiro</a>
                </div>
              </div>
            </div>
          </section>

          { /*AQUI FOI CRIADO UM CARD COM VALORES DA EMPRESA*/}
          <div class="lg:py-5 opacity-50 flex flex-col items-center bg-gray-100 border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Valores</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Na Morais & Ribeiro Advocacia e Consultoria Jurídica,
                temos o compromisso de seguir princípios fundamentais do Direito, que guiam cada interação com nossos clientes. Valorizamos a
                confiança depositada em nossa equipe e buscamos construir relacionamentos duradouros, por meio da satisfação do cliente, sempre
                baseados na transparência, ética e excelência jurídica.</p><br></br>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">Transparência Total: Acreditamos que a transparência é essencial para qualquer relação sólida. Na Morais & Ribeiro, comprometemo-nos a fornecer
                informações claras e compreensíveis sobre os processos legais e seus possíveis desdobramentos. Buscamos eliminar barreiras na comunicação jurídica,
                garantindo que nossos clientes estejam sempre informados e capacitados a tomar decisões. <br></br><br></br>
                Soluções Eficazes: Entendemos que cada situação jurídica é única, e abordamos cada caso com uma perspectiva personalizada. Nosso objetivo não é apenas resolver conflitos, mas fazê-lo de maneira efetiva, rápida e justa. Empregamos estratégias inovadoras, aliadas à nossa experiência, para encontrar soluções que atendam aos interesses de nossos clientes.
                Empatia e Comprometimento: No coração do nosso serviço está a empatia. Compreendemos as complexidades emocionais e legais que envolvem questões jurídicas e nos comprometemos a lidar com cada cliente com respeito, empatia e compreensão. Estamos aqui para ouvir, aconselhar e agir em prol do melhor interesse de quem confia em nossa expertise.
              </p>
            </div>
          </div>

          { /*AQUI ESTA SENDO CHAMADO COMPONENTE FOOTER*/}
          <Footer />
        </div>
      </div>

    </nav>
  )
}
export default Home