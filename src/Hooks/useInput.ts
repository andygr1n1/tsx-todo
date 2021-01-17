import React, {useState} from 'react';

export const useInput = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }



    return {inputValue, setInputValue, changeHandler};
}
