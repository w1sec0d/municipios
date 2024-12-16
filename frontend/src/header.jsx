import React from 'react';

const Header = () => {
    return (
    <nav className="bg-blue-900 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                    Municipios
                </a>
            </div>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="Persona">Personas</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="Municipio">Municipios</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="Vivienda">Viviendas</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="Departamento">Departamentos</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="Proyecto">Proyectos</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="Evento">Eventos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    )
}
export default Header;