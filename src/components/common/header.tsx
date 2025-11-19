'use client'

import { NavItems } from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ y: -100, opacity: 0, }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .3 }}
            className="p-2 border-b h-[100px] ">
            <div className="container">
                <div className="flex justify-around items-center-safe">
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: .8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: .5, duration: .3, ease: 'linear' }}
                        viewport={{ once: true }}
                    >
                        <Image src={'/logo.png'} alt="Лого" width={200} height={0} className="w-[100px] h-[75px] object-contain" priority />
                    </motion.div>
                    <nav
                        className="flex gap-5">
                        {getNavItems()}
                    </nav>
                    <div>
                        <Button>Войти</Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}