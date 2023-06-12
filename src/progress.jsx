export const ProgressWithTitle = ( title, max , actual, textClass, progresClass) =>{
    return (
        < >

            <progress  className={progresClass} max={max} value={actual}>  </progress>
        </>
    )
}