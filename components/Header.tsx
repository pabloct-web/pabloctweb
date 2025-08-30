import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-black">
      <div className="flex items-center space-x-2">
        <Image
          src="/foto.png" // coloca o nome exato do arquivo que você botou em public
          alt="Company Lisboa Barber"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-white font-bold text-lg">Company Lisboa Barber</span>
      </div>
    </header>
  );
}
