import React, {useState} from "react";
import { useHistory } from "react-router-dom"

const NewColorForm = ({updateColors}) => {
    const INITIAL_STATE = {
        name:"",
        value:"#ffffff",
    }
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateColors({[formData.name]: formData.value});
        setFormData(INITIAL_STATE);
        history.push("/colors");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input id="name" type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange}/>
            <label htmlFor="value">value</label>
            <input id="value" type="color" name="value" placeholder="value" value={formData.value} onChange={handleChange}/>
            <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;