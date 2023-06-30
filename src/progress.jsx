import {useRef} from "react"

export const ProgressWithTitle = ({ title, max , actual, textClass, progresClass, dataLabels}) =>{
    const changeInputValue = useRef(null)
    const numValue = parseInt(actual)
    return (
        <div className="variableDataHeader">
            <h3 className="textClass">{title}</h3>
            <progress   className={progresClass} max={max} value={numValue}  ref={changeInputValue}>  </progress>
            <InputWithLabel labelClasss={dataLabels.classCurr} inputClass={dataLabels.inputCurr} labelText={dataLabels.labelCurr} inputValue={dataLabels.total}  reference={changeInputValue} max={max} />
            <InputWithLabel labelClasss={dataLabels.classMax} inputClass={dataLabels.inputMax} labelText={dataLabels.labelMax} inputValue={dataLabels.total } reference={changeInputValue} max={max} />
            
        </div>
    )
}

export const InputWithLabel =({labelClasss, inputClass, labelText, inputValue, reference, max }) =>{
    const changeInputVal = useRef(null)
    console.log(max/2)
    console.log(max/4)
    const test = () =>{
        if(changeInputVal.current.value >=(max/2)  ){
            console.log("1")
            reference.current.style.accentColor = "rgb(77, 204, 77)"
        }else if (changeInputVal.current.value >=(max/4) && changeInputVal.current.value <=(max/2) ){
            console.log(changeInputVal.current.value)
            console.log("2")
            reference.current.style.accentColor = "rgb(188, 204, 77)"
        }else{
            console.log("3")
            reference.current.style.accentColor = "rgb(204, 77, 77)"
        }
        reference.current.value=changeInputVal.current.value
    }
    if (labelText == "MAX" ||  labelText == "Armadura" ||  labelText == "Observación" || labelText == "Conquistador" ) {
        return(
        <>
            <label className={labelClasss}>{labelText}</label>
            <input className={inputClass} type="number"  value={inputValue} onChange={test}/>
        </>
    )}
    
    
    return(
        
            <>
            <label className={labelClasss}>{labelText}</label>
            <input className={inputClass} type="number"   onChange={test} ref={changeInputVal}/>
            </>
    )
}