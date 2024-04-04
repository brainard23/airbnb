'use client'

import Image from "next/image";
import { IconType } from "react-icons"

interface CategoryInputProps {
    icon: string;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`rounded-xl 
        border-2 
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
        `}
        >
            <Image 
            src={icon}
            alt={label}
            width={30}
            height={30}
            />
            <div className="font-semibold">
                {label}
            </div>
        </div>
    )
}

export default CategoryInput