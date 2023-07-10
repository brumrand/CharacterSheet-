import {useRef} from "react"
import {MainHeaderStructure} from "./headerMainCharacterSheet";
import{ItemSection} from "./itemsSections"
import{ThrowSection} from "./throws"
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

const throws = [
    {
        name : "atletismo",
        attr : "constitucion",
        attrValue : 7,
        haki : true,
        modf : 10,
        cost: 0,
        tecn: false
    },
    {
        name : "bloqueo",
        attr : "destreza",
        attrValue : 7,
        haki : true,
        modf : 10,
        cost: 0,
        tecn: false
    },
    {
        name : "pelea",
        attr : "fuerza",
        attrValue : 7,
        haki : true,
        modf : 10,
        cost: 0,
        tecn: false
    },
    {
        name : "Estilo tsunami",
        attr : "fuerza",
        attrValue : 7,
        haki : true,
        modTitle:"Pelea",
        modf : 10,
        cost: 25,
        data: "hace cosas estilo tsunami",
        dmg: 12,
        tecVal: 12,
        tecn: true
    }
]

export const MainStrucutre = () =>{
    const throwInput = useRef(null)
    const itemInput = useRef(null)
    const modifireInput = useRef(null)
    return (
        <main>
            <MainHeaderStructure></MainHeaderStructure>
    <section>
        <SearchBarTag></SearchBarTag>
        <div className="throwsConatiner">
            <section className="equipment">
                <ItemSection data={items}  itemRef={itemInput} ></ItemSection>
            </section>
            <section className="throws">
            <ThrowSection data={throws} throwDataReference={throwInput}></ThrowSection>
            </section>
            <section className="throwsData">
                <div className="itemsRawStats"  attack="0" defensa="0" damg="0" iniciativa="0" ref={itemInput} ></div>
                <div className="throwRawStats" ref={modifireInput}></div>
                <div className="throwRawMenue"  ref={throwInput}></div>
            </section>
        </div>
    </section>

</main>
    )
}