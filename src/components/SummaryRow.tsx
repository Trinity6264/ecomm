interface SummaryRowProps {
    label: string;
    value: number;
    isGrandTotal?: boolean;
}


const SummaryRow = (props: SummaryRowProps) => {
    const { label, value, isGrandTotal } = props;
    return (
        <div className="flex justify-between items-center">
            <p className="text-[#000] font-medium text-[15px] opacity-50 uppercase">{label}</p>
            <p className={`font-bold text-[18px] ${isGrandTotal ? 'text-[#D87D4A]' : 'text-[#000]'}`}>${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
    )
}

export default SummaryRow
