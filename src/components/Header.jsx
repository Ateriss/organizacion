import bgHeader from '../assets/HeaderHeader_total.png'
import headerImg from '../assets/Imagem.png'
import logo from '../assets/Logologo_branco.png'

function Header(){
    return (
        <header className='w-screen bg-prin-violet'>
            <section className='max-w-7xl  m-auto'>
                <div className='w-full h-300 relative'>
                    <img src={bgHeader} alt="header background" className='w-full h-full' />
                    <img src={headerImg} alt="people" className='absolute bottom-0 right-0 h-2/3' />
                    <div >
                        <div className='absolute top-10 left-28 flex items-center'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='absolute bottom-28 left-28 flex flex-col justify-start items-start '>
                            <h1  className='capitalize text-7xl text-white'>personas y equipos</h1>
                            <p className='mt-4 text-4xl text-white'>organizados en un solo lugar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
};

export { Header }