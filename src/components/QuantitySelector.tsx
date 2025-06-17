
interface QuantitySelectorProps {
    decrease: () => void,
    increase: () => void,
}


const QuantitySelector = (props: QuantitySelectorProps) => {
    const { decrease, increase } = props
    return (
        <div className="bg-gray-100 flex items-center justify-between px-3 py-2 rounded-md">
            <button onClick={decrease} className="text-gray-500 hover:text-[#D87D4A] font-bold text-lg">-</button>
            <span className="font-bold text-sm mx-4">1</span>
            <button onClick={increase} className="text-gray-500 hover:text-[#D87D4A] font-bold text-lg">+</button>
        </div>
    )
}

export default QuantitySelector
