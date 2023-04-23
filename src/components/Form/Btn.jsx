
function Btn(props){
    const title = props.title

    return(
        <button type="submit" className="font-semibold cursor-pointer p-6 bg-prin-violet w-1/3 rounded-xl mt-6 text-white hover:tracking-widest transition-all active:scale-90">
           {title}
        </button>
    )
}


export { Btn }