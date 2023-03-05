let storeProducts = {
    "Razer Viper Mini": {
        image: "assets/vipermini.png",
        brand: "Razer",
        price: "$29.99",
        stars: 4,
        reviews: 20,
        material: "Plastic  Shell",
        color: "Black"
    },

    "Logitech G Pro X Superlight": {
        image: "assets/logitech-gpx.webp",
        brand: "Logitech",
        price: "$149.99",
        stars: 5,
        reviews: 140,
        material: "Plastic  Shell",
        color: "Black"
    },

    "Zowie Divina S2": {
        image: "assets/01-s2-divina-blue-top.png",
        brand: "Zowie",
        price: "$69.99",
        stars: 5,
        reviews: 300,
        material: "Plastic Shell",
        color: "Light Blue"
    },

    "Lamzu Atlantis": {
        image: "assets/lamzu_atlantis.webp",
        brand: "Lamzu",
        price: "$97.99",
        stars: 5,
        reviews: 10,
        material: "Plastic Shell",
        color: "White"
    },

    "Pulsar XLite v2": {
        image: "assets/pulsar-xlite-v2.jpg",
        brand: "Pulsar",
        price: "$79.99",
        stars: 4,
        reviews: 130,
        material: "Plastic Shell",
        color: "White"
    },

    "Finalmouse Starlight-12": {
        image: "assets/pegasus_starlight-12.webp",
        brand: "Finalmouse",
        price: "$189.99",
        stars: 3,
        reviews: 50,
        material: "Magnesium Shell",
        color: "White"
    },

    "Pulsar X2": {
        image: "assets/pulsar_x2.webp",
        brand: "Pulsar",
        price: "$94.95",
        stars: 4,
        reviews: 350,
        material: "Plastic Shell",
        color: "White"
    },

    "Razer Deathadder v3": {
        image: "assets/razer_deathadder_v3.jpg",
        brand: "Razer",
        price: "$149.99",
        stars: 5,
        reviews: 200,
        material: "Plastic Shell",
        color: "White"
    },

    "Vaxee Zygen NP-01s": {
        image: "assets/vaxee_zygen_np-01s.png",
        brand: "Vaxee",
        price: "$64.99",
        stars: 4,
        reviews: 10,
        material: "Plastic Shell",
        color: "Black"
    },

    "Zowie EC2-CW": {
        image: "assets/zowie_ec2-cw.webp",
        brand: "Zowie",
        price: "$149.99",
        stars: 0,
        reviews: 0,
        material: "Plastic Shell",
        color: "Black"
    },
}

let productNames = [
    "Razer Viper Mini", 
    "Logitech G Pro X Superlight", 
    "Zowie Divina S2", 
    "Lamzu Atlantis", 
    "Pulsar XLite v2", 
    "Finalmouse Starlight-12", 
    "Pulsar X2", 
    "Razer Deathadder v3", 
    "Vaxee Zygen NP-01s", 
    "Zowie EC2-CW"
]

function loadProducts() {
    let app = document.getElementById("product-grid")
    let html="";

    for (let product of productNames) {
        let reviewStars = "";
        let starCounter = 0;

        for (let i = 0; i < 5; i++) {
            if (starCounter < storeProducts[product].stars) {
                reviewStars += 
                `
                <div class="p-0">
                    <i class="bi bi-star-fill"></i>
                </div>
                `
                starCounter += 1;
            }
            else {
                reviewStars += 
                `
                <div class="p-0">
                    <i class="bi bi-star"></i>
                </div>
                `
            }
        }

        html += 
        `
        <div title="${product}" id="${product}" class="card border-0 hovereffect" style="width: 20rem">
            <img src=${storeProducts[product].image} class="card-img-top img-fluid" alt="${storeProducts[product].brand} ${product}" title="${storeProducts[product].brand} ${product}">
            <div class="card-body">
              <p class="product-title fw-bold ">${product}</p>
              <p class="product-company fw-light">${storeProducts[product].brand}</p>
              <p class="product-price fw-bold">${storeProducts[product].price}</p>
              <p class="product-price">${storeProducts[product].material}</p>
              <p class="product-price">${storeProducts[product].color}</p>
              <div class="d-flex align-items-start">
                ${reviewStars}
                <div class="p-0">
                    <span class="product-reviews align-right">&nbsp&nbsp</span>
                </div>
                <div class="p-0">
                    <span class="product-reviews align-right">${storeProducts[product].reviews} reviews</span>
                </div>
              </div>
            </div>
            <a href="product.html?productName=${product}" class="stretched-link"></a>
        </div>
        `
    }

    app.innerHTML = html;
}