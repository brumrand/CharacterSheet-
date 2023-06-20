import {MainHeaderStructure} from "./headerMainCharacterSheet";
import{ItemSection} from "./itemsSections"
import {SearchBarTag} from "./searchbar";
const items = [
{
    type:1,
    name:"Nudillos de gravedad",
    attack:8,
    defense:0,
    damage:16,
    iniciative:8,
    extra:"fijan el aggro del enemigo"
},
{
    type:2,
    name:"Protipo mark v2 ",
    attack:5,
    defense:24,
    damage:6,
    iniciative:2,
    extra:"rallo pectoral, mira telecópica, multiples visores, ajuste de defensa y movilidad"
},
{
    type:3,
    name:"Sake",
    attack:8,
    defense:0,
    damage:0,
    iniciative:8,
    extra:"Inicia el estado Karate borracho"
}
]

export const MainStrucutre = () =>{
    return (
        <main>
            <MainHeaderStructure></MainHeaderStructure>
    <section>
        <SearchBarTag></SearchBarTag>
        <div className="throwsConatiner">
            <section className="equipment">
                <ItemSection data={items}  ></ItemSection>
            </section>
            <section className="throws">

            </section>
            <section className="throwsData">

            </section>
        </div>
    </section>

</main>
    )
}