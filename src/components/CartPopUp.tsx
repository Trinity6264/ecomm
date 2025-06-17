'use client'

interface CartPopUpProps { 
    onClose: ()=> void,
}

const CartPopUp = (props: CartPopUpProps) => {
    const {onClose} =props
    return (
        <div
            className="fixed inset-0 bg-black z-40 flex justify-center items-start pt-32 md:pt-28"
            onClick={onClose} // Close when clicking the backdrop
        >
            {/* Modal */}
            <div
                className="bg-white rounded-lg shadow-xl w-11/12 max-w-sm mx-auto p-7"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider">Cart ({3})</h2>
                    <button onClick={() => { }} className="text-gray-500 underline hover:text-orange-500 text-sm">
                        Remove all
                    </button>
                </div>

                {/* Cart Items */}
                {/* <div className="space-y-6">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-lg"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/f0f0f0/333?text=Audio'; }}
                                />
                                <div className="flex-grow">
                                    <p className="font-bold text-sm">{item.name}</p>
                                    <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
                                </div>
                                <QuantitySelector />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
                    )}
                </div> */}

                {/* Total */}
                <div className="flex justify-between items-center my-6">
                    <p className="text-gray-500 uppercase text-sm">Total</p>
                    <p className="text-lg font-bold">$300</p>
                </div>

                {/* Checkout Button */}
                <button
                    onClick={() => { }}
                    className="w-full bg-[#D87D4A] text-white uppercase font-bold text-sm py-3 rounded-lg hover:bg-orange-400 transition-colors disabled:bg-gray-300"
                    disabled={false}
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPopUp
