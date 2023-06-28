import {ProgressWithTitle} from "./progress"
import {InputWithLabel} from "./progress"


const variables=
    {
        total : 120,
        classMax :"headerLabelMax",
        classCurr :"headerLabelCur",
        inputMax:"headerInputMax",
        inputCurr: "headerInputCur",
        labelMax:"MAX",
        labelCurr: "CURRENT",
        
    }

export const MainHeaderStructure = () =>{
    return (
        <header>
        <section className='externalVariablesHedaerContainers'>
 
                    <ProgressWithTitle title="Vitalidad" max ={variables.total} actual={variables.total} textClass="headerVartext" progresClass="headerProgress" dataLabels={variables}/>

                    <ProgressWithTitle title="Estamina" max ={variables.total} actual={variables.total} textClass="headerVartext" progresClass="headerProgress" dataLabels={variables} />

    
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