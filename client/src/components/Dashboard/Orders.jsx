/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import ArticleForm from "./forms/ArticleForm";
import DeleteForm from "./forms/DeleteForm";
import ModalContainer from "./ModalContainer/ModalContainer";
import axios from "axios"
import OrderForm from "./forms/OrderForm";
export default function Orders() {
    
    const [openModal, setOpenModal] = useState(false)
    const [myForm, setMyForm] = useState({})
    const [refresh, setRefresh] = useState(false)

    const [orders, setOrders] = useState([])
    const getOrders = async () => {

        await axios
            .get("http://localhost:8080/api/orders")
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
            console.log("error getting sub  : " + err);
            });
        setOpenModal(false);
    };

    useEffect(() => {
        getOrders();
    }, [refresh]);

    
    return (
        <div className="pt-10 pb-20 px-40 flex flex-col justify-start items-center w-full">

            {openModal != null ? (
                <ModalContainer
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    myForm={myForm}
                />
            ) : (
                <></>
            )}
            
            
            {/* start list articls */}
            
                <div className="bg-white w-full shadow-md rounded my-6 ">
                    <table
                        style={{ borderRadius: 25 }}
                        className=" w-full rounded-lg  bg-indigo-500 overflow-hidden"
                    >
                        <thead>
                            <tr
                                className=" text-white  text-18 leading-normal w-full bg-indigo-500 shadow-lg"
                                
                                style={{
                                    fontFamily: "Poppins",
                                }}
                            >
                                <th className="py-3 px-6 text-center whitespace-nowrap ">
                                    Reference
                                </th>
                                <th className="py-3 px-6 text-left whitespace-nowrap ">
                                    Products
                                </th>
                                <th className="py-3 px-6 text-left whitespace-nowrap ">
                                    Date
                                </th>
                                <th className="py-3 px-6 text-center whitespace-nowrap ">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            className="text-gray-600 text-sm font-light"
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: 500,
                            }}
                        >
                            {orders.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 bg-white hover:bg-gray-100 text-16"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap ">
                                        <div className="flex justify-center items-center">
                                            <span>{item.reference}</span>
                                        </div>
                                    </td>

                                    

                                    <td className="py-3 px-6 text-left whitespace-nowrap ">
                                        <div className="flex flex-col justify-start items-start">
                                            {
                                                item.articles.map((article,i)=>
                                                    <div key={i} className="flex flex-row justify-start items-start gap-3">
                                                        <div>
                                                            {"id : "+ article.id}
                                                        </div>
                                                        <div>
                                                            |
                                                        </div>
                                                        <div>
                                                            {"name : " + article.name}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            
                                        </div>
                                    </td>

                                    <td className="py-3 px-6 text-left whitespace-nowrap ">
                                        <div className="flex justify-start items-center">
                                            <span>{item.date}</span>
                                        </div>
                                    </td>

                                    {/* buttons Modifier */}
                                    <td className="py-3 px-6 text-left whitespace-nowrap ">
                                        <div className="flex item-center justify-center">
                                            {/* <button
                                                className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                onClick={() => {
                                                    setMyForm(
                                                        <OrderForm
                                                            id={1}
                                                            setOpenModal={
                                                                setOpenModal
                                                            }
                                                            viewType={"view"}
                                                            elementParent={item}
                                                            setRefresh={setRefresh}
                                                            refresh={refresh}
                                                        />
                                                    );
                                                    setOpenModal(true);
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                onClick={() => {
                                                    setMyForm(
                                                        <OrderForm
                                                            id={1}
                                                            setOpenModal={
                                                                setOpenModal
                                                            }
                                                            viewType={"edit"}
                                                            elementParent={item}
                                                            setRefresh={setRefresh}
                                                            refresh={refresh}
                                                        />
                                                    );
                                                    setOpenModal(true);
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button> */}
                                            <button
                                                className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                onClick={() => {
                                                    setMyForm(
                                                        <DeleteForm
                                                            setOpenModal={
                                                                setOpenModal
                                                            }
                                                            element={item}
                                                            refresh={refresh}
                                                            setRefresh={setRefresh}
                                                        />
                                                    );
                                                    setOpenModal(true);
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    {/* buttons Modifier */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {
                        orders.length == 0 ?
                        <div className=" w-full flex justify-center items-center p-10">
                        No Elements
                    </div>
                    :
                    <></>
                    }
                    
                </div>

              

            {/* end list articls */}



            {/* start pages */}
            {
                orders != null  ?
                <div className="flex w-full items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Previous
                        </a>
                        <a
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Next
                        </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to{" "}
                                <span className="font-medium">10</span> of{" "}
                                <span className="font-medium">97</span> results
                            </p>
                        </div>
                        <div>
                            <nav
                                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                aria-label="Pagination"
                            >
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </a>
                                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                                >
                                    3
                                </a>
                                <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                                    ...
                                </span>
                                <a
                                    href="#"
                                    className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                                >
                                    8
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    9
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    10
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                

                :
                <></>
            }
            {/* end pages */}
        </div>
    );
}
