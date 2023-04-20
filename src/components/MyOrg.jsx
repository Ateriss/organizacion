import { Additem } from "iconsax-react"

function MyOrg(){
    return(
        <section className="max-w-screen-xl flex items-center justify-center mt-24 mb-24 relative text-prin-violet text-6xl underline">
            <h3>Mi Organización</h3>
            <div className="absolute right-0 mr-4 cursor-pointer active:scale-95">
            <Additem size="60" color="#6278F7"/>
            </div>
        </section>
    )
}

export { MyOrg }