'use client'

import { motion } from "framer-motion"
import { Button } from "../button"
import Link from "next/link"

type Props = {
    title: string,
    icon: React.ReactNode,
    href: string,
    descr?: string,
    buttonText?: string,
    index: number
}


export default function HeroItem({ title, icon, descr, buttonText, href, index }: Props) {
    return (
        <motion.div
            initial={{ filter: "blur(5px)", y: 50, scale: .8, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + (.2 * index + 1), duration: .5 }}
            className="border-primary shadow-2xs shadow-white border rounded-xl p-2.5"
        >
            <div className="flex gap-2.5 items-center font-semibold">{icon} {title}</div>
            <div className="mt-2.5 text-primary text-[14px]">{descr}</div>
            <Button asChild variant='outline' className="mt-5">
                <Link href={href}>{buttonText}</Link>
            </Button>
        </motion.div>
    )
}