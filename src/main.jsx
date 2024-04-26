import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import de paginas
import Home from './routes/Home/Home';
import Atuacao from './routes/Atuacao/Atuacao';
import Contato from './routes/Contato/Contato';
import Proficionais from './routes/Proficionais/Proficionais';
import Publicacoes from './routes/Publicacoes/Publicacoes';


const router = createBrowserRouter([
  {
    path: "/home",
    element:<Home />
  },
  {
    path:"/atuacao",
    element:<Atuacao />
  },
  {
    path:"/contato",
    element:<Contato />
  },
  {
    path:"/proficionais",
    element:<Proficionais />
  },
  {
    path:"/publicacoes",
    element:<Publicacoes/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
