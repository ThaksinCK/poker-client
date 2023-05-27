import ActionButton from "./actionButton";
import './buttonContainer.css'

function ButtonContainer(){
    return(
        <div >
            <div className="button-container">
                <ActionButton ac='bet'></ActionButton>
                <ActionButton ac='call'></ActionButton>
                <ActionButton ac='fold'></ActionButton>
            </div>
        </div>
    )
}

export default ButtonContainer