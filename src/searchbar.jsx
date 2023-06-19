const searchBar = ({})=>{
    return (
        <div className="searchBar">
            <select name="select" className="select">
                <option value="1" selected>Todas</option>
                <option value="2" >Habilidades</option>
                <option value="3">Técnicas</option>
            </select>
            
                <div className="searchConatiner">

            <input type="search" className="search" name="q"/>
            <button className="search">Search</button>
            </div>
        </div>
    )
}