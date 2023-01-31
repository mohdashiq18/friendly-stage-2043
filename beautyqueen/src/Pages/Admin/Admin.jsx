import axios from 'axios'
import React from 'react'
import cookie from "js-cookie"
import { dataUrl } from '../../share'

const Admin = () => {
  
  // document.cookie = "firstName=Christopher";
  // console.log(document.cookie)
  const sign = {
    name:"Sujeet Kumar",
    email:"sujeet@gmail.com",
    phone:7261861074,
    password:"123456"
  }
  function setC(){
  cookie.set("token", "sujeet", {expires: 1/24})
}
function getC(){
    console.log(cookie.get("token"))
}
function remC(){
    cookie.remove("token")
}



   const data=[
    {
        name:"Bioderma Atoderm Huile De Douche 24h Hydration Ultra-Nourishing Anti-",
        category:"skin",
        description:"Bestow the gift of glow to your skin with FACES Bath N Body Milk & Honey Body Scrub, crafted with organically sourced ingredients to keep the skin naturally nourished and radiant. One of the truly luxurious palette of personal care products", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/7/974e43ebiode00000007-01.jpg",
        price:200,
        ofPrice:300,
        quantity:10
    },
    {
        name:"Plum BodyLovin' Vanilla Vibes Body Oil",
        category:"skin",
        description:" Plum is inspired by the goodness in nature, and driven by the desire to be good and do good. Designed in a London studio, Plum products are always 100% vegan and cruelty-free. No parabens, phthalates or other doubtful - in any product. Marrying science and product expertise with innate love for nature, welcome to plum. Take in the goodness!", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/6/2/62446568906118410798_1.jpg",
        price:209,
        ofPrice:350,
        quantity:11
    },
    {
        name:"Dove Body Love Pro Age Body Butter, For Mature Skin, Paraben Free",
        category:"skin",
        description:"Dove loves your body unconditionally. Dove knows that mature skin can be tricky and it’s not always easy to keep your skin feeling and looking its best. Mature Skin losses moisture faster & becomes dry & dull fast. Your Skin needs a specially crafted body lotion for superior care that works on the skin from inside as well as outside Presenting Dove Body Love Pro Age Body Butter. A unique solution to manage your mature skin. ", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/d/3dd79e8dovex00000087_new_4.jpg",
        price:200,
        ofPrice:300,
        quantity:10
    },
    {
        name:"Bioderma Atoderm Huile De Douche 24h Hydration Ultra-Nourishing Anti-",
        category:"skin",
        description:"Bestow the gift of glow to your skin with FACES Bath N Body Milk & Honey Body Scrub, crafted with organically sourced ingredients to keep the skin naturally nourished and radiant. One of the truly luxurious palette of personal care products", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/7/974e43ebiode00000007-01.jpg",
        price:200,
        ofPrice:300,
        quantity:10
    },
    {
        name:"Mamaearth Vitamin C Underarm Scrub With Vitamin C And Turmeric For Brighter Underarms",
        category:"skin",
        description:"Worried about pigmented underarms? Now’s the time to put your arms up and celebrate because Mamaearth Vitamin C Underarm Scrub is here. Made with volcanic clay beads, the scrub exfoliates your underarm skin and helps get rid of dark spots and blemishes.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/e/9e8384e8906087778424_8.jpg",
        price:270,
        ofPrice:390,
        quantity:13
    },
    {
        name:"Biotique Bio Apricot Refreshing Body Wash - 800ml",
        category:"skin",
        description:"Apricot is one of the most nutritious, centuries-old fruits, rich in vitamins, especially vitamin E and A, linoleic acid, oleic acid, and minerals known for their revitalizing powers. Its light, absorbent nature makes it an ideal moisturizer and anti-aging agent to improve elasticity, skin clarity and suppleness, It improves skin complexion and reduces dark circles.It has antioxidant properties.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/f/ffa10fb8906009452111_1.jpg",
        price:200,
        ofPrice:300,
        quantity:15
    },
    {
        name:"Olay Ultra Moisture Body Wash With Avocado Oil",
        category:"skin",
        description:"Reveal beautiful, healthy-looking skin with Olay Ultra Moisture Body Wash with Avocado Oil. Now formulated with Olay’s Vitamin B3 Complex, it hydrates to plump surface skin cells, locking in natural moisture. The advanced formula, with avocado oil and Olay moisturizers, wraps your skin in a lush fragrance and leaves skin hydrated and silky smooth to the touch. A hydrating shower gel that moisturizes your skin gently and cleanses like no other!", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/e/9eb2e2d37000524090.jpg",
        price:200,
        ofPrice:300,
        quantity:13
    },
    {
        name:"Aroma Magic Mineral Glow Scrub (All Skin Types)",
        category:"skin",
        description:"The Aroma Magic Mineral Glow Scrub is quite a must-have! Its triple action scrub formula, made of natural exfoliators of Cornflower and grain Almond meal, gently buffs away dry skin and dead cells resulting in fresh, young, energized and healthy skin. Rice bran oil and aqua minerals remineralizer and enrich your skin reducing fine lines effectively.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/a/r/aroma_magic_mineral_glow_scrub_2000x.jpg",
        price:390,
        ofPrice:500,
        quantity:19
    },
    {
        name:"WOW Skin Science Ubtan Body Wash",
        category:"skin",
        description:"Ubtan - the beauty secret of the queens, courtesans, ladies and brides of yore – is a paste made with herbs, oils, natural powders and extracts. Ubtans are traditional ayurvedic beauty and wellness recipes meant to rejuvenate skin, body and mind. In the olden days, applying Ubtan was ritualistic. ", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/c/dcc62fd8904311902386_1.jpg",
        price:450,
        ofPrice:780,
        quantity:17
    },
    {
        name:"Lotus Professional Retemin Plant Retinol & Vitamin C Brightening Boost Night Cream",
        category:"skin",
        description:"Lotus Professional Retimen Plant Retinol + Vitamin-C Brightening Boost Night Cream with natural vitamin C derived from kakadu plum and bakuchiol extracts (plant retinol) helps charge your skin to let you take on your day with confidence. It locks moisture into your skin to let you wake up with fresh skin that glows from within. ", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/b/3b741delotaa00000044_nv1.jpg",
        price:450,
        ofPrice:710,
        quantity:11
    },
    {
        name:"O3+ Derma Cult Resurfacing Energy Facial Peel For Instant Brightening + Adaptogen",
        category:"skin",
        description:"O3+ Derma Cult Resurfacing Energy Facial Peel is a gentle exfoliater that is enriched with adaptogens like ginseng and goji berry which is backed by Eastern medicine and Ayurveda for over 5000 years. This facial peel is an instant brightening solution for every type of skin.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/e/4e33271o3-0951_7_.jpg",
        price:450,
        ofPrice:780,
        quantity:12
    },
    {
        name:"O3+ Sara Ayurveda Kumkumadi Brightness Facial Kit For Bridal Glow",
        category:"skin",
        description:"The kumkumadi oil blended in this facial is known as kumkumadi tailam, it is a creation of many different herbs which all come together and work as a mystic method to cure skin issues. The oil, which can also be used as a moisturizer is suitable for almost all skin types specifically for sensitive or dry flaky skin.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/6/c6f2409o3xxx00000114_0.jpg",
        price:230,
        ofPrice:470,
        quantity:15
    }
] 
 
  

function doIt(){
    axios.post(`${dataUrl}/users/signup`,sign,{withCredentials:true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  }

  function login(){
    axios.post(`${dataUrl}/users/login`,sign,{withCredentials:true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  }
  function logout(){
    axios.post(`${dataUrl}/users/logout/sujeet@gmail.com`,sign,{withCredentials:true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  }

  function check(){
    axios.get(`${dataUrl}/products`,{withCredentials:true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  }

  function get(){
    axios.get(`${dataUrl}/users/`).then((res)=>console.log(res)).catch((e)=>console.log(e))
  }

  async function make(){
    
    axios.post(`${dataUrl}/products/`).then((res)=>console.log(res)).catch((e)=>console.log(e))
    
  }

  /* axios.get("/users",{withCredentials: true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  axios.get("/products",{withCredentials: true}).then((res)=>console.log(res)).catch((e)=>console.log(e)) */
  //hello world
  
  return (
    <div style={{display:'flex'}} >Admin
      <button onClick={doIt} >sign It</button>
      <button onClick={login} >login It</button>
      <button onClick={logout} >log out</button>
      <button onClick={make} >make It</button>
      <button onClick={get}> get one</button>
      <br/>
      <button onClick={setC} >set</button><br/>
      <button onClick={getC} >get</button><br/>
      <button onClick={remC} >rem</button>
    </div>
  )
}

export default Admin