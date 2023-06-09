import { ListInput } from "./ListInput";
import { NameInput } from "./NameInput";
import { PicInput } from "./PicInput";
import { Btn } from "./Btn";
import { useEffect, useState } from "react";


function Form(props){
    const puesto1 = ['Head de Alura', 'Dev. FullStack', 'Dev. de Software', 'Instructor/a en Alura'];
    const equipos = props.teams;
    const [nameValue, setNameValue] = useState('');
    const [puesto1Value, setPuesto1Value] = useState('');
    const [puesto2Value, setPuesto2Value] = useState('');
    const [equipoValue, setEquipoValue] = useState('');
    const [image, setImage] = useState('');

    const [picTxt, setPicTxt] = useState(false);

    const handlePicChange = (e) => {
        const file = e.target.files[0];
        setPicTxt(true);
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
    };


    const changeNameValue = (e) => {
        setNameValue(e.target.value)
    }

    const changePuesto1Value = (e) =>{
        setPuesto1Value(e.target.value)
    }

    const changePuesto2Value = (e) =>{
        setPuesto2Value(e.target.value)
    }

    const changeEquipoValue = (e) =>{
        setEquipoValue(e.target.value)
    }
   
    const manejarEnvío = (e) => {
        e.preventDefault()
        let dataCart = {
            nombre: nameValue,
            puesto1: puesto1Value,
            puesto2: puesto2Value,
            equipo: equipoValue,
            foto: image,
        }
        console.log(dataCart)
        props.registerPartner(dataCart)
            setEquipoValue('');
            setImage('');
            setNameValue('');
            setPuesto1Value('');
            setPuesto2Value('');
        
    }
console.log(manejarEnvío)
  


    return(
        <section className="w-full ">
            <form onSubmit={manejarEnvío} className="bg-prin-grey m-auto mt-6 max-w-6xl rounded-xl p-8 flex flex-col items-stard justify-center shadow-xl font-sans">
                <h2 className="font-medium text-2xl">Rellena el formulario para crear el colaborador</h2>
                <NameInput nameValue={nameValue} changeNameValue={changeNameValue}/>
                <div className="flex justify-between items-center mt-4">
                    <ListInput txt='Puesto 1' idList='puesto1' options={puesto1}  obligado='true' listValue={puesto1Value} onChange={changePuesto1Value}/>
                    <ListInput txt='Puesto 2 (opcional)' idList='puesto2'  options={puesto1} obligado='false' listValue={puesto2Value} onChange={changePuesto2Value} />
                    <ListInput txt='Equipo' idList='Equipo'  options={equipos} obligado='true' listValue={equipoValue} onChange={changeEquipoValue} />
                </div>
                <PicInput  image={image} handlePicChange={handlePicChange} picTxt={picTxt} />
                <Btn title='Crear'  />
            </form>
        </section>
    )

}

export { Form }