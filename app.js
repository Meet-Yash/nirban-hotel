let currentLang = "EN";
let activeCategory = "ALL";
let selectedVariants = {};
let cart = [];
let orderMode = "DELIVERY";
let paymentMethod = "UPI";
let customerGpsUrl = "";

MENU_ITEMS.forEach(item => {
  selectedVariants[item.id] = Object.keys(item.variants)[0];
});

function calculateGstBreakdown(subtotal) {
  const taxableValue = +(subtotal / 1.05).toFixed(2);
  const totalGst = +(subtotal - taxableValue).toFixed(2);
  const cgst = +(totalGst / 2).toFixed(2);
  const sgst = +(totalGst - cgst).toFixed(2);
  return {
    subtotal: subtotal.toFixed(2),
    taxableValue: taxableValue.toFixed(2),
    totalGst: totalGst.toFixed(2),
    cgst: cgst.toFixed(2),
    sgst: sgst.toFixed(2),
    grandTotal: subtotal.toFixed(2)
  };
}

function translateVariantLabel(vKey) {
  if (currentLang === "EN") return vKey;
  const map = {
    "Quarter": "क्वार्टर",
    "Half": "हाफ",
    "Full": "फुल",
    "Half (4 Pcs)": "हाफ (4 पीस)",
    "Full (8 Pcs)": "फुल (8 पीस)",
    "Plate": "प्लेट",
    "Piece": "पीस",
    "Bowl": "कटोरी",
    "Glass": "गिलास"
  };
  return map[vKey] || vKey;
}

function toggleLanguage() {
  currentLang = currentLang === "EN" ? "HI" : "EN";
  
  // Update UI Text based on Language
  document.getElementById("langBtnLabel").innerText = currentLang === "EN" ? "अ हिंदी" : "A English";
  document.getElementById("navMenuLink").innerText = currentLang === "EN" ? "Digital Menu" : "डिजिटल मेनू";
  document.getElementById("navReviewsLink").innerText = currentLang === "EN" ? "Reviews" : "ग्राहकों की राय";
  document.getElementById("navLocationLink").innerText = currentLang === "EN" ? "Location" : "लोकेशन";
  document.getElementById("navCartLabel").innerText = currentLang === "EN" ? "Cart" : "कार्ट";
  
  document.getElementById("heroBadgeText").innerText = currentLang === "EN" ? "Open Now • GST Verified Restaurant (08CSUPK5608Q3ZN)" : "अभी खुला है • जीएसटी प्रमाणित रेस्टोरेंट (08CSUPK5608Q3ZN)";
  document.getElementById("heroTitle").innerHTML = currentLang === "EN" 
    ? `Asli Rajasthani <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">Zayka</span> in Chirawa.` 
    : `चिड़ावा का असली राजस्थानी <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">जैका</span>।`;
  document.getElementById("heroSubtitle").innerText = currentLang === "EN" 
    ? "Famous for our rich Rajasthani Laal Maas, Nirban Special Mutton, Chicken Taka-Tak, Roasted Snacks & Fresh Veg Paneer delicacies. Scan Table QR or order online!" 
    : "हमारे प्रसिद्ध राजस्थानी लाल मास, निर्बाण स्पेशल मटन, चिकन टका-टक, रोस्टेड स्नैक्स और ताजे पनीर व्यंजनों का आनंद लें।";
  document.getElementById("heroExploreBtn").innerText = currentLang === "EN" ? "Explore Full Menu (75 Dishes)" : "पूरा मेनू देखें (75 आइटम)";
  
  document.getElementById("menuTagline").innerText = currentLang === "EN" ? "Official Rate Card Menu (Inclusive of 5% GST)" : "आधिकारिक रेट कार्ड मेनू (5% जीएसटी सहित)";
  document.getElementById("menuHeading").innerText = currentLang === "EN" ? "Explore Our Menu" : "हमारा मेनू देखें";
  document.getElementById("menuSubheading").innerText = currentLang === "EN" ? "Select Quarter, Half or Full plate, add to cart & place your order!" : "क्वार्टर, हाफ या फुल प्लेट चुनें, कार्ट में डालें और ऑर्डर करें!";
  document.getElementById("searchInput").placeholder = currentLang === "EN" ? "Search Laal Maas, Paneer, Roti..." : "लाल मास, पनीर, रोटी खोजें...";
  
  document.getElementById("reviewsHeading").innerText = currentLang === "EN" ? "What Our Guests Say" : "हमारे मेहमानों की राय";
  document.getElementById("locationHeading").innerText = currentLang === "EN" ? "Visit Or Contact Us" : "विज़िट करें या संपर्क करें";
  document.getElementById("locationSub").innerText = currentLang === "EN" ? "Veg & Non-Veg Family Restaurant • Dine-In, Takeaway & Delivery" : "वेज और नॉन-वेज फैमिली रेस्टोरेंट • डाइन-इन, टेकअवे और डिलीवरी";
  
  document.getElementById("drawerTitle").innerText = currentLang === "EN" ? "Your Order Cart" : "आपकी आर्डर कार्ट";
  document.getElementById("bottomTrayLabel").innerText = currentLang === "EN" ? "Your Order Tray (Incl. GST)" : "आपकी आर्डर ट्रे (जीएसटी सहित)";
  document.getElementById("bottomCheckoutText").innerText = currentLang === "EN" ? "Checkout / Print Slip" : "चेकआउट / पर्ची प्रिंट करें";

  renderCategoryTabs();
  renderMenu();
  updateCartUI();
}

