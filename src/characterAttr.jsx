export const CharacterAttr = ({ className, atributeName, AtributeValue}) =>{
    const smallAtribute = atributeName.substr(0,3).toUpperCase()
    return (
        <section className={className}>
            <div>
                <h1 atribute={atributeName}>
                    {AtributeValue}
                </h1>
            </div>

                <h2>
                    {smallAtribute}
                </h2>
        </section>
    )
}