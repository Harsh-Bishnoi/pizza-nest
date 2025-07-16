import { ChefIcon, FacebookIcon, InstaIcon, LinkdinIcon, QualityIcon, SupportIcon } from "./Icons"
import paneerPizza from "../assets/images/png/paneer-pizza.png";
import cheesePizza from "../assets/images/png/cheese-pizza.png";
import tandooriPizza from "../assets/images/png/tandoori-paneer.png";
import overloadPizza from "../assets/images/png/cheese-overload.png";
import veggieFiesta from "../assets/images/png/veggie-fiesta.png";
import masalaPaneer from "../assets/images/png/masala-paneer.png";


export const HEADER_LINK = [
    {
        link: "Home",
        path: ""
    },
    {
        link: "Menu",
        path: ""
    },
    {
        link: "Customize Pizza",
        path: ""
    },
    {
        link: "Offers",
        path: ""
    },
    {
        link: "About Us",
        path: ""
    }
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
        price: "₹ 199",
        img: paneerPizza,
    },
    {
        title: "CHEESE BURST",
        text: "Only",
        price: "₹ 299",
        img: cheesePizza,
    }
]

export const BESTSELLER_DATA = [
    {
        img: tandooriPizza,
        price: "₹279",
        title: "Tandoori Paneer ",
        description: "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs"
    },
    {
        img: overloadPizza,
        price: "₹299",
        title: "Cheese Overload",
        description: "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust"
    },
    {
        img: veggieFiesta,
        price: "₹239",
        title: "Veggie Fiesta",
        description: "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese"
    },
    {
        img: masalaPaneer,
        price: "₹249",
        title: "Masala Paneer",
        description: "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese"
    },
]

export const SOCIAL_ICON = [
    {
        icon: FacebookIcon,
        socialLink: "https://www.facebook.com/?_rdr"
    },
    {
        icon: InstaIcon,
        socialLink: "https://www.instagram.com/accounts/login/?hl=en"
    },
    {
        icon: LinkdinIcon,
        socialLink: "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
    }
]

export const QUICK_LINKS = [
    "Home", "About Us", "Menu", "Gallery", "Testimonial", "Contact"
]

export const SUPPORT_LINKS = [
    "Terms & Conditions", "Privacy Policy"
]

export const FOOD_DELIVERY_DATA = [
    "30-Minute Delivery Promise",
    "Hygienic, Contactless Delivery",
    "Real-time Order Tracking",
    "Eco-Friendly Packaging"
]