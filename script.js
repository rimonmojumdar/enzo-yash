
const menProducts = [
    { name: "Slim Fit Shirt", icon: "👔" },
    { name: "Casual Blazer", icon: "🧥" },
    { name: "Denim Jacket", icon: "🧥" },
    { name: "Chino Pant", icon: "👖" },
    { name: "Polo T-Shirt", icon: "👕" },
    { name: "Leather Belt", icon: "👖" },
    { name: "Formal Shoe", icon: "👞" },
    { name: "Cotton Panjabi", icon: "👔" },
    { name: "Winter Hoodie", icon: "🧥" },
    { name: "Cargo Shorts", icon: "🩳" },
    { name: "Smart Watch", icon: "⌚" },
    { name: "Sunglasses", icon: "🕶️" },
    { name: "Wallet", icon: "👛" },
    { name: "Backpack", icon: "🎒" },
    { name: "Perfume", icon: "🧴" }
];

const womenProducts = [
    { name: "Floral Gown", icon: "👗" },
    { name: "Silk Saree", icon: "👗" },
    { name: "Designer Kurti", icon: "👗" },
    { name: "Handbag", icon: "👜" },
    { name: "Heels", icon: "👠" },
    { name: "Jewelry Set", icon: "💍" },
    { name: "Summer Top", icon: "👚" },
    { name: "Leggings", icon: "🧦" },
    { name: "Makeup Kit", icon: "💄" },
    { name: "Ears Rings", icon: "👂" },
    { name: "Scarf", icon: "🧣" },
    { name: "Anarkali Suit", icon: "👗" },
    { name: "Party Dress", icon: "👗" },
    { name: "Watch", icon: "⌚" },
    { name: "Shampoo", icon: "🧴" }
];

const kidsProducts = [
    { name: "Cartoon Tee", icon: "👕" },
    { name: "Soft Pajamas", icon: "👕" },
    { name: "Baby Frock", icon: "👗" },
    { name: "Toy Car", icon: "🚗" },
    { name: "Teddy Bear", icon: "🧸" },
    { name: "School Bag", icon: "🎒" },
    { name: "Kids Watch", icon: "⌚" },
    { name: "Sneakers", icon: "👟" },
    { name: "Diaper Bag", icon: "👜" },
    { name: "Baby Romper", icon: "👕" },
    { name: "Lego Set", icon: "🧱" },
    { name: "Drawing Kit", icon: "🎨" },
    { name: "Water Bottle", icon: "🥤" },
    { name: "Sweater", icon: "🧥" },
    { name: "Cap", icon: "🧢" }
];

function generateItems(id, list) {
    const grid = document.getElementById(id);
    list.forEach((item) => {
        const price = Math.floor(Math.random() * 50) + 20;
        grid.innerHTML += `
            <div class="product-card">
                <div style="font-size: 50px;">${item.icon}</div>
                <h3>${item.name}</h3>
                <p class="price">$${price}</p>
                <button class="buy-btn" onclick="openOrder('${item.name}')">Buy Now</button>
            </div>
        `;
    });
}


const pullTrigger = document.getElementById('pull-trigger');
const themeColors = ['#ff4757', '#2ecc71', '#f1c40f', '#3498db', '#9b59b6'];
let colorIndex = 0;

function toggleLamp() {
    document.body.classList.toggle('lamp-on');
    if (document.body.classList.contains('lamp-on')) {
        colorIndex = (colorIndex + 1) % themeColors.length;
        document.documentElement.style.setProperty('--primary-color', themeColors[colorIndex]);
    }
}

pullTrigger.addEventListener('click', toggleLamp);
pullTrigger.addEventListener('touchstart', toggleLamp); 

document.getElementById('auth-toggle').addEventListener('click', function() {
    const title = document.getElementById('form-title');
    const btn = document.getElementById('login-btn');
    if (title.innerText === "Member Login") {
        title.innerText = "Create Account";
        btn.innerText = "Register Now";
        this.innerText = "Login here";
    } else {
        title.innerText = "Member Login";
        btn.innerText = "Enter Shop";
        this.innerText = "Create Account";
    }
});


document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('shop-page').style.display = 'block';
    document.body.style.background = '#f0f2f5';
    
    generateItems('men-items', menProducts);
    generateItems('women-items', womenProducts);
    generateItems('kids-items', kidsProducts);
});


let selectedItem = "";
function openOrder(item) {
    selectedItem = item;
    document.getElementById('payment-modal').style.display = 'flex';
}

function closeModal() { 
    document.getElementById('payment-modal').style.display = 'none'; 
}

function showForm(method) {
    document.getElementById('method-name').innerText = method;
    document.getElementById('pay-step').style.display = 'none';
    document.getElementById('ship-step').style.display = 'block';
}

function confirmOrder(e) {
    e.preventDefault();
    alert("ধন্যবাদ! আপনার '" + selectedItem + "' অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।");
    closeModal();
}