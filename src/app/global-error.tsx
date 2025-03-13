'use client';

import { useEffect } from 'react';

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html className="h-100vh bg-gray-100">
            <body className="h-full flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
                    <button
                        onClick={() => reset()}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
};

export default GlobalError;
