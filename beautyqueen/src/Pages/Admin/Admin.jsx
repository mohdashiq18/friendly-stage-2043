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



/*    const data=[
    {
        name:"Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
        price:1200,
        ofPrice:1116,
        quantity:1
    },
    {
        name:"Boroplus Aloe Vera Gel With Green Tea",
        category:"hair",
        description:"BoroPlus 100% Organic Aloe Vera Gel with Green Tea has an ultra-light texture to keep your skin hydrated and soft, every single day. It is the natural solution for your skin, without all the nasties like parabens, sulphates and mineral oil. It helps reduce pimples, moisturiser dry skin and acts as a natural sunscreen, to help soothe sunburns.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/9/f/9f5a0dd8901248154192_1.jpg",
        price:360,
        ofPrice:360,
        quantity:1
    },
    {
        name:"Bioderma Node DS+ Shampooing Anti-Dandruff Intense Shampoo",
        category:"hair",
        description:"Bioderma Node-Creme Shampoo Anti Flakes can be used in severe dandruff and itching.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/a14a2e6f570c727e7b2d241a9eba897f/9/3/93d343en_3401344957253-01.jpg",
        price:1607,
        ofPrice:1527,
        quantity:1
    },
    {
        name:"Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
        price:1688,
        ofPrice:1400,
        quantity:1
    },
    {
        name:"Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
        price:1400,
        ofPrice:1400,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Serum With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Hair Serum, comes loaded with the goodness of Aloe Essence that provides an instant shine and gives your hair a salon-finish, smoother and shinier look. It gives a professional quality vibrancy and shine to your hair. Enriched with the goodness of hydrating ingredients like the wondrous aloe plant, it is known to help condition and nourish hair and ensure gentle protection for your hair. Get the smoothness, moisture and shine you need. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/d/fd3cfb5trese00000046_1.jpg",
        price:400,
        ofPrice:400,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Mask With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Moisture Boost Hair Mask is designed to provide vibrant shine, a boost of moisture and help nourish hair from roots up to tip. It comes with the goodness of Aloe Essence which is known to be rich in anti-oxidants and moisturize your hair. It helps keep your hair hydrated, smooth and shiny. Enriched with the goodness of the wondrous aloe plant which is known to help condition and nourish hair , it ensures gentle protection for your hair while making it look shiny - Get the smoothness, moisture and shine you need ! It has 0% Parabens, 0% Mineral Oil, 0% Sulphates and 0% Dyes. TRESemme - Professionals love it. Your hair will too! Do I use instead of Conditioner? Yes, once a week.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/0/a/0a37fb5trese00000047_1.jpg",
        price:700,
        ofPrice:651,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Conditioner With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Conditioner is designed to gently condition and help moisturize dry, dull hair. Infused with the goodness of Aloe Essence , it is known to be rich in anti-oxidants and moisturize your hair, giving it a much-needed refreshed and hydrated look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/9/c/9cc7fb5trese00000045_1.jpg",
        price:500,
        ofPrice:465,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Shampoo With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/6/6/6644a8ctrese00000044_1.jpg",
        price:500,
        ofPrice:456,
        quantity:1
    },
    {
        name:"Tresemme Keratin Smooth Hair Serum",
        category:"hair",
        description:"TRESemmé Keratin Smooth Hair Serum helps your hair restore its keratin leaving them visibly straight and smoother. Infused with the goodness of Camellia Oil, this professional serum nourishes each strand of your hair making them silky smooth and easier to manage. This unique combination of Keratin and Camellia Oil conditions and strengthen your hair and provides them hydration and elasticity. With its dual action, TRESemmé Keratin Smooth Hair Serum helps you get up to 100% smoother hair with more shine.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/0/30cb3d88901030871252_1.jpg",
        price:350,
        ofPrice:350,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Damage Recovery Serum With Fermented Rice Water Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Damage Recovery Hair Serum helps repair damaged hair and lends lustre to your dull locks. It is infused with the goodness of Rice Essence which helps your hair recover from early signs of damage. It provides a professional quality vibrancy and shine to your hair so that you can flaunt those gorgeous locks.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/e/9/e91dfb5trese00000042_1.jpg",
        price:400,
        ofPrice:400,
        quantity:1
    },
    {
        name:"Sunsilk Almond & Honey Shampoo",
        category:"hair",
        description:"Does your hair feel rough and dry? Do you desire smooth, frizz protected and moisturized hair? Look no further! Sunsilk naturals range presents the all New Almond & Honey Smoothness Hair shampoo. It is infused with the goodness of natural ingredients like almond & honey. Our exclusive formula deeply nourishes your hair making it beautifully Smooth & Soft, moisturizes it and protects it from frizz. Sunsilk , combined with the goodness of these natural ingredients, created a shampoo that helps make hair smooth, moisturized and frizz protected. Honey has been popular for centuries for its nourishing properties.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/c/3cabc5a8901030805080_2.jpg",
        price:315,
        ofPrice:315,
        quantity:1
    }, 
    {
        name:"Indulekha Bringha Hair Strengthening Lepam",
        category:"hair",
        description:"Indulekha Bringha Hair Strengthening Lepam is an Ayurvedic Proprietary Product. This lepam (hair mask) is made with 6 precious herbs that nourish and strengthen hair, which helps in reducing hair fall. Indulekha bringha hair strengthening lepam gives non greasy feel post wash. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/c/8c9c39226479_s1-8901030897429.jpg",
        price:648,
        ofPrice:648,
        quantity:1
    },
    {
        name:"Livon Super Styler Hair Serum For Women & Men For Hair Straightening",
        category:"hair",
        description:"There isn’t a style in the world that perfectly straight hair doesn’t go with, and now achieving it is easier than ever, with Livon Hair Straightening Serum. Crafted for hair styling, the Livon Straightening Serum enables you to straighten your hair at home instantly. With Livon Hair Straightening Serum, get super-straight, super smooth, frizz free hair for up to 12 hours! Applying Livon Hair Straightening Serum is a gift that keeps on giving. Not only does it make your hair straighter with every application, it also protects every strand and reduces hair breakage by five times, breakage that is common when you use a straightener. No need to shampoo before using this hair serum.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/7/a/7ab36558901088159562_7.jpeg",
        price:375,
        ofPrice:375,
        quantity:1
    },
    {
        name:"Head & Shoulders Cool Menthol Anti-Dandruff Shampoo",
        category:"hair",
        description:"With a shot of tingly menthol for revitalizing freshness. Head & Shoulders Cool Menthol Shampoo leaves hair up to 100% dandruff free. This formula with menthol cools and cleanses scalp and hair, for a cool refreshing wash.Formulated with Head & Shoulders anti-dandruff fresh scent technology featuring enhanced fragrance notes for an improved in-shower scent experience",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/4/9/4902430773829_2__1_1_1.jpg",
        price:315,
        ofPrice:300,
        quantity:1
    },
    {
        name:"Shahnaz Husain Hair Touch-Up Plus - Brown",
        category:"hair",
        description:"Enriched with natural oils, the Shahnaz Hussain Hair Touch-Up Plus is a herbal formula specially developed to touch up the hair and conceal gray hair instantly. With the effect lasting only till the next shampoo, it provides safety from the harmful effects of chemical hair dyes. Leaves the hair looking naturally lustrous.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/c/8c2e07e205000000436877.jpg",
        price:335,
        ofPrice:302,
        quantity:1
    },
    {
        name:"Indulekha Bringha Hair Strengthening Serum",
        category:"hair",
        description:"Enriched with Bringharaj and 10 other herbs, this 100% Ayurvedic oil revives your roots to grow new hair. It's unique and easy to apply straight to the scalp selfie comb allows oil to penetrate deep inside the scalp directly, without getting your hands oily.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/3/23e539226478_s1-8901030897436.jpg",
        price:756,
        ofPrice:718,
        quantity:1
    },
    {
        name:"Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
        price:1200,
        ofPrice:1116,
        quantity:1
    },
    {
        name:"Boroplus Aloe Vera Gel With Green Tea",
        category:"hair",
        description:"BoroPlus 100% Organic Aloe Vera Gel with Green Tea has an ultra-light texture to keep your skin hydrated and soft, every single day. It is the natural solution for your skin, without all the nasties like parabens, sulphates and mineral oil. It helps reduce pimples, moisturiser dry skin and acts as a natural sunscreen, to help soothe sunburns.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/9/f/9f5a0dd8901248154192_1.jpg",
        price:360,
        ofPrice:360,
        quantity:1
    },
    {
        name:"Bioderma Node DS+ Shampooing Anti-Dandruff Intense Shampoo",
        category:"hair",
        description:"Bioderma Node-Creme Shampoo Anti Flakes can be used in severe dandruff and itching.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/a14a2e6f570c727e7b2d241a9eba897f/9/3/93d343en_3401344957253-01.jpg",
        price:1607,
        ofPrice:1527,
        quantity:1
    },
    {
        name:"Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
        price:1688,
        ofPrice:1400,
        quantity:1
    },
    {
        name:"Tresemme Pro Pure Damage Recovery Shampoo & Mask Combo",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine.", 
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/6/f658864trese00000061_1.jpg",
        price:1400,
        ofPrice:1400,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Serum With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Hair Serum, comes loaded with the goodness of Aloe Essence that provides an instant shine and gives your hair a salon-finish, smoother and shinier look. It gives a professional quality vibrancy and shine to your hair. Enriched with the goodness of hydrating ingredients like the wondrous aloe plant, it is known to help condition and nourish hair and ensure gentle protection for your hair. Get the smoothness, moisture and shine you need. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/f/d/fd3cfb5trese00000046_1.jpg",
        price:400,
        ofPrice:400,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Mask With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Moisture Boost Hair Mask is designed to provide vibrant shine, a boost of moisture and help nourish hair from roots up to tip. It comes with the goodness of Aloe Essence which is known to be rich in anti-oxidants and moisturize your hair. It helps keep your hair hydrated, smooth and shiny. Enriched with the goodness of the wondrous aloe plant which is known to help condition and nourish hair , it ensures gentle protection for your hair while making it look shiny - Get the smoothness, moisture and shine you need ! It has 0% Parabens, 0% Mineral Oil, 0% Sulphates and 0% Dyes. TRESemme - Professionals love it. Your hair will too! Do I use instead of Conditioner? Yes, once a week.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/0/a/0a37fb5trese00000047_1.jpg",
        price:700,
        ofPrice:651,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Conditioner With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Conditioner is designed to gently condition and help moisturize dry, dull hair. Infused with the goodness of Aloe Essence , it is known to be rich in anti-oxidants and moisturize your hair, giving it a much-needed refreshed and hydrated look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/9/c/9cc7fb5trese00000045_1.jpg",
        price:500,
        ofPrice:465,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Moisture Boost Shampoo With Aloe Essence Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Moisture Boost Shampoo is designed to gently cleanse and help moisturize dry and dull hair. Infused with the goodness of Aloe Essence - it helps retain the moisture of the hair, preserving and nourishing it from roots up to tip and gives your hair a hydrated and healthier look. Enriched with the goodness of the wondrous aloe plant which is known to work as a conditioner and detangling agent as well, it ensures gentle protection for your hair while making sure it doesn’t lose its shine. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/6/6/6644a8ctrese00000044_1.jpg",
        price:500,
        ofPrice:456,
        quantity:1
    },
    {
        name:"Tresemme Keratin Smooth Hair Serum",
        category:"hair",
        description:"TRESemmé Keratin Smooth Hair Serum helps your hair restore its keratin leaving them visibly straight and smoother. Infused with the goodness of Camellia Oil, this professional serum nourishes each strand of your hair making them silky smooth and easier to manage. This unique combination of Keratin and Camellia Oil conditions and strengthen your hair and provides them hydration and elasticity. With its dual action, TRESemmé Keratin Smooth Hair Serum helps you get up to 100% smoother hair with more shine.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/0/30cb3d88901030871252_1.jpg",
        price:350,
        ofPrice:350,
        quantity:1
    },
    {
        name:"TRESemme Pro Pure Damage Recovery Serum With Fermented Rice Water Sulphate Free & Paraben Free",
        category:"hair",
        description:"TRESemme Pro Pure Damage Recovery Hair Serum helps repair damaged hair and lends lustre to your dull locks. It is infused with the goodness of Rice Essence which helps your hair recover from early signs of damage. It provides a professional quality vibrancy and shine to your hair so that you can flaunt those gorgeous locks.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/e/9/e91dfb5trese00000042_1.jpg",
        price:400,
        ofPrice:400,
        quantity:1
    },
    {
        name:"Sunsilk Almond & Honey Shampoo",
        category:"hair",
        description:"Does your hair feel rough and dry? Do you desire smooth, frizz protected and moisturized hair? Look no further! Sunsilk naturals range presents the all New Almond & Honey Smoothness Hair shampoo. It is infused with the goodness of natural ingredients like almond & honey. Our exclusive formula deeply nourishes your hair making it beautifully Smooth & Soft, moisturizes it and protects it from frizz. Sunsilk , combined with the goodness of these natural ingredients, created a shampoo that helps make hair smooth, moisturized and frizz protected. Honey has been popular for centuries for its nourishing properties.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/3/c/3cabc5a8901030805080_2.jpg",
        price:315,
        ofPrice:315,
        quantity:1
    }, 
    {
        name:"Indulekha Bringha Hair Strengthening Lepam",
        category:"hair",
        description:"Indulekha Bringha Hair Strengthening Lepam is an Ayurvedic Proprietary Product. This lepam (hair mask) is made with 6 precious herbs that nourish and strengthen hair, which helps in reducing hair fall. Indulekha bringha hair strengthening lepam gives non greasy feel post wash. ",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/c/8c9c39226479_s1-8901030897429.jpg",
        price:648,
        ofPrice:648,
        quantity:1
    },
    {
        name:"Livon Super Styler Hair Serum For Women & Men For Hair Straightening",
        category:"hair",
        description:"There isn’t a style in the world that perfectly straight hair doesn’t go with, and now achieving it is easier than ever, with Livon Hair Straightening Serum. Crafted for hair styling, the Livon Straightening Serum enables you to straighten your hair at home instantly. With Livon Hair Straightening Serum, get super-straight, super smooth, frizz free hair for up to 12 hours! Applying Livon Hair Straightening Serum is a gift that keeps on giving. Not only does it make your hair straighter with every application, it also protects every strand and reduces hair breakage by five times, breakage that is common when you use a straightener. No need to shampoo before using this hair serum.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/7/a/7ab36558901088159562_7.jpeg",
        price:375,
        ofPrice:375,
        quantity:1
    },
    {
        name:"Head & Shoulders Cool Menthol Anti-Dandruff Shampoo",
        category:"hair",
        description:"With a shot of tingly menthol for revitalizing freshness. Head & Shoulders Cool Menthol Shampoo leaves hair up to 100% dandruff free. This formula with menthol cools and cleanses scalp and hair, for a cool refreshing wash.Formulated with Head & Shoulders anti-dandruff fresh scent technology featuring enhanced fragrance notes for an improved in-shower scent experience",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/4/9/4902430773829_2__1_1_1.jpg",
        price:315,
        ofPrice:300,
        quantity:1
    },
    {
        name:"Shahnaz Husain Hair Touch-Up Plus - Brown",
        category:"hair",
        description:"Enriched with natural oils, the Shahnaz Hussain Hair Touch-Up Plus is a herbal formula specially developed to touch up the hair and conceal gray hair instantly. With the effect lasting only till the next shampoo, it provides safety from the harmful effects of chemical hair dyes. Leaves the hair looking naturally lustrous.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/8/c/8c2e07e205000000436877.jpg",
        price:335,
        ofPrice:302,
        quantity:1
    },
    {
        name:"Indulekha Bringha Hair Strengthening Serum",
        category:"hair",
        description:"Enriched with Bringharaj and 10 other herbs, this 100% Ayurvedic oil revives your roots to grow new hair. It's unique and easy to apply straight to the scalp selfie comb allows oil to penetrate deep inside the scalp directly, without getting your hands oily.",
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/2/3/23e539226478_s1-8901030897436.jpg",
        price:756,
        ofPrice:718,
        quantity:1
    },
] 
 */
  

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
    axios.get(`${dataUrl}/users/getone`,{withCredentials:true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  }

 /*  async function make(){
    for(let i = 0; i<data.length; i++){
    axios.post(`${dataUrl}/products`,data[i],{withCredentials:true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
    }
  } */

  /* axios.get("/users",{withCredentials: true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  axios.get("/products",{withCredentials: true}).then((res)=>console.log(res)).catch((e)=>console.log(e)) */
  //hello world
  
  return (
    <div style={{display:'flex'}} >Admin
      <button onClick={doIt} >sign It</button>
      <button onClick={login} >login It</button>
      <button onClick={logout} >log out</button>
      <button onClick={check} >make It</button>
      <button onClick={get}> get one</button>
      <br/>
      <button onClick={setC} >set</button><br/>
      <button onClick={getC} >get</button><br/>
      <button onClick={remC} >rem</button>
    </div>
  )
}

export default Admin