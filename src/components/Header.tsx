import React from "react"
import Link from "next/link"
const Header = () => {
    return (
        <div className="flex gap-10 p-6 bg-green-200">
<Link href="\">home page</Link>
<Link href="\Adress">Adress page</Link>
<Link href="\Contact">Contact page</Link>
        </div>
    )
}

export default Header