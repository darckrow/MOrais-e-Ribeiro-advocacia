
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });


  const handleInputChange = (e) => {
    setFormData({
     ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
     .then((res) => {
        if (!res.ok) {
          throw new Error('Could not save contact');
        }
        console.log('Contact saved');
      })
     .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;