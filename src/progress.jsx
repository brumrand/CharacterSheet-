export const ProgressWithTitle = ({ title, max , actual, textClass, progresClass}) =>{
    const numValue = parseInt(actual)
    return (
        < >
            <h3 className="textClass">{title}</h3>
            <progress   className={progresClass} max={max} value={numValue}>  </progress>
        </>
    )
}

export const InputWithLabel =({labelClasss, inputClass, labelText, inputValue}) =>{
    return(
        <>
            <label className={labelClasss}>{labelText}</label>
            <input className={inputClass} type="number"  value={inputValue}/>
        </>

    )
}