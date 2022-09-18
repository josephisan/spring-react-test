/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";

import axios from "axios";

export default function ArticleForm({
    setOpenModal,
    viewType,
    elementParent,
    refresh,
    setRefresh
}) {

    // alert(refresh)
    const [element, setElement] = useState(elementParent != null ? elementParent : {name:"", price:0, picture:""})
    
    const handleChange =  e => {
        const { name, value } = e.target;
        setElement(element => ({
            ...element,
            [name]: value
        }));

        
    };

    const editItem = async (element) => {
        if(viewType=="add"){
            await axios
            .post("http://localhost:8080/api/articles", element)
            .then((res) => {
                console.log("Success :"+ JSON.stringify(res.data))
            })
            .catch((err) => {
            console.log("error adding element  : " + err);
            });
        }else{
      

            await axios
            .put("http://localhost:8080/api/articles/"+element.id, element)
            .then((res) => {
                console.log("Success :"+ JSON.stringify(res.data))
            })
            .catch((err) => {
            console.log("error editing element  : " + err);
            });
        }
        setRefresh(!refresh)
    }
    const saveChanges = async () => {
        
            
        editItem(element);
        setOpenModal(false);

    };

    const cancelChanges = () => {
        setOpenModal(false);
    };

   
   

    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    
    const handleChangeFile = (e) => {
        const { name } = e.target;

        var file = e.target.files[0];

        if (!validImageTypes.includes(file["type"])) {
            alert("Image invalide !");
        } else {
            if (Math.floor(file.size) / 1024 > 800) {
                alert(
                    "La taille de l'image ne doit pas dépasser 400 Ko"
                );
            } else {
                var reader = new FileReader();

                reader.onload = function (event) {
                    setElement((element) => ({
                        ...element,
                        [name]: event.target.result,
                    }));
                };

                reader.readAsDataURL(file);
            }
        }
    };

    


    useEffect(() => {
    }, []);
    
   

    return (
        <div className="flex flex-col justify-center items-center w-full mt-2 p-5 ">
            <div
                className=" my-2 mx-2 lg:text-25 md:text-14 sm:text-14"
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    lineHeight: "125.5%",
                    color: "#2A2A64",
                }}
            >
                Element
                <span
                    style={{
                        fontWeight: 400,
                    }}
                >
                    &nbsp;&nbsp;{element.name}
                </span>
            </div>
            <div
                className="grid grid-cols-6 gap-4 justify-center w-full py-5"
                style={{}}
            >
                
           
                
               {/* start name */}
                <div className=" w-full lg:col-span-6 md:col-span-6 sm:col-span-1 flex flex-col justify-start items-start gap-2 ">
                    <div className="content-start text-14 font-semibold">
                        Name :
                    </div>
                    <input
                        className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={element.name}
                        style={{
                            borderRadius: 6,
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            paddingLeft: 15,
                            boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.05)",
                            fontSize: 14,
                        }}
                        disabled={viewType == "edit" || viewType == "add" ? false : true}
                        name="name"
                        onChange={handleChange}
                    />
                </div>
               {/* start name */}


               {/* start price */}
               <div className=" w-full lg:col-span-6 md:col-span-6 sm:col-span-1 flex flex-col justify-start items-start gap-2 ">
                    <div className="content-start text-14 font-semibold">
                        Price :
                    </div>
                    <input
                        className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={element.price}
                        style={{
                            borderRadius: 6,
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            paddingLeft: 15,
                            boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.05)",
                            fontSize: 14,
                        }}
                        disabled={viewType == "edit" || viewType == "add" ? false : true}
                        name="price"
                        onChange={handleChange}
                        type="number"
                    />
                </div>
               {/* start price */}

               {/* start landingImage  */}
               <div
                    className=" w-full lg:col-span-6 md:col-span-6 sm:col-span-1  flex flex-col justify-start items-start gap-2 "
                    style={{}}
                >
                    <div
                        className="flex flex-col gap-4 items-center justify-center py-2 w-full border border-gray-300"
                        style={{
                            borderRadius: 6,
                        }}
                    >
                        {element.picture != "" && element.picture != null ? (
                            <div className="relative w-2/3 " style={{height:300}}>
                                <img
                                    className="w-full h-full"
                                    
                                    src={element.picture}
                                />
                            </div>
                        ) : (
                            <div className="relative ">
                                <div className="text-red-500 text-15">
                                    Pas d'image
                                </div>
                            </div>
                        )}
                      
                        <input
                            id="imageInput"
                            className="hidden "
                            onChange={handleChangeFile}
                            type={"file"}
                            name={"picture"}
                        />
                        <button
                            className="text-white bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin rounded-lg text-sm px-5 py-2 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue1 dark:focus:ring-blue-800  content-end items-end"
                            value="Valider les modifications"
                            onClick={() =>
                                document.getElementById("imageInput").click()
                            }
                        >
                            Ajouter une image
                        </button>
                    </div>
                </div>
                {/* end landingImage */}



            </div>
            <div className="border-none  row  py-7 flex flex-row gap-2 w-full  justify-end">
                <button
                    className={"text-white bg-indigo-500  hover:bg-blue1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue1 dark:focus:ring-blue-800  content-end items-end "
                        + (viewType !="edit" && viewType != "add" ? "invisible" : "")
                    }
                    value="Valider les modifications"
                    onClick={saveChanges}
                >
                    Sauvegarder les modifications
                </button>

                <button
                    className="text-gray-990 bg-gray-200 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500  content-end items-end "
                    value="Annuler"
                    onClick={cancelChanges}
                >
                    Annuler
                </button>
            </div>
        </div>
    );
}
