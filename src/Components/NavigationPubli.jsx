import logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';



const NavigationPubli = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        let list = document.querySelector("ul");
        setClick(!click)
        if (click) {
            list.classList.remove('top-[100px]')
            list.classList.remove('opacity-100');   
        } else {
            list.classList.add('top-[100px]')
            list.classList.add('opacity-100');
            }
    };

    return (
        <nav className='fixed xl:flex xl:items-center xl:justify-between top-0 left-0 w-full bg-[#000000] text-white xl:py-5 px-10 py-4'>
            <div className='flex items-center flex-1 justify-between'>
                <Link to={"../home"}>
                    <img className='h-[6rem]' src={logo} alt='logo' />
                </Link>
                <div onClick={handleClick} className="text-3xl cursor-pointer xl:hidden block mx-2">
                {click ? <IoClose /> : <IoMenu />}
                </div>
            </div>

            <div className=''>
                <ul
                    className='xl:flex xl:items-center z-[-1] xl:z-auto xl:static absolute bg-[#000000] w-full left-0 xl:w-auto xl:py-0 py-4 xl:pl-0 pl-7 text-center
                    xl:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500
            '
                >
                    <Link className='duration-500 mx-4' to={"../home"}>
                        <li className='font-[Popins]'>Home</li>
                    </Link>
                    <Link className='duration-500 mx-4' to={"../atuacao"}>
                        <li className='font-[Popins]'>Atuação</li>
                    </Link>
                    <Link className='duration-500 mx-4' to={"../proficionais"}>
                        <li className='font-[Popins]'>Profissionais</li>
                    </Link>
                    <Link className='duration-500 mx-4' to={"../publicacoes"}>
                        <li className='font-[Popins]'>Publicações</li>
                    </Link>
                    <Link className='duration-500 mx-4' to={"../contato"}>
                        <li className='font-[Popins]'>Contato</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationPubli;
