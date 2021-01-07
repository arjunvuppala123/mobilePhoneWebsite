const express = require("express");
const app = express();
const cors = require("cors");
let Phone = require("./model");
const mongoose = require("mongoose");
const PORT = 4000;
app.use(cors());

mongoose.connect('mongodb://localhost:27017/phoneDB', {
    useNewUrlParser: true
})

const router = express.Router();

const connection = mongoose.connection;


connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

const Phones = [{
        name: 'OnePlus 8T',
        img: 'https://i.gadgets360cdn.com/products/large/oneplus-8t-373x800-1602689217.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.55-inch, 1080x2400 pixels',
        processor: 'Qualcomm Snapdragon 865',
        ram: '12GB',
        battery: '4500mAh',
        storage: '256GB',
        RearCamera: '48MP + 16MP + 5MP + 2MP',
        FrontCamera: '16MP',
        purchaseLink: 'https://www.amazon.in/dp/B085J17VVP/?&tag=googinhydr1-21&ref=pd_sl_5bkt1s4qio_e&adgrpid=115420589910&hvpone=&hvptwo=&hvadid=473346686317&hvpos=&hvnetw=g&hvrand=10256717946069371593&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061994&hvtargid=kwd-402142774526&hydadcr=500_2240782&gclid=CjwKCAiAudD_BRBXEiwAudakX1x60ekew7OpEBhcnkoZPmFgj6mJH8vIUqcvkGE0CBF0M9mo5MtaaRoC5WIQAvD_BwE'
    },
    {
        name: 'iPhone 12 Pro',
        img: 'https://i.gadgets360cdn.com/products/large/iphone-12-pro-399x800-1602617214.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.10-inch, 1170x2532 pixels',
        processor: 'Apple A14 Bionic',
        ram: '6GB',
        battery: '2815mAh',
        storage: '64GB',
        RearCamera: '12MP + 12MP + 12MP',
        FrontCamera: '12MP',
        purchaseLink: 'https://www.reliancedigital.in/apple-iphone-12-pro-max-256-gb-pacific-blue/p/491901577?gclid=CjwKCAiAudD_BRBXEiwAudakX-XwIYkQwnvqkJOq29I2EUm1hTh5HdWuEbAucQ9_2QDL3q7S9PirmhoC-WYQAvD_BwE'
    },
    {
        name: 'Samsung Galaxy S20 FE',
        img: 'https://i.gadgets360cdn.com/products/large/samsung-galaxys20fe-cloud-navy-front-381x800-1600870270.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.50-inch, 1080x2400 pixels',
        processor: 'Samsung Exynos 990',
        ram: '8GB',
        battery: '4500mAh',
        storage: '128GB',
        RearCamera: '12MP + 12MP + 8MP',
        FrontCamera: '32MP',
        purchaseLink: 'https://www.amazon.in/Test-Exclusive-2050-Multi-Storage/dp/B086KF5SFQ/ref=asc_df_B086KF5SFQ/?tag=googleshopdes-21&linkCode=df0&hvadid=397009555327&hvpos=&hvnetw=g&hvrand=2713259045881725895&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061994&hvtargid=pla-1087950065188&psc=1&ext_vrnc=hi'
    },
    {
        name: 'Samsung Galaxy Note 20 Ultra',
        img: 'https://i.gadgets360cdn.com/products/large/samsung-galaxy-note-20-ultra-375x800-1596639312.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.90-inch, 1440x3200 pixels',
        processor: 'Samsung Exynos 990',
        ram: '12GB',
        battery: '4500mAh',
        storage: '256GB',
        RearCamera: '108MP + 12MP + 12MP',
        FrontCamera: '10MP',
        purchaseLink: 'https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B089MSCW8P/ref=asc_df_B089MSCW8P/?tag=googleshopdes-21&linkCode=df0&hvadid=397001268433&hvpos=&hvnetw=g&hvrand=9739783453447000556&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061994&hvtargid=pla-937009906003&psc=1&ext_vrnc=hi'
    },
    {
        name: 'Google Pixel 4a',
        img: 'https://i.gadgets360cdn.com/products/large/google-pixel-4a-390x800-1596515357.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '5.81-inch, 1080x2340 pixels',
        processor: 'Qualcomm Snapdragon 730G',
        ram: '6GB',
        battery: '3140mAh',
        storage: '128GB',
        RearCamera: '12.2MP',
        FrontCamera: '8MP',
        purchaseLink: 'https://www.amazon.in/Google-Pixel-5G-128GB-Black/dp/B08H8X23ZB/ref=asc_df_B08H8X23ZB/?tag=googleshopdes-21&linkCode=df0&hvadid=397009354513&hvpos=&hvnetw=g&hvrand=11090232152826779824&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061994&hvtargid=pla-971890980182&psc=1&ext_vrnc=hi'
    },
    {
        name: 'Asus ROG Phone 3',
        img: 'https://i.gadgets360cdn.com/products/large/asus-rog-phone-3-db-498x800-1595477051.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.59-inch, 1080x2340 pixels',
        processor: 'Qualcomm Snapdragon 865+',
        ram: '8GB',
        battery: '6000mAh',
        storage: '128GB',
        RearCamera: '64MP + 13MP + 5MP',
        FrontCamera: '24MP',
        purchaseLink: 'https://www.flipkart.com/asus-rog-phone-3-black-128-gb/p/itmf8623d755871d?pid=MOBFUXPBV3TFMPAH&lid=LSTMOBFUXPBV3TFMPAH63D3RA&marketplace=FLIPKART&cmpid=content_mobile_10028320726_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,434563140712,,,,c,,,,,,,&ef_id=CjwKCAiAudD_BRBXEiwAudakX8j8iL3tz3adx-XhwenUlqzmfjaYZIUYTtQxz4lhAYmKeHUtzt0rmBoC7XsQAvD_BwE:G:s&s_kwcid=AL!739!3!434563140712!!!u!1023089103324!&gclid=CjwKCAiAudD_BRBXEiwAudakX8j8iL3tz3adx-XhwenUlqzmfjaYZIUYTtQxz4lhAYmKeHUtzt0rmBoC7XsQAvD_BwE&gclsrc=aw.ds'
    },
    {
        name: 'OnePlus Nord',
        img: 'https://i.gadgets360cdn.com/products/large/oneplus-nord-379x800-1595392253.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.44-inch, 1080x2400 pixels',
        processor: 'Qualcomm Snapdragon 865',
        ram: '12GB',
        battery: '4115mAh',
        storage: '256GB',
        RearCamera: '48MP + 8MP + 5MP + 2MP',
        FrontCamera: '32MP + 8MP',
        purchaseLink: 'https://www.amazon.in/OnePlus-Nord-Marble-256GB-Storage/dp/B0869855B8/ref=asc_df_B0869855B8/?tag=googleshopdes-21&linkCode=df0&hvadid=396984823389&hvpos=&hvnetw=g&hvrand=12286263766018245564&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061994&hvtargid=pla-937029107745&psc=1&ext_vrnc=hi'
    },
    {
        name: 'Vivo X50',
        img: 'https://i.gadgets360cdn.com/products/large/vivo-x50-pro-1-380x800-1594882649.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.56-inch, 1080x2376 pixels',
        processor: 'Qualcomm Snapdragon 765G',
        ram: '12GB',
        battery: '4315mAh',
        storage: '128GB',
        RearCamera: '48MP + 13MP + 8MP + 13MP',
        FrontCamera: '32MP',
        purchaseLink: 'https://www.google.com/aclk?sa=L&ai=DChcSEwiqsqe1ioXuAhXYq5YKHSSiBncYABAEGgJ0bA&ae=2&sig=AOD64_1-364ysQ3YS2s8bNdbgD9E1Jsbgg&ctype=5&q=&ved=2ahUKEwjc-pu1ioXuAhU_zzgGHWftBR4Q9aACegQIBhBL&adurl='
    },
    {
        name: 'Realme X3 SuperZoom',
        img: 'https://i.gadgets360cdn.com/products/large/realme-x3-superzoom-375x800-1593071012.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.60-inch, 1080x2400 pixels',
        processor: 'Qualcomm Snapdragon 855+',
        ram: '12GB',
        battery: '4200mAh',
        storage: '256GB',
        RearCamera: '64MP + 8MP + 8MP + 2MP',
        FrontCamera: '32MP + 8MP',
        purchaseLink: 'https://www.amazon.in/Realme-SuperZoom-Glacier-Blue-128/dp/B081R4YX3L'
    },
    {
        name: 'Infinix Zero 8i',
        img: 'https://i.gadgets360cdn.com/products/large/infinix-zero-8i-462x800-1602224172.jpg?downsize=260:*&output-quality=80&output-format=webp',
        display: '6.85-inch, 1080x2460 pixels',
        processor: 'MediaTek Helio G90T',
        ram: '8GB',
        battery: '4500mAh	',
        storage: '128GB',
        RearCamera: '48MP + 8MP + 2MP + AI lens',
        FrontCamera: '16MP + 8MP',
        purchaseLink: 'https://www.amazon.in/Infinix-Display-Battery-Triple-Camera/dp/B081LYBZBS'
    }
]

app.get('/', function(req, res) {
    Phone.find({}, function(err, foundItems) {
        if (err) {
            res.send(err);
        } else {
            res.send(foundItems);
        }
    });
});

app.post("/", function(req, res) {

    Phone.find({}, function(err, foundItems) {

        if (foundItems.length === 0) {
            Phone.insertMany(Phones, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully savevd default items to DB.");
                }
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
    });

});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});