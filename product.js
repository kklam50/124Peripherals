let storeProducts = {
    "Razer Viper Mini": {
        image: "assets/vipermini.png",
        brand: "Razer",
        price: "$29.99",
        stars: 4,
        reviews: 20,
        description: "Born to push the very limits of ultra-lightweight gaming, the Razer Viper Mini takes up a smaller form that remains just as big in performance. Shortening its length and grip width, we’ve worked with enthusiasts and esports athletes to hone its design even further, ensuring that absolute control now belongs in the hands of more gamers—so take hold of our leanest and lightest gaming mouse yet.",
        sensor: "Pixart PMW 3359",
        weight: "61g",
        color: "Black"
    },

    "Logitech G Pro X Superlight": {
        image: "assets/logitech-gpx.webp",
        brand: "Logitech",
        price: "$149.99",
        stars: 5,
        reviews: 140,
        description: "Less than 63 grams. Advanced low-latency LIGHTSPEED wireless. Sub-micron precision with HERO 25K sensor. Remove all obstacles with our lightest and fastest PRO mouse ever.",
        sensor: "HERO 25K",
        weight: "63g",
        color: "Black"
    },

    "Zowie Divina S2": {
        image: "assets/01-s2-divina-blue-top.png",
        brand: "Zowie",
        price: "$69.99",
        stars: 5,
        reviews: 300,
        description: "Symmetrical gaming mouse for esports. Shorter overall design. Driverless; plug and play. 3360 sensor ",
        sensor: "Pixart PMW 3360",
        weight: "82g",
        color: "Blue"
    },

    "Lamzu Atlantis": {
        image: "assets/lamzu_atlantis.webp",
        brand: "Lamzu",
        price: "$97.99",
        stars: 5,
        reviews: 10,
        description: "Lamzu Atlantis was built for demanding gamers who want full control. A heart of the mouse is its sensor – it determines its accuracy which is key during the game. The atlantis boasts a high-quality PAW3395 optical sensor which allows you to freely choose the DPI scale between 200 to 26000 DPI.",
        sensor: "Pixart PMW 3395",
        weight: "55g",
        color: "White"
    },

    "Pulsar XLite v2": {
        image: "assets/pulsar-xlite-v2.jpg",
        brand: "Pulsar",
        price: "$79.99",
        stars: 4,
        reviews: 130,
        description: "\"Simple but not simpler.” We kept this in mind all the time when we designed Xlite structure. We designed a structure as simple as possible but maintained its durability. In the result, you are getting high performance gaming mouse that is lighter than the egg in your hand.",
        sensor: "Pixart PAW 3370",
        weight: "59g",
        color: "White"
    },

    "Finalmouse Starlight-12": {
        image: "assets/pegasus_starlight-12.webp",
        brand: "Finalmouse",
        price: "$189.99",
        stars: 3,
        reviews: 50,
        description: "The Magnesium Chassis can slightly vary in thickness due to the manufacturing processes & complexities involved. Therefore the weight of each individual mouse may vary by +- 2 grams. <br> Final assembled weight including battery/feet/screws/paint/coating is ~42 grams for Small and ~47 grams for medium. <br> The bottom of the mouse is made of Ultem NOT magnesium for the purposes of allowing the wireless signal to escape. <br> It is therefore not as strong as magnesium and should not be squeezed or strength tested as one could with the sides or top of the mouse.",
        sensor: "Finalsensor",
        weight: "47g",
        color: "White"
    },

    "Pulsar X2": {
        image: "assets/pulsar_x2.webp",
        brand: "Pulsar",
        price: "$94.95",
        stars: 4,
        reviews: 350,
        description: "Ultralight weight below 60grams without the perforation. Equipped with the latest flagship 26K sensor. Lag-free 2.4Hz wireless technology. Shape that is delightfully comfortable.",
        sensor: "Pixart PMW 3395",
        weight: "52g",
        color: "White"
    },

    "Razer Deathadder v3": {
        image: "assets/razer_deathadder_v3.jpg",
        brand: "Razer",
        price: "$149.99",
        stars: 5,
        reviews: 200,
        description: "Victory takes on a new shape with the Razer DeathAdder V3 Pro. Refined and reforged with the aid of top esports pros, its iconic ergonomic form is now more than 25% lighter than its predecessor, backed by a set of cutting-edge upgrades to push the limits of competitive play.",
        sensor: "Razer Focus Pro (Pixart PMW 3950DM)",
        weight: "63g",
        color: "White"
    },

    "Vaxee Zygen NP-01s": {
        image: "assets/vaxee_zygen_np-01s.png",
        brand: "Vaxee",
        price: "$64.99",
        stars: 4,
        reviews: 10,
        description: "Light, stable and clear click feel <br> Adjustable click response time helps you find your preferred click rhythm <br> Minimal gap in shell design <br> Enhanced comfort <br> Durable and stable feet design <br> Raised front-end design",
        sensor: "Pixart PMW 3389",
        weight: "71g",
        color: "Black"
    },

    "Zowie EC2-CW": {
        image: "assets/zowie_ec2-cw.webp",
        brand: "Zowie",
        price: "$149.99",
        stars: 0,
        reviews: 0,
        description: "Wireless design with enhanced receiver <br> Asymmetrical ergonomic design <br> Reduced weight <br> 24-step scroll wheel <br> Driverless, plug and play <br> 3370 sensor",
        sensor: "Pixart PMW 3370",
        weight: "77g",
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

function loadProduct() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let product = params.productName;

    let app = document.getElementById("product-content");
    let html = "";

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
    <div id="product-images" class="col-md-6">
        <div class="preview">
            <div class="tab-pane active" id="product-pic"><img class="img-fluid" src=${storeProducts[product].image}></div>
        </div>
    </div>
    <div id="product-info" class="col-md-6">
        <h3 id="product-name" class="product-title fw-bold">${product}</h3>
        <p class="product-company fw-light">${storeProducts[product].brand}</p>
        <div id="product-rating" class="d-flex align-items-start">
            ${reviewStars}
            <div class="p-0">
                <span class="product-reviews align-right">&nbsp&nbsp</span>
            </div>
            <div class="p-0">
                <span class="product-reviews align-right">${storeProducts[product].reviews} reviews</span>
            </div>
        </div>
        <h4 class="d-inline product-price fw-bold">Price: </h4>
        <h5 class="d-inline product-price fw-bold">${storeProducts[product].price}</h5>
        <h4 class="product-description">Product Description</h4>
        <p class="product-description">
            ${storeProducts[product].description}
        </p>
        <h4 class="product-description">Specs</h4>
        <ul class="product-description">
            <li class="product-description">Sensor: ${storeProducts[product].sensor}</li>
            <li class="product-description">Weight: ${storeProducts[product].weight}</li>
            <li class="product-description">Color: ${storeProducts[product].color}</li>
        </ul>
    </div>
    `

    app.innerHTML = html;
}