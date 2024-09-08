import React, { ChangeEvent, useState } from "react";

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
    maxLength?: number; // New optional prop
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    required = false,
    error = "",
    maxLength, // Destructure new prop
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="input-field my-2 w-full">
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={label}
                className={`!outline-none px-2 h-[54px] bg-green-100 rounded-xl w-full ${error ? 'border-red-500' : isFocused ? 'border-green-700' : 'border-gray-300'}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={maxLength} // Apply maxLength
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;