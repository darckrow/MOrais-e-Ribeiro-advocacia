import React from "react";
import Logo from "../assets/Logo.jpg";

const Footer = () => {
    return (
        <footer className='flex bg-[#000000] gap-3 justify-center py-6 w-full items-center'>
            <img className='h-[4rem] w-3/12 md:h-[6rem] md:w-1/12 justify-items-center' src={Logo} alt='Logo' />
            <div className='text-[#2C2843] text-center flex items-center'>
                Telefone: (12)99160-4267 Endereço: R. Antônio Aleixo da Silva,
                1880 - Jardim Satélite, São José dos Campos - SP, 12231-650
                E-mail: moraisribeiroadvjur@gmail.com
            </div>
        </footer>
    );
};

export default Footer;