function renderCategoryTabs() {
  const container = document.getElementById("categoryTabs");
  container.innerHTML = CATEGORIES.map(cat => `
    <button 
      onclick="setCategory('${cat.id}')"
      class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
        activeCategory === cat.id 
          ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md' 
          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
      }"
    >
      ${currentLang === "EN" ? cat.en : cat.hi}
    </button>
  `).join("");
}

function setCategory(catId) {
  activeCategory = catId;
  renderCategoryTabs();
  renderMenu();
}

function selectVariant(itemId, variantKey) {
  selectedVariants[itemId] = variantKey;
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const newPrice = item.variants[variantKey];
  const priceEl = document.getElementById(`price_${itemId}`);
  const labelEl = document.getElementById(`label_${itemId}`);
  if (priceEl) priceEl.innerText = `₹${newPrice}`;
  if (labelEl) labelEl.innerText = translateVariantLabel(variantKey);

  Object.keys(item.variants).forEach(vKey => {
    const btn = document.getElementById(`varbtn_${itemId}_${vKey}`);
    if (btn) {
      btn.className = vKey === variantKey
        ? "px-3 py-1 rounded-lg text-xs font-semibold border transition border-amber-500 bg-amber-500/15 text-amber-300"
        : "px-3 py-1 rounded-lg text-xs font-semibold border transition border-zinc-800 bg-zinc-950 text-zinc-400";
    }
  });
}

