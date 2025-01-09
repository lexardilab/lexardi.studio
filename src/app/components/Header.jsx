import Image from 'next/image';
export default function Header() {
    return (
        <>
            <div className='flex justify-center items-center h-screen bg-yellow-200'>
                <Image src='/harri+lexardi.svg' width='10000' height='200' alt='Harri Brand'></Image>
            </div>
        </>
    );
}

