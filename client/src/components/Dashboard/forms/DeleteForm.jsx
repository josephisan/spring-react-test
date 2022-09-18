/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";

import axios from "axios";

export default function DeleteForm({
    setOpenModal,
    viewType,
    element,
}) {
    
    const deleteItem = async (element) => {
        // setLoading(true)
        // console.log("trying 1 : " + candidat._id)
        // await axios
        //   .post("/api/contacts/delete",{_id: candidat._id})
        //   .then((res) => {
        //     console.log("deleted candidat : " + JSON.stringify(res));
        //   })
        //   .catch((err) => {
        //     console.log("error failed to delete candidat  : " + err);
        //   });
      }

    const saveChanges = async () => {

        deleteItem(element)
        setOpenModal(false);
        
    };

    const cancelChanges = () => {
        setOpenModal(false);
    };

    
  
   
 

    


    useEffect(() => {
  
    }, []);
    
    return (
        <div className="flex flex-col justify-center items-center w-full mt-2 p-5 ">
            <div
                className=" my-2 mx-2 lg:text-25 md:text-20 sm:text-17"
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    lineHeight: "125.5%",
                    color: "#2A2A64",
                }}
            >
                Are you sure you wannt to delete this element
            </div>
           
            <div className="border-none  row  py-7 flex flex-row gap-2 w-full  justify-center">
                <button
                    className={"text-white bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue1 dark:focus:ring-blue-800  content-end items-end "
                        + (viewType !="edit" ? "invisible" : "")
                    }
                    value="Valider les modifications"
                    onClick={saveChanges}
                >
                    Delete
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
