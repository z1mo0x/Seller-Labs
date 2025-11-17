'use client'

import { NavItems } from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Header() {

    const pathname = usePathname()

    function getNavItems() {
        return (
            NavItems.map((item) => {
                const isActive = pathname === item.link
                const active = 'border-b-2 border-muted-foreground'

                return <Link className={`${isActive ? active : 'rounded-'}`} href={item.link} key={item.title}>{item.title}</Link>
            })
        )
    }

    return (
        <div className="p-2 border-b h-[100px] ">
            <div className="container">
                <div className="flex justify-around items-center-safe">
                    <div>
                        <Image src={'/logo.png'} alt="Лого" width={200} height={0} className="w-[100px] h-[75px] object-contain" priority />
                    </div>
                    <nav className="flex gap-5">
                        {getNavItems()}
                    </nav>
                    <div>
                        <Button>Войти</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}