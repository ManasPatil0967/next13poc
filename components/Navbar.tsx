import {NavLinks} from "@/constants"
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
    const session=0;
    return (
    
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
            <Link href='/'>
                <Image
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="logo"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
                        <Link href={link.href} key={link.text}>
                        {link.text}
                        </Link>
                        ))}
            </ul>
        </div>
        <div className="flexCenter gap-4">
            {session? (
            <> 
                <div>
                    Share work
                </div>
            </>
            ) : (
            <p>Sign in</p>
            )}
        </div>
    </nav>
    
    );
}

export default Navbar
