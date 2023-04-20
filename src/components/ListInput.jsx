

function ListInput(props){

        const optionValues = props.options.map((value) => {
            return value.split("");
        });
        const optionsList = props.options.map((value, index) => (
            <option key={index} value={value}/>
        ));

    return(
        <div className="flex flex-col w-1/4 font-semibold"> 
            <label htmlFor={props.idList} className="">{props.txt}</label>
                <input list={props.idList} name={props.title} placeholder={props.title} className="rounded-md p-3 text-lg focus:border-2 focus:outline-none focus:border-prin-violet" required={props.obligado === 'true'? true : false}/>
                <datalist id={props.idList}>
                {optionsList}
                </datalist>
        </div>
    )
}

export { ListInput }