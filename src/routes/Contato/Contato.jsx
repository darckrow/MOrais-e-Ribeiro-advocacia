import React, { useState } from "react";
import Navigation from "../../Components/NavigationPubli";
import Footer from "../../Components/Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      console.log("Formulário enviado com sucesso!");

      // Abrir o modal após o envio do formulário
      handleOpen();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }

    // Resetar o formulário após o envio
    setFormData({
      name: "",
      email: "",
      phone: "",
      area: "",
      message: "",
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Navigation />

      <div className="flex flex-row justify-center mt-20 pb-10 pt-10 bg-[#1A191C] ">

        <article className="text-wrap px-20 py-56 flex-col ">
          <h3 className="text-2xl text-slate-50 italic font-bold underline decoration-2 ">Entre em contato conosco</h3>

          <p className="text-slate-400 "> <br />
            Para ser atendido por nossos advogados, ligue ou mande mensagem (WhatsApp)<br />
            para o número (12) 99160-4267 .<br />
            Caso prefira agendar uma consulta por e-mail, preencha os campos ao lado:<br />
          </p>
        </article>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-20 ">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-white">
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
            <label htmlFor="email" className="block mb-1 text-white">
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
            <label htmlFor="phone" className="block mb-1 text-white">
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
            <label htmlFor="area" className="block mb-1 text-white">
              Assuntos/Áreas:
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="">-</option>
              <option value="Direito Civil Geral">Direito Civil Geral</option>
              <option value="Direito de Família">Direito de Família</option>
              <option value="Direito Tributário">Direito Tributário</option>
              <option value="Direito Empresarial">Direito Empresarial</option>
              <option value="Direito do Trabalho">Direito do Trabalho</option>
              <option value="Direito do Consumidor">Direito do Consumidor</option>
              <option value="Direito Criminal">Direito Criminal</option>
              <option value="Direito Previdenciário">Direito Previdenciário</option>
              <option value="Direito Internacional">Direito Internacional</option>
              <option value="Sou parte adversa em um processo (informar número do processo)">Sou parte adversa em um processo (informar número do processo)</option>
              <option value="Quero fazer proposta de acordo">Quero fazer proposta de acordo</option>
              <option value="Outro assunto não especificado anteriormente">Outro assunto não especificado anteriormente</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 text-white">
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
            <input type="checkbox" name="confirmção" id="confirmacao" required className="" />
            <label className="text-slate-400 "> Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te encaminhar e-mails.
              Você pode cancelar a qualquer momento</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#3f3f46] text-[#f1f5f9] px-4 py-2 rounded-md hover:bg-[#a1a1aa] hover:text-[#3f3f46] focus:outline-none focus:bg-[#f8fafc]"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>

      <Footer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, borderRadius: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Muito Obrigado Pelo seu Contato
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Em breve entraremos em contato referente a sua solicitação
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Contato;