import { Card } from './Card'


function Equipo(props){

    const bg = {
        backgroundColor: props.colorBg
    }

    const border = {
        borderColor: props.color1
    }

    return (
        <section 
        className={` w-full flex flex-col p-6 items-center justify-center`}
        style={bg} >
            <h3 className={`text-4xl border-b-4 p-2 inline-block `} 
            style={border}>{props.nameTeam}</h3>
            <div className='flex flex-wrap max-w-screen-xl justify-center items-center'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </section>
    )
}


export { Equipo };