export const CharacterAttr = ({ className, data}) =>{
    console.log(data);
    
    const results = [];

    for (const datum of data) {
        const smallAtribute = datum.text.substr(0,3).toUpperCase()
      results.push(
        <section className={className}>
                <h2>
                    {smallAtribute}
                </h2>
            <div>
                <h1 atribute={datum.text}>
                    {datum.value}
                </h1>
            </div>


        </section>,
      );
    }
  
    return <div>{results}</div>;

}