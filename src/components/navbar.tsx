import {Inter} from "next/font/google"
import Link from "next/link"

const inter = Inter ({subsets : ["latin"]})

export default function Navbar() {
  let navItems = [
    {
    name : "Work",
    link :"#"
  },
  {
    name : "Blogs",
    link :"#"
  },
  {
    name : "Contact",
    link :"#"
  },
]
  return (
    <div>
      <ul className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium text-[22px] space-x-6`}>
       {navItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.name}</Link>
        </li>
       ))}
      </ul>
    </div>
  )
}
