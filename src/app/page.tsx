'use client'
import BringingYouTheBestAudio from '@/components/Home/BringingYouTheBestAudio';
import React, { useState, useEffect, createContext, useContext, FC, ReactNode } from 'react';

// --- Type Definitions ---
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'headphones' | 'speakers' | 'earphones';
  shortName: string;
  new: boolean;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

interface Recommendation {
  productName: string;
  reason: string;
}

interface FormData {
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

// --- Product Data (Updated) ---
const productData: Product[] = [
  { id: 1, name: 'XX99 Mark II Headphones', price: 2999, image: 'https://placehold.co/540x560/f1f1f1/000?text=XX99+MKII', category: 'headphones', shortName: 'XX99 MK II', new: true, description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.' },
  { id: 6, name: 'XX99 Mark I Headphones', price: 1750, image: 'https://placehold.co/540x560/f1f1f1/000?text=XX99+MKI', category: 'headphones', shortName: 'XX99 MK I', new: false, description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.' },
  { id: 2, name: 'XX59 Headphones', price: 899, image: 'https://placehold.co/540x560/f1f1f1/000?text=XX59', category: 'headphones', shortName: 'XX59', new: false, description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.' },
  { id: 3, name: 'ZX9 Speaker', price: 4500, image: 'https://placehold.co/400x488/f1f1f1/000?text=ZX9+Speaker', category: 'speakers', shortName: 'ZX9', new: true, description: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.' },
  { id: 4, name: 'ZX7 Speaker', price: 3500, image: 'https://placehold.co/540x560/f1f1f1/000?text=ZX7+Speaker', category: 'speakers', shortName: 'ZX7', new: false, description: 'Stream high-quality sound from your portable devices with this powerful and stylish speaker.' },
  { id: 5, name: 'YX1 Wireless Earphones', price: 599, image: 'https://placehold.co/540x560/f1f1f1/000?text=YX1', category: 'earphones', shortName: 'YX1', new: false, description: 'Experience true comfort and freedom with the YX1 Wireless Earphones. A secure fit and long battery life make them perfect for life on the go.' },
];

// --- Context for Cart ---
const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save cart to localStorage", error);
    }
  }, [cart]);


  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      const existingProductIndex = newCart.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        newCart[existingProductIndex].quantity += quantity;
      } else {
        newCart.push({ ...product, quantity });
      }
      return newCart;
    });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity < 1) {
        return prevCart.filter(item => item.id !== productId);
      }
      return prevCart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item);
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use Cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// --- Components ---

// Reusable Image Component
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
}

interface HeaderProps {
  setPage: (page: string) => void;
}

const Header: FC<HeaderProps> = ({ setPage }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setPage('home')}>audiophile</h1>
        <nav className="hidden md:flex gap-8">
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => setPage('home')}>HOME</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => setPage('category-headphones')}>HEADPHONES</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => setPage('category-speakers')}>SPEAKERS</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => setPage('category-earphones')}>EARPHONES</span>
        </nav>
        <div className="relative">
          <svg onClick={() => setIsCartOpen(!isCartOpen)} className="w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>}
          {isCartOpen && <CartModal setPage={setPage} setIsCartOpen={setIsCartOpen} />}
        </div>
      </div>
    </header>
  );
}

interface CartModalProps {
  setPage: (page: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartModal: FC<CartModalProps> = ({ setPage, setIsCartOpen }) => {
  const { cart, updateQuantity, clearCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoadingRecs, setIsLoadingRecs] = useState<boolean>(false);
  const [recsError, setRecsError] = useState<string>('');

  const handleCheckout = () => {
    setIsCartOpen(false);
    setPage('checkout');
  };

  const getRecommendations = async () => {
    setIsLoadingRecs(true);
    setRecsError('');
    setRecommendations([]);

    const cartItems = cart.map(item => item.name).join(', ');
    const allProductNames = productData.map(p => p.name).join(', ');
    const prompt = `A customer has the following items in their shopping cart: ${cartItems}. Based on this, analyze their potential interests (e.g., portable audio, home theater, high-fidelity sound). Then, from the full product list of [${allProductNames}], recommend exactly 2 other products that would complement their current selection. Do not recommend items already in their cart. For each recommendation, provide a short, compelling reason (one sentence) why it's a good fit.`;
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: { recommendations: { type: "ARRAY", items: { type: "OBJECT", properties: { productName: { type: "STRING" }, reason: { type: "STRING" } } } } }
        }
      }
    };

    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      const result = await response.json();

