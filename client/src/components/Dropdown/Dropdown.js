/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon ,CheckIcon} from '@heroicons/react/24/outline'
import { OfficeBuildingIcon} from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function DropDown({setChoice, choices, placeHolder, icon, choice}) {
  // const [choice, setchoice] = useState(choice)

  useEffect(() => {
    // save point
    setChoice(choice)
  }, [choice, choice]);

  return (
    
    <div className="w-full h-full flex items-center justify-center " style={{zIndex:100}}>
    <Listbox  value={choice} onChange={setChoice}>
      {({ open }) => (
        <>
          <div style={{}} className="w-full h-full  relative focus:shadow-lg  ">
            <Listbox.Button  
              style={{
                zIndex: 20,
                boxShadow:"6px 6px 20px rgba(0, 0, 0, 0.05)",
              }}
              className=" relative w-full h-full bg-white  rounded-md  pl-3 pr-10  text-left cursor-default 
              focus:outline-0   sm:text-sm
             active:shadow-lg active:border active:border-blue1  active:outline-3
            "
            >
              <div className="w-full h-full flex items-center pr-2">
                {
                  icon == null ? 
                    <OfficeBuildingIcon color={'#2A2A64'} className='w-6'/>
                  :
                  <></>

                }
                
                <div 
                  className="h-full flex items-center  ml-2   text-blue1 block truncate"
                  style={{
                    // height:30,
                    fontWeight:275,
                    fontSize:14
                  }}
                >
                  {choice != "" ? (choice) : placeHolder}
                </div>
              </div>
              
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon className="h-6 w-  text-blue1" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options  className="absolute mb-20  mt-1 w-full bg-white shadow-lg max-h-72  
                                            rounded-md text-base ring-1 ring-black ring-opacity-5 
                                            overflow-auto focus:outline-none sm:text-sm"
                                style={{
                                  zIndex:90,
                                }}
                                            >
                {choices.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-effyis-purple bg-gray-200' : 'text-gray-900',
                        'flex items-center justify-start cursor-default hover:text-effyis-purple hover:bg-gray-100 select-none relative  pl-3 pr-9 '
                      )
                    }
                    value={item}
                  >
                    {({ choice, active }) => (
                      <>
                        <div className="flex flex-row justify-start items-center py-2.5">
                            
                          <span
                            className={classNames(choice ? 'font-bold' : 'font-semibold', 'text-base ml-3 block truncate')}
                          >
                            {item}
                          </span>
                        </div>

                        {choice ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-blue1',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon color={"#2A2A64"} className="h-6 "  />
                            
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </div>
  )
}