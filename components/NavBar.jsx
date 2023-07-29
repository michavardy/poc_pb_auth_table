import Link from 'next/link';

export default function NavBar(){
    return(
        <div className="w-20  bg-blue-500 text-white flex flex-col items-center">
            <Link href="/Table" className="text-white">
                Table
            </Link>
            <Link href="/Form" className="text-white">
                Form
            </Link>
        </div>
    )
}