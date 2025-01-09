import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
    return (
        <>
            <div className='grid grid-cols-4 gap-1 px-1'>
                <div>
                    <Link href='https://buy.stripe.com/9AQ9DR6lNc4E1GM8ww'><Image
                        src="/home_1.jpg"
                        width="1000"
                        height="100"
                        alt="Harri Brand"
                    /></Link></div>
                <div><Image
                    src="/home_1.jpg"
                    width="1000"
                    height="100"
                    alt="Harri Brand"
                /></div>
                <div><Image
                    src="/home_1.jpg"
                    width="1000"
                    height="100"
                    alt="Harri Brand"
                /></div>
                <div><Image
                    src="/home_1.jpg"
                    width="1000"
                    height="100"
                    alt="Harri Brand"
                /></div>

            </div>
        </>
    );
}