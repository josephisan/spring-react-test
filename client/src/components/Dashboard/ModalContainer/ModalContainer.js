
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'



export default function ModalContainer({openModal, setOpenModal, myForm}) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root  style={{zIndex:50}} show={openModal} as={Fragment}>
      <Dialog as="div" className="relative overflow-hidden z-10 " initialFocus={cancelButtonRef} onClose={()=>{}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-10"
          enterTo="opacity-50"
          leave="ease-in duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-10"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 ">
          <div className="flex items-end sm:items-center justify-center h-full w-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  rounded-lg text-left  
                shadow-xl transform transition-all  
                  w-[50%] lg:h-full max-h-[90%] overflow-y-auto px-3.5 py-2 bg-white flex flex-col justify-start items-center ">
                    <button className="absolute right-3 top-3 h-8 p-1 rounded-lg text-white w-8 bg-indigo-400 shadow-lg active:shadow"
                      onClick={()=> setOpenModal(false)}
                    >
                      X
                    </button>
                    {myForm}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