      if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
        const parsedJson = JSON.parse(result.candidates[0].content.parts[0].text);
        setRecommendations(parsedJson.recommendations || []);
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (error) {
      console.error("Gemini API error:", error);
      setRecsError("Sorry, we couldn't get recommendations right now.");
    } finally {
      setIsLoadingRecs(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-start pt-24" onClick={() => setIsCartOpen(false)}>
      <div className="bg-white text-black rounded-lg p-8 w-11/12 md:w-1/3 max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold tracking-wider">CART ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h2>
          <button onClick={clearCart} className="underline text-gray-500 hover:text-orange-500 transition-colors">Remove all</button>
        </div>
        {cart.length === 0 ? (
          <p className="text-center py-12">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <Image src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div className="flex-grow px-4">
                    <p className="font-bold">{item.shortName}</p>
                    <p className="text-gray-500">${item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center bg-gray-100">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-200 transition-colors">-</button>
                    <span className="px-3 font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-200 transition-colors">+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-6">
              <button onClick={getRecommendations} disabled={isLoadingRecs} className="w-full bg-indigo-500 text-white uppercase py-3 mt-2 hover:bg-indigo-400 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2">
                {isLoadingRecs ? 'Thinking...' : '✨ Get AI Recommendations'}
              </button>
              {isLoadingRecs && <p className="text-center mt-4">Finding perfect matches for you...</p>}
              {recsError && <p className="text-red-500 text-center mt-4">{recsError}</p>}
              {recommendations.length > 0 && (
                <div className="mt-4 space-y-3">
                  <h4 className="font-bold text-center">You might also like...</h4>
                  {recommendations.map((rec, index) => {
                    const product = productData.find(p => p.name === rec.productName);
                    if (!product) return null;
                    return (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-bold">{rec.productName}</p>
                        <p className="text-sm text-gray-600 italic">&quot;{rec.reason}&quot;</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-6 border-t pt-6">
              <p className="text-gray-500 uppercase">Total</p>
              <p className="text-lg font-bold">${subtotal.toLocaleString()}</p>
            </div>
            <button onClick={handleCheckout} disabled={cart.length === 0} className="w-full bg-orange-500 text-white uppercase py-3 mt-6 hover:bg-orange-400 transition-colors disabled:bg-gray-300">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

interface HomePageProps {
  setPage: (page: string) => void;
  setProduct: (product: Product) => void;
}

const HomePage: FC<HomePageProps> = ({ setPage, setProduct }) => {
  const heroProduct = productData.find(p => p.id === 1);
  if (!heroProduct) return null;

  const handleSeeProduct = (product: Product) => {
    setProduct(product);
    setPage('product-detail');
  }

  return (
    <div>
      <section className="bg-black text-white text-center md:text-left relative">
        <div className="container mx-auto flex items-center h-[calc(100vh-90px)] max-h-[729px]">
          <div className="max-w-md px-6 z-10">
            <p className="text-gray-400 uppercase tracking-[.5em]">New Product</p>
            <h2 className="text-4xl md:text-6xl font-bold my-6 uppercase">{heroProduct.name}</h2>
            <p className="text-gray-300 mb-10 opacity-75">{heroProduct.description}</p>
            <button onClick={() => handleSeeProduct(heroProduct)} className="bg-orange-500 text-white uppercase px-8 py-4 hover:bg-orange-400 transition-colors">See Product</button>
          </div>
        </div>
        <Image src={'https://placehold.co/1440x729/191919/fff?text=Hero'} alt="headphones" className="absolute top-0 left-0 h-full w-full object-cover opacity-20 md:left-1/2 md:-translate-x-1/2 md:opacity-100" />
      </section>

      <CategoryLinksSection setPage={setPage} />

      <section className="px-6 md:px-24 container mx-auto pb-20 space-y-8">
        <FeaturedProductA product={productData.find(p => p.id === 3)!} onSeeProduct={handleSeeProduct} />
        <FeaturedProductB product={productData.find(p => p.id === 4)!} onSeeProduct={handleSeeProduct} />
        <FeaturedProductC product={productData.find(p => p.id === 5)!} onSeeProduct={handleSeeProduct} />
      </section>

      <BringingYouTheBestAudio />
    </div>
  );
}

interface CategoryCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const CategoryCard: FC<CategoryCardProps> = ({ name, image, onClick }) => {
  return (
    <div className="relative bg-gray-100 rounded-lg pt-24 pb-8 text-center flex flex-col items-center group">
      <Image src={image} alt={name} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-auto group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-lg font-bold uppercase">{name}</h3>
      <button onClick={onClick} className="mt-4 text-gray-500 uppercase flex items-center gap-2 group-hover:text-orange-500 transition-colors">
        Shop <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  );
}

interface CategoryLinksSectionProps {
  setPage: (page: string) => void;
}
const CategoryLinksSection: FC<CategoryLinksSectionProps> = ({ setPage }) => {
  return (
    <section className="py-20 px-6 md:px-24 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CategoryCard name="Headphones" image="https://placehold.co/300x200/f1f1f1/000?text=Headphones" onClick={() => setPage('category-headphones')} />
        <CategoryCard name="Speakers" image="https://placehold.co/300x200/f1f1f1/000?text=Speakers" onClick={() => setPage('category-speakers')} />
        <CategoryCard name="Earphones" image="https://placehold.co/300x200/f1f1f1/000?text=Earphones" onClick={() => setPage('category-earphones')} />
      </div>
    </section>
  );
}

interface FeaturedProductProps {
  product: Product;
  onSeeProduct: (product: Product) => void;
}

const FeaturedProductA: FC<FeaturedProductProps> = ({ product, onSeeProduct }) => {
  return (
    <div className="bg-orange-500 rounded-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white overflow-hidden">
      <Image src={product.image} alt={product.name} className="md:-mb-12 w-3/4 md:w-auto mx-auto" />
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold uppercase">{product.name}</h2>
        <p className="my-6 opacity-75">{product.description}</p>
        <button onClick={() => onSeeProduct(product)} className="bg-black text-white uppercase px-8 py-4 hover:bg-gray-700 transition-colors">See Product</button>
      </div>
    </div>
  );
}
const FeaturedProductB: FC<FeaturedProductProps> = ({ product, onSeeProduct }) => {
  return (
    <div className="relative rounded-lg p-8 md:p-24 flex items-center bg-gray-300 bg-cover bg-center" style={{ backgroundImage: `url('https://placehold.co/1110x320/f1f1f1/000?text=ZX7')` }}>
      <div className="z-10">
        <h2 className="text-3xl font-bold mb-8 uppercase">{product.name}</h2>
        <button onClick={() => onSeeProduct(product)} className="border border-black bg-transparent text-black uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors">See Product</button>
      </div>
    </div>
  );
}
const FeaturedProductC: FC<FeaturedProductProps> = ({ product, onSeeProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-200 rounded-lg">
        <Image src={'https://placehold.co/540x320/f1f1f1/000?text=YX1'} alt={product.name} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="bg-gray-100 rounded-lg p-8 md:p-24 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8 uppercase">{product.name}</h2>
        <button onClick={() => onSeeProduct(product)} className="border border-black bg-transparent text-black uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors self-start">See Product</button>
      </div>
    </div>
  );
}

interface CategoryPageProps {
  setPage: (page: string) => void;
  category: string;
  setProduct: (product: Product) => void;
}
const CategoryPage: FC<CategoryPageProps> = ({ setPage, category, setProduct }) => {
  const products = productData.filter(p => p.category === category);
  const handleSeeProduct = (product: Product) => {
    setProduct(product);
    setPage('product-detail');
  }

  return (
    <div>
      <header className="bg-black text-white text-center py-16">
        <h2 className="text-4xl font-bold uppercase">{category}</h2>
      </header>
      <main className="container mx-auto">
        <div className="px-6 md:px-24 py-16 space-y-24">
          {products.map((product, index) => (
            <ProductListItem key={product.id} product={product} onSeeProduct={handleSeeProduct} reverse={index % 2 !== 0} />
          ))}
        </div>
        <CategoryLinksSection setPage={setPage} />
        <BringingYouTheBestAudio />
      </main>
    </div>
  );
}

interface ProductListItemProps {
  product: Product;
  onSeeProduct: (product: Product) => void;
  reverse: boolean;
}
const ProductListItem: FC<ProductListItemProps> = ({ product, onSeeProduct, reverse }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="bg-gray-100 rounded-lg">
        <Image src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
      </div>
      <div className={`text-center md:text-left ${reverse ? 'md:pr-24' : 'md:pl-24'}`}>
        {product.new && <p className="text-orange-500 uppercase tracking-[.5em]">New Product</p>}
        <h2 className="text-3xl md:text-4xl font-bold my-6 uppercase">{product.name}</h2>
        <p className="text-gray-500 mb-8 opacity-75">{product.description}</p>
        <button onClick={() => onSeeProduct(product)} className="bg-orange-500 text-white uppercase px-8 py-4 hover:bg-orange-400 transition-colors">See Product</button>
      </div>
    </div>
  )
}


interface ProductDetailPageProps {
  product: Product;
  setPage: (page: string) => void;
}
const ProductDetailPage: FC<ProductDetailPageProps> = ({ product, setPage }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [isLoadingDesc, setIsLoadingDesc] = useState<boolean>(false);
  const [descError, setDescError] = useState<string>('');

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const generateDescription = async () => {
    setIsLoadingDesc(true);
    setDescError('');
    setAiDescription('');

    const prompt = `Write a creative and engaging product description for the "${product.name}". It's in the "${product.category}" category. Focus on the sensory experience, the quality of the materials, and the lifestyle it enables. Make it about 3-4 sentences long.`;
    const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      const result = await response.json();

      if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
        const text = result.candidates[0].content.parts[0].text;
        setAiDescription(text);
      } else {
        throw new Error("Unexpected API response structure.");
      }
    } catch (error) {
      console.error("Gemini API error:", error);
      setDescError("Could not generate a new description at this time.");
    } finally {
      setIsLoadingDesc(false);
    }
  };

  return (
    <div className="px-6 md:px-24 py-16 container mx-auto">
      <button onClick={() => setPage(`category-${product.category}`)} className="text-gray-500 mb-8 hover:text-orange-500 transition-colors">Go Back</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-100 rounded-lg">
          <Image src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          {product.new && <p className="text-orange-500 uppercase tracking-[.5em]">New Product</p>}
          <h2 className="text-3xl md:text-4xl font-bold my-6 uppercase">{product.name}</h2>
          <p className="text-gray-500 mb-4 opacity-75">{product.description}</p>

          <div className="my-4 p-4 border border-indigo-200 rounded-lg bg-indigo-50 min-h-[100px]">
            {isLoadingDesc && <p>Generating a fresh take...</p>}
            {descError && <p className="text-red-500">{descError}</p>}
            {aiDescription && <p className="text-indigo-800 italic">{aiDescription}</p>}
            {!isLoadingDesc && !aiDescription && <p className="text-gray-500">Click the button for an AI-powered description!</p>}
          </div>
          <button onClick={generateDescription} disabled={isLoadingDesc} className="bg-indigo-500 text-white uppercase px-8 py-3 hover:bg-indigo-400 transition-colors disabled:bg-gray-400 mb-8 text-sm flex items-center gap-2">
            {isLoadingDesc ? 'Generating...' : '✨ Generate AI Description'}
          </button>

          <p className="text-2xl font-bold mb-8">${product.price.toLocaleString()}</p>
          <div className="flex gap-4">
            <div className="flex items-center bg-gray-100">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-gray-200 transition-colors">-</button>
              <span className="px-6 py-3 font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-gray-200 transition-colors">+</button>
            </div>
            <button onClick={handleAddToCart} className="bg-orange-500 text-white uppercase px-8 py-3 hover:bg-orange-400 transition-colors">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CheckoutPageProps {
  setPage: (page: string) => void;
}

const CheckoutPage: FC<CheckoutPageProps> = ({ setPage }) => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', address: '', zip: '', city: '', country: '', paymentMethod: 'e-money', eMoneyNumber: '', eMoneyPin: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Order Submitted:", { ...formData, cart, totals: { subtotal, shipping, vat, grandTotal } });
      setIsOrderConfirmed(true);
    }
  };

  const handleBackToHome = () => {
    clearCart();
    setIsOrderConfirmed(false);
    setPage('home');
  }

  const firstCartItem = cart.length > 0 ? cart[0] : null;

  if (isOrderConfirmed) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center p-4">
        <div className="bg-white rounded-lg p-8 md:p-12 w-full max-w-lg">
          <svg className="w-16 h-16 text-orange-500 mb-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <h2 className="text-2xl md:text-3xl font-bold uppercase">Thank you<br />for your order</h2>
          <p className="text-gray-500 my-4 opacity-75">You will receive an email confirmation shortly.</p>
          {firstCartItem && (
            <div className="md:flex rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-100 p-6 flex-grow">
                <div className="flex items-center">
                  <Image src={firstCartItem.image} alt={firstCartItem.name} className="w-12 h-12 rounded-lg" />
                  <div className="ml-4 flex-grow">
                    <p className="font-bold">{firstCartItem.shortName}</p>
                    <p className="text-gray-500">${firstCartItem.price.toLocaleString()}</p>
                  </div>
                  <p className="ml-auto text-gray-500 font-bold">x{firstCartItem.quantity}</p>
                </div>
                {cart.length > 1 && <p className="text-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-300">and {cart.length - 1} other item(s)</p>}
              </div>
              <div className="bg-black text-white p-6 md:w-1/3 flex flex-col justify-center">
                <p className="uppercase text-gray-400 text-sm">Grand Total</p>
                <p className="text-lg font-bold">${grandTotal.toLocaleString()}</p>
              </div>
            </div>
          )}
          <button onClick={handleBackToHome} className="w-full bg-orange-500 text-white uppercase py-3 mt-4 hover:bg-orange-400 transition-colors">Back to home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100">
      <div className="px-6 md:px-24 py-16 container mx-auto">
        <button onClick={() => setPage('home')} className="text-gray-500 mb-8 hover:text-orange-500">Go Back</button>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8 uppercase">Checkout</h1>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <legend className="text-orange-500 font-bold uppercase mb-4 col-span-full text-sm tracking-wider">Billing Details</legend>
              <InputField label="Name" name="name" value={formData.name} onChange={setFormData} error={errors.name} />
              <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={setFormData} error={errors.email} />
              <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={setFormData} error={errors.phone} />
            </fieldset>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-12">
              <legend className="text-orange-500 font-bold uppercase mb-4 col-span-full text-sm tracking-wider">Shipping Info</legend>
              <div className="md:col-span-2">
                <InputField label="Address" name="address" value={formData.address} onChange={setFormData} error={errors.address} />
              </div>
              <InputField label="ZIP Code" name="zip" value={formData.zip} onChange={setFormData} error={errors.zip} />
              <InputField label="City" name="city" value={formData.city} onChange={setFormData} error={errors.city} />
              <InputField label="Country" name="country" value={formData.country} onChange={setFormData} error={errors.country} />
            </fieldset>
            <fieldset className="mt-12">
              <legend className="text-orange-500 font-bold uppercase mb-4 text-sm tracking-wider">Payment Details</legend>
            </fieldset>

          </div>
          <div className="bg-white rounded-lg p-8 self-start sticky top-32">
            <h2 className="text-xl font-bold mb-6 uppercase">Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <Image src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                <div className="flex-grow px-3">
                  <p className="font-bold">{item.shortName}</p>
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
            <button type="submit" className="w-full bg-orange-500 text-white uppercase py-3 mt-6 hover:bg-orange-400 transition-colors">Continue & Pay</button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<FormData>>;
  error?: string;
}

const InputField: FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((prev) => ({
      ...prev,
      [name]: e.target.value
    }));
  };
  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between">
        <label htmlFor={name} className={`font-bold text-xs mb-2 ${error ? 'text-red-500' : ''}`}>{label}</label>
        {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={`border rounded-lg px-4 py-3 font-bold ${error ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'} outline-none transition-colors`}
      />
    </div>
  )
}

interface SummaryRowProps {
  label: string;
  value: number;
  isGrandTotal?: boolean;
}

const SummaryRow: FC<SummaryRowProps> = ({ label, value, isGrandTotal = false }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-500 uppercase opacity-75">{label}</p>
      <p className={`font-bold text-lg ${isGrandTotal ? 'text-orange-500' : ''}`}>${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    </div>
  )
}


const App: FC = () => {
  const [page, setPage] = useState<string>('home');
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <CartProvider>
      <AppContent
        page={page}
        setPage={setPage}
        product={product}
        setProduct={setProduct}
      />
    </CartProvider>
  );
}

interface AppContentProps {
  page: string;
  setPage: (page: string) => void;
  product: Product | null;
  setProduct: (product: Product | null) => void;
}
const AppContent: FC<AppContentProps> = ({ page, setPage, product, setProduct }) => {

  const renderPage = () => {
    if (page.startsWith('category-')) {
      const category = page.split('-')[1];
      return <CategoryPage setPage={setPage} category={category} setProduct={setProduct} />;
    }

    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} setProduct={setProduct} />;
      case 'product-detail':
        if (product) {
          return <ProductDetailPage product={product} setPage={setPage} />;
        }
        setPage('home');
        return null;
      case 'checkout':
        return <CheckoutPage setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} setProduct={setProduct} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header setPage={setPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
