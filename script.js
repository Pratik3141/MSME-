/**
 * CODEX DATABASE, SEARCH ENGINE, AUTHENTICATION, CURRENCY SYSTEM & OPENAI GPT BRIDGE
 */

// ================= 1. DATABASE SCHEMA & INITIALIZATION =================
const DB_STORAGE_KEY = "CODEX_LOCAL_DATABASE_V34";
const OPENAI_API_KEY_STORAGE = "CODEX_OPENAI_API_KEY";

const CURRENCY_CONFIG = {
  INR: { symbol: "₹", rate: 83.5, name: "Indian Rupee" },
  USD: { symbol: "$", rate: 1.0, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.92, name: "Euro" },
  GBP: { symbol: "£", rate: 0.78, name: "British Pound" },
  JPY: { symbol: "¥", rate: 155.0, name: "Japanese Yen" }
};

const INITIAL_DATABASE = {
  profile: {
    firstName: "Pratik",
    lastName: "Narkhede",
    name: "Pratik Narkhede",
    email: "pratik@example.com",
    role: "System Administrator",
    countryCode: "+91",
    mobile: "98765 43210",
    dob: "2005-10-19",
    location: "Jalgaon, Maharashtra, India",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop",
    bannerUrl: "",
    socials: {
      instagram: "https://instagram.com/pratik_narkhede",
      twitter: "https://twitter.com/pratik_tech",
      linkedin: "https://linkedin.com/in/pratik-narkhede",
      github: "https://github.com/pratik-codex",
      discord: "https://discord.gg/codex",
      whatsapp: "https://chat.whatsapp.com/codex"
    }
  },
  currency: "INR",
  sidebarClosed: false,
  metrics: {
    registeredCustomers: 3782,
    customersGrowth: "11.01%",
    totalOrders: 5359,
    ordersGrowth: "-9.05%"
  },
  inventoryStock: {
    details: 14850,
    sold: 9420,
    available: 5180,
    unavailable: 250
  },
  supplyFilter: "all",
  companySupplies: [
    { 
      company: "Apex Industrial Corp", 
      product: "Titanium Cool-Coat Emulsion", 
      purchaseDate: "Aug 28, 2026", 
      deliveryDate: "Sep 04, 2026", 
      quantity: 450, 
      grossPriceUSD: 24750.00, 
      status: "Delivered" 
    },
    { 
      company: "BioMatrix Polymers Ltd", 
      product: "Polyurethane Amino Resin #5", 
      purchaseDate: "Sep 01, 2026", 
      deliveryDate: "Sep 15, 2026", 
      quantity: 280, 
      grossPriceUSD: 18200.00, 
      status: "In Transit" 
    },
    { 
      company: "Nordic Tech Instruments", 
      product: "Dynamic Viscometer Sensors", 
      purchaseDate: "Sep 02, 2026", 
      deliveryDate: "Sep 08, 2026", 
      quantity: 60, 
      grossPriceUSD: 14400.00, 
      status: "Delivered" 
    },
    { 
      company: "SolarShield Materials", 
      product: "Heat-Reflective Ceramic Paint", 
      purchaseDate: "Aug 20, 2026", 
      deliveryDate: "Sep 02, 2026", 
      quantity: 520, 
      grossPriceUSD: 36400.00, 
      status: "Delivered" 
    },
    { 
      company: "Zenith Electronics Global", 
      product: "Micro-Thermal Thermocouples", 
      purchaseDate: "Sep 07, 2026", 
      deliveryDate: "Sep 18, 2026", 
      quantity: 150, 
      grossPriceUSD: 7350.00, 
      status: "Pending" 
    },
    { 
      company: "Swasteek Technologies", 
      product: "High-Grade Acrylic Emulsion", 
      purchaseDate: "Sep 03, 2026", 
      deliveryDate: "Sep 10, 2026", 
      quantity: 310, 
      grossPriceUSD: 21700.00, 
      status: "Delivered" 
    },
    { 
      company: "Vanguard Chemicals", 
      product: "Formaldehyde Hardener Mix", 
      purchaseDate: "Sep 05, 2026", 
      deliveryDate: "Sep 22, 2026", 
      quantity: 90, 
      grossPriceUSD: 4950.00, 
      status: "Out of Stock" 
    }
  ],
  productsCatalog: [
    {
      id: "PROD-01",
      name: "Titanium Cool-Coat Emulsion",
      available: true,
      quantity: 450,
      buyers: [
        { name: "Alex Rivera", date: "Aug 30, 2026", delivered: true },
        { name: "Sophia Chen", date: "Sep 02, 2026", delivered: true }
      ]
    },
    {
      id: "PROD-02",
      name: "Polyurethane Amino Resin #5",
      available: true,
      quantity: 280,
      buyers: [
        { name: "Marcus Brody", date: "Sep 03, 2026", delivered: false },
        { name: "Rohan Kulkarni", date: "Sep 05, 2026", delivered: false }
      ]
    },
    {
      id: "PROD-03",
      name: "Dynamic Viscometer Sensors",
      available: false,
      quantity: 0,
      buyers: [
        { name: "Emma Watson", date: "Aug 20, 2026", delivered: true }
      ]
    },
    {
      id: "PROD-04",
      name: "Heat-Reflective Ceramic Paint",
      available: true,
      quantity: 520,
      buyers: [
        { name: "Liam Patel", date: "Aug 22, 2026", delivered: true },
        { name: "John Doe", date: "Aug 25, 2026", delivered: true },
        { name: "Sarah Connor", date: "Sep 01, 2026", delivered: true }
      ]
    }
  ],
  paymentsFilter: "all",
  payments: [
    { id: "PAY-901", client: "Alex Rivera", desc: "Titanium Cool-Coat Emulsion", amountUSD: 299.00, date: "Sep 11, 2026", status: "Completed" },
    { id: "PAY-902", client: "Sophia Chen", desc: "Polyurethane Amino Resin #5", amountUSD: 129.50, date: "Sep 10, 2026", status: "Pending" },
    { id: "PAY-903", client: "Marcus Brody", desc: "Ultra-wide Gaming Monitor", amountUSD: 649.00, date: "Sep 09, 2026", status: "Completed" },
    { id: "PAY-904", client: "Rohan Kulkarni", desc: "USB-C Dual Dock Station", amountUSD: 180.00, date: "Sep 08, 2026", status: "Pending" }
  ],
  salesViews: {
    active: "monthly",
    selectedDate: "September 2026",
    selectedYear: 2026,
    selectedMonth: 8,
    selectedDay: 11
  },
  revenueViews: {
    active: "monthly",
    data: {
      monthly: {
        title: "Monthly Revenue",
        subtitle: "Target set for this calendar month",
        targetUSD: 20000,
        revenueUSD: 20000,
        todayStatUSD: 3287,
        pct: "75.55%",
        badge: "+10%",
        targetLabel: "Target",
        revLabel: "Revenue",
        periodLabel: "Today"
      },
      weekly: {
        title: "Weekly Revenue",
        subtitle: "Target set for Week 37",
        targetUSD: 5000,
        revenueUSD: 4350,
        todayStatUSD: 680,
        pct: "87.00%",
        badge: "+14%",
        targetLabel: "W-Target",
        revLabel: "W-Revenue",
        periodLabel: "Today"
      },
      day: {
        title: "Day Revenue",
        subtitle: "Target set for today's trade session",
        targetUSD: 1000,
        revenueUSD: 620,
        todayStatUSD: 140,
        pct: "62.00%",
        badge: "+5%",
        targetLabel: "Day-Goal",
        revLabel: "Today So Far",
        periodLabel: "Peak Hour"
      },
      yearly: {
        title: "Yearly Revenue",
        subtitle: "Cumulative performance for Fiscal Year 2026",
        targetUSD: 240000,
        revenueUSD: 195000,
        todayStatUSD: 16250,
        pct: "81.25%",
        badge: "+18.4%",
        targetLabel: "Annual Target",
        revLabel: "Annual Rev",
        periodLabel: "Monthly Avg"
      }
    }
  },
  inventory: {
    totalProducts: 1248,
    refundsAmountUSD: 1120
  },
  ordersFilter: "all",
  orders: [
    { id: "ORD-8921", date: "Sep 11, 2026", customer: "Alex Rivera", item: "Wireless Noise-Canceling Headphones", amountUSD: 299.00, status: "Completed" },
    { id: "ORD-8922", date: "Sep 10, 2026", customer: "Sophia Chen", item: "Mechanical Keyboard (RGB)", amountUSD: 129.50, status: "Pending" },
    { id: "ORD-8923", date: "Sep 09, 2026", customer: "Marcus Brody", item: "Ultra-wide Gaming Monitor", amountUSD: 649.00, status: "Completed" },
    { id: "ORD-8924", date: "Sep 08, 2026", customer: "Rohan Kulkarni", item: "USB-C Dual Dock Station", amountUSD: 180.00, status: "Completed" },
    { id: "ORD-8925", date: "Sep 06, 2026", customer: "Emma Watson", item: "Ergonomic Mesh Chair", amountUSD: 350.00, status: "Pending" },
    { id: "ORD-8926", date: "Sep 04, 2026", customer: "Liam Patel", item: "Bluetooth Studio Speaker", amountUSD: 89.00, status: "Cancelled" }
  ],
  customers: [
    { name: "John Doe", email: "john.doe@example.com", tier: "Premium Subscriber", joined: "Jan 12, 2026" },
    { name: "Emma Watson", email: "emma.w@example.com", tier: "Free User", joined: "Feb 04, 2026" },
    { name: "Rohan Kulkarni", email: "rohan.k@example.com", tier: "Enterprise Lead", joined: "Mar 01, 2026" },
    { name: "Alex Rivera", email: "alex.r@example.com", tier: "Premium Subscriber", joined: "Apr 15, 2026" }
  ],
  calendarEvents: [
    { day: 5, title: "Team Sync", accent: false },
    { day: 11, title: "Sprint Demo", accent: true }
  ],
  performanceView: {
    selectedDate: "Sep 11, 2026",
    year: 2026,
    month: 8,
    day: 11
  },
  notifications: [
    { id: 1, type: "order", msg: "Alex Rivera purchased Wireless Noise-Canceling Headphones.", time: "Sep 11, 2026 &bull; 10:15 AM", read: false },
    { id: 2, type: "supply", msg: "Swasteek Technologies delivery fulfilled (310 units).", time: "Sep 10, 2026 &bull; 04:30 PM", read: false },
    { id: 3, type: "customer", msg: "Rohan Kulkarni upgraded to Enterprise Lead.", time: "Sep 09, 2026 &bull; 02:10 PM", read: false },
    { id: 4, type: "system", msg: "Database synchronized with active currency rate.", time: "Sep 08, 2026 &bull; 09:00 AM", read: true }
  ],
  unreadNotifCount: 3,
  aiChatHistory: []
};

