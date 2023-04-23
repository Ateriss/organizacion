import footer from '../assets/footer.png'
import logo from '../assets/Logologo_branco.png'

function Footer(){
    return(
    <footer className='w-full bg-prin-violet'>

    <div className='max-w-screen-xl p-6 h-48 flex justify-around items-center m-auto' style={{ backgroundImage: `url(${footer})` }}>
    <div className='w-60 h-6'></div>
    <img src={logo} alt='org' />
    <strong className='text-white mt-6 ' >Desarrollado por <br/> Alexandra Linares</strong>
    </div>
    </footer>
    )
}

export { Footer }