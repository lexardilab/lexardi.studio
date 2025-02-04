import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="sm:px-2 lg:px-12 py-6 border-b-2 border-black flex justify-between items-center">
            <div>
                <Link href='/'>
                    <Image
                        src="/Logo_Lexardi.svg"
                        width="200"
                        height="100"
                        alt="Harri Brand"
                        className=""
                    />
                </Link>
            </div>
        </div>
    );
}