function renderMenu() {
  const search = document.getElementById("searchInput").value.toLowerCase().trim();
  const typeFilter = document.getElementById("typeFilter").value;
  const grid = document.getElementById("menuGrid");

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search) || item.hi.includes(search);
    const matchesType = typeFilter === "ALL" || (typeFilter === "NONVEG" && !item.isVeg) || (typeFilter === "VEG" && item.isVeg);
    return matchesCat && matchesSearch && matchesType;
  });

  grid.innerHTML = filtered.map(item => {
    const currentVariant = selectedVariants[item.id];
    const currentPrice = item.variants[currentVariant];
    const variantKeys = Object.keys(item.variants);
    const primaryTitle = currentLang === "EN" ? item.name : item.hi;
    const secondaryTitle = currentLang === "EN" ? item.hi : item.name;
    const addBtnText = currentLang === "EN" ? "Add to Cart" : "कार्ट में डालें";

    return `
      <div class="bg-zinc-900/90 border border-zinc-800/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition group">
        <div>
          <div class="relative h-40 overflow-hidden">
            <img src="${item.img}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5">
              <span class="px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold ${item.isVeg ? 'text-green-400' : 'text-red-400'}">
                ${item.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
              </span>
              ${item.bestseller ? '<span class="px-2 py-0.5 rounded bg-amber-500 text-black text-[10px] font-extrabold">★ SPECIAL</span>' : ''}
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-white text-base leading-snug">${primaryTitle}</h3>
            <p class="text-amber-400/90 text-xs font-medium mt-0.5">${secondaryTitle}</p>

            <div class="flex flex-wrap items-center gap-2 mt-3">
              ${variantKeys.map(vKey => `
                <button 
                  id="varbtn_${item.id}_${vKey}"
                  onclick="selectVariant(${item.id}, '${vKey}')"
                  class="px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                    currentVariant === vKey 
                      ? 'border-amber-500 bg-amber-500/15 text-amber-300' 
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400'
                  }"
                >
                  ${translateVariantLabel(vKey)}: ₹${item.variants[vKey]}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="px-4 pb-4 pt-2 flex items-center justify-between border-t border-zinc-800/60">
          <div>
            <span id="label_${item.id}" class="text-[11px] text-zinc-400">${translateVariantLabel(currentVariant)}</span>
            <div id="price_${item.id}" class="text-lg font-extrabold text-white">₹${currentPrice}</div>
          </div>
          <button 
            onclick="addToCart(${item.id})"
            class="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
          >
            <i class="fa-solid fa-plus"></i> ${addBtnText}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  const variant = selectedVariants[itemId];
  const price = item.variants[variant];
  const cartKey = `${itemId}_${variant}`;

  const existing = cart.find(c => c.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartKey,
      name: item.name,
      hi: item.hi,
      variant,
      price,
      qty: 1
    });
  }
  updateCartUI();
}

function changeQty(cartKey, delta) {
  const item = cart.find(c => c.cartKey === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.cartKey !== cartKey);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalAmount = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  const gst = calculateGstBreakdown(totalAmount);

  document.getElementById("navCartCount").innerText = totalItems;
  document.getElementById("bottomCartCount").innerText = totalItems;
  document.getElementById("bottomCartTotal").innerText = `₹${gst.grandTotal}`;
  document.getElementById("drawerTotal").innerText = `₹${gst.grandTotal}`;
  
  document.getElementById("billSubtotal").innerText = `₹${gst.subtotal}`;
  document.getElementById("billTaxable").innerText = `₹${gst.taxableValue}`;
  document.getElementById("billCgst").innerText = `₹${gst.cgst}`;
  document.getElementById("billSgst").innerText = `₹${gst.sgst}`;
  document.getElementById("billGrandTotal").innerText = `₹${gst.grandTotal}`;

  const upiTextEl = document.getElementById("upiPayAmountText");
  if (upiTextEl) upiTextEl.innerText = `₹${gst.grandTotal}`;

  document.getElementById("floatingCartBar").classList.toggle("hidden", totalItems === 0);

  const listEl = document.getElementById("cartItemsList");
  if (cart.length === 0) {
    listEl.innerHTML = `<p class="text-center text-zinc-500 text-xs py-6">Your cart is empty. Add dishes from the menu!</p>`;
  } else {
    listEl.innerHTML = cart.map(c => `
      <div class="flex items-center justify-between bg-zinc-900 p-3 rounded-xl border border-zinc-800">
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-white">${currentLang === "EN" ? c.name : c.hi}</h4>
          <p class="text-[11px] text-amber-400">${translateVariantLabel(c.variant)} • ₹${c.price} x ${c.qty} = <strong>₹${(c.price * c.qty).toFixed(2)}</strong></p>
        </div>
        <div class="flex items-center gap-2 bg-zinc-950 px-2.5 py-1 rounded-lg border border-zinc-800">
          <button onclick="changeQty('${c.cartKey}', -1)" class="text-zinc-400 hover:text-white font-bold px-1">-</button>
          <span class="text-xs font-bold text-white">${c.qty}</span>
          <button onclick="changeQty('${c.cartKey}', 1)" class="text-amber-400 hover:text-amber-300 font-bold px-1">+</button>
        </div>
      </div>
    `).join("");
  }
}

