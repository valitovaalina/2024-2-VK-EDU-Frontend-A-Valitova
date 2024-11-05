import {useState} from 'react';
import {type ValidationType, useValidInput} from './useValidInput';

export const useInput = (initialValue: string, validations: ValidationType) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidInput(value, validations);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const onBlur = () => {
        setDirty(true);
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}