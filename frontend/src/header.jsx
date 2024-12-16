import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <nav className="bg-blue-950 p-2 mt-0 w-full">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex w-full md:w-auto justify-center md:justify-start text-white font-extrabold">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
                        CRUD
                    </a>
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
                    <ul className="list-reset flex flex-col md:flex-row justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <a className={`inline-block py-2 px-4 no-underline ${isActive('/Persona') ? 'text-white' : 'text-gray-400'} hover:text-gray-200`} href="Persona">Personas</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block py-2 px-4 no-underline ${isActive('/Municipio') ? 'text-white' : 'text-gray-400'} hover:text-gray-200`} href="Municipio">Municipios</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block py-2 px-4 no-underline ${isActive('/Vivienda') ? 'text-white' : 'text-gray-400'} hover:text-gray-200`} href="Vivienda">Viviendas</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block py-2 px-4 no-underline ${isActive('/Departamento') ? 'text-white' : 'text-gray-400'} hover:text-gray-200`} href="Departamento">Departamentos</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block py-2 px-4 no-underline ${isActive('/Proyecto') ? 'text-white' : 'text-gray-400'} hover:text-gray-200`} href="Proyecto">Proyectos</a>
                        </li>
                        <li className="mr-3">
                            <a className={`inline-block py-2 px-4 no-underline ${isActive('/Evento') ? 'text-white' : 'text-gray-400'} hover:text-gray-200`} href="Evento">Eventos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Header;