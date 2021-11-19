import style from "./OutputField.module.css";
import OutputItem from "./OutputItem";

const OutputField = () => {

    return (
        <div className= {style.goal_list}>
            <OutputItem></OutputItem>
        </div>
    )
}

export default OutputField;