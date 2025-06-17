'use client';

interface ButtonProps {
    label: string,
    onClick: () => void,
}

const Button = (props: ButtonProps) => {
    const {label, onClick} = props;
    return (
        <button onClick={onClick} className="bg-[#D87D4A] cursor-pointer text-white uppercase px-8 py-4 hover:bg-orange-400 transition-colors">
            {label}
        </button>
    )
}

export default Button
