import {ProgressWithTitle} from "./progress"

export const MainStrucutre = () =>{
    return (
        <main>
    <header>
    <section className='externalVariablesHedaerContainers'>
            <div>
                <ProgressWithTitle title="Vitalidad" max ="120" actual="110" textClass="headerVartext" progresClass="headerProgress"/>
            </div>
            <div>
                <ProgressWithTitle title="Estamina" max ="100" actual="85" textClass="headerVartext" progresClass="headerProgress" />
            </div>

        </section>
        <section className='externalVariablesHedaerContainers'>

        </section>

    </header>
    <section>

    </section>
    <footer>

    </footer>
</main>
    )
}