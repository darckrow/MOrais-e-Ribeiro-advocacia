import React, { useState } from "react";
import Navigation from "../../Components/NavigationPubli";
import Footer from "../../Components/Footer";



const Contato = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar o formulário
        console.log(formData);
        // Resetar o formulário após o envio
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      };
    
      return (
        <>
        <Navigation/>
        <div className="flex justify-center mt-20">
          <form onSubmit={handleSubmit} className="w-full max-w-lg mt-20">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-10">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Nome Completo" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
                placeholder="email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">
                Telefone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Telefone"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                rows="4"
                required
                placeholder="Deixe sua Mensagem..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
        <Footer/>
        </>
      );
    };
    

export default Contato