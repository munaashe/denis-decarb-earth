import React, { ChangeEvent } from "react";

interface DropdownProps {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (name: string, value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    name,
    options,
    value,
    onChange,
}) => {
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(name, e.target.value);
    };

    return (
        <div className="dropdown-field my-1">
            <select className="bg-green-100 w-full h-[54px] rounded-xl px-2" id={name} name={name} value={value} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;