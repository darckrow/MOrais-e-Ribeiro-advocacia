import { Link } from "react-router-dom";


const Publicacao = ({ imagem_publicacao, text, imagem_publicador, nome_publicador, sobre_publicador }) => {
    function limitador(texto) {
        if (window.innerWidth < 1024 && texto.length > 100) {
            return texto.substring(0, 100) + "...";
        } else {
            return texto;
        }
    }



    return (
        <div className='left-0 w-full flex flex-col p-5 xl:px-32 bg-[#2C2843]'>
            <img
                className='xl:w-10/12  mx-auto'
                src={imagem_publicacao}
                alt='imagem-publicacao'
            />
            <div className='flex flex-col xl:w-10/12 mx-auto'>
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
            <div className='rounded mx-auto md:w-8/12 mt-10 flex border-2 border-[#1A191C] p-4 gap-3'>
                <img src={imagem_publicador} alt='publicador' />
                <div className='flex flex-col'>
                    <h2 className='font-[Lato] text-xl text-white mb-2 text-center'>
                        {nome_publicador}
                    </h2>
                    <p className='text-pretty text-white text-left'>
                        {limitador(sobre_publicador)}
                    </p>
                    <Link className="min-w-fit" to='../profissionais'>
                        <button className="bg-white flex p-2 mt-3 rounded">Saiba mais</button>
                    </Link>
                </div>
            </div>
            <hr className="mt-10 w-5/12 mx-auto h-1ß border-[#1A191C]"/>
        </div>
    );
};

export default Publicacao;
