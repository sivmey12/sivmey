const products = [
    {
        id: 1,
        name: "Iphone 14 Pro Max",
        price: 1300,
        image: "https://www.digitaltrends.com/wp-content/uploads/2022/09/iPhone-14-Pro-Deep-Purple-Back.jpg",
        category: "phone",
        description: "iphone 14"
    },
    {
        id: 2,
        name: "Hoddi",
        price: 15.00,
        image: "https://tse4.mm.bing.net/th?id=OIP.mHN1_GCh3VpICGc4raxOIwHaHZ&pid=Api&P=0&h=220",
        category: "clothes",
        description: "Hoddi"
    },
    {
        id: 3,
        name: "shose",
        price: 25.00,
        image: "https://uncrate.com/p/2019/12/nike-dior-air-jordan-1-1.jpg",
        category: "shose",
        description: "shose"
    }
    ,{
        id: 4,
        name: "hat",
        price: 5.00,
        image: "http://clipart-library.com/img1/2026154.png",
        category: "clothes",
        description: "shirt"
    }
    ,
    {
        id: 5,
        name: "shirt",
        price: 15.00,
        image: "https://i5.walmartimages.com/asr/56029587-09bc-4576-8fe1-37d928e884bd_1.ca3a5d9cea4d544bed44d0ebd333c7a5.jpeg",
        category: "clothes",
        description: "shirt"
    },
    {
        id : 6,
        name : "pants",
        price : 10.00,
        image : "https://dosi-in.com/images/detailed/31/PANT_2.0_5.jpg",
        category : "clothes",
        description : "pants"
    }
    ,
    {
        id : 7,
        name : "shoes",
        price : 12.00,
        image : "https://tse4.mm.bing.net/th?id=OIP.CTpVBeL-wHpY8MOiqoDeAQHaHa&pid=Api&P=0&h=220",
        category : "shoes",
        description : "shoes"
    },
    {
        id : 8,
        name : "headphone",
        price : 500.00,
        image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5761/5761208_rd.jpg",
        category : "headphone",
        description : "headphone"
    },
    {
        id : 9,
        name : "Iphone 14",
        price : 1000,
        image : "https://kontorsenteret.no/wp-content/uploads/2022/09/iPhone-14-256GB.jpg",
        category : "phone",
        description : "Iphone"
    },
    {
        id : 10,
        name : "Hoddi",
        price : 15.00,
        image : "https://tse2.mm.bing.net/th?id=OIP.v-lBE0SHNU-4JKUg7vm2zQHaJQ&pid=Api&P=0&h=220",
        category : "clothes",
        description : "Hoddi"
    },
    {
        id : 11,
        name : "pants",
        price : 20.00,
        image : "https://bananarepublic.gap.com/webcontent/0016/241/974/cn16241974.jpg",
        category : "clothes",
        description : "pants"
    }
    ,
    {
        id : 12,
        name : "shoes",
        price : 35.00,
        image : "http://images6.fanpop.com/image/photos/33400000/Pink-heels-womens-shoes-33470331-1600-1188.jpg",
        category : "shoes",
        description : "shoes"
    },
    {
        id : 13,
        name : "headphone",
        price : 200.00,
        image : "https://www.bhphotovideo.com/images/images2000x2000/sony_wh1000xm2_n_1000x_wireless_noise_canceling_headphones_1360722.jpg ",
        category : "headphone",
        description : "headphone"
    },
    {
        id : 14,
        name : "Iphone 12",
        price : 900,
        image : "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
        category : "phone",
        description : "Iphone"
    },
    {
        id : 15,
        name : "Hoddi",
        price : 35.00,
        image : "https://i.etsystatic.com/18142510/r/il/f9c33f/3063327778/il_1588xN.3063327778_fn71.jpg",
        category : "clothes",
        description : "Hoddi"
    },
    {
        id : 16,
        name : "pants",
        price : 30.00,
        image : "http://www.indianajones.dk/Webside/Billeder/Indy-side/Gear/pants%20taupe.jpg",
        category : "clothes",
        description : "pants"
    }
    ,
    {
        id : 17,
        name : "shoes",
        price : 20.00,
        image : "http://pngimg.com/uploads/women_shoes/women_shoes_PNG7472.png",
        category : "shoes",
        description : "shoes"
    },
    {
        id : 18,
        name : "headphone",
        price : 20.00,
        image : "https://www.bhphotovideo.com/images/images2500x2500/focal_fsphearwlbk_sphear_wireless_in_ear_headphones_1603168.jpg",
        category : "headphone",
        description : "headphone"
    },
    {
        id : 19,
        name : "iphone 11",
        price : 600,
        image : "https://exitocol.vtexassets.com/arquivos/ids/4827396/celular-iphone-11-de-64gb-color-lila.jpg?v=637396291860930000",
        category : "phone",
        description : "Iphone"
    },
    {
        id : 20,
        name : "Hoddi",
        price : 25.00,
        image : "https://www.pngkey.com/png/full/101-1017710_hoodie-grey-hoodie-front-and-back.png",
        category : "clothes",
        description : "Hoddi"
    },
    {
        id : 21,
        name : "pants",
        price : 30.00,
        image : "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AJ9X4H/db6aee01e3794e5ebfdb7101e40b871c.jpg/f/carhartt-wip-regular-cargo-pant-black.jpg?borderless=1&width=1920",
        category : "clothes",
        description : "pants"
    },
    {
        id : 22,
        name : "shoes",
        price : 25.00,
        image : "https://www.streetlegalshoes.co.nz/user/images/6416.jpg?t=2008141545",
        category : "shoes",
        description : "shoes"
    },
    {
        id : 23,
        name : "headphone",
        price : 50.00,
        image : "http://img14.deviantart.net/e8c9/i/2013/045/d/9/custom_headphones_ii_by_vegemiteguzzler-d5uvoqi.jpg",
        category : "headphone",
        description : "headphone"
    },
    {
        id : 24,
        name : "phone",
        price : 1000,
        image : "https://www.technobugg.com/wp-content/uploads/2022/09/Oppo-A17-Unveiled-With-50MP-Camera-1200x864.jpg",
        category : "phone",
        description : "Iphone"
    },
    {
        id : 25,
        name : "Hoddi",
        price : 25.00,
        image : "https://cdna.lystit.com/photos/underarmour/53d5400a/under-armour-Carbon-HeatherRIDGE-REAPER-SNO-Mens-Ua-Storm-Armour-Fleece-Camo-Hoodie.jpeg",
        category : "clothes",
        description : "Hoddi"
    },
    {
        id : 26,
        name : " yoga pants",
        price : 30.00,
        image : "https://cdn.editorialist.com/wp-content/uploads/2020/04/Yoga-Pants_0001_13a-Athleta-Ultra-High-Rise-Elation-Tight.jpg",
        category : "clothes",
        description : "pants"
    },
    {
        id : 27,
        name : "shoes",
        price : 20.00,
        image : "https://tse1.mm.bing.net/th?id=OIP.hDOUH_Cqq7dtbVWnhyjgMQHaFM&pid=Api&P=0&h=220",
        category : "shoes",
        description : "shoes"
    },
    {
        id : 28,
        name : "headphone",
        price : 50.00,
        image : "https://tse1.mm.bing.net/th?id=OIP.dG3xu1taYHrpUAzYA1X7QwHaHa&pid=Api&P=0&h=220",
        category : "headphone",
        description : "headphone"
    }
]
// //seroll change background color to header
// window.addEventListener("scroll", () => {
//     if(window.scrollY > 100){
//         header.classList.add("sticky");
//     }else{
//         header.classList.remove("sticky");
//     }
// });
const productLists = document.querySelector(".product-list");

