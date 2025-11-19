'use client'

import { motion } from "framer-motion"

type Props = {
    children: React.ReactNode,
    classes: string
}

export default function TitleAnimated({ children, classes }: Props) {

    const letters = children?.toString().split('')

    const lettersStages = {
        hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
    }

    return (
        <motion.div className={`${classes} overflow-hidden h-auto`}>
            {letters?.map((char, index) => {
                return (
                    <motion.span
                        key={index}
                        className="inline-block"
                        initial={lettersStages.hidden}
                        whileInView={lettersStages.visible}
                        transition={{ delay: .8 + (.03 * index) }}
                        viewport={{ once: true, amount: 'some' }}
                    >
                        {char === " " ? '\u00A0' : char}
                    </motion.span>
                )
            })}
        </motion.div>
    )
}