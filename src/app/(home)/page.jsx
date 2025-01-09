import Image from "next/image";
export default function Home() {
  return (
    <><main>
      <div className="grid grid-cols-4 gap-1 px-1">
        <div><Image width='600' height='600' src='/home_1.jpg' alt='' ></Image></div>
        <div><Image width='600' height='600' src='/home_2.jpg' alt='' ></Image></div>
        <div><Image width='600' height='600' src='/home_1.jpg' alt='' ></Image></div>
        <div><Image width='600' height='600' src='/home_3.jpg' alt='' ></Image></div>
      </div>
    </main></>
  );
}