function toggleCart(show) {
  document.getElementById("cartModal").classList.toggle("hidden", !show);
}

function toggleQrModal(show) {
  document.getElementById("qrModal").classList.toggle("hidden", !show);
}

function toggleTableQrModal(show) {
  document.getElementById("tableQrGeneratorModal").classList.toggle("hidden", !show);
  if (show) updateGeneratedTableQr();
}

function updateGeneratedTableQr() {
  const tableVal = document.getElementById("qrTableSelect").value;
  const baseUrl = window.location.origin + window.location.pathname;
  const tableUrl = `${baseUrl}?table=${encodeURIComponent(tableVal)}`;
  document.getElementById("qrPreviewTitle").innerText = `TABLE #${tableVal} (TICKET <${tableVal}>)`;
  document.getElementById("generatedTableQrImg").src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(tableUrl)}`;
}

function copyText(text, msg) {
  navigator.clipboard.writeText(text);
  alert(msg);
}

function selectTableNumber(tableLabel) {
  document.getElementById("custTable").value = tableLabel;
}

function clearTableMode() {
  document.getElementById("activeTableBanner").classList.add("hidden");
  setOrderMode("DELIVERY");
  window.history.replaceState({}, document.title, window.location.pathname);
}

function setOrderMode(mode) {
  orderMode = mode;
  ["DELIVERY", "DINEIN", "TAKEAWAY"].forEach(m => {
    const btn = document.getElementById(`mode_${m}`);
    btn.className = m === mode
      ? "py-2.5 px-2 rounded-xl border border-amber-500 bg-amber-500/10 text-amber-400"
      : "py-2.5 px-2 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-300";
  });
  document.getElementById("addressBox").classList.toggle("hidden", mode !== "DELIVERY");
  document.getElementById("tableBox").classList.toggle("hidden", mode !== "DINEIN");
}

function setPaymentMethod(method) {
  paymentMethod = method;
  document.getElementById("pay_UPI").className = method === "UPI"
    ? "py-2.5 px-2.5 rounded-xl border border-green-500 bg-green-500/10 text-green-400"
    : "py-2.5 px-2.5 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-300";
  document.getElementById("pay_CASH").className = method === "CASH"
    ? "py-2.5 px-2.5 rounded-xl border border-amber-500 bg-amber-500/10 text-amber-400"
    : "py-2.5 px-2.5 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-300";
  document.getElementById("upiScannerBox").classList.toggle("hidden", method !== "UPI");
  document.getElementById("codInfoBox").classList.toggle("hidden", method !== "CASH");
}

function addLandmark(areaText) {
  const addressInput = document.getElementById("custAddress");
  if (!addressInput.value.includes(areaText)) {
    addressInput.value = addressInput.value.trim()
      ? `${addressInput.value.trim()}, ${areaText}`
      : areaText;
  }
  addressInput.focus();
}

async function getCustomerGPSLocation() {
  const btnText = document.getElementById("gpsBtnText");
  const gpsBtn = document.getElementById("gpsBtn");
  const helpBox = document.getElementById("gpsHelpBox");
  const addressInput = document.getElementById("custAddress");

  if (!navigator.geolocation) {
    alert("GPS not supported on this browser.");
    return;
  }

  if (helpBox) helpBox.classList.add("hidden");
  btnText.innerText = "Fetching Live GPS...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      customerGpsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
      btnText.innerText = "✅ Live GPS Location Attached!";
      gpsBtn.className = "w-full py-2.5 px-3 rounded-xl bg-green-500/20 border border-green-500 text-green-400 font-bold text-xs flex items-center justify-center gap-2 transition";
    },
    (error) => {
      btnText.innerText = "🔄 Retry GPS";
      if (helpBox) helpBox.classList.remove("hidden");
      addressInput.focus();
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function generateSecurityToken(totalAmount, totalQty) {
  const cipherMap = { '1':'A', '2':'B', '3':'C', '4':'D', '5':'E', '6':'F', '7':'G', '8':'H', '9':'I', '0':'X' };
  const alphaCode = String(totalAmount).split('').map(d => cipherMap[d] || 'X').join('');
  const reversedBill = String(totalAmount).split('').reverse().join('');
  return `NH-${totalQty}-${reversedBill}-${alphaCode}`;
}

function renderThermalSlipData(data) {
  const gst = calculateGstBreakdown(data.totalAmount);
  document.getElementById("slipReceiptNo").innerText = String(data.receiptNo || "000025").padStart(6, "0");
  document.getElementById("slipTicketTitle").innerText = `Ticket:<${data.ticket}>`;
  document.getElementById("slipCustomerLine").innerText = data.custName ? `Cust: ${data.custName} (${data.custPhone || ''})` : "";

  document.getElementById("slipItemsContainer").innerHTML = data.items.map(item => {
    const lineAmt = (item.qty * item.price).toFixed(2);
    const desc = `${item.name.toUpperCase()} ${item.variant && item.variant !== 'Piece' && item.variant !== 'Plate' ? '('+item.variant.toUpperCase()+')' : ''}`;
    return `
      <div class="flex justify-between items-start">
        <span class="w-[46%] break-words pr-1">${desc}</span>
        <span class="w-[14%] text-right">${Number(item.qty).toFixed(2)}</span>
        <span class="w-[20%] text-right">${Number(item.price).toFixed(2)}</span>
        <span class="w-[20%] text-right">${lineAmt}</span>
      </div>
    `;
  }).join("");

  const totalQtyFormatted = Number(data.totalQty).toFixed(2);
  document.getElementById("slipSubtotal").innerText = gst.subtotal;
  document.getElementById("slipTaxQty").innerText = totalQtyFormatted;
  document.getElementById("slipTaxableVal").innerText = gst.taxableValue;
  document.getElementById("slipTotalGst").innerText = gst.totalGst;
  document.getElementById("slipCgst").innerText = gst.cgst;
  document.getElementById("slipSgst").innerText = gst.sgst;
  document.getElementById("slipTotalItems").innerText = totalQtyFormatted;
  document.getElementById("slipGrandTotal").innerText = gst.grandTotal;
  document.getElementById("slipPayMethod").innerText = data.payMethod || "CASH";
  document.getElementById("slipPaidAmt").innerText = gst.grandTotal;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB');
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  document.getElementById("slipFooterTime").innerText = `#01 Owner ${dateStr} ${timeStr}`;

  document.getElementById("thermalReceiptModal").classList.remove("hidden");
}