function getAllproducts(){
    let item = "";
    for(var i in products){
        item += `<div class="item">
            <img src="${products[i].image}" alt="${products[i].name}">
            <div class="details">
                <h3>${products[i].name}</h3>
                <p class="price">$${products[i].price}</p>
            </div>
            <div class="footer">
                <button class="add-to-cart">Add to cart</button>
                <i class="bi bi-star"></i>
            </div>
        </div>`;
    }
    productLists.innerHTML = item;
}
getAllproducts();

// //example
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
});
// display text
const text = ['Iplone','Clothes','Shoes','headphone','Hoddi','Bag','pants','Laptop','hoddi'];
let i = 0;
setInterval(function(){
    i++;
    if(i === text.length){
        i = 0;
    }
    document.querySelector('#text').innerHTML = text[i];
},2000);

function displayProducts(productsArray) {
    let item = "";
    for(var i in productsArray){
        item = item + `<div class="item">
            <img src="${productsArray[i].image}" alt="${productsArray[i].name}">
            <div class="details">
                <h3>${productsArray[i].name}</h3>
                <p class="price">$${productsArray[i].price}</p>
            </div>
            <div class="footer">
                <button class="add-to-cart">Add to cart</button>
                <i class="bi bi-star"></i>
            </div>
        </div>`;
    
}
    productLists.innerHTML = item;
}

function getAllProducts(){
    displayProducts(products);
}

getAllProducts();

// Event listeners for category buttons
const filterByCategory = (C) => {
    const filterByProducts = products.filter((p) =>{
        return p.category === C;
    });
    displayProducts(filterByProducts);
}

//click on button clothes display only products clothes
const clothes = document.querySelector(".clothes");

clothes.addEventListener("click", () => {
    filterByCategory("clothes");
});
//click on button headphones display only products headphones

const headphones = document.querySelector(".headphone");

headphones.addEventListener("click", () => {
    filterByCategory("headphone");
});

// //click on button shoes display only products shoes
const shoes = document.querySelector(".shoes");

shoes.addEventListener("click", () => {
    filterByCategory("shoes");
});

// //click on button pants display only products pants

const pants = document.querySelector(".pants");

pants.addEventListener("click", () => {
    filterByCategory("pants");
});

// //click on button bag display only products bag

const bag = document.querySelector('.Bag');

bag.addEventListener("click", () => {
    filterByCategory("bag");
});
// click on button shirt display onnly product shirt

const shirt = document.querySelector(".Tshirt");

shirt.addEventListener("click", () => {
    filterByCategory("Tshirt");
});

// //click on button laptop display only products laptop

const laptop = document.querySelector(".laptop");

laptop.addEventListener("click", () => {
    filterByCategory("laptop");
});
//click on button iphone display only product iphone

const Iphone = document.querySelector(".Iphone");

Iphone.addEventListener("click", () => {
    filterByCategory("Iphone");
});

//click on button All display only product All

const All = document.querySelector(".all");

All.addEventListener("click", () => {
    getAllProducts();
});


//search product
function searchProducts(query){
    const filteredProducts = productLists.filter((product) =>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    });
    displayProducts(filteredProducts);
}
const input = document.getElementById("search-input");
const iconsearch = document.querySelector(".searchbtn");

iconsearch.addEventListener("click", () => {
    const query = input.value;
    searchProducts(query);
});
input.addEventListener('keyup',(e) =>{
    if(e.key === "Enter"){
        const query = input.value;
        searchProducts(query);
    }
});
