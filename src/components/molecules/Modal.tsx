'use client';

import { ReactNode } from 'react';
import { MdClear } from 'react-icons/md';

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const Modal = ({ children, isOpen = false, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80">
            <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                    <button className="cursor-pointer" onClick={onClose} aria-label="Close modal">
                        <MdClear className="text-white text-2xl md:text-4xl" />
                    </button>
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
