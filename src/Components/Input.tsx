import React from 'react';
import { useInput } from "../Hooks/useInput";
import { InputProps } from "../Interfaces";

export const Input: React.FC<InputProps> = props => {
    const {inputValue, setInputValue, changeHandler} = useInput();

    const submitHandler = () => {
        if (!inputValue.length) {
            alert('Please write something')
            return
        }
        props.onAdd(inputValue)
        setInputValue("");
    }

    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            submitHandler();
        }
    }

    return (
        <div className="input-section">
            <div className="input-field mt2">
                <input
                    type="text"
                    id="title"
                    placeholder="I am a to-do"
                    value={inputValue}
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                />
                <label htmlFor="title" className="active">Write something</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
                <i className="material-icons" onClick={submitHandler}>send</i>
            </button>
        </div>
    )
}
