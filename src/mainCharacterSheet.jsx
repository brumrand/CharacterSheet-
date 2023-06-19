import {MainHeaderStructure} from "./headerMainCharacterSheet"
import {searchBar} from "./searchbar"

export const MainStrucutre = () =>{
    return (
        <main>
            <MainHeaderStructure></MainHeaderStructure>
    <section>
        <searchBar></searchBar>
        <div className="throwsConatiner">
            <section className="throws">

            </section>
            <section className="throwsData">

            </section>
        </div>
    </section>

</main>
    )
}