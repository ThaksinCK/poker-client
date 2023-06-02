import ActionButton from "./actionButton";
import './css/buttonContainer.css'

function ButtonContainer(){
    return(
        <div >
            <div className="button-container">
                <ActionButton ac='raise'></ActionButton>
                <ActionButton ac='call'></ActionButton>
                <ActionButton ac='fold'></ActionButton>
            </div>
        </div>
    )
}

export default ButtonContainer