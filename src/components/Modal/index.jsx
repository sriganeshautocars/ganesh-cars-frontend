import { useRef } from "react"
import { X } from "lucide-react";

import { useClickOutside } from "../../hooks/useClickOutside";


export const Modal = ({ content, handleClose }) => {
    const modalRef = useRef(null);

    useClickOutside(modalRef, handleClose);

    return (
        <div className="fixed z-[100] top-0 left-0 right-0 bottom-0 bg-gray-500/90 flex items-center justify-center" >
            <div className="fixed z-[100] inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md" >
                <div className="absolute right-3 top-3 cursor-pointer" onClick={handleClose}><X className="text-gray-200" /></div>
                <div ref={modalRef}>
                    {content}
                </div>
            </div>
        </div>
    )
}