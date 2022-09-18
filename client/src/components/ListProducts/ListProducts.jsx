import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import axios from "axios";
import { useEffect, useState } from "react";


  

  
  export default function ListProducts() {
    const [articles, setArticles] = useState([])
    const getArticles = async () => {

        await axios
            .get("http://localhost:8080/api/articles")
            .then((res) => {
                setArticles(res.data)
            })
            .catch((err) => {
            console.log("error getting sub  : " + err);
            });
    };

    // const [cart, setCart] = useState([])

    const [number, setNumber] = useState(0)
    const [productSelected, setProductSelected] = useState({})
    
    const addToCart = (article, quantity) => {
      const fakeWindow = window.open('', '');
        // setItem('date', Date.now().toString());

      let cart = JSON.parse(localStorage.getItem("cart"))
      let changed = false
      cart.map((item, index) => {
        if(item.id == article.id){
          cart[index].orderedQuantity =  parseInt(cart[index].orderedQuantity)  + parseInt(quantity)
          fakeWindow.localStorage.setItem("cart", JSON.stringify(cart))
          changed = true
        }
      })

      if(!changed){
        article["orderedQuantity"] = quantity
        cart = [...cart, article]
        fakeWindow.localStorage.setItem("cart", JSON.stringify(cart))
      }
      setNumber(0)

      fakeWindow.close()
    }
    useEffect(() => {
      
        getArticles();
    }, []);
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {articles.map((product) => (
              <div key={product.id}  className="">
                <div className="group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.picture}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className=" grid grid-cols-10 flex flex-row justify-between items-start">
                    
                    <div className="col-span-7 flex flex-col justify-start items-start">
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                    </div>

                    <div className=" col-span-3 h-full w-full flex justify-center items-center  ">
                        <div className="h-12 flex justify-center items-center border border-gray-300 p-1 rounded-lg ">
                          <input  
                             
                            className="w-14 -mr-4 h-full p-1" 
                            onBlur={(e) => {
                                e.target.value = ''
                              }}
                            onFocus={(e)=> setNumber(0)}
                            onChange={(e)=> setNumber(e.target.value)}
                            type="number" 
                            placeholder="Qte" 
                            style={{outline:0}}
                          />
                          <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white p-1.5 w-10 h-10  flex justify-center items-center "
                            onClick={()=> addToCart(product, number)}
                          >
                            <ShoppingCartIcon />
                          </button>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  