// Database DAO
const DB = {
  get() {
    const raw = localStorage.getItem(DB_STORAGE_KEY);
    if (!raw) {
      this.save(INITIAL_DATABASE);
      return INITIAL_DATABASE;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      this.save(INITIAL_DATABASE);
      return INITIAL_DATABASE;
    }
  },
  save(data) {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(data));
  },
  reset() {
    this.save(INITIAL_DATABASE);
    renderAllFromDB();
  }
};

const showToast = (msg) => {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
};

function logDatabaseNotification(type, msg) {
  const db = DB.get();
  const newNotif = {
    id: Date.now(),
    type: type,
    msg: msg,
    time: "Just now",
    read: false
  };
  db.notifications.unshift(newNotif);
  db.unreadNotifCount = (db.unreadNotifCount || 0) + 1;
  DB.save(db);
  renderNotificationsUI();
}

function formatMoney(amountInUSD) {
  const db = DB.get();
  const curCode = db.currency || "INR";
  const conf = CURRENCY_CONFIG[curCode] || CURRENCY_CONFIG.INR;
  const converted = amountInUSD * conf.rate;

  if (curCode === "JPY") {
    return `${conf.symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${conf.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let salesBarChartInstance = null;
let performanceChartInstance = null;
let monthlyRevenueBarChartInstance = null;

function navigateToSection(targetId) {
  document.querySelectorAll(".sidebar .nav-item").forEach(n => {
    n.classList.remove("active");
    if (n.getAttribute("data-target") === targetId) {
      n.classList.add("active");
    }
  });
  document.querySelectorAll(".page-section").forEach(sec => sec.classList.remove("active"));
  const sec = document.getElementById(`section-${targetId}`);
  if (sec) sec.classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Notifications UI
function renderNotificationsUI() {
  const data = DB.get();
  const badgeCounter = document.getElementById("notif-badge-counter");
  const notifListContainer = document.getElementById("notif-list");
  const totalRecordsLabel = document.getElementById("notif-total-records");

  const unread = data.unreadNotifCount || 0;
  if (badgeCounter) {
    if (unread > 0) {
      badgeCounter.textContent = unread > 9 ? "9+" : unread;
      badgeCounter.classList.remove("hidden");
    } else {
      badgeCounter.classList.add("hidden");
    }
  }

  if (totalRecordsLabel) {
    totalRecordsLabel.textContent = `${data.notifications.length} saved`;
  }

  if (notifListContainer) {
    if (data.notifications.length === 0) {
      notifListContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: #94A3B8; font-size: 12px;">No notifications in database.</div>`;
    } else {
      const typeIconMap = {
        order: "shopping-bag",
        customer: "user-check",
        supply: "truck",
        system: "cpu"
      };

      notifListContainer.innerHTML = data.notifications.map(n => `
        <div class="notif-log-item" data-id="${n.id}">
          <div class="notif-type-icon ${n.type || 'system'}">
            <i data-lucide="${typeIconMap[n.type] || 'info'}" class="w-3.5 h-3.5"></i>
          </div>
          <div class="notif-log-content">
            <p class="notif-log-msg">${n.msg}</p>
            <span class="notif-log-time">${n.time}</span>
          </div>
        </div>
      `).join("");
      lucide.createIcons();
    }
  }
}

function markNotificationsAsRead() {
  const db = DB.get();
  if (db.unreadNotifCount > 0) {
    db.unreadNotifCount = 0;
    db.notifications.forEach(n => n.read = true);
    DB.save(db);
    renderNotificationsUI();
  }
}

