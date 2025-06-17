
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ThankYouPopUp = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const route = useRouter();


    if (!cartItems || cartItems.length === 0) {
        return null;
    }
    const firstItem = cartItems[0];
    const otherItemsCount = cartItems.length - 1;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 md:p-12 w-full max-w-md">
                <div className="bg-[#D87D4A] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">Thank You<br />For Your Order</h2>
                <p className="text-gray-500 my-4 opacity-75">You will receive an email confirmation shortly.</p>

                <div className="rounded-lg overflow-hidden my-6">
                    <div className="bg-gray-100 p-6">
                        <div className="flex items-center">
                            {/* Using standard img tag instead of next/image */}
                            <Image src={firstItem.imagePath} alt={firstItem.title} width={64} height={64} className="w-16 h-16 rounded-lg" />
                            <div className="flex-grow px-4">
                                <p className="font-bold">{firstItem.title.split(' ')[0]}</p>
                                <p className="text-gray-500 font-bold opacity-75">${firstItem.price.toLocaleString()}</p>
                            </div>
                            <p className="text-gray-500 font-bold opacity-75">x{firstItem.quantity}</p>
                        </div>
                        {otherItemsCount > 0 && (
                            <div className="text-center text-gray-500 text-xs font-bold mt-3 pt-3 border-t border-gray-300">
                                and {otherItemsCount} other item(s)
                            </div>
                        )}
                    </div>
                    <div className="bg-black text-white p-6">
                        <p className="text-gray-400 uppercase text-sm">Grand Total</p>
                        <p className="text-xl font-bold text-white">${'30'.toLocaleString()}</p>
                    </div>
                </div>


                <button onClick={() => {
                    route.replace('/')
                 }} className="w-full bg-[#D87D4A] text-white uppercase py-3 mt-6 hover:bg-orange-400 transition-colors">Back to Home</button>
            </div>
        </div>
    );
}

export default ThankYouPopUp
