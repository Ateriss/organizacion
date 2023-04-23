

function Card(){
    return (

        <div className="bg-white rounded-2xl w-60 flex flex-col items-center justify-center p-6 m-6 relative  " >
            <div className="h-24 absolute bg-thi-data w-full top-0 rounded-t-2xl z-0 "></div>
            <img src="https://github.com/ateriss.png" alt=""  className=' rounded-full w-36 z-10 '/>
            <h4 className=" text-prin-violet font-bolt ">Jacinta Lopez</h4>
            <p>puesto 1</p>
            <p>puesto 2</p>
        </div>

    )
}

export { Card }