// ================= 2. RENDER ALL FROM DATABASE =================
function renderAllFromDB() {
  const data = DB.get();
  const curCode = data.currency || "INR";
  const conf = CURRENCY_CONFIG[curCode] || CURRENCY_CONFIG.INR;

  document.body.classList.toggle("sidebar-closed", !!data.sidebarClosed);

  // Update active symbol on anime currency orb
  const activeCurSym = document.getElementById("active-currency-symbol");
  if (activeCurSym) activeCurSym.textContent = conf.symbol;

  document.querySelectorAll(".currency-opt").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-cur") === curCode);
  });

  // Profile Sync
  document.querySelectorAll(".user-display-name").forEach(el => el.textContent = data.profile.name);
  const headingRole = document.getElementById("profile-role-desc");
  if (headingRole) headingRole.textContent = data.profile.role;

  document.querySelectorAll(".user-profile-img").forEach(img => {
    img.src = data.profile.photoUrl;
  });

  const bannerEl = document.getElementById("profile-banner-element");
  if (bannerEl && data.profile.bannerUrl) {
    bannerEl.style.backgroundImage = `url(${data.profile.bannerUrl})`;
  }

  const inFirstName = document.getElementById("input-profile-firstname");
  const inLastName = document.getElementById("input-profile-lastname");
  const inEmail = document.getElementById("input-profile-email");
  const inRole = document.getElementById("input-profile-role");
  const inCountryCode = document.getElementById("input-country-code");
  const inMobile = document.getElementById("input-profile-mobile");
  const inDob = document.getElementById("input-profile-dob");
  const inLoc = document.getElementById("input-profile-loc");

  if (inFirstName) inFirstName.value = data.profile.firstName || data.profile.name?.split(" ")[0] || "";
  if (inLastName) inLastName.value = data.profile.lastName || data.profile.name?.split(" ")[1] || "";
  if (inEmail) inEmail.value = data.profile.email || "";
  if (inRole) inRole.value = data.profile.role || "";
  if (inCountryCode) inCountryCode.value = data.profile.countryCode || "+91";
  if (inMobile) inMobile.value = data.profile.mobile || "";
  if (inDob) inDob.value = data.profile.dob || "";
  if (inLoc) inLoc.value = data.profile.location || "";

  const inInsta = document.getElementById("input-social-instagram");
  const inTwit = document.getElementById("input-social-twitter");
  const inLink = document.getElementById("input-social-linkedin");
  const inGit = document.getElementById("input-social-github");
  const inDiscord = document.getElementById("input-social-discord");
  const inWhatsapp = document.getElementById("input-social-whatsapp");

  if (inInsta) inInsta.value = data.profile.socials?.instagram || "";
  if (inTwit) inTwit.value = data.profile.socials?.twitter || "";
  if (inLink) inLink.value = data.profile.socials?.linkedin || "";
  if (inGit) inGit.value = data.profile.socials?.github || "";
  if (inDiscord) inDiscord.value = data.profile.socials?.discord || "";
  if (inWhatsapp) inWhatsapp.value = data.profile.socials?.whatsapp || "";

  // Counts
  const cCount = document.getElementById("db-customer-count");
  if (cCount) cCount.textContent = data.metrics.registeredCustomers.toLocaleString();
  const oCount = document.getElementById("db-order-count");
  if (oCount) oCount.textContent = data.metrics.totalOrders.toLocaleString();

  // Sales View Header Labels
  const activeSales = data.salesViews.active || "monthly";
  const salesTitle = document.getElementById("sales-chart-title");
  const salesSubtitleDate = document.getElementById("sales-selected-date-label");

  if (salesTitle) {
    if (activeSales === "yearly") salesTitle.textContent = "Yearly Sales (Units)";
    else if (activeSales === "day") salesTitle.textContent = "Day Sales (Hourly Breakdown)";
    else salesTitle.textContent = "Monthly Sales & Revenue Velocity";
  }
  if (salesSubtitleDate) salesSubtitleDate.textContent = data.salesViews.selectedDate;

  document.querySelectorAll(".sales-select-option").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-view") === activeSales);
  });

  // Revenue Target Active View & Dynamic Bar Chart Update
  const activePeriod = data.revenueViews.active || "monthly";
  const rev = data.revenueViews.data[activePeriod];

  const periodTitle = document.getElementById("revenue-period-title");
  const periodSubtitle = document.getElementById("revenue-period-subtitle");
  const targetDesc = document.getElementById("gauge-description-text");

  const footerTargetLabel = document.getElementById("footer-target-label");
  const footerRevLabel = document.getElementById("footer-rev-label");
  const footerPeriodLabel = document.getElementById("footer-period-label");

  const monthlyTarget = document.getElementById("db-monthly-target");
  const monthlyRevenue = document.getElementById("db-monthly-revenue");
  const todayStat = document.getElementById("db-today-stat");

  if (periodTitle) periodTitle.textContent = rev.title;
  if (periodSubtitle) periodSubtitle.textContent = rev.subtitle;
  if (targetDesc) {
    targetDesc.innerHTML = `Today's revenue is <strong>${formatMoney(rev.todayStatUSD)}</strong>, outperforming target velocity.`;
  }

  if (footerTargetLabel) footerTargetLabel.textContent = rev.targetLabel;
  if (footerRevLabel) footerRevLabel.textContent = rev.revLabel;
  if (footerPeriodLabel) footerPeriodLabel.textContent = rev.periodLabel;

  if (monthlyTarget) monthlyTarget.textContent = formatMoney(rev.targetUSD);
  if (monthlyRevenue) monthlyRevenue.innerHTML = `${formatMoney(rev.revenueUSD)} <span class="arrow positive">↑</span>`;
  if (todayStat) todayStat.innerHTML = `${formatMoney(rev.todayStatUSD)} <span class="arrow positive">↑</span>`;

  document.querySelectorAll(".period-select-option").forEach(opt => {
    opt.classList.toggle("active", opt.getAttribute("data-period") === activePeriod);
  });

  updateRevenueBarChart(activePeriod);

  const perfDateLabel = document.getElementById("date-label");
  if (perfDateLabel) perfDateLabel.textContent = data.performanceView.selectedDate;

  const pCount = document.getElementById("ecom-total-products");
  if (pCount) pCount.textContent = data.inventory.totalProducts.toLocaleString();
  const pendCount = document.getElementById("ecom-pending-orders");
  if (pendCount) pendCount.textContent = data.orders.filter(o => o.status === "Pending").length;
  const compCount = document.getElementById("ecom-completed-orders");
  if (compCount) compCount.textContent = data.orders.filter(o => o.status === "Completed").length;
  const refCount = document.getElementById("ecom-refunds");
  if (refCount) refCount.textContent = formatMoney(data.inventory.refundsAmountUSD);

  const stockDetails = document.getElementById("analytics-stock-details");
  const stockSold = document.getElementById("analytics-stock-sold");
  const stockAvailable = document.getElementById("analytics-stock-available");
  const stockUnavailable = document.getElementById("analytics-stock-unavailable");

  if (stockDetails) stockDetails.textContent = data.inventoryStock.details.toLocaleString();
  if (stockSold) stockSold.textContent = data.inventoryStock.sold.toLocaleString();
  if (stockAvailable) stockAvailable.textContent = data.inventoryStock.available.toLocaleString();
  if (stockUnavailable) stockUnavailable.textContent = data.inventoryStock.unavailable.toLocaleString();

  // Company Supply Table
  const activeSupplyFilter = data.supplyFilter || "all";
  const filterBadge = document.getElementById("active-supply-filter-badge");
  const printSupplyFilter = document.getElementById("print-supply-filter");

  const filterNamesMap = {
    "all": "All Supplies",
    "delivered": "Delivered",
    "in-transit": "In Transit",
    "pending": "Pending",
    "out-of-stock": "Out of Stock"
  };

  if (filterBadge) filterBadge.textContent = filterNamesMap[activeSupplyFilter] || "All Supplies";
  if (printSupplyFilter) printSupplyFilter.textContent = (filterNamesMap[activeSupplyFilter] || "ALL SUPPLIES").toUpperCase();

  let visibleSupplies = data.companySupplies;
  if (activeSupplyFilter !== "all") {
    visibleSupplies = data.companySupplies.filter(cs => cs.status.toLowerCase().replace(/\s+/g, '-') === activeSupplyFilter);
  }

  const supplyTbody = document.getElementById("supply-table-body");
  if (supplyTbody) {
    if (visibleSupplies.length === 0) {
      supplyTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 28px; color: #94A3B8;">No supply records matching filter "${filterNamesMap[activeSupplyFilter]}".</td></tr>`;
    } else {
      supplyTbody.innerHTML = visibleSupplies.map(cs => {
        const isDelivered = cs.status.toLowerCase() === "delivered";
        const capsuleClass = isDelivered ? "delivered-state" : "pending-state";
        const badgeClass = cs.status.toLowerCase().replace(/\s+/g, '-');
        const deliveryText = isDelivered ? `Delivered: ${cs.deliveryDate}` : `Est. Delivery: ${cs.deliveryDate}`;

        return `
          <tr>
            <td><strong>${cs.company}</strong></td>
            <td>${cs.product}</td>
            <td style="color: #64748B; font-weight: 500;">${cs.purchaseDate || "Sep 01, 2026"}</td>
            <td>
              <div class="modern-delivery-capsule ${capsuleClass}" title="${isDelivered ? 'Successfully Fulfilled' : 'Fulfillment in progress'}">
                <span class="delivery-glow-dot"></span>
                <span>${deliveryText}</span>
              </div>
            </td>
            <td>${cs.quantity.toLocaleString()} units</td>
            <td><strong>${formatMoney(cs.grossPriceUSD)}</strong></td>
            <td><span class="table-badge ${badgeClass}">${cs.status}</span></td>
          </tr>
        `;
      }).join("");
    }
  }

  const printSupplyDate = document.getElementById("print-supply-date");
  if (printSupplyDate) printSupplyDate.textContent = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  // Orders Table & Print Button Filter Badge Sync
  const activeOrderFilter = data.ordersFilter || "all";
  const orderFilterLabel = document.getElementById("active-order-filter-label");
  const printBtnFilterLabel = document.getElementById("print-btn-filter-label");

  const formattedOrderFilterLabel = activeOrderFilter.charAt(0).toUpperCase() + activeOrderFilter.slice(1);
  if (orderFilterLabel) orderFilterLabel.textContent = formattedOrderFilterLabel + " Orders";
  if (printBtnFilterLabel) printBtnFilterLabel.textContent = formattedOrderFilterLabel;

  let visibleOrders = data.orders;
  if (activeOrderFilter === "pending") {
    visibleOrders = data.orders.filter(o => o.status.toLowerCase() === "pending");
  } else if (activeOrderFilter === "completed") {
    visibleOrders = data.orders.filter(o => o.status.toLowerCase() === "completed");
  } else if (activeOrderFilter === "cancelled") {
    visibleOrders = data.orders.filter(o => o.status.toLowerCase() === "cancelled");
  }

  const ordersTbody = document.getElementById("orders-table-body");
  if (ordersTbody) {
    if (visibleOrders.length === 0) {
      ordersTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color: #94A3B8;">No ${activeOrderFilter} orders found in database.</td></tr>`;
    } else {
      ordersTbody.innerHTML = visibleOrders.map(o => `
        <tr>
          <td><strong>#${o.id}</strong></td>
          <td style="color: #64748B; font-weight: 500;">${o.date || "Sep 11, 2026"}</td>
          <td>${o.customer}</td>
          <td>${o.item}</td>
          <td><strong>${formatMoney(o.amountUSD)}</strong></td>
          <td><span class="table-badge ${o.status.toLowerCase()}">${o.status}</span></td>
        </tr>
      `).join("");
    }
  }

  const printFilter = document.getElementById("print-report-filter");
  const printDate = document.getElementById("print-report-date");
  if (printFilter) printFilter.textContent = formattedOrderFilterLabel.toUpperCase() + " ORDERS";
  if (printDate) printDate.textContent = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  // Customers Table
  const customersTbody = document.getElementById("customers-table-body");
  if (customersTbody) {
    customersTbody.innerHTML = data.customers.map((c, idx) => {
      const initials = c.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
      return `
        <tr>
          <td class="customer-cell">
            <div class="customer-avatar">${initials}</div>
            <span class="customer-name">${c.name}</span>
          </td>
          <td>${c.email}</td>
          <td><span class="badge">${c.tier}</span></td>
          <td>${c.joined}</td>
          <td><button class="small-btn delete-row-btn" onclick="removeCustomer(${idx})">Delete</button></td>
        </tr>
      `;
    }).join("");
  }

  // Payments Table Rendering with filter
  const activePayFilter = data.paymentsFilter || "all";
  let visiblePayments = data.payments || [];
  if (activePayFilter !== "all") {
    visiblePayments = visiblePayments.filter(p => p.status.toLowerCase() === activePayFilter);
  }
  const paymentsTbody = document.getElementById("payments-table-body");
  if (paymentsTbody) {
    if (visiblePayments.length === 0) {
      paymentsTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color: #94A3B8;">No ${activePayFilter} payments found.</td></tr>`;
    } else {
      paymentsTbody.innerHTML = visiblePayments.map(p => `
        <tr>
          <td><strong>${p.id}</strong></td>
          <td>${p.client}</td>
          <td>${p.desc}</td>
          <td><strong>${formatMoney(p.amountUSD)}</strong></td>
          <td style="color: #64748B;">${p.date}</td>
          <td><span class="table-badge ${p.status.toLowerCase()}">${p.status}</span></td>
        </tr>
      `).join("");
    }
  }

  // ================= RENDER PRODUCTS SECTION =================
  const productsGrid = document.getElementById("products-catalog-grid");
  if (productsGrid) {
    productsGrid.innerHTML = data.productsCatalog.map(prod => {
      const isAvailable = prod.available && prod.quantity > 0;
      const dotClass = isAvailable ? "status-dot-green" : "status-dot-red";
      const statusText = isAvailable ? "Available" : "Unavailable";

      return `
        <div class="product-catalog-card">
          <div class="prod-info-group">
            <div class="prod-icon-box">
              <i data-lucide="package-open"></i>
            </div>
            <div class="prod-text-meta">
              <h4>${prod.name}</h4>
              <div class="prod-status-row">
                <span class="prod-status-indicator">
                  <span class="${dotClass}"></span> ${statusText}
                </span>
                <span class="prod-qty-badge">${prod.quantity} units</span>
              </div>
            </div>
          </div>
          <button type="button" class="prod-view-text-btn" onclick="openProductDetailModal('${prod.id}')">
            View
          </button>
        </div>
      `;
    }).join("");
  }

  renderNotificationsUI();
  updateSalesChart();
  updatePerformanceChart();
  lucide.createIcons();
}

