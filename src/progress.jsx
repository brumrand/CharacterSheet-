import {useRef} from "react"

export const ProgressWithTitle = ({ title, max , actual, textClass, progresClass, dataLabels}) =>{
    const changeInputValue = useRef(null)
    const numValue = parseInt(actual)
    return (
        <div className="variableDataHeader">
            <h3 className="textClass">{title}</h3>
            <progress   className={progresClass} max={max} value={numValue}  ref={changeInputValue}>  </progress>
            <InputWithLabel labelClasss={dataLabels.classCurr} inputClass={dataLabels.inputCurr} labelText={dataLabels.labelCurr} inputValue={dataLabels.total}  reference={changeInputValue} />
            <InputWithLabel labelClasss={dataLabels.classMax} inputClass={dataLabels.inputMax} labelText={dataLabels.labelMax} inputValue={dataLabels.total } reference={changeInputValue} />
            
        </div>
    )
}

export const InputWithLabel =({labelClasss, inputClass, labelText, inputValue, reference }) =>{
    const test = () =>{
        reference.current.value=20
    }
    if (labelText == "MAX") {
        return(
        <>
            <label className={labelClasss}>{labelText}</label>
            <input className={inputClass} type="number"  value={inputValue} onChange={test}/>
        </>
    )}
    
    return(
        
            <>
            <label className={labelClasss}>{labelText}</label>
            <input className={inputClass} type="number"   onChange={test}/>
            </>
    )
}