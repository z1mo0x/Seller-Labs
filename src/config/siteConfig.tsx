import { TrendingUp } from "lucide-react"

export const NavItems = [
    {
        title: 'Главная',
        link: '/'
    },
    {
        title: 'Генератор идей',
        link: '/ideas'
    }
]

export const HeroItems = [
    {
        title: 'Придумывай',
        icon: <TrendingUp />,
        descr: "Получи идей для своих товаров",
        href: "/ideas",
        buttonText: 'Начать'
    },
    {
        title: 'Анализируй',
        icon: <TrendingUp />,
        descr: "Анализируй отзывы о товарах",
        href: "/analyze",
        buttonText: 'Анализировать'
    },
    {
        title: 'Создавай',
        icon: <TrendingUp />,
        descr: "Сгенерируй описание и информацию",
        href: "/analyze",
        buttonText: 'Начать создавать'
    }
]