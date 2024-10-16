import Link from "next/link";
const Header = () => {
    return(
        <header className='flex justify-end bg-red-500'>
            <ul className="flex justify-center gap-6 text-white px-20 m-2 h-30 pt-12 pb-10 font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/Contact-us">Contact us</Link></li>
                <li><Link href={"/jobs"}>Jobs</Link></li>            
                <li><Link href="https://www.governorsindh.com/jobs">Results</Link></li>
            </ul>
        </header>
    );
}

export default Header;