import Button from "../Button/Button";
import sytle from "./InputField.module.css";

const InputField = () =>{

    
    return (
        <div>
            <form  className= {sytle.form_control}>
                Username
                <input type= "text" />
            </form>

            <form  className= {sytle.form_control}>      
                Age(Years)
                <input type= "text" />
            </form>

            <Button/>


        </div>




    )
}


export default InputField;