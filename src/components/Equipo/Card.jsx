
function Card(props){
    return (
        <div className="bg-white rounded-2xl w-60 flex flex-col items-center justify-center p-6 m-6 relative  " >
            <div className="h-24 absolute  w-full top-0 rounded-t-2xl z-0 " style={{backgroundColor:props.border}}></div>
            <img src={props.foto} alt={props.nombre}  className=' rounded-full w-36 z-10 '/>
            <h4 className=" text-prin-violet font-bolt ">{props.nombre}</h4>
            <p>{props.puesto1}</p>
            <p>{props.puesto2}</p>
        </div>
       
    )
}

export { Card }