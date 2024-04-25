

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

export default Contato