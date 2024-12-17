import {useEffect, useState} from 'react';

export type ValidationType = {
    isEmpty: boolean;
    maxLength: number;
};

export const useValidInput = (value: string, validations: ValidationType) => {
    const [isEmpty, setEmpty] = useState(true);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLengthError(true);
                    }
                    else
                        setMaxLengthError(false);
                    break;
                case 'isEmpty':
                    if (value) {
                        setEmpty(false);
                    }
                    else {
                        setEmpty(true);
                    }
                    break;
            }
        }
    }, [value, validations]);

    useEffect(() => {
        if (isEmpty || maxLengthError) {
            setInputValid(false);
        }
        else {
            setInputValid(true);
        }
    }, [isEmpty, maxLengthError]);

    return {
        isEmpty,
        maxLengthError,
        inputValid,
    }
}