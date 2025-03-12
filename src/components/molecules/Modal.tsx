import { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal = ({ children, isOpen = true, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80">
            <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                    <button className="cursor-pointer" onClick={onClose}>
                        <IoMdClose className="text-white text-2xl md:text-4xl" />
                    </button>
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
