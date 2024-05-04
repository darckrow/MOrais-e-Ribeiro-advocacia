import Navigation from "../../Components/NavigationPubli";
import Publicacao from "../../Components/Publicacao";
import Footer from "../../Components/Footer";
import nicoly from "../../assets/nicoly_public.svg";
import imagem_exposicao from "../../assets/exposicao.svg";
import pjxclt from "../../assets/pjxclt.svg";
import joao from "../../assets/joao_public.svg";

const Publicacoes = () => {
    return (
        <div className='bg-[#1A191C] w-full'>
            <Navigation />
            <h1 className='w-full pt-40 text-center font-[Barlow] text-white text-3xl my-4'>
                Publicações
            </h1>
            <Publicacao
                imagem_publicacao={imagem_exposicao}
                text={`<p class='text-white font-[Barlow] mx-5 mt-10 text-left text-pretty text-xl'>
                    A internet trouxe consigo inúmeras oportunidades, mas também
                    desafios significativos, especialmente no que diz respeito à
                    segurança dos dados. Uma das áreas mais preocupantes é a
                    chamada "Dark Web", um segmento oculto da internet onde
                    atividades ilícitas muitas vezes florescem, incluindo a
                    venda e troca de informações pessoais e sensíveis.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    A exposição de dados na Dark Web apresenta uma ameaça
                    considerável para indivíduos e organizações. Informações
                    como números de cartões de crédito, dados bancários,
                    informações de login, e até mesmo detalhes de identificação
                    pessoal podem ser encontrados à venda nesta parte obscura da
                    internet. As consequências dessa exposição podem ser
                    devastadoras, incluindo roubo de identidade, fraude
                    financeira e até mesmo chantagem.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Do ponto de vista jurídico, as consequências são igualmente
                    graves. No Brasil a Lei Geral de Proteção de Dados é a
                    legislação aplicada à responsabilidade das organizações em
                    garantir a segurança desses dados. Quando ocorre uma
                    violação de dados e essas informações acabam na Dark Web, as
                    empresas podem enfrentar processos judiciais significativos,
                    multas pesadas, danos à reputação, e ainda com a
                    possibilidade de pagamento de danos em razão da exposição do
                    cliente.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Além disso, há implicações éticas a considerar. As empresas
                    têm a responsabilidade moral de proteger os dados confiados
                    a elas por clientes e funcionários. A negligência na
                    proteção dessas informações pode resultar em perda de
                    confiança do cliente e danos irreparáveis à empresa.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Diante desse cenário, é crucial que as organizações adotem
                    medidas proativas para proteger seus dados. Isso inclui
                    investir em sistemas de segurança robustos, implementar
                    práticas de segurança cibernética eficazes e educar
                    funcionários sobre a importância da proteção de dados.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Em última análise, a exposição de dados na Dark Web é um
                    lembrete contundente da importância crítica da segurança
                    digital. As consequências jurídicas e éticas são sérias e
                    devem servir como um chamado à ação para todas as
                    organizações que lidam com dados sensíveis. Somente com
                    medidas robustas de proteção e colaboração eficaz podemos
                    esperar mitigar os riscos e proteger nossa segurança online
                    nessa era digital.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    E você, já sabia que existem consequências pela exposição de
                    dados pessoais? Como estão os seus dados? E como está a sua
                    empresa em relação à LGPD?
                </p>`}
                imagem_publicador={nicoly}
                nome_publicador='Nicoly Morais'
                sobre_publicador={`Dra. Nikolly Karoline Morais e Silva é advogada com atuação nas áreas cível e tributária. Possui pós-graduação em Advocacia Cível pela renomada FMP - Faculdade do Ministério Público, bem como em Direito Empresarial pela Faculdade Legale Educacional, além de estar atualmente cursando pós-graduação em Direito Tributário na mesma instituição... `}
            />
            <Publicacao
                imagem_publicacao={pjxclt}
                text={`<p class='text-white font-[Barlow] mx-5 mt-10 text-left text-pretty text-xl'>
                    A decisão entre trabalhar como Pessoa Jurídica (PJ) ou sob a forma da Consolidação das Leis do Trabalho (CLT) é crucial e deve ser cuidadosamente ponderada, levando em consideração diversos aspectos.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    <b>CLT - Estabilidade e Proteção:</b>
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    O regime CLT oferece uma gama de benefícios e proteções para os trabalhadores, como férias remuneradas, décimo terceiro salário, seguro-desemprego e benefícios previdenciários. Além disso, estabelece direitos fundamentais, como jornada de trabalho definida, horas extras remuneradas, descanso semanal remunerado e aviso prévio em caso de demissão sem justa causa. Essas garantias proporcionam segurança financeira e estabilidade no emprego, reduzindo a incerteza sobre o futuro. O regime CLT também impõe obrigações significativas aos empregadores, como o pagamento de encargos trabalhistas e contribuições sociais, assegurando proteção aos trabalhadores.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    <b>PJ: Flexibilidade e Autonomia na Contratação:</b>
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Trabalhar como Pessoa Jurídica oferece uma maior flexibilidade e autonomia ao trabalhador. Isso permite estabelecer seus próprios horários, preços e abordagens para reduzir a carga tributária. Além disso, pode resultar em ganhos maiores do que sob o regime CLT, pois o trabalhador pode negociar sua remuneração e não está sujeito a impostos retidos na fonte nem a contribuições para a previdência social. A contratação como PJ também oferece a oportunidade de ter várias fontes de renda, se desejado.
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Qual é o Melhor Modelo de Contratação?
                </p>
                <p class='text-white font-[Barlow] mx-5 mt-8 text-left text-pretty text-lg'>
                    Não existe uma resposta única para essa pergunta, pois depende das circunstâncias individuais de cada trabalhador e empregador. Para alguns, o regime CLT pode ser preferível, oferecendo segurança e benefícios garantidos. No entanto, outros podem optar por trabalhar como PJ devido à flexibilidade, autonomia e potencial de ganhos mais elevados. Portanto, a escolha entre PJ e CLT deve ser baseada em uma avaliação cuidadosa das necessidades, preferências e objetivos pessoais. É crucial considerar não apenas os aspectos financeiros, mas também a qualidade de vida, satisfação profissional e segurança no trabalho. Em resumo, o modelo de contratação mais vantajoso é aquele que melhor atende às necessidades e valores individuais de cada pessoa.
                </p>`}
                imagem_publicador={joao}
                nome_publicador='João Pedro'
                sobre_publicador={`Dr. João Pedro Ribeiro atua na esfera trabalhista, atuando tanto para o empregado quanto para o empregador. Ele é pós-graduado em Direito do Trabalho e especializado em Compliance. Destaca-se pela habilidade em ajudar as empresas a cumprir regulamentos e padrões éticos, minimizando riscos legais... `}
            />
            <Footer />
        </div>
    );
};

export default Publicacoes;
