import Image from "next/image";

export default function Navbar() {
    return (
        <div className="px-12 py-6 border-b-2 border-black flex justify-between items-center">
            <div>
                <Image
                    src="/Logo_Lexardi.svg"
                    width="250"
                    height="100"
                    alt="Harri Brand"
                ></Image>
            </div>
            <div><h1>Menu</h1></div>
        </div>
    );
}
