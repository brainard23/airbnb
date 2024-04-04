'use client';
import Image from "next/image";
import { IconType } from "react-icons";



interface ListingCategoryProps {
    icon: string | IconType;
    label: string;
    description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
    icon,
    label,
    description
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                <Image src={icon as string}  alt={description} className="text-neutral-600 h-8 w-8" />
                <div className="flex flex-col">
                    <div className="text-lg font-semibold">
                        {label}
                    </div>
                    <div className="text-neutral-500 font-light">
                        Brand
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCategory