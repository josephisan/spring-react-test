/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Cart from "../Cart/Cart";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [open, setOpen] = useState(false);

    const [cartOpen, setCartOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState(["", ""]);

    const [ count , setCount] = useState(0)

    

    const cartRefresh = () => {
        if(!localStorage.getItem("cart")){
            localStorage.setItem("cart", "[]")
        }

        setCartProducts(JSON.parse(localStorage.getItem("cart")))
    }

    
    useEffect(() => { 
        // console.log("refreshe)
        
        cartRefresh()
        function storageEventHandler(event) {
            setCartOpen(true)
            setCartProducts(JSON.parse(localStorage.getItem("cart")))
        }
        window.addEventListener("storage", storageEventHandler);
        return () => {
            window.removeEventListener("storage", storageEventHandler);
        }
    }, []);

    return (
        <div className="bg-white ">
            {cartOpen && <Cart open={cartOpen} setOpen={setCartOpen} />}

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Free Shipping for a cart sum of +1000 DH
                </p>

                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            <div className="ml-4 flex lg:ml-0">
                                <a href="/">
                                    <span className="sr-only">
                                        Atoz services
                                    </span>
                                    <img
                                        className="h-8 w-auto"
                                        src={require("../../Assets/images/logo_atoz.png")}
                                        alt="atoz logo"
                                    />
                                </a>
                            </div>

                            <div className="mx-10">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a
                                        href="/articles"
                                        className="text-sm font-medium text-gray-500 hover:text-gray-800"
                                    >
                                        Articles
                                    </a>
                                    
                                    <a
                                        href="/orders"
                                        className="text-sm font-medium text-gray-500 hover:text-gray-800"
                                    >
                                        Orders
                                    </a>
                                </div>
                            </div>


                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        Sign In
                                    </a>
                                    <span
                                        className="h-6 w-px bg-gray-200"
                                        aria-hidden="true"
                                    />
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        Sign Up
                                    </a>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <button
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Rechercher
                                        </span>
                                        <MagnifyingGlassIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <button
                                        className="group -m-2 flex items-center p-2"
                                        onClick={() => setCartOpen(true)}
                                    >
                                        <ShoppingBagIcon
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                            {cartProducts.length}
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
