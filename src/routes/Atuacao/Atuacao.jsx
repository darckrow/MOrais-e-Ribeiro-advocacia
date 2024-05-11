import Navibar from '../../Components/Menu';
import Footer from '../../Components/Footer';
import Imagem1 from '../../assets/foto1.jpg';
import Imagem2 from '../../assets/foto2.jpg';
import Imagem3 from '../../assets/foto3.jpg';

const Atuacao = () => {
  return (
    <div>
      { /* AQUI FOI COLOCADO O MENU DE NAVEGAÇÃO*/}
      <Navibar />

      { /* AQUI FOI COLOCADO INFORMAÇÕES SOBRE A ATUAÇÃO Dra. Nikolly Karoline Morais e Silva*/}
      <nav class="min-h-screen flex flex-col p-5 sm:p-40 md:p-40 justify-center">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <section class="font-sans text-white">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img class="rounded-lg h-full object-cover" src={Imagem1} width="433" alt='""' typeof="foaf:Image" />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <h2 class="opacity-80 leading-tight text-4xl font-bold">Dra. Nikolly Karoline Morais e Silva</h2>
                  <p class="opacity-60 text-justify mt-4">Dra. Nikolly Karoline Morais e Silva é advogada com atuação nas áreas cível e tributária. Possui pós-graduação em Advocacia Cível pela
                    renomada FMP - Faculdade do Ministério Público, bem como em Direito Empresarial pela Faculdade Legale Educacional, além de estar atualmente cursando
                    pós-graduação em Direito Tributário na mesma instituição. Além de sua formação acadêmica sólida, é certificada em negociação e formação de contratos,
                    contando com vasta experiência em mediação de conflitos e resolução efetiva das demandas.</p>
                  <p class="opacity-60 text-justify mt-4">Com especialização em tributação federal, repetições de indébito e execuções fiscais, Dra. Nikolly tem como principal objetivo fornecer
                    assistência jurídica de alta qualidade em questões cíveis e tributárias. Ela acredita firmemente na importância de uma advocacia proativa e estratégica,
                    capaz de antecipar desafios e proteger os interesses dos clientes da melhor maneira possível.</p><br></br>
                  <p><a class="mt-4 button button--secondary" href="https://www.linkedin.com/in/nikollymorais/">Saiba mais...</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>

      { /* AQUI FOI COLOCADO INFORMAÇÕES SOBRE A ATUAÇÃO Dr. João Pedro Ribeiro*/}
      <nav class="min-h-screen flex flex-col p-5 sm:p-40 md:p-40 justify-center">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <section class="font-sans text-white">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img class="rounded-lg h-full object-cover" src={Imagem2} width="433" alt='""' typeof="foaf:Image" />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <h2 class="opacity-80 leading-tight text-4xl font-bold">Dr. João Pedro Ribeiro</h2>
                  <p class="opacity-60 text-justify mt-4">Dr. João Pedro Ribeiro atua na esfera trabalhista, atuando tanto para o empregado quanto para o empregador.
                    Ele é pós-graduado em Direito do Trabalho e especializado em Compliance. Destaca-se pela habilidade em ajudar as empresas a cumprir regulamentos e
                    padrões éticos, minimizando riscos legais. Possui ainda profundo conhecimento na área de danos morais, defendendo os interesses de seus clientes com
                    empatia e determinação. Sua experiência em lidar com casos de danos materiais e morais garante aos clientes a busca por compensações justas diante
                    de prejuízos financeiros. Além disso, é certificado em LGPD (Lei Geral de Proteção de Dados), garantindo que seus clientes estejam em conformidade
                    com as regulamentações de proteção de dados. Oferece orientação jurídica personalizada, compreendendo as necessidades únicas de cada cliente.
                  </p><br></br>
                  <p><a class="mt-4 button button--secondary" href="https://www.linkedin.com/in/joaopedrorrmoliveira/">Saiba mais...</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>

      { /* AQUI FOI COLOCADO INFORMAÇÕES SOBRE A ATUAÇÃO Dr. Gustavo Santos Ribeiro*/}
      <nav class="min-h-screen flex flex-col p-5 sm:p-16 md:p-24 justify-center">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <section class="font-sans text-white">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img class="rounded-lg h-full object-cover" src={Imagem3} width="433" alt='""' typeof="foaf:Image" />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <h2 class="opacity-80 leading-tight text-4xl font-bold">Dr. Gustavo Santos Ribeiro</h2>
                  <p class="opacity-60 text-justify mt-4">Dr. Gustavo Santos Ribeiro, com ampla experiência e conhecimento em responsabilidade civil,
                    danos morais e materiais, obteve seu bacharelado em Direito em uma universidade reconhecida. Destacou-se pela excelência acadêmica,
                    especializando-se em Direito do Consumidor e Direito Processual Civil. Possui vasto conhecimento em ações contra instituições financeiras,
                    instituições de ensino, revendedoras de veículos e companhias aéreas, ações consumeristas em geral. Além de certificação para lidar com casos
                    de isenção de imposto de renda em caso de doença grave, demonstrando competência e compromisso em servir seus clientes.</p>
                  <br></br>
                  <p><a class="mt-4 button button--secondary" href="https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/">Saiba mais...</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>

      <Footer />
    </div>
  )
}

export default Atuacao