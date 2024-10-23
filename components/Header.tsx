import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-[1180px] mx-auto p-8">
      <Image
        src="/image/akoyaaa.jpg" // Image path
        alt="A descriptive text for the image"
        width={100} // Width of the image
        height={100} // Height of the image
        className="h-auto" // Maintains aspect ratio
      />
            <button className="flex items-center justify-center border-none bg-transparent hover:bg-gray-200 rounded p-2">
                {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                }
            </button>
        </header>
    );
};

export default Header;
