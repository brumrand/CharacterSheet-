export const ItemSection = ({data}) =>{
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
          
        results.push(
        <div className="itemCoantainer">
            <img src={route} className="itemsImage" />
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