function updateRevenueBarChart(period) {
  if (!monthlyRevenueBarChartInstance) return;
  const db = DB.get();
  const rate = CURRENCY_CONFIG[db.currency || "INR"]?.rate || 83.5;

  let labels = [];
  let values = [];

  if (period === "weekly") {
    labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    values = [4200, 5800, 7100, 6500, 8900, 9400, 8100].map(v => v * (rate / 83.5));
  } else if (period === "day") {
    labels = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
    values = [800, 2400, 4100, 3800, 4900, 2100].map(v => v * (rate / 83.5));
  } else if (period === "yearly") {
    labels = ["Q1", "Q2", "Q3", "Q4"];
    values = [45000, 58000, 72000, 68000].map(v => v * (rate / 83.5));
  } else {
    // monthly
    labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
    values = [320000, 450000, 620000, 280000].map(v => v * (rate / 83.5));
  }

  monthlyRevenueBarChartInstance.data.labels = labels;
  monthlyRevenueBarChartInstance.data.datasets[0].data = values;
  monthlyRevenueBarChartInstance.update();
}

function updateSalesChart() {
  if (!salesBarChartInstance) return;
  const data = DB.get();
  const active = data.salesViews.active;
  const seed = (data.salesViews.selectedYear % 100) + (data.salesViews.selectedMonth * 7) + data.salesViews.selectedDay;

  let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let chartData = [160, 380, 200, 300, 180, 200, 290, 100, 210, 380, 280, 110];

  if (active === "yearly") {
    labels = ["2021", "2022", "2023", "2024", "2025", "2026", "2027"];
    chartData = [seed * 15 + 1400, seed * 18 + 2100, seed * 22 + 2800, seed * 25 + 3400, seed * 29 + 4200, seed * 34 + 5359, seed * 38 + 6100];
  } else if (active === "day") {
    labels = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
    chartData = [seed + 12, seed + 8, seed + 25, seed + 85, seed + 140, seed + 115, seed + 90, seed + 40];
  } else {
    chartData = [seed + 150, seed + 340, seed + 190, seed + 280, seed + 170, seed + 190, seed + 270, seed + 95, seed + 205, seed + 360, seed + 260, seed + 105];
  }

  salesBarChartInstance.data.labels = labels;
  salesBarChartInstance.data.datasets[0].data = chartData;
  salesBarChartInstance.update();
}

function updatePerformanceChart() {
  if (!performanceChartInstance) return;
  const data = DB.get();
  const perf = data.performanceView;
  const seed = (perf.year % 100) + (perf.month * 6) + perf.day;

  performanceChartInstance.data.datasets[0].data = [
    seed + 140, seed + 175, seed + 130, seed + 205, seed + 230, seed + 210, seed + 255
  ];
  performanceChartInstance.update();
}

window.removeCustomer = function(index) {
  const db = DB.get();
  const removed = db.customers.splice(index, 1);
  DB.save(db);
  renderAllFromDB();
  showToast(`Deleted ${removed[0]?.name} from database.`);
  logDatabaseNotification("customer", `Customer ${removed[0]?.name} was removed from the database.`);
};

// ================= PRODUCT VIEW MODAL & A4 PRINT =================
window.openProductDetailModal = function(productId) {
  const db = DB.get();
  const prod = db.productsCatalog.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById("modal-product-title").textContent = `Product: ${prod.name}`;
  document.getElementById("print-product-name-label").textContent = prod.name;
  document.getElementById("print-product-report-date").textContent = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const tbody = document.getElementById("product-buyers-table-body");
  if (prod.buyers && prod.buyers.length > 0) {
    tbody.innerHTML = prod.buyers.map(b => {
      const deliveredState = b.delivered;
      const dotCls = deliveredState ? "status-dot-green" : "status-dot-red";
      const statusText = deliveredState ? "Delivered" : "Not Delivered";

      return `
        <tr>
          <td><strong>${b.name}</strong></td>
          <td>${b.date}</td>
          <td>
            <span class="prod-status-indicator">
              <span class="${dotCls}"></span> ${statusText}
            </span>
          </td>
        </tr>
      `;
    }).join("");
  } else {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #94A3B8; padding: 20px;">No buyer records found for this product.</td></tr>`;
  }

  document.getElementById("product-detail-modal").classList.remove("hidden");
  lucide.createIcons();
};

// Export Utilities
function exportSupplyToExcelCSV() {
  const db = DB.get();
  const activeFilter = db.supplyFilter || "all";
  let supplies = db.companySupplies || [];

  if (activeFilter !== "all") {
    supplies = supplies.filter(s => s.status.toLowerCase().replace(/\s+/g, '-') === activeFilter);
  }

  if (supplies.length === 0) {
    showToast("No supply data to export!");
    return;
  }

  const headers = ["Company Name", "Product", "Purchase Date", "Delivery Date", "Quantity (Units)", `Gross Price (${db.currency})`, "Status"];
  const rows = supplies.map(s => [
    `"${s.company}"`, `"${s.product}"`, `"${s.purchaseDate}"`, `"${s.deliveryDate}"`, `"${s.quantity}"`, `"${formatMoney(s.grossPriceUSD)}"`, `"${s.status}"`
  ]);

  downloadCSV([headers.join(","), ...rows.map(r => r.join(","))].join("\r\n"), `CODEX_Company_Supply_${activeFilter}`);
}

