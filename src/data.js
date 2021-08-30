import iconOnline from "./images/icon-online.svg";
import onboarding from "./images/icon-onboarding.svg";
import api from "./images/icon-api.svg";
import budgeting from "./images/icon-budgeting.svg";
/*-------------------------------
        article assets
---------------------------------*/
import currency from "./images/image-currency.jpg";
import confetti from "./images/image-confetti.jpg";
import restaurant from "./images/image-restaurant.jpg";
import plane from "./images/image-plane.jpg";
export const navLinks=[
  {
    id:1,
    url:"/",
    link:"Home",
  },
  {
    id:2,
    url:"#about",
    link:"About",
  },
  {
    id:3,
    url:"#contact",
    link:"Contact",
  },
  {
    id:4,
    url:"#blog",
    link:"Blog",
  },
   {
    id:5,
    url:"#career",
    link:"Career",
  },
]

export const easyBank = [
  {
    id: 1,
    img: iconOnline,
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },

  {
    id: 2,
    img: budgeting,
    title: "Simple Budgeting",
    text: "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },

  {
    id: 3,
    img: onboarding,
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control  of your finances right away.",
  },

  {
    id: 1,
    img: api,
    title: "Open API",
    text: "  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const articles = [
  {
    id: 1,
    image: currency,
    author: "By Claire Robinson",
    title: " Receive money in any currency with no fees",
    text: "  The world is getting smaller and we’re becoming more mobile. So why should you be  forced to only receive money in a single …",
  },
  {
    id: 2,
    image: restaurant,
    author: "By Wilson Hutton",
    title: " Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set  realistic limits each month. That means you …",
  },
  {
    id: 3,
    image: plane,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    text: " We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 4,
    image: confetti,
    author: "By Claire Robinson",
    title: " Our invite-only Beta accounts are now live!",
    text: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];
