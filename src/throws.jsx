export const ThrowSection = ({data, throwDataReference}) =>{
    const results = [];

    for (const datum of data) {
        let route = "./dado.svg"
        const clickThrow = ()=>{
            let numeroAleatorio = Math.floor(Math.random() * 20) + 1
            throwDataReference.current.innerHTML = "<p> dado : "+numeroAleatorio+" habilidad : "+datum.modf+"</p>"
        }
        
          
        results.push(
        <div className="throwsContainer"  name = {datum.name} attr={datum.attr} haki={datum.haki} modf={datum.modf} cost={datum.cost} tecn={datum.tecn}>
            <img src={route} className="throwsImage" onClick={clickThrow}/>
            <h3 className="throwName">{datum.name}</h3>
            <h3 className="throwCost">Cost : {datum.cost}</h3>
            <div className="throwLvl">
                <h3>Lvl</h3>
                <h3>{datum.modf}</h3>
            </div>

        </div>
        )
    }
    return <>{results}</>;
     
    
}
