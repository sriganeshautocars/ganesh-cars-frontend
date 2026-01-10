import { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

import { IoCaretDownSharp } from "react-icons/io5";
import { ArrowDownUp } from 'lucide-react';

const ICOM_MAP = {
    sort: <ArrowDownUp size={18} />
}

export const Dropdown = ({ label, options = [], defaultValue = '', selectedOption = '', onChange, isMandatory = false, iconName = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleSelect = (option) => {
        onChange({ target: { value: option.value } });
        setIsOpen(false);
    };

    const valueToMatch = !selectedOption ? defaultValue : selectedOption

    const selectedLabel = options.find(opt => (opt?.value === valueToMatch))?.label || 'Select';

    return (
        <div className="flex flex-col relative w-full" ref={dropdownRef}>
            {label && (
                <label className="mb-1 text-sm font-medium">
                    {label}{isMandatory && <span className='text-red-500'>*</span>}
                </label>
            )}
            <div
                className={`w-full border-2 p-2 rounded-lg cursor-pointer bg-white flex justify-between items-center ${isOpen ? 'border-blue-500' : 'border-gray-400'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center gap-x-2'>
                    {iconName && ICOM_MAP?.[iconName]}
                    <span>{selectedLabel}</span>
                </div>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <IoCaretDownSharp />
                </span>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-400 rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-50 p-1">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="p-2 hover:bg-blue-100 cursor-pointer rounded-lg"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};