

function NameInput(){
    return(
        <div className="flex flex-col mt-3 font-semibold">
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="name" className="p-3 rounded-md text-lg focus:border-2 focus:outline-none focus:border-prin-violet" placeholder="San Smith" required={true}/>
        </div>
    )
}

export { NameInput }