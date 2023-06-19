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
export const MainHeaderStructure = () =>{
    return (
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
            <section className='externalSatitcVariablesHedaerContainers'>
                <div className="staticData">
                <InputWithLabel labelClasss={"headerHakisLabel"} inputClass={"headerHakisInput"} labelText={"Armadura"} inputValue={5} />
                </div>
                   
                <div className="staticData">
                <InputWithLabel labelClasss={"headerHakisLabel"} inputClass={"headerHakisInput"} labelText={"Observación"} inputValue={5} />
                </div>
                    
                <div className="staticData">
                <InputWithLabel labelClasss={"headerHakisLabel"} inputClass={"headerHakisInput"} labelText={"Conquistador"} inputValue={5} />
                </div>
                   
            </section>
    
        </header>
    )}