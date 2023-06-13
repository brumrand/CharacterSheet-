import {ProgressWithTitle} from "./progress"
import {InputWithLabel} from "./progress"
const variables=[
    {
        total : 120,
        actual:100
    },
    {
        total : 120,
        actual:100
    },
]

export const MainStrucutre = () =>{
    return (
        <main>
    <header>
    <section className='externalVariablesHedaerContainers'>
            <div className="variableDataHeader">
                <ProgressWithTitle title="Vitalidad" max ={variables[0].total} actual={variables[0].actual} textClass="headerVartext" progresClass="headerProgress"/>
                <InputWithLabel labelClasss={"headerLabelMax"} inputClass={"headerInputMax"} labelText={"MAX"} inputValue={variables[0].total} />
                <InputWithLabel labelClasss={"headerLabelCur"} inputClass={"headerInputCur"} labelText={"CURRENT"} inputValue={variables[0].actual} />
            </div>
            <div className="variableDataHeader">
                <ProgressWithTitle title="Estamina" max ={variables[0].total} actual={variables[0].actual} textClass="headerVartext" progresClass="headerProgress" />
                <InputWithLabel labelClasss={"headerLabelMax"} inputClass={"headerInputMax"} labelText={"MAX"} inputValue={variables[0].total} />
                <InputWithLabel labelClasss={"headerLabelCur"} inputClass={"headerInputCur"} labelText={"CURRENT"} inputValue={variables[0].actual} />
            </div>

        </section>
        <section className='externalVariablesHedaerContainers'>
            
                <InputWithLabel labelClasss={"headerHakisLabel"} inputClass={"headerHakisInput"} labelText={"Armadura"} inputValue={5} />
            
            
                <InputWithLabel labelClasss={"headerHakisLabel"} inputClass={"headerHakisInput"} labelText={"Observación"} inputValue={5} />
            
            
                <InputWithLabel labelClasss={"headerHakisLabel"} inputClass={"headerHakisInput"} labelText={"Conquistador"} inputValue={5} />
            

        </section>

    </header>
    <section>

    </section>
    <footer>

    </footer>
</main>
    )
}