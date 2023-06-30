import logo from "../assets/imgs/logo.jpeg";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto pt-10 pb-5">
        <div className="text-center">
          <div className="flex justify-center gap-2 items-center my-6">
            <img src={logo} className="w-24" alt="" /> <span>logo</span>
          </div>
          <div className="my-6 text-base lg:text-lg">Slogan</div>
        </div>
        <div className="border-b-2 mt-7"></div>
        <div className="flex flex-col lg:flex-row justify-between mt-5 mb-2 items-center">
          <div className="text-base">© 2023 Startup. Todos los derechos reservados.</div>
          <div className="my-3 lg:my-0">
            <ul>
              <li>
                <a href="">Redes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