function downloadCSV(csvString, fileNamePrefix) {
  const blob = new Blob(["\uFEFF" + csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${fileNamePrefix}_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("Excel (.csv) file downloaded successfully!");
}

function toggleSidebarFullscreen() {
  const db = DB.get();
  const isNowClosed = !db.sidebarClosed;
  db.sidebarClosed = isNowClosed;
  DB.save(db);

  document.body.classList.toggle("sidebar-closed", isNowClosed);
  showToast(isNowClosed ? "Dashboard expanded to full width" : "Menu opened (normal size)");

  setTimeout(() => {
    if (salesBarChartInstance) salesBarChartInstance.resize();
    if (performanceChartInstance) performanceChartInstance.resize();
    if (monthlyRevenueBarChartInstance) monthlyRevenueBarChartInstance.resize();
  }, 360);
}

// Search Index
const SEARCHABLE_PAGES = [
  { title: "Dashboard", target: "dashboard", category: "Page", icon: "layout-dashboard", keywords: "home main overview stats revenue target" },
  { title: "eCommerce Management", target: "ecommerce", category: "Page", icon: "shopping-bag", keywords: "orders products sales inventory purchases refund" },
  { title: "Stock & Orders", target: "analytics", category: "Page", icon: "boxes", keywords: "analytics stock warehouse available unavailable supplies suppliers company delivery" },
  { title: "Customers Directory", target: "customers", category: "Page", icon: "users", keywords: "users clients emails subscribers leads customers" },
  { title: "Products Inventory", target: "products", category: "Page", icon: "package-open", keywords: "products inventory stock available unavailable buyer delivery upload" },
  { title: "Payment Management", target: "payments", category: "Page", icon: "credit-card", keywords: "payment pending completed transaction settlement" },
  { title: "Loan Services", target: "loans", category: "Page", icon: "landmark", keywords: "loan schemes eligibility apply emi calculator financing" },
  { title: "Document Vault", target: "documents", category: "Page", icon: "file-text", keywords: "document upload required verification files" },
  { title: "MSME Services", target: "msme", category: "Page", icon: "briefcase", keywords: "msme registration udyam government schemes subsidies benefits support" },
  { title: "Cloud Data", target: "cloud", category: "Page", icon: "cloud", keywords: "cloud backup vault storage sync" },
  { title: "Industrial Blog's & News", target: "blogs", category: "Page", icon: "newspaper", keywords: "blog news startup industrial articles reports" },
  { title: "System Settings", target: "settings", category: "Settings", icon: "settings", keywords: "preferences 2fa notifications alerts configuration database reset settings" }
];

function getSearchDatabaseIndex() {
  const db = DB.get();
  const results = [...SEARCHABLE_PAGES];

  db.customers.forEach(c => {
    results.push({
      title: `${c.name} (${c.tier})`,
      target: "customers",
      category: "Customer",
      icon: "user",
      keywords: `${c.name} ${c.email} ${c.tier} customer`
    });
  });

  db.orders.forEach(o => {
    results.push({
      title: `#${o.id} - ${o.item} (${o.customer})`,
      target: "ecommerce",
      category: "Order",
      icon: "package",
      keywords: `${o.id} ${o.item} ${o.customer} ${o.status} order`
    });
  });

  db.productsCatalog.forEach(p => {
    results.push({
      title: `${p.name} (${p.quantity} units)`,
      target: "products",
      category: "Product",
      icon: "package-open",
      keywords: `${p.name} product stock buyer`
    });
  });

  return results;
}

// ================= OPENAI GPT API CHAT ENGINE =================
async function processOpenAIChatAPI(rawPrompt) {
  const apiKey = localStorage.getItem(OPENAI_API_KEY_STORAGE) || "YOUR_OPENAI_API_KEY_HERE";
  
  if (!apiKey || apiKey.includes("YOUR_OPENAI_API_KEY")) {
    return `⚠️ <strong>OpenAI API Key Missing</strong><br><br>Please configure your OpenAI API key in browser storage or settings to chat with GPT-4o.`;
  }

  const db = DB.get();
  const systemContext = `You are Codex AI, an advanced assistant built for the CODEX dashboard managed by ${db.profile.name}. You have access to active products, customers, and revenue metrics.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemContext },
          { role: "user", content: rawPrompt }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      return `❌ <strong>OpenAI API Error (${response.status}):</strong> ${errJson.error?.message || response.statusText}`;
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response received from OpenAI.";
    return reply.replace(/\n/g, '<br>');
  } catch (err) {
    console.error("OpenAI API connection error:", err);
    return `❌ Failed to connect to OpenAI API servers. Please check your network connection or API key.`;
  }
}

// ================= 4. EVENT LISTENERS & HOVER BRIDGES =================
document.addEventListener("DOMContentLoaded", () => {
  // Modern Animated Chart.js Graphs for Monthly Sales
  const salesBarCtx = document.getElementById("salesBarChart")?.getContext("2d");
  if (salesBarCtx) {
    const barGradient = salesBarCtx.createLinearGradient(0, 0, 0, 280);
    barGradient.addColorStop(0, "rgba(59, 130, 246, 0.85)");
    barGradient.addColorStop(1, "rgba(124, 58, 237, 0.35)");

    salesBarChartInstance = new Chart(salesBarCtx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          data: [160, 380, 200, 300, 180, 200, 290, 100, 210, 380, 280, 110],
          backgroundColor: barGradient,
          borderColor: "#3B82F6",
          borderWidth: 1.5,
          borderRadius: 8,
          barThickness: 16,
          hoverBackgroundColor: "#60A5FA"
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: 'bold' },
            bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
            padding: 10,
            cornerRadius: 8,
            displayColors: false
          }
        },
        scales: {
          x: { grid: { display: false }, border: { display: false }, ticks: { color: "#94A3B8", font: { family: 'Plus Jakarta Sans' } } },
          y: { grid: { color: "rgba(226, 232, 240, 0.4)" }, border: { display: false }, ticks: { color: "#94A3B8", font: { family: 'Plus Jakarta Sans' } } },
        },
      }
    });
  }

  // Modern Animated Bar Chart for Monthly Revenue Section
  const revBarCtx = document.getElementById("monthlyRevenueBarChart")?.getContext("2d");
  if (revBarCtx) {
    const revGradient = revBarCtx.createLinearGradient(0, 0, 0, 180);
    revGradient.addColorStop(0, "rgba(37, 99, 235, 0.9)");
    revGradient.addColorStop(1, "rgba(124, 58, 237, 0.4)");

    monthlyRevenueBarChartInstance = new Chart(revBarCtx, {
      type: "bar",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
          data: [320000, 450000, 620000, 280000],
          backgroundColor: revGradient,
          borderColor: "#2563EB",
          borderWidth: 1.5,
          borderRadius: 8,
          barThickness: 22,
          hoverBackgroundColor: "#60A5FA"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1400,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleFont: { family: 'Plus Jakarta Sans', size: 12, weight: 'bold' },
            bodyFont: { family: 'Plus Jakarta Sans', size: 11 },
            padding: 8,
            cornerRadius: 6,
            displayColors: false
          }
        },
        scales: {
          x: { grid: { display: false }, border: { display: false }, ticks: { color: "#94A3B8", font: { family: 'Plus Jakarta Sans', size: 11 } } },
          y: { grid: { color: "rgba(226, 232, 240, 0.4)" }, border: { display: false }, ticks: { color: "#94A3B8", font: { family: 'Plus Jakarta Sans', size: 11 } } },
        }
      }
    });
  }

  const statsLineCtx = document.getElementById("statisticsLineChart")?.getContext("2d");
  if (statsLineCtx) {
    const gradient = statsLineCtx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgba(67, 97, 238, 0.25)");
    gradient.addColorStop(1, "rgba(67, 97, 238, 0.0)");

    performanceChartInstance = new Chart(statsLineCtx, {
      type: "line",
      data: {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
        datasets: [{
          data: [180, 195, 170, 210, 240, 220, 260],
          borderColor: "#4361EE",
          borderWidth: 2.5,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#4361EE"
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, border: { display: false }, ticks: { color: "#94A3B8" } },
          y: { grid: { color: "#F1F5F9" }, border: { display: false }, ticks: { color: "#94A3B8" } },
        },
      }
    });
  }

  renderAllFromDB();

  // Reset database button inside Settings hover popup
  document.getElementById("reset-db-btn")?.addEventListener("click", () => {
    if (confirm("Reset database back to factory initial state?")) {
      DB.reset();
      showToast("Database restored to defaults!");
    }
  });

  // Nav cards
  document.getElementById("card-to-customers")?.addEventListener("click", () => {
    navigateToSection("customers");
    showToast("Opened Customer Directory");
  });

  document.getElementById("card-to-orders")?.addEventListener("click", () => {
    navigateToSection("ecommerce");
    showToast("Opened eCommerce Orders");
  });

  // Sidebar toggle
  document.getElementById("toggle-sidebar-dots-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSidebarFullscreen();
  });

  document.getElementById("topbar-menu-toggle-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSidebarFullscreen();
  });

  // Product Modal Close & Print A4
  const productModal = document.getElementById("product-detail-modal");
  document.getElementById("product-modal-close")?.addEventListener("click", () => {
    productModal.classList.add("hidden");
  });

  document.getElementById("print-product-detail-btn")?.addEventListener("click", () => {
    showToast("Preparing A4 Print for Product Report...");
    setTimeout(() => window.print(), 200);
  });

  // Upload New Product Button handler
  document.getElementById("upload-new-product-btn")?.addEventListener("click", () => {
    const prodName = prompt("Enter new product name to upload to inventory:");
    if (!prodName || !prodName.trim()) return;
    const qtyStr = prompt("Enter initial quantity units:", "100");
    const qty = parseInt(qtyStr, 10) || 50;

    const db = DB.get();
    const newProd = {
      id: `PROD-0${db.productsCatalog.length + 1}`,
      name: prodName.trim(),
      available: true,
      quantity: qty,
      buyers: []
    };
    db.productsCatalog.unshift(newProd);
    db.inventory.totalProducts += 1;
    DB.save(db);
    renderAllFromDB();
    showToast(`Product "${prodName.trim()}" uploaded successfully!`);
    logDatabaseNotification("system", `New product uploaded: ${prodName.trim()} (${qty} units).`);
  });

  // Payment Filter Pills
  document.querySelectorAll("#payment-filter-group .pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#payment-filter-group .pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-payfilter");
      const db = DB.get();
      db.paymentsFilter = filter;
      DB.save(db);
      renderAllFromDB();
      showToast(`Payment filter set to: ${filter}`);
    });
  });

  // ================= HOVER-TRIGGERED NOTIFICATION SYSTEM WITH HOVER-BRIDGE =================
  const notifWrapper = document.getElementById("notif-wrapper");
  const notifDropdown = document.getElementById("notif-dropdown");

  notifWrapper.addEventListener("mouseenter", () => {
    notifDropdown.classList.remove("hidden");
    markNotificationsAsRead();
  });

  notifWrapper.addEventListener("mouseleave", () => {
    notifDropdown.classList.add("hidden");
  });

  // ================= HOVER-TRIGGERED SETTINGS SYSTEM WITH HOVER-BRIDGE =================
  const settingsWrapper = document.getElementById("settings-hover-wrapper");
  const settingsDropdown = document.getElementById("settings-hover-dropdown");

  settingsWrapper.addEventListener("mouseenter", () => {
    settingsDropdown.classList.remove("hidden");
  });

  settingsWrapper.addEventListener("mouseleave", () => {
    settingsDropdown.classList.add("hidden");
  });

  settingsDropdown.querySelectorAll(".setting-popup-item[data-target]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = item.getAttribute("data-target");
      navigateToSection(target);
      settingsDropdown.classList.add("hidden");
      showToast("Opened System Settings");
    });
  });

  // Topbar Profile Logo Button
  document.getElementById("topbar-profile-btn")?.addEventListener("click", () => {
    navigateToSection("profile");
    showToast("Opened User Profile & Security");
  });

  // ================= ECOMMERCE PRINT ACCORDING TO CYCLE FILTER =================
  document.getElementById("print-orders-btn")?.addEventListener("click", () => {
    const db = DB.get();
    const filter = (db.ordersFilter || "all").toUpperCase();
    showToast(`Preparing A4 Print for ${filter} Orders...`);
    setTimeout(() => window.print(), 200);
  });

  document.getElementById("opt-print-a4")?.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("export-options-dropdown").classList.add("hidden");
    const db = DB.get();
    const filter = (db.ordersFilter || "all").toUpperCase();
    showToast(`Preparing A4 Print for ${filter} Orders...`);
    setTimeout(() => window.print(), 200);
  });

  // ================= INTERACTIVE PROFILE & BANNER CROP ENGINE =================
  const photoFileInput = document.getElementById("profile-photo-input");
  const bannerFileInput = document.getElementById("profile-banner-input");
  const photoActionBtns = document.querySelectorAll("#photo-action-btn, #avatar-upload-trigger-btn");
  const bannerUploadBtn = document.getElementById("banner-upload-trigger-btn");
  
  const cropModal = document.getElementById("crop-photo-modal");
  const cropPreviewImg = document.getElementById("crop-preview-image");
  const cropViewport = document.getElementById("crop-viewport-container");
  const cropZoomSlider = document.getElementById("crop-zoom-slider");
  const cropConfirmCheckBtn = document.getElementById("crop-confirm-check-btn");
  const cropCancelBtn = document.getElementById("crop-cancel-btn");

  let cropState = {
    imgX: 0,
    imgY: 0,
    scale: 1,
    isDragging: false,
    startX: 0,
    startY: 0,
    baseWidth: 0,
    baseHeight: 0
  };

  photoActionBtns.forEach(btn => btn?.addEventListener("click", () => photoFileInput.click()));
  bannerUploadBtn?.addEventListener("click", () => bannerFileInput.click());

  bannerFileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const db = DB.get();
      db.profile.bannerUrl = event.target.result;
      DB.save(db);
      renderAllFromDB();
      showToast("Cover banner updated successfully!");
    };
    reader.readAsDataURL(file);
    bannerFileInput.value = "";
  });

  photoFileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Please choose a valid image file (PNG, JPG, WebP)!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      cropPreviewImg.src = event.target.result;
      cropPreviewImg.onload = () => {
        cropState.scale = 1;
        cropState.imgX = 0;
        cropState.imgY = 0;
        cropZoomSlider.value = 1;

        const vpSize = 240;
        const aspect = cropPreviewImg.naturalWidth / cropPreviewImg.naturalHeight;

        if (aspect > 1) {
          cropState.baseHeight = vpSize;
          cropState.baseWidth = vpSize * aspect;
        } else {
          cropState.baseWidth = vpSize;
          cropState.baseHeight = vpSize / aspect;
        }

        cropPreviewImg.style.width = `${cropState.baseWidth}px`;
        cropPreviewImg.style.height = `${cropState.baseHeight}px`;
        updateCropImageTransform();

        cropModal.classList.remove("hidden");
        showToast("Position your photo & click (✓) on top-right to save");
      };
    };
    reader.readAsDataURL(file);
    photoFileInput.value = "";
  });

  function updateCropImageTransform() {
    cropPreviewImg.style.transform = `translate(${cropState.imgX}px, ${cropState.imgY}px) scale(${cropState.scale})`;
  }

  cropViewport.addEventListener("mousedown", (e) => {
    cropState.isDragging = true;
    cropState.startX = e.clientX - cropState.imgX;
    cropState.startY = e.clientY - cropState.imgY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!cropState.isDragging) return;
    cropState.imgX = e.clientX - cropState.startX;
    cropState.startY = e.clientY - cropState.startY;
    updateCropImageTransform();
  });

  window.addEventListener("mouseup", () => {
    cropState.isDragging = false;
  });

  cropZoomSlider.addEventListener("input", (e) => {
    cropState.scale = parseFloat(e.target.value);
    updateCropImageTransform();
  });

  cropCancelBtn.addEventListener("click", () => {
    cropModal.classList.add("hidden");
  });

  cropConfirmCheckBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const outputSize = 256;
    canvas.width = outputSize;
    canvas.height = outputSize;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(outputSize / 2, outputSize / 2, outputSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const scaleFactor = outputSize / 200;

    ctx.save();
    ctx.translate(outputSize / 2, outputSize / 2);
    ctx.scale(scaleFactor, scaleFactor);

    ctx.translate(cropState.imgX, cropState.imgY);
    ctx.scale(cropState.scale, cropState.scale);

    ctx.drawImage(
      cropPreviewImg,
      -cropState.baseWidth / 2,
      -cropState.baseHeight / 2,
      cropState.baseWidth,
      cropState.baseHeight
    );
    ctx.restore();

    const croppedBase64 = canvas.toDataURL("image/png", 0.95);

    const db = DB.get();
    db.profile.photoUrl = croppedBase64;
    DB.save(db);

    renderAllFromDB();
    cropModal.classList.add("hidden");
    showToast("Profile photo cropped and saved successfully!");
    logDatabaseNotification("system", "Profile photo updated & cropped in database.");
  });

  // Profile Form Save
  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const db = DB.get();
      
      const fName = document.getElementById("input-profile-firstname").value.trim();
      const lName = document.getElementById("input-profile-lastname").value.trim();
      db.profile.firstName = fName;
      db.profile.lastName = lName;
      db.profile.name = `${fName} ${lName}`.trim();
      db.profile.role = document.getElementById("input-profile-role").value.trim();
      db.profile.countryCode = document.getElementById("input-country-code").value;
      db.profile.mobile = document.getElementById("input-profile-mobile").value.trim();
      db.profile.email = document.getElementById("input-profile-email").value.trim();
      db.profile.dob = document.getElementById("input-profile-dob").value;
      db.profile.location = document.getElementById("input-profile-loc").value.trim();

      db.profile.socials = {
        instagram: document.getElementById("input-social-instagram").value.trim(),
        twitter: document.getElementById("input-social-twitter").value.trim(),
        linkedin: document.getElementById("input-social-linkedin").value.trim(),
        github: document.getElementById("input-social-github").value.trim(),
        discord: document.getElementById("input-social-discord").value.trim(),
        whatsapp: document.getElementById("input-social-whatsapp").value.trim()
      };

      DB.save(db);
      renderAllFromDB();
      showToast("Profile & social links saved to database!");
      logDatabaseNotification("system", `User profile updated for ${db.profile.name}.`);
    });
  }

  // Profile Logout Button
  document.getElementById("profile-logout-btn")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to log out of CODEX?")) {
      showToast("Signing out of session...");
      setTimeout(() => {
        const db = DB.get();
        db.isAuthenticated = false;
        DB.save(db);
        document.body.classList.add("auth-locked");
        showToast("Logged out to Login Portal");
      }, 400);
    }
  });

  // Realtime Search & Auto-Suggest
  const searchContainer = document.getElementById("animated-search-container");
  const searchInput = document.getElementById("global-search");
  const searchTriggerBtn = document.getElementById("search-trigger-btn");
  const suggestionsBox = document.getElementById("search-suggestions-box");
  const suggestionsList = document.getElementById("suggestions-list-container");

  let activeSuggestionIndex = -1;

  function renderSuggestions(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      suggestionsBox.classList.add("hidden");
      return;
    }

    const index = getSearchDatabaseIndex();
    const matched = index.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.keywords.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matched.length === 0) {
      suggestionsList.innerHTML = `<div class="sug-empty">No matching pages or records for "<em>${query}</em>"</div>`;
    } else {
      suggestionsList.innerHTML = matched.map((item, idx) => `
        <div class="suggestion-item" data-target="${item.target}" data-title="${item.title}" data-index="${idx}">
          <div class="sug-left">
            <i data-lucide="${item.icon}"></i>
            <span>${item.title}</span>
          </div>
          <span class="sug-tag">${item.category}</span>
        </div>
      `).join("");
      lucide.createIcons();
    }

    suggestionsBox.classList.remove("hidden");
    activeSuggestionIndex = -1;

    suggestionsList.querySelectorAll(".suggestion-item").forEach(el => {
      el.addEventListener("click", () => {
        const targetPage = el.getAttribute("data-target");
        const title = el.getAttribute("data-title");
        executeSearchNavigation(targetPage, title);
      });
    });
  }

  function executeSearchNavigation(targetPage, label) {
    if (!targetPage) return;
    navigateToSection(targetPage);
    showToast(`Jumped to: ${label || targetPage}`);
    suggestionsBox.classList.add("hidden");
    searchInput.value = "";
    searchContainer.classList.remove("expanded");
  }

  searchInput.addEventListener("input", (e) => {
    searchContainer.classList.add("expanded");
    renderSuggestions(e.target.value);
  });

  searchInput.addEventListener("keydown", (e) => {
    const items = suggestionsList.querySelectorAll(".suggestion-item");
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length > 0) {
        activeSuggestionIndex = (activeSuggestionIndex + 1) % items.length;
        highlightSuggestion(items);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length > 0) {
        activeSuggestionIndex = (activeSuggestionIndex - 1 + items.length) % items.length;
        highlightSuggestion(items);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeSuggestionIndex >= 0 && items[activeSuggestionIndex]) {
        items[activeSuggestionIndex].click();
      } else if (items.length > 0) {
        items[0].click();
      } else {
        const directMatch = SEARCHABLE_PAGES.find(p => p.keywords.includes(searchInput.value.toLowerCase().trim()));
        if (directMatch) {
          executeSearchNavigation(directMatch.target, directMatch.title);
        } else {
          showToast(`No section found for "${searchInput.value}"`);
        }
      }
    } else if (e.key === "Escape") {
      suggestionsBox.classList.add("hidden");
    }
  });

  function highlightSuggestion(items) {
    items.forEach((item, idx) => {
      item.classList.toggle("selected", idx === activeSuggestionIndex);
    });
  }

  searchTriggerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchContainer.classList.add("expanded");
    searchInput.focus();
    if (searchInput.value.trim() !== "") {
      renderSuggestions(searchInput.value);
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.add("hidden");
      if (searchInput.value.trim() === "") {
        searchContainer.classList.remove("expanded");
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchContainer.classList.add("expanded");
      searchInput.focus();
    }
  });

  // Currency Selector
  const curBtn = document.getElementById("currency-dropdown-btn");
  const curDropdown = document.getElementById("currency-menu-dropdown");
  curBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    curDropdown.classList.toggle("hidden");
  });

  document.querySelectorAll(".currency-opt").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const code = btn.getAttribute("data-cur");
      const db = DB.get();
      db.currency = code;
      DB.save(db);
      renderAllFromDB();
      curDropdown.classList.add("hidden");
      showToast(`Global Currency changed to ${code} (${btn.getAttribute("data-sym")})`);
      logDatabaseNotification("system", `Global Currency updated to ${code} (${btn.getAttribute("data-sym")}).`);
    });
  });

  // eCommerce Orders Export & Cycle Filter
  const exportArrowBtn = document.getElementById("export-dropdown-arrow-btn");
  const exportDropdown = document.getElementById("export-options-dropdown");

  exportArrowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    exportDropdown.classList.toggle("hidden");
  });

  document.getElementById("opt-export-excel").addEventListener("click", (e) => {
    e.stopPropagation();
    exportDropdown.classList.add("hidden");
    exportOrdersToExcelCSV();
  });

  const cycleOrderFilters = ["all", "pending", "completed", "cancelled"];
  const cycleArrowBtn = document.getElementById("cycle-filter-arrow-btn");

  cycleArrowBtn.addEventListener("click", () => {
    const db = DB.get();
    const currentFilter = db.ordersFilter || "all";
    const nextIndex = (cycleOrderFilters.indexOf(currentFilter) + 1) % cycleOrderFilters.length;
    const nextFilter = cycleOrderFilters[nextIndex];

    db.ordersFilter = nextFilter;
    DB.save(db);
    renderAllFromDB();

    const formattedLabel = nextFilter.charAt(0).toUpperCase() + nextFilter.slice(1) + " Orders";
    showToast(`Order Filter cycled: ${formattedLabel}`);
  });

  // Company Supply Round Arrow Cycle & Exports
  const cycleSupplyFilters = ["all", "delivered", "in-transit", "pending", "out-of-stock"];
  const cycleSupplyBtn = document.getElementById("cycle-supply-filter-btn");

  cycleSupplyBtn.addEventListener("click", () => {
    const db = DB.get();
    const currentFilter = db.supplyFilter || "all";
    const nextIndex = (cycleSupplyFilters.indexOf(currentFilter) + 1) % cycleSupplyFilters.length;
    const nextFilter = cycleSupplyFilters[nextIndex];

    db.supplyFilter = nextFilter;
    DB.save(db);
    renderAllFromDB();

    const filterDisplayMap = {
      "all": "All Supplies",
      "delivered": "Delivered Only",
      "in-transit": "In Transit",
      "pending": "Pending",
      "out-of-stock": "Out of Stock"
    };

    showToast(`Supply Cycle: ${filterDisplayMap[nextFilter]}`);
  });

  // Supply Export (Print + Excel)
  const printSupplyBtn = document.getElementById("print-supply-btn");
  const exportSupplyArrowBtn = document.getElementById("export-supply-arrow-btn");
  const supplyExportDropdown = document.getElementById("supply-export-dropdown");

  printSupplyBtn.addEventListener("click", () => {
    showToast("Preparing A4 Print for Supply Table...");
    setTimeout(() => window.print(), 200);
  });

  exportSupplyArrowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    supplyExportDropdown.classList.toggle("hidden");
  });

  document.getElementById("opt-print-supply-a4").addEventListener("click", (e) => {
    e.stopPropagation();
    supplyExportDropdown.classList.add("hidden");
    showToast("Preparing A4 Print for Supply Table...");
    setTimeout(() => window.print(), 200);
  });

  document.getElementById("opt-export-supply-excel").addEventListener("click", (e) => {
    e.stopPropagation();
    supplyExportDropdown.classList.add("hidden");
    exportSupplyToExcelCSV();
  });

  // Sales 3-Dot Dropdown
  const salesMenuBtn = document.getElementById("sales-menu-btn");
  const salesMenuDropdown = document.getElementById("sales-menu-dropdown");
  salesMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    salesMenuDropdown.classList.toggle("hidden");
  });

  document.querySelectorAll(".sales-select-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const view = btn.getAttribute("data-view");
      const db = DB.get();
      db.salesViews.active = view;
      DB.save(db);
      renderAllFromDB();
      salesMenuDropdown.classList.add("hidden");
      showToast(`Switched Sales to ${btn.textContent}`);
    });
  });

  // Sales Date Calendar
  const salesDateBtn = document.getElementById("sales-date-picker-btn");
  const salesCalPopup = document.getElementById("sales-calendar-popup");
  const closeSalesCal = document.getElementById("close-sales-cal");
  const salesMonthSel = document.getElementById("sales-cal-month-select");
  const salesYearSel = document.getElementById("sales-cal-year-select");
  const salesDaysContainer = document.getElementById("sales-cal-days");

  const initSalesCalendar = () => {
    const db = DB.get();
    let currentMonth = db.salesViews.selectedMonth;
    let currentYear = db.salesViews.selectedYear;
    let currentDay = db.salesViews.selectedDay;

    populateMonthYearDropdowns(salesMonthSel, salesYearSel, currentMonth, currentYear);

    const refreshGrid = () => {
      renderMonthGrid(salesDaysContainer, currentYear, currentMonth, currentDay, (y, m, d) => {
        currentYear = y;
        currentMonth = m;
        currentDay = d;
        const formatted = `${MONTH_NAMES[m]} ${d}, ${y}`;

        const freshDb = DB.get();
        freshDb.salesViews.selectedYear = y;
        freshDb.salesViews.selectedMonth = m;
        freshDb.salesViews.selectedDay = d;
        freshDb.salesViews.selectedDate = formatted;
        DB.save(freshDb);

        renderAllFromDB();
        salesCalPopup.classList.add("hidden");
        showToast(`Sales Date set to: ${formatted}`);
      });
    };

    salesMonthSel.addEventListener("change", () => {
      currentMonth = parseInt(salesMonthSel.value, 10);
      refreshGrid();
    });

    salesYearSel.addEventListener("change", () => {
      currentYear = parseInt(salesYearSel.value, 10);
      refreshGrid();
    });

    refreshGrid();
  };

  salesDateBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    initSalesCalendar();
    salesCalPopup.classList.toggle("hidden");
  });

  closeSalesCal.addEventListener("click", () => salesCalPopup.classList.add("hidden"));

  // Performance Analysis Calendar
  const perfDateBtn = document.getElementById("date-btn");
  const perfCalPopup = document.getElementById("cycle-calendar-popup");
  const closePerfCal = document.getElementById("close-cycle-cal");
  const perfMonthSel = document.getElementById("perf-cal-month-select");
  const perfYearSel = document.getElementById("perf-cal-year-select");
  const perfDaysContainer = document.getElementById("cycle-cal-days");

  const initPerfCalendar = () => {
    const db = DB.get();
    let curMonth = db.performanceView.month;
    let curYear = db.performanceView.year;
    let curDay = db.performanceView.day;

    populateMonthYearDropdowns(perfMonthSel, perfYearSel, curMonth, curYear);

    const refreshGrid = () => {
      renderMonthGrid(perfDaysContainer, curYear, curMonth, curDay, (y, m, d) => {
        curYear = y;
        curMonth = m;
        curDay = d;
        const formatted = `${MONTH_NAMES[m].substring(0, 3)} ${d}, ${y}`;

        const freshDb = DB.get();
        freshDb.performanceView.year = y;
        freshDb.performanceView.month = m;
        freshDb.performanceView.day = d;
        freshDb.performanceView.selectedDate = formatted;
        DB.save(freshDb);

        renderAllFromDB();
        perfCalPopup.classList.add("hidden");
        showToast(`Performance set to: ${formatted}`);
      });
    };

    perfMonthSel.addEventListener("change", () => {
      curMonth = parseInt(perfMonthSel.value, 10);
      refreshGrid();
    });

    perfYearSel.addEventListener("change", () => {
      curYear = parseInt(perfYearSel.value, 10);
      refreshGrid();
    });

    refreshGrid();
  };

  perfDateBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    initPerfCalendar();
    perfCalPopup.classList.toggle("hidden");
  });

  closePerfCal.addEventListener("click", () => perfCalPopup.classList.add("hidden"));

  // Global Outside Click Handler
  document.addEventListener("click", (e) => {
    if (!curDropdown.contains(e.target) && e.target !== curBtn) curDropdown.classList.add("hidden");
    if (!exportDropdown.contains(e.target) && !exportArrowBtn.contains(e.target)) exportDropdown.classList.add("hidden");
    if (!supplyExportDropdown.contains(e.target) && !exportSupplyArrowBtn.contains(e.target)) supplyExportDropdown.classList.add("hidden");
    if (!salesMenuDropdown.contains(e.target) && !salesMenuBtn.contains(e.target)) salesMenuDropdown.classList.add("hidden");
    if (!salesCalPopup.contains(e.target) && !salesDateBtn.contains(e.target)) salesCalPopup.classList.add("hidden");
    if (!perfCalPopup.contains(e.target) && !perfDateBtn.contains(e.target)) perfCalPopup.classList.add("hidden");
  });

  // Revenue 3-Dot Dropdown
  const revMenuBtn = document.getElementById("revenue-period-menu-btn");
  const revDropdown = document.getElementById("revenue-period-dropdown");

  revMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    revDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => revDropdown.classList.add("hidden"));

  document.querySelectorAll(".period-select-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const periodKey = btn.getAttribute("data-period");
      const db = DB.get();
      db.revenueViews.active = periodKey;
      DB.save(db);
      renderAllFromDB();
      revDropdown.classList.add("hidden");
      showToast(`Switched view to ${btn.textContent}`);
    });
  });

  // Modal logic
  const modal = document.getElementById("db-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCancel = document.getElementById("modal-cancel-btn");
  const modalForm = document.getElementById("modal-form");
  const modalTitle = document.getElementById("modal-title");
  const modalFields = document.getElementById("modal-fields-container");
  let currentModalAction = null;

  const openModal = (action) => {
    currentModalAction = action;
    modal.classList.remove("hidden");
    const db = DB.get();
    const curSym = CURRENCY_CONFIG[db.currency]?.symbol || "₹";
    const todayISO = new Date().toISOString().slice(0, 10);

    if (action === "order") {
      modalTitle.textContent = "Insert New Order into Database";
      modalFields.innerHTML = `
        <div class="form-group"><label>Purchase Date</label><input type="date" id="m-order-date" value="${todayISO}" required /></div>
        <div class="form-group"><label>Customer Name</label><input type="text" id="m-order-cust" required placeholder="e.g. Liam Smith" /></div>
        <div class="form-group"><label>Item Name</label><input type="text" id="m-order-item" required placeholder="e.g. 4K Web Camera" /></div>
        <div class="form-group"><label>Amount in ${db.currency} (${curSym})</label><input type="number" id="m-order-amount" step="0.01" required placeholder="149.99" /></div>
        <div class="form-group"><label>Status</label><select id="m-order-status"><option value="Completed">Completed</option><option value="Pending">Pending</option><option value="Cancelled">Cancelled</option></select></div>
      `;
    } else if (action === "customer") {
      modalTitle.textContent = "Register New Customer Record";
      modalFields.innerHTML = `
        <div class="form-group"><label>Full Name</label><input type="text" id="m-cust-name" required placeholder="e.g. Sarah Connor" /></div>
        <div class="form-group"><label>Email Address</label><input type="email" id="m-cust-email" required placeholder="sarah@example.com" /></div>
        <div class="form-group"><label>Tier</label><select id="m-cust-tier"><option value="Free User">Free User</option><option value="Premium Subscriber">Premium Subscriber</option><option value="Enterprise Lead">Enterprise Lead</option></select></div>
      `;
    } else if (action === "supply") {
      modalTitle.textContent = "Register New Company Supply Entry";
      modalFields.innerHTML = `
        <div class="form-group"><label>Company Name</label><input type="text" id="m-sup-company" required placeholder="e.g. Swasteek Technology Pvt Ltd" /></div>
        <div class="form-group"><label>Product / Material</label><input type="text" id="m-sup-product" required placeholder="e.g. Cool Roof Paint Mix" /></div>
        <div class="form-row">
          <div class="form-group"><label>Purchase Date</label><input type="date" id="m-sup-pdate" value="${todayISO}" required /></div>
          <div class="form-group"><label>Delivery Date</label><input type="date" id="m-sup-ddate" value="${todayISO}" required /></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Quantity (Units)</label><input type="number" id="m-sup-qty" required placeholder="500" /></div>
          <div class="form-group"><label>Gross Price in ${db.currency} (${curSym})</label><input type="number" id="m-sup-price" step="0.01" required placeholder="25000" /></div>
        </div>
        <div class="form-group"><label>Status</label><select id="m-sup-status"><option value="Delivered">Delivered (Glowing Green)</option><option value="In Transit">In Transit (Alert Red)</option><option value="Pending">Pending (Alert Red)</option><option value="Out of Stock">Out of Stock (Alert Red)</option></select></div>
      `;
    } else if (action === "loan") {
      modalTitle.textContent = "Apply for New Loan Scheme";
      modalFields.innerHTML = `
        <div class="form-group"><label>Select Scheme</label><select id="m-loan-scheme"><option value="MSME Growth Advance">MSME Growth Advance (Working Capital)</option><option value="Industrial Equipment Leasing">Industrial Equipment Leasing</option></select></div>
        <div class="form-group"><label>Requested Loan Amount in ${db.currency} (${curSym})</label><input type="number" id="m-loan-amount" required placeholder="500000" /></div>
        <div class="form-group"><label>Business Registration / PAN</label><input type="text" id="m-loan-pan" required placeholder="ABCDE1234F" /></div>
      `;
    }
  };

  const closeModal = () => modal.classList.add("hidden");
  modalClose.addEventListener("click", closeModal);
  modalCancel.addEventListener("click", closeModal);

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const db = DB.get();
    const curCode = db.currency || "INR";
    const rate = CURRENCY_CONFIG[curCode]?.rate || 83.5;

    if (currentModalAction === "order") {
      const newId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      const inputAmount = parseFloat(document.getElementById("m-order-amount").value);
      const rawDate = document.getElementById("m-order-date").value;
      const parsedDate = new Date(rawDate).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

      db.orders.unshift({
        id: newId,
        date: parsedDate,
        customer: document.getElementById("m-order-cust").value.trim(),
        item: document.getElementById("m-order-item").value.trim(),
        amountUSD: inputAmount / rate,
        status: document.getElementById("m-order-status").value
      });
      db.metrics.totalOrders += 1;
      DB.save(db);
      renderAllFromDB();
      showToast(`Order #${newId} saved to database!`);
      logDatabaseNotification("order", `New order #${newId} placed by ${document.getElementById("m-order-cust").value.trim()} for ${document.getElementById("m-order-item").value.trim()}.`);
    } else if (currentModalAction === "customer") {
      const custName = document.getElementById("m-cust-name").value.trim();
      db.customers.unshift({
        name: custName,
        email: document.getElementById("m-cust-email").value.trim(),
        tier: document.getElementById("m-cust-tier").value,
        joined: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
      });
      db.metrics.registeredCustomers += 1;
      DB.save(db);
      renderAllFromDB();
      showToast(`Customer added!`);
      logDatabaseNotification("customer", `New customer "${custName}" registered in the directory.`);
    } else if (currentModalAction === "supply") {
      const inputPrice = parseFloat(document.getElementById("m-sup-price").value);
      const qty = parseInt(document.getElementById("m-sup-qty").value, 10);
      const pDateRaw = document.getElementById("m-sup-pdate").value;
      const dDateRaw = document.getElementById("m-sup-ddate").value;
      const pDateFormatted = new Date(pDateRaw).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
      const dDateFormatted = new Date(dDateRaw).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
      const companyName = document.getElementById("m-sup-company").value.trim();

      db.companySupplies.unshift({
        company: companyName,
        product: document.getElementById("m-sup-product").value.trim(),
        purchaseDate: pDateFormatted,
        deliveryDate: dDateFormatted,
        quantity: qty,
        grossPriceUSD: inputPrice / rate,
        status: document.getElementById("m-sup-status").value
      });

      db.inventoryStock.details += qty;
      db.inventoryStock.available += qty;
      DB.save(db);
      renderAllFromDB();
      showToast("Company supply record registered!");
      logDatabaseNotification("supply", `Supply contract registered for ${companyName} (${qty} units).`);
    } else if (currentModalAction === "loan") {
      showToast("Loan application submitted successfully for review!");
      logDatabaseNotification("system", "New loan application submitted.");
    }
    closeModal();
  });

  document.getElementById("add-order-btn")?.addEventListener("click", () => openModal("order"));
  document.getElementById("add-customer-btn")?.addEventListener("click", () => openModal("customer"));
  document.getElementById("add-company-supply-btn")?.addEventListener("click", () => openModal("supply"));

  // Sidebar navigation clicks
  document.querySelectorAll(".sidebar .nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const target = item.getAttribute("data-target");
      if (!target) return;
      e.preventDefault();
      navigateToSection(target);
    });
  });

  // Theme Toggle
  document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    showToast(document.body.classList.contains("dark-mode") ? "Dark Mode Activated" : "Light Mode Activated");
  });

  // ================= OPENAI GPT CHAT CONTROLS =================
  const codexToggle = document.getElementById("codex-toggle-btn");
  const codexClose = document.getElementById("codex-close-btn");
  const codexBox = document.getElementById("codex-chat-box");
  const codexForm = document.getElementById("codex-form");
  const codexInput = document.getElementById("codex-input");
  const codexMessages = document.getElementById("codex-messages");
  const clearChatBtn = document.getElementById("codex-clear-chat-btn");

  codexToggle.addEventListener("click", () => {
    codexBox.classList.toggle("hidden");
    if (!codexBox.classList.contains("hidden")) codexInput.focus();
  });

  codexClose.addEventListener("click", () => codexBox.classList.add("hidden"));

  clearChatBtn.addEventListener("click", () => {
    const db = DB.get();
    db.aiChatHistory = [];
    DB.save(db);
    codexMessages.innerHTML = `
      <div class="ai-bubble">
        Chat conversation cleared. I'm ready for your next question!
      </div>
    `;
    showToast("Chat memory refreshed");
  });

  const handleCodexSubmit = async (userText) => {
    const cleanText = userText.trim();
    if (!cleanText) return;

    const uBubble = document.createElement("div");
    uBubble.className = "user-bubble";
    uBubble.textContent = cleanText;
    codexMessages.appendChild(uBubble);
    codexInput.value = "";
    codexMessages.scrollTop = codexMessages.scrollHeight;

    const thinkingBubble = document.createElement("div");
    thinkingBubble.className = "ai-thinking-bubble";
    thinkingBubble.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
    codexMessages.appendChild(thinkingBubble);
    codexMessages.scrollTop = codexMessages.scrollHeight;

    const aiResponseHTML = await processOpenAIChatAPI(cleanText);
    thinkingBubble.remove();

    const aBubble = document.createElement("div");
    aBubble.className = "ai-bubble";
    aBubble.innerHTML = aiResponseHTML;
    codexMessages.appendChild(aBubble);
    codexMessages.scrollTop = codexMessages.scrollHeight;

    const db = DB.get();
    if (!db.aiChatHistory) db.aiChatHistory = [];
    db.aiChatHistory.push({ user: cleanText, ai: aiResponseHTML, timestamp: new Date().toISOString() });
    DB.save(db);
  };

  codexForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleCodexSubmit(codexInput.value);
  });

  document.querySelectorAll(".suggestion-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      handleCodexSubmit(chip.getAttribute("data-ask"));
    });
  });
});