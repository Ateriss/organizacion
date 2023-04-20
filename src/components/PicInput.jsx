import { DocumentUpload } from "iconsax-react";
import { useRef, useState } from "react";

function PicInput(props){
    const inputRef = useRef();
    const [picTxt, setPicTxt] = useState(false);
    const [image, setImage] = useState('');

    const handleButtonClick = () => {
        inputRef.current.click();
    };

    const handlePicChange = (event) => {
        const file = event.target.files[0];
        props.onPicChange(event); // Llama a la prop onPicChange con el evento
        setPicTxt(true);
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      };

    return (
        <div className="flex justify-around ">
            <div onClick={handleButtonClick} className={`h-64 bg-white mt-6 rounded-lg flex flex-col justify-center items-center p-4 cursor-pointer transition-all ${image? 'w-2/4' : 'w-full'}`}>
                <input type="file" accept="png/jpg/jpeg" id="fotos" onChange={handlePicChange} ref={inputRef} multiple={false} className="hidden" required={true} />
                <DocumentUpload size="48" color="#6278F7" />
                <h3  className="mt-4 font-semibold">{picTxt === false ? 'Sube una fotografía' : '¿Te gustaría elegir otra foto?' }</h3>
            </div>
            <img src={image} alt="Foto del colaborador" className={`w-64 h-64 rounded-full object-top object-cover mt-6 ${image ? '' : 'hidden'}`} />
        </div>
    );
}

export { PicInput };