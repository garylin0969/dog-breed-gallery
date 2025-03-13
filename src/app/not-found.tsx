import Link from 'next/link';
import Header from '@/components/organisms/Header';

const NotFound = () => {
    return (
        <>
            <Header>
                <div className="h-full flex items-center justify-center">
                    <h2 className="text-white text-2xl">NotFound</h2>
                </div>
            </Header>
            <div className="h-[calc(100vh-50px)] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-6xl md:text-9xl font-black">404</h2>
                    <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
                    <p className="mt-4">We can&apos;t find that page</p>
                    <Link href="/">
                        <button className="mt-6 border rounded-md px-4 py-2 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
