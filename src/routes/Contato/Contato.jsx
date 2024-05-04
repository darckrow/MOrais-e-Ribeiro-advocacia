
import React, { useState } from "react";
import Navigation from "../../Components/NavigationPubli";
import Footer from "../../Components/Footer";


function saveFormData() {
  // Obter os valores do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Criar um objeto com os dados do formulário
  const formData = {
    name: name,
    email: email,
    message: message
  };

  // Converter o objeto para JSON
  const jsonData = JSON.stringify(formData);

  // Criar um objeto Blob com o JSON
  const blob = new Blob([jsonData], { type: 'application/json' });

  // Criar um link para download do arquivo JSON
  const url = URL.createObjectURL(blob);
  
  // Criar um link <a> para download do arquivo
  const a = document.createElement('a');
  a.href = url;
  a.download = 'formData.json';
  
  // Adicionar o link ao documento e clicar automaticamente nele para iniciar o download
  document.body.appendChild(a);
  a.click();
  
  // Remover o link do documento
  document.body.removeChild(a);
}



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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
        
      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário');
      }

      console.log('Formulário enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }

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
      <Navigation />
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
      <Footer />
    </>
  );
};

export default Contato;

