import { Additem } from "iconsax-react";
import { useState } from "react";



function MyOrg(props){

    return(
        <section className="max-w-screen-xl flex items-center justify-center mt-14 mb-14 relative text-prin-violet text-6xl underline  transition-all">
            <h3>Mi Organización</h3>
            <div className="absolute right-0 mr-4 cursor-pointer active:scale-95" onClick={props.showForm}>
            <Additem size="60" color="#6278F7"/>
            </div>
        </section>
    )
}

export { MyOrg }