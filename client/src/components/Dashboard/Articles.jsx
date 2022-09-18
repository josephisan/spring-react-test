/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import ArticleForm from "./forms/ArticleForm";
import DeleteForm from "./forms/DeleteForm";
import ModalContainer from "./ModalContainer/ModalContainer";
import axios from "axios"
export default function Articles() {
    const [articles, setArticles] = useState([
        {
            name: 'Earthen Bottle',
            price: 48,
            picture: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          },
          {
            name: 'Nomad Tumbler',
            price: 35,
            picture: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          },
          {
            name: 'Focus Paper Refill',
            price: 89,
            picture: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          },
          {
            name: 'Machined Mechanical Pencil',
            price: 35,
            picture: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          },
    ])
    const [openModal, setOpenModal] = useState(false)
    const [myForm, setMyForm] = useState({})


    const getArticles = async () => {

        await axios
            .get("http://localhost:8080/api/articles")
            .then((res) => {
                setArticles(res.data)
            })
            .catch((err) => {
            console.log("error getting sub  : " + err);
            });
        setOpenModal(false);
    };


    
    useEffect(() => {
        getArticles();
    }, []);

    
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
            
            <div className="flex flex-row justify-end items-center w-full ">
                <button className="rounded-full hover:opacity-90 px-10 font-semibold py-4 bg-indigo-600 text-white"
                    onClick={() => {
                        setMyForm(
                            <ArticleForm
                                id={1}
                                setOpenModal={
                                    setOpenModal
                                }
                                viewType={"add"}
                            />
                        );
                        setOpenModal(true);
                    }}
                >
                    Add an element
                </button>
            </div>

            {/* start list articls */}
            {
                articles != null   ?
                <div class="bg-white w-full shadow-md rounded my-6 ">
                    <table
                        style={{ borderRadius: 25 }}
                        class=" w-full rounded-lg  bg-indigo-500 overflow-hidden"
                    >
                        <thead>
                            <tr
                                class=" text-white  text-18 leading-normal w-full bg-indigo-500 shadow-lg"
                                
                                style={{
                                    fontFamily: "Poppins",
                                    
                                }}
                            >
                                <th class="py-3 px-6 text-center whitespace-nowrap ">
                                    Picture
                                </th>
                                <th class="py-3 px-6 text-left whitespace-nowrap ">
                                    Name
                                </th>
                                <th class="py-3 px-6 text-left whitespace-nowrap ">
                                    Price
                                </th>
                                <th class="py-3 px-6 text-center whitespace-nowrap ">
                                    Modifier
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="text-gray-600 text-sm font-light"
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: 500,
                            }}
                        >
                            {articles.map((item, index) => (
                                <tr
                                    key={index}
                                    class="border-b border-gray-200 bg-white hover:bg-gray-100 text-16"
                                >
                                    <td class="py-3 px-6 text-left whitespace-nowrap ">
                                        <div class="flex justify-center max-h-80 items-center">
                                            <img
                                                style={{
                                                    height:200,
                                                    width:"auto"
                                                }}
                                                src={item.picture}
                                                
                                            />
                                        </div>
                                    </td>

                                    

                                    <td class="py-3 px-6 text-left whitespace-nowrap ">
                                        <div class="flex justify-start items-center">
                                            <span>{item.name}</span>
                                        </div>
                                    </td>

                                    <td class="py-3 px-6 text-left whitespace-nowrap ">
                                        <div class="flex justify-start items-center">
                                            <span>{item.price + " DH"}</span>
                                        </div>
                                    </td>

                                    {/* buttons Modifier */}
                                    <td class="py-3 px-6 text-left whitespace-nowrap ">
                                        <div class="flex item-center justify-center">
                                            <button
                                                class="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                onClick={() => {
                                                    setMyForm(
                                                        <ArticleForm
                                                            id={1}
                                                            setOpenModal={
                                                                setOpenModal
                                                            }
                                                            viewType={"view"}
                                                            elementParent={item}
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
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                class="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                onClick={() => {
                                                    setMyForm(
                                                        <ArticleForm
                                                            id={1}
                                                            setOpenModal={
                                                                setOpenModal
                                                            }
                                                            viewType={"edit"}
                                                            elementParent={item}
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
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                class="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                onClick={() => {
                                                    setMyForm(
                                                        <DeleteForm
                                                            setOpenModal={
                                                                setOpenModal
                                                            }
                                                            viewType={"edit"}
                                                            element={item}
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
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
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
                </div>

                :
                <></>
            }

            {/* end list articls */}



            {/* start pages */}
            {
                articles != null  ?
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
