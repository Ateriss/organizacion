import { ListInput } from "./ListInput";
import { NameInput } from "./NameInput";
import { PicInput } from "./PicInput";
import { Btn } from "./Btn";


function Form(){
    const puesto1 = ['Head de Alura', 'Dev. FullStack', 'Dev. de Software', 'Instructor/a en Alura'];
    const equipos = ['Programación','Front End', 'Back End', 'Data Science','Devops', 'UX y Diseño', 'Movil', 'Innovación y Gestión' ];

    function handlePicChange(event) {
        return
    }

    const manejarEnvío = (e) => {
        e.preventDefault()
    }

    return(
        <section className="w-full">
            <form onSubmit={manejarEnvío} className="bg-prin-grey m-auto mt-6 max-w-6xl rounded-xl p-8 flex flex-col items-stard justify-center shadow-xl font-sans">
                <h2 className="font-medium text-2xl">Rellena el formulario para crear el colaborador</h2>
                <NameInput/>
                <div className="flex justify-between items-center mt-4">
                    <ListInput txt='Puesto 1' idList='puesto1' title='Seleccionar' options={puesto1}  obligado='true'/>
                    <ListInput txt='Puesto 2 (opcional)' idList='puesto2' title='Seleccionar' options={puesto1} obligado='false' />
                    <ListInput txt='Equipo' idList='Equipo' title='Seleccionar' options={equipos} obligado='true' />
                </div>
                <PicInput onPicChange={handlePicChange} />
                <Btn title='Crear'/>
              
            </form>
        </section>
    )

}

export { Form }