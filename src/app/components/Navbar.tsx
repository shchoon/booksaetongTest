import Image from "next/image"
import Logo from '@/public/logo.png'
import Searchicon from '@/public/icons/Search.png'
import BookIcon from '@/public/icons/Books.png'

export default function Navbar() {
    return (
        <div className="w-full h-[100px] flex items-center justify-between bg-navbar">
            <Image src={Logo} sizes="100" alt="Logo" />
            <div className="w-32 flex gap-5">
                <Image src={Searchicon} sizes="28" alt="search" />
                <Image src={BookIcon} sizes="28" alt="books" />
            </div>
        </div>
    )
}