export const ThrowSection = ({data, throwDataReference}) =>{
    const results = [];

    for (const datum of data) {
        let route = "./dado.svg"
        const clickThrow = ()=>{
            let numeroAleatorio = Math.floor(Math.random() * 20) + 1
            if (datum.tecn) {
                if(datum.haki){
                    let haki = 0
                    haki = prompt("Introduzca su nivel de haki")
                    let suma = numeroAleatorio+ parseInt(datum.attrValue)+ parseInt(datum.modf)+(parseInt(haki) *  2) + parseInt(datum.tecVal)
                      throwDataReference.current.innerHTML =
                      "<h2>"+datum.name+"</h2>"+
                      "<h1>Modificadores</h1>"+
                       "<p> d20 : "+numeroAleatorio+
                       " + attr : "+datum.attrValue+
                       " + hab : "+datum.modf+
                       " + tec : "+datum.modf+
                       " + haki : "+haki+
                       " </p><h1>Total</h1><p>"+suma+" +"+datum.dmg+" dmg"
                       +"</p>"
                }else{
                      throwDataReference.current.innerHTML = "<p> d20 : "+numeroAleatorio+" attr : "+datum.modf+" hab : "+datum.modf+"</p>"
                }
              
            }else{
                  if(datum.haki){
                      throwDataReference.current.innerHTML = "<p> d20 : "+numeroAleatorio+" attr : "+datum.modf+" hab : "+datum.modf+"</p>"
                }else{
                      throwDataReference.current.innerHTML = "<p> d20 : "+numeroAleatorio+" attr : "+datum.modf+" hab : "+datum.modf+"</p>"
                }
            }
            
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
