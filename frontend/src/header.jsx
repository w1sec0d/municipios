import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

    return (
        <>
        <nav className="bg-rose-700 p-2 mt-0 w-full">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
                        CRUD
                    </a>
                </div>
                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
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