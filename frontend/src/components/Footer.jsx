const Profile = (props) => {
    return(
        <div className="right-1">
            <p className="">{props.name}</p>
            <a className="flex" href={props.url}>
                <svg className="w-5 h-5 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                </svg>
                <p className="mx-1 mt-0.5 text-sm text-sky-200">{props.user}</p>
            </a>
        </div>
    )
}

const Footer = () => {
    return(
        <footer className="bottom-0 w-full bg-zinc-500 text-sky-400">
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-start">
                    <div className="w-full md:w-1/6 text-left text-2xl place-content-center font-RalewayBold">
                        <p>JUDACA</p>
                    </div>
                    <div className="flex flex-wrap items-stretch space-x-5 w-full md:w-10/12 text-right text-nowrap text-zinc-200">
                        <Profile name="Juan David Madrid Contreras" user="JuMad-SE" url="https://github.com/JuMad-SE"/>
                        <Profile name="Carlos David Ramirez Muñoz" user="w1sec0d" url="https://github.com/w1sec0d"/>
                        <Profile name="Johan David Rodriguez Gutierrez" user="Homeroso" url="https://github.com/Homeroso"/>
                        <Profile name="Ronald Daniel Jacanamejoy Mutumbajoy" user="RonaldDaniel20" url="https://github.com/RonaldDaniel20"/>
                    </div>  
                    <div className="w-full md:w-1/3 text-right">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer