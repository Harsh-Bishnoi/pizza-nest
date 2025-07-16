import { ChefIcon, FacebookIcon, InstaIcon, LinkdinIcon, LocationIcon, OrderIcon, PizzaIcon, QualityIcon, StarIcon, SupportIcon } from "./Icons"
import paneerPizza from "../assets/images/png/paneer-pizza.png";
import cheesePizza from "../assets/images/png/cheese-pizza.png";
import tandooriPizza from "../assets/images/png/tandoori-paneer.png";
import overloadPizza from "../assets/images/png/cheese-overload.png";
import veggieFiesta from "../assets/images/png/veggie-fiesta.png";
import masalaPaneer from "../assets/images/png/masala-paneer.png";
import farmhouseMagic from '../assets/images/png/farmhouse-magic.png'
import tabMasala from '../assets/images/png/tab-masala-paneer.png'
import mealCombo from '../assets/images/png/meal-combo.png'

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

export const HOW_IT_WORKS_DATA = [
    {
        icon: PizzaIcon,
        title: "Choose Your Pizza",
        description: "Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.",
    },
    {
        icon: OrderIcon,
        title: "Place Your Order",
        description: "Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.",
    },
    {
        icon: LocationIcon,
        title: "Track & Enjoy",
        description: "Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!",
    }
]

export const TAB_BTN_DATA = [
    "All", "Veg Pizzas", "Non-Veg Pizzas", "Combos & Drinks", "Sides & Dips"
]

export const TAB_PANNEL_DATA = [
    {
        img: farmhouseMagic,
        priceOne: "₹229 / ₹359 / ₹499",
        priceTwo: "₹259 / ₹379 / ₹599",
        priceThree: "₹279 / ₹399 / ₹699",
        priceFour: "₹299 / ₹409 / ₹799",
        priceFive: "₹329 / ₹459 / ₹899",
        title: "Farmhouse Magic",
        description: "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
        starImg: StarIcon
    },
    {
        img: tabMasala,
        priceOne: "₹299 / ₹399 / ₹519",
        priceTwo: "₹309 / ₹449 / ₹549",
        priceThree: "₹359 / ₹479 / ₹579",
        priceFour: "₹379 / ₹499 / ₹599",
        priceFive: "₹439 / ₹599 / ₹619",
        title: "Masala Paneer",
        description: "Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese",
        starImg: StarIcon
    },
    {
        img: mealCombo,
        priceOne: "₹379",
        priceTwo: "₹400",
        priceThree: "₹479",
        priceFour: "₹579",
        priceFive: "₹679",
        title: "Solo Meal Combo",
        description: "1 Regular Pizza + Garlic Bread + 1 Soft Drink",
        starImg: StarIcon
    }
]