function openThermalReceiptPreview() {
  if (cart.length === 0) {
    alert("Please add at least one item to your cart first!");
    return;
  }
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalAmount = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  const tableNo = document.getElementById("custTable").value.trim() || (orderMode === "DELIVERY" ? "DEL" : "1");
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();

  renderThermalSlipData({
    receiptNo: Math.floor(100 + Math.random() * 900),
    ticket: tableNo,
    custName: name,
    custPhone: phone,
    items: cart,
    totalQty,
    totalAmount,
    payMethod: paymentMethod
  });
}

function closeThermalModal() {
  document.getElementById("thermalReceiptModal").classList.add("hidden");
}

function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Please add at least one item to your cart!");
    return;
  }
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const tableNo = document.getElementById("custTable").value.trim();
  const notes = document.getElementById("custNotes").value.trim();

  if (!name || !phone) {
    alert("Please enter your Name and Mobile Number!");
    return;
  }
  if (orderMode === "DELIVERY" && !address) {
    alert("Please enter your Delivery Address in Chirawa!");
    return;
  }
  if (orderMode === "DINEIN" && !tableNo) {
    alert("Please select or enter your Table / Ticket Number!");
    return;
  }

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalAmount = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
  const gst = calculateGstBreakdown(totalAmount);
  const securityToken = generateSecurityToken(totalAmount, totalQty);
  const receiptNo = Math.floor(100 + Math.random() * 900);

  const compactPayload = {
    r: receiptNo,
    tk: orderMode === "DINEIN" ? tableNo : orderMode.slice(0,3),
    cn: name,
    cp: phone,
    pm: paymentMethod,
    it: cart.map(c => ({ n: c.name, v: c.variant, q: c.qty, p: c.price }))
  };
  const encodedPrintData = btoa(encodeURIComponent(JSON.stringify(compactPayload)));
  const oneClickPrintUrl = `${window.location.origin}${window.location.pathname}?printbill=${encodedPrintData}`;

  const itemLines = cart.map((c, idx) => {
    const lineTotal = (c.qty * c.price).toFixed(2);
    return `${idx + 1}. ${c.name.toUpperCase()} (${c.variant}) x ${c.qty} = ₹${lineTotal}`;
  }).join("\n");

  let locationDetail = "";
  if (orderMode === "DELIVERY") {
    const mapLink = customerGpsUrl ? customerGpsUrl : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + " Chirawa")}`;
    locationDetail = `📍 *Address:* ${address}\n🗺️ *Map:* ${mapLink}`;
  } else if (orderMode === "DINEIN") {
    locationDetail = `🪑 *Ticket:<${tableNo}> (Table Order)*`;
  } else {
    locationDetail = `🛍️ *Ticket:<TAKEAWAY>*`;
  }

  const message = 
`*NIRBAN VEG & NONVEG TANDURI HOTEL*
🧾 *Receipt:* #000${receiptNo} | *Token:* #${securityToken}
${locationDetail}
👤 *Cust:* ${name} (${phone})
------------------------------
${itemLines}
------------------------------
Subtotal: ₹${gst.subtotal}
VAT1 Taxable: ₹${gst.taxableValue}
CGST (2.5%): ₹${gst.cgst} | SGST (2.5%): ₹${gst.sgst}
💰 *TOTAL: ₹${gst.grandTotal}* (${paymentMethod})
${notes ? `📝 *Note:* ${notes}\n` : ''}------------------------------
🖨️ *1-Click Bluetooth Thermal Print:*
${oneClickPrintUrl}`;

  const waUrl = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  
  const printData = params.get("printbill");
  if (printData) {
    try {
      const decoded = JSON.parse(decodeURIComponent(atob(printData)));
      const items = decoded.it.map(i => ({ name: i.n, variant: i.v, qty: i.q, price: i.p }));
      const totalQty = items.reduce((s, i) => s + i.qty, 0);
      const totalAmount = items.reduce((s, i) => s + i.qty * i.price, 0);

      renderThermalSlipData({
        receiptNo: decoded.r,
        ticket: decoded.tk,
        custName: decoded.cn,
        custPhone: decoded.cp,
        items,
        totalQty,
        totalAmount,
        payMethod: decoded.pm
      });

      setTimeout(() => {
        window.print();
      }, 600);
    } catch (e) {
      console.error("Invalid print link", e);
    }
  }

  const tableParam = params.get("table");
  if (tableParam) {
    setOrderMode("DINEIN");
    setPaymentMethod("CASH");
    document.getElementById("custTable").value = tableParam;
    const banner = document.getElementById("activeTableBanner");
    const bannerText = document.getElementById("activeTableText");
    banner.classList.remove("hidden");
    bannerText.innerText = `🍽️ Ticket:<${tableParam}> Selected (Table Order Mode Active)`;
  }

  renderCategoryTabs();
  renderMenu();
  updateCartUI();
});