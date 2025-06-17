import React from 'react'


interface InBoxCardProps { 
    unit: string,
    label: string,
}

const InBoxCard = (props: InBoxCardProps) => {
    const {label, unit} = props;
    return (
        <div className="flex gap-4">
            <p className="text-[#D87D4A] text-[15px] font-bold">{unit}</p>
            <p className="text-[#000] text-[15px] font-medium opacity-50">{label}</p>
        </div>
    )
}

export default InBoxCard
