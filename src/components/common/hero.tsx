"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroItem from '../ui/myself/hero-item';
import { HeroItems } from '@/config/siteConfig';
import TitleAnimated from '../ui/myself/title-animated';

const Hero = () => {

    const [isBlur, setIsBlur] = useState(true)

    return (

        <motion.div
            initial={{ opacity: 0, borderRadius: '100%', backdropFilter: "blur(50px)" }}
            whileInView={{ opacity: 1, borderRadius: 0, backdropFilter: isBlur ? 'blur(10px)' : 'blur(0px)' }}
            transition={{ duration: .5, delay: isBlur ? .5 : 0 }}
            onAnimationComplete={() => {
                setIsBlur(false)
            }}
            viewport={{ amount: .5, once: true }}
            className="bg-cover bg-center origin-center py-25"
            style={{ backgroundImage: 'url("/hero-extended.jpeg")', height: 'calc(100vh - 100px)' }}
        >
            <div className="container">
                <motion.div
                    initial={{ y: -50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: .5, delay: .5 }}
                    className="rounded-2xl p-5 w-max bg-[rgba(0,0,0,0.05)]  backdrop-blur-[10px]"
                >
                    <TitleAnimated classes="p-3 text-4xl font-bold">
                        Начни работу с маркетплейсами!
                    </TitleAnimated>
                    <div className="flex gap-5 mt-5">
                        {HeroItems.map((item, index) => {
                            return (
                                <HeroItem key={item.title} index={index} icon={item.icon} title={item.title} descr={item.descr} buttonText={item.buttonText} href={item.href} />
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;