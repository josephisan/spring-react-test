/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";

import axios from "axios";

export default function ArticleForm({
    setOpenModal,
    viewType,
    candidatureParent,
    

}) {


    const [candidature, setCandidature] = useState(candidatureParent != null ? candidatureParent : {})
    
    const handleChange =  e => {
        const { name, value } = e.target;
        setCandidature(candidature => ({
            ...candidature,
            [name]: value
        }));

        
    };

    const saveChanges = async () => {

        // await axios
        //     .put("/api/contacts", candidature)
        //     .then((res) => {
        //         console.log("trying to update : " + JSON.stringify(candidature))
        //         console.log("changed sub success :" + JSON.stringify(res.data))
        //     })
        //     .catch((err) => {
        //     console.log("error getting sub  : " + err);
        //     });
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
                className=" my-2 mx-2 lg:text-25 md:text-14 sm:text-14"
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    lineHeight: "125.5%",
                    color: "#2A2A64",
                }}
            >
                Contact
                <span
                    style={{
                        fontWeight: 400,
                    }}
                >
                    &nbsp;&nbsp;{candidature.inscription}
                </span>
            </div>
            <div
                className="grid grid-cols-6 gap-4 justify-center w-full py-5"
                style={{}}
            >
                
           
                
               
                {/* start Prénom  */}
                <div className=" w-full lg:col-span-6 md:col-span-6 sm:col-span-1 flex flex-col justify-start items-start gap-2 ">
                    <div className="content-start text-14 font-semibold">
                        Prénom :
                    </div>
                    <input
                        className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={candidature.prenom}
                        style={{
                            borderRadius: 6,
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            paddingLeft: 15,
                            boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.05)",
                            fontSize: 14,
                        }}
                        disabled={viewType == "edit" ? false : true}
                        name="prenom"
                        onChange={handleChange}
                    />
                </div>
                {/* end Prénom */}

            </div>
            <div className="border-none  row  py-7 flex flex-row gap-2 w-full  justify-end">
                <button
                    className={"text-white bg-blue1  hover:bg-blue1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue1 dark:focus:ring-blue-800  content-end items-end "
                        + (viewType !="edit" ? "invisible" : "")
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
