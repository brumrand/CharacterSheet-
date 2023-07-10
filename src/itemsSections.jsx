import {useState} from "react"
import {useRef} from "react"

export const ItemSection = ({data, itemRef}) =>{
    const results = [];

    for (const datum of data) {
        let route = ""
        switch(datum.type) {
            case 1:
                route = "/sword.svg"
              break;
            case 2:
                route = "/armor.svg"
              break;
            default:
                route = "/item.svg"
          }
          let  [isclick, setIsClick]  = useState(false);
          let itemInputRef = useRef(null)
          let  handleClick =() =>{
            setIsClick(!isclick)
            if(isclick == false){
              let atck      = parseInt(itemRef.current.getAttribute("attack"));
             let  def       = parseInt(itemRef.current.getAttribute("defensa"));
              let init       = parseInt(itemRef.current.getAttribute("iniciativa"));
             let  damg   = parseInt(itemRef.current.getAttribute("damg"));
             let name = itemRef.current.getAttribute("items")

             atck      =  atck + datum.attack
             def       = def +  datum.defense
             init       = init + datum.iniciative
             damg   = damg +datum.damage

              itemRef.current.setAttribute("attack",  atck);
              itemRef.current.setAttribute("defensa", def );
              itemRef.current.setAttribute("iniciativa", init );
              itemRef.current.setAttribute("damg",  damg);

              itemRef.current.innerHTML = ("<h1>Modificadores objetos</h1>  <div class='attcakThrow'><p> Attack: "+atck+"</p><p>Damage: "+damg+"</p></div><div class='defnsaThrow'><p>Defensa: "+def+"</p><p>Iniciativa: "+init+"</p></div>")
            }else{
              let atck      = parseInt(itemRef.current.getAttribute("attack"));
             let  def       = parseInt(itemRef.current.getAttribute("defensa"));
              let init       = parseInt(itemRef.current.getAttribute("iniciativa"));
             let  damg   = parseInt(itemRef.current.getAttribute("damg"));
             let name = itemRef.current.getAttribute("items")

              atck      =  atck - datum.attack
              def       = def -  datum.defense
              init       = init - datum.iniciative
              damg   = damg -datum.damage

              itemRef.current.setAttribute("attack",  atck);
              itemRef.current.setAttribute("defensa", def );
              itemRef.current.setAttribute("iniciativa", init );
              itemRef.current.setAttribute("damg",  damg);
              itemRef.current.innerHTML = ("<h1>Modificadores objetos</h1> <div class='attcakThrow'><p> Attack: "+atck+"</p><p>Damage: "+damg+"</p></div><div class='defnsaThrow'><p>Defensa: "+def+"</p><p>Iniciativa: "+init+"</p></div>")
            }
          }
          let  imageClasess = "itemsImage"
          isclick === false ?  imageClasess = "itemsImage" :  imageClasess = "itemsImage selectedImg"
        results.push(
            
        <div className="itemCoantainer" onClick={handleClick}  attack={datum.attack} defensa={datum.defense} damg={datum.damage} iniciativa={datum.iniciative} items={datum.name} ref={itemInputRef}>
            <img src={route} className={imageClasess} />
            <h3>{datum.name}</h3>
            <div className="itemData1">
                <h4>Ataque: {datum.attack}</h4>
                <h4>Defensa: {datum.defense}</h4>
                <h4>Daño: {datum.damage}</h4>

            </div>
            <div className="itemData2">
                <h4>Iniciativa: {datum.iniciative}</h4>
                <h4>Extras: {datum.extra}</h4>
            </div>

        </div>
        )
    }
    return <>{results}</>;
     
    
}