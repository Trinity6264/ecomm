'use client';
import InputField from '@/components/InputField'; // Assuming FormData is exported from InputField.tsx or its module
import SummaryRow from '@/components/SummaryRow'
import { useAppSelector } from '@/store/hooks';
import React, { useState } from 'react'
import Image from 'next/image';
import ThankYouPopUp from '@/components/ThankYouPopUp';
import { useRouter } from 'next/navigation';

export interface FormDataX {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    paymentMethod: string;
    eMoneyNumber: string;
    eMoneyPin: string;
}



const Page = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const route = useRouter();

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         console.log("Order Submitted:", { ...formData, cartItems, totals: { subtotal, shipping, vat, grandTotal } });
    //         // setIsOrderConfirmed(true);
    //     }
    // };

    const [formData, setFormData] = useState<FormDataX>({ name: '', email: '', phone: '', address: '', zip: '', city: '', country: '', paymentMethod: 'e-money', eMoneyNumber: '', eMoneyPin: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 50;
    const vat = subtotal * 0.20;
    const grandTotal = subtotal + shipping + vat;

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Cannot be empty';
        if (!formData.email.trim()) newErrors.email = 'Cannot be empty';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Wrong format';
        if (!formData.phone.trim()) newErrors.phone = 'Cannot be empty';
        if (!formData.address.trim()) newErrors.address = 'Cannot be empty';
        if (!formData.zip.trim()) newErrors.zip = 'Cannot be empty';
        if (!formData.city.trim()) newErrors.city = 'Cannot be empty';
        if (!formData.country.trim()) newErrors.country = 'Cannot be empty';
        if (formData.paymentMethod === 'e-money') {
            if (!formData.eMoneyNumber.trim()) newErrors.eMoneyNumber = 'Cannot be empty';
            if (!formData.eMoneyPin.trim()) newErrors.eMoneyPin = 'Cannot be empty';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    return (
        <div className="bg-[#FFF]">
            {isOrderConfirmed && <ThankYouPopUp />}

            <div className="px-6 md:px-24 py-16 container mx-auto bg-[#FAFAFA]">
                <button onClick={() => { }} className="text-gray-500 mb-8 hover:text-[#D87D4A]">Go Back</button>
                <form onSubmit={() => { }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-lg p-8">
                        <h1 className="text-[28px] text-[#000] font-bold mb-8 uppercase">Checkout</h1>
                        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                            <legend className="text-[#D87D4A] font-bold uppercase mb-4 col-span-full text-[13px] tracking-wider">Billing Details</legend>
                            <InputField label="Name" name="name" value={formData.name} onChange={setFormData} error={errors.name} />
                            <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={setFormData} error={errors.email} />
                            <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={setFormData} error={errors.phone} />
                        </fieldset>
                        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-12">
                            <legend className="text-[#D87D4A] font-bold uppercase mb-4 col-span-full text-sm tracking-wider">Shipping Info</legend>
                            <div className="md:col-span-2">
                                <InputField label="Address" name="address" value={formData.address} onChange={setFormData} error={errors.address} />
                            </div>
                            <InputField label="ZIP Code" name="zip" value={formData.zip} onChange={setFormData} error={errors.zip} />
                            <InputField label="City" name="city" value={formData.city} onChange={setFormData} error={errors.city} />
                            <InputField label="Country" name="country" value={formData.country} onChange={setFormData} error={errors.country} />
                        </fieldset>
                        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-12">
                            <legend className="text-[#D87D4A] font-bold uppercase mb-4 text-sm tracking-wider">Payment Details</legend>
                            <InputField label="e-Money Number" name="e-Money Number" value={formData.eMoneyNumber} onChange={setFormData} error={errors.eMoneyNumber} />
                            <InputField label="e-Money PIN" name="e-Money PIN" value={formData.eMoneyPin} onChange={setFormData} error={errors.eMoneyPin} />
                        </fieldset>

                    </div>
                    <div className="bg-white rounded-lg p-8 self-start sticky top-32">
                        <h2 className="text-[18px] text-[#000] font-bold mb-6 uppercase">Summary</h2>
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <Image src={item.imagePath} alt={item.title} className="w-16 h-16 rounded-lg" />
                                <div className="flex-grow px-3">
                                    <p className="font-bold">{item.title}</p>
                                    <p className="text-gray-500">${item.price.toLocaleString()}</p>
                                </div>
                                <p className="text-gray-500 font-bold">x{item.quantity}</p>
                            </div>
                        ))}
                        <div className="space-y-2 mt-8">
                            <SummaryRow label="Total" value={subtotal} />
                            <SummaryRow label="Shipping" value={shipping} />
                            <SummaryRow label="VAT (20%)" value={vat} />
                            <SummaryRow label="Grand Total" value={grandTotal} isGrandTotal={true} />
                        </div>
                        <button onClick={(e) => {
                            e.defaultPrevented();
                            setIsOrderConfirmed(true)
                        }} type="submit" className="w-full bg-[#D87D4A] text-white uppercase cursor-pointer py-3 mt-6 hover:bg-orange-400 transition-colors">Continue & Pay</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page
