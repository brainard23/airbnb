'use client';
import { Range } from 'react-date-range'; 

interface ListingReservationProps {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChaangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDate: Date[];
}
const ListingReservation: React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChaangeDate,
    onSubmit,
    disabled,
    disabledDate
}) => {
    return (
        <div>ListingReservation</div>
    )
}

export default ListingReservation