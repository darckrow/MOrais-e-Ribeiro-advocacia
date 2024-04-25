<<<<<<< HEAD


const Contato = () => {
  return (
    <nav>
    <div className="h-10vh flex justify-between z-50 bg-slate-900 text-white lg:py-5 px-20 py-4">
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold">teste</span>
      </div>
      <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
        <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="Home"> <li>teste</li> </Link>
              <Link to="Profissionais"> <li>Profissionais</li> </Link>
              <Link to="Publicações"> <li>Publicações</li> </Link>
              <Link to="Atuação"> <li>Atuação</li> </Link>
              <Link to="Contato"> <li>Contato</li> </Link>
           </ul>
        </div>
      </div>
    </div>
</nav>
  )
}
=======
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
>>>>>>> e728439ccc9bd4303917ed8692beebd04b4dbce4

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