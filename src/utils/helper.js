import { ChefIcon, QualityIcon, SupportIcon } from "./Icons"
import paneerPizza from "../assets/images/png/paneer-pizza.png";
import cheesePizza from "../assets/images/png/cheese-pizza.png";
export const HEADER_LINK = [
    "Home", "Menu", "Customize Pizza", "Offers", "About Us"
]

export const ABOUT_US_CARD_DATA = [
    {
        img: ChefIcon,
        title: "Professional Chefs"
    },
    {
        img: QualityIcon,
        title: "Best Quality Food"
    },
    {
        img: SupportIcon,
        title: "Online Support"
    }
]

export const DELICIOUS_DATA = [
    {
        title: "SPICY PANEER",
        text: "Only",
        price: "₹199",
        img: paneerPizza,
    },
    {
        title: "CHEESE BURST",
        text: "Only",
        price: "₹299",
        img: cheesePizza,
    }
]