'use client'
import { notFound } from 'next/navigation';
import Link from 'next/link'
import { Button } from'flowbite-react'

const NotFound = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   console.error(
  //     "404 Error: User attempted to access non-existent route:",
  //     location.pathname
  //   );
  // }, [location.pathname]);
  return (
    <>      
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-10">
          <h1 className="text-6xl md:text-9xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href={'/'} className="p-4 rounded-lg text-white bg-brand-blue hover:bg-brand-blue-light">Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
