import Link from "next/link"
export default function Navbar() {

  return (
    <nav>
    <ul className="flex justify-end space-x-5 bg-blue-800 text-white h-[50px] items-center px-5">
        
        <Link href='/'>
        <li>Home</li>
        </Link>


        <Link href='/students'>
        <li>Students</li>
        </Link>

        <Link href='/instructors'>
        <li>Instructors</li>
        </Link>
        
       
        
        <Link href='/about'>
        <li>About</li>
        </Link>
    </ul>
    </nav>
  )
}
