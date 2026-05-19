const listingArt = {
  coastal: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1600'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop stop-color='%238ad7ff'/%3E%3Cstop offset='.48' stop-color='%23f8e2b5'/%3E%3Cstop offset='1' stop-color='%23101414'/%3E%3C/linearGradient%3E%3ClinearGradient id='floor' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23dfc89e'/%3E%3Cstop offset='1' stop-color='%23534031'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='1600' fill='url(%23sky)'/%3E%3Crect y='900' width='900' height='700' fill='url(%23floor)'/%3E%3Crect x='95' y='230' width='710' height='540' rx='18' fill='%23dff7ff' opacity='.9'/%3E%3Crect x='126' y='260' width='300' height='480' fill='%236ab7d8'/%3E%3Crect x='456' y='260' width='320' height='480' fill='%238fd7ef'/%3E%3Cpath d='M0 720c180-70 330-70 520 0s270 66 380 20v180H0z' fill='%231d6576' opacity='.7'/%3E%3Crect x='90' y='860' width='460' height='160' rx='42' fill='%23212626'/%3E%3Ccircle cx='615' cy='840' r='74' fill='%23f4efe5'/%3E%3Crect x='570' y='880' width='250' height='28' rx='14' fill='%236f5640'/%3E%3Crect x='650' y='908' width='26' height='140' fill='%236f5640'/%3E%3Crect x='120' y='1100' width='650' height='280' rx='26' fill='%23252320' opacity='.45'/%3E%3C/svg%3E`,
  terrace: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop stop-color='%23f3c98b'/%3E%3Cstop offset='.42' stop-color='%2389473b'/%3E%3Cstop offset='1' stop-color='%23100d0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='1600' fill='url(%23g)'/%3E%3Crect x='90' y='250' width='720' height='820' rx='8' fill='%23813e35'/%3E%3Crect x='135' y='330' width='250' height='310' rx='120' fill='%232d1d1b'/%3E%3Crect x='515' y='330' width='250' height='310' rx='120' fill='%232d1d1b'/%3E%3Crect x='355' y='700' width='190' height='370' rx='8' fill='%23251918'/%3E%3Crect x='0' y='1050' width='900' height='550' fill='%232c332b'/%3E%3Cpath d='M70 1160c160-110 260-100 380 0s260 94 380 0v260H70z' fill='%233d6f4c'/%3E%3Crect x='180' y='1190' width='540' height='56' rx='28' fill='%23d7d0c2'/%3E%3C/svg%3E`,
  brisbane: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop stop-color='%23ffd28b'/%3E%3Cstop offset='.48' stop-color='%233c8b75'/%3E%3Cstop offset='1' stop-color='%23071212'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='1600' fill='url(%23g)'/%3E%3Crect x='80' y='315' width='740' height='470' rx='24' fill='%23efeadf'/%3E%3Crect x='130' y='385' width='250' height='250' fill='%23252b2b'/%3E%3Crect x='430' y='385' width='320' height='250' fill='%23252b2b'/%3E%3Cpath d='M80 315 450 160l370 155z' fill='%23785444'/%3E%3Crect x='80' y='780' width='740' height='160' fill='%23c79260'/%3E%3Cellipse cx='450' cy='1110' rx='330' ry='130' fill='%2326bdd4' opacity='.86'/%3E%3Cellipse cx='450' cy='1110' rx='260' ry='92' fill='%237ee7f2' opacity='.68'/%3E%3Cpath d='M0 960c110-80 190-70 280-20s150 64 260 12 230-96 360 10v638H0z' fill='%231c5f42' opacity='.9'/%3E%3C/svg%3E`
};

const listings = [
  {
    id: "bondi-view",
    title: "Coastal Apartment",
    suburb: "Bondi Beach, NSW",
    state: "NSW",
    price: 1850000,
    displayPrice: "$1.85m guide",
    image: listingArt.coastal,
    tag: "Beachside",
    auction: "Auction Sat",
    beds: 2,
    baths: 2,
    cars: 1,
    land: "112 sqm",
    detail:
      "North-facing apartment with a balcony view, designer kitchen, secure parking and strong short-stay demand near the water.",
    agent: "Mia Sutherland",
    agency: "Harbourline Realty",
    views: 42800,
    leads: 186,
    inspections: 31,
    offers: 9,
    yield: "4.1%",
    growth: "+8.4%",
  },
  {
    id: "fitzroy-terrace",
    title: "Heritage Terrace",
    suburb: "Fitzroy, VIC",
    state: "VIC",
    price: 2325000,
    displayPrice: "$2.325m",
    image: listingArt.terrace,
    tag: "Renovated",
    auction: "EOI closing",
    beds: 3,
    baths: 2,
    cars: 0,
    land: "168 sqm",
    detail:
      "Victorian frontage with a crisp rear renovation, courtyard entertaining and walkable access to cafes, trams and schools.",
    agent: "Theo Nguyen",
    agency: "Laneway Property Co.",
    views: 39100,
    leads: 142,
    inspections: 24,
    offers: 6,
    yield: "3.2%",
    growth: "+6.7%",
  },
  {
    id: "paddington-pool",
    title: "Family Pool Home",
    suburb: "Paddington, QLD",
    state: "QLD",
    price: 1640000,
    displayPrice: "$1.64m",
    image: listingArt.brisbane,
    tag: "Family",
    auction: "Private sale",
    beds: 4,
    baths: 3,
    cars: 2,
    land: "607 sqm",
    detail:
      "Open-plan Queensland living with an alfresco kitchen, pool, garden privacy and a flexible studio for guests or work.",
    agent: "Ava Collins",
    agency: "River City Estates",
    views: 33600,
    leads: 121,
    inspections: 19,
    offers: 5,
    yield: "4.6%",
    growth: "+9.1%",
  },
];

const stateFilter = document.querySelector("#stateFilter");
const budgetFilter = document.querySelector("#budgetFilter");
const budgetValue = document.querySelector("#budgetValue");
const feed = document.querySelector("#feed");
const template = document.querySelector("#listingTemplate");
const savedList = document.querySelector("#savedList");
const savedCount = document.querySelector("#savedCount");
const matchCount = document.querySelector("#matchCount");
const feedLocation = document.querySelector("#feedLocation");
const detailTitle = document.querySelector("#detailTitle");
const detailBadge = document.querySelector("#detailBadge");
const detailCopy = document.querySelector("#detailCopy");
const facts = document.querySelector("#facts");
const agentInitials = document.querySelector("#agentInitials");
const agentName = document.querySelector("#agentName");
const agentAgency = document.querySelector("#agentAgency");
const depositInput = document.querySelector("#depositInput");
const depositLabel = document.querySelector("#depositLabel");
const cashNeeded = document.querySelector("#cashNeeded");
const repayments = document.querySelector("#repayments");
const enquiryForm = document.querySelector("#enquiryForm");
const enquiryStatus = document.querySelector("#enquiryStatus");
const enquiryButton = document.querySelector("#enquiryButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const metrics = {
  views: document.querySelector("#viewsMetric"),
  leads: document.querySelector("#leadsMetric"),
  inspections: document.querySelector("#inspectionMetric"),
  offers: document.querySelector("#offerMetric"),
};

let currentListings = [...listings];
let activeIndex = 0;
const saved = new Set(JSON.parse(localStorage.getItem("proptok-saved") || "[]"));

const money = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

function compactPrice(value) {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(value % 1000000 ? 2 : 0)}m`;
  return money.format(value);
}

function renderFeed() {
  feed.innerHTML = "";
  currentListings.forEach((listing, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.id = listing.id;
    card.querySelector("img").src = listing.image;
    card.querySelector("img").alt = `${listing.title} in ${listing.suburb}`;
    card.querySelector(".tag").textContent = listing.tag;
    card.querySelector(".auction").textContent = listing.auction;
    card.querySelector("h1").textContent = listing.title;
    card.querySelector(".suburb").textContent = listing.suburb;
    card.querySelector(".price").textContent = listing.displayPrice;
    card.querySelector(".property-stats").innerHTML = [
      `${listing.beds} bed`,
      `${listing.baths} bath`,
      `${listing.cars} car`,
      listing.land,
    ]
      .map((item) => `<span>${item}</span>`)
      .join("");

    const saveButton = card.querySelector(".save-action");
    saveButton.classList.toggle("active", saved.has(listing.id));
    saveButton.addEventListener("click", () => toggleSaved(listing.id));
    card.querySelector(".share-action").addEventListener("click", () => shareListing(listing));
    card.querySelector(".inspect-action").addEventListener("click", () => openEnquiry(listing));

    if (index === activeIndex) updateDetails(listing);
    feed.append(card);
  });
  updateSaved();
  matchCount.textContent = `${currentListings.length} live`;
  feedLocation.textContent = stateFilter.value === "all" ? "Australia" : stateFilter.value;
}

function updateDetails(listing) {
  detailTitle.textContent = listing.title;
  detailBadge.textContent = listing.tag;
  detailCopy.textContent = listing.detail;
  facts.innerHTML = [
    `${listing.beds} bedrooms`,
    `${listing.baths} bathrooms`,
    `${listing.cars} car spaces`,
    `${listing.land}`,
    `${listing.yield} yield`,
    `${listing.growth} 12m suburb`,
  ]
    .map((fact) => `<span>${fact}</span>`)
    .join("");
  agentInitials.textContent = listing.agent
    .split(" ")
    .map((part) => part[0])
    .join("");
  agentName.textContent = listing.agent;
  agentAgency.textContent = listing.agency;
  metrics.views.textContent = `${(listing.views / 1000).toFixed(1)}k`;
  metrics.leads.textContent = listing.leads;
  metrics.inspections.textContent = listing.inspections;
  metrics.offers.textContent = listing.offers;
  updateCalculator();
}

function updateCalculator() {
  const listing = currentListings[activeIndex] || listings[0];
  const deposit = Number(depositInput.value);
  const cash = listing.price * (deposit / 100);
  const loan = listing.price - cash;
  const weekly = (loan * 0.061 / 52) * 1.15;
  depositLabel.textContent = `${deposit}%`;
  cashNeeded.textContent = money.format(cash);
  repayments.textContent = `${money.format(weekly)}/wk`;
}

function updateSaved() {
  const savedListings = listings.filter((listing) => saved.has(listing.id));
  savedCount.textContent = `${savedListings.length} saved`;
  savedList.innerHTML = savedListings.length
    ? savedListings
        .map(
          (listing) => `
            <button class="saved-item" data-id="${listing.id}">
              <img src="${listing.image}" alt="" />
              <span><strong>${listing.title}</strong><span>${listing.displayPrice}</span></span>
            </button>
          `,
        )
        .join("")
    : '<p class="empty-state">Save homes from the feed.</p>';

  savedList.querySelectorAll(".saved-item").forEach((button) => {
    button.addEventListener("click", () => jumpToListing(button.dataset.id));
  });
}

function toggleSaved(id) {
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  localStorage.setItem("proptok-saved", JSON.stringify([...saved]));
  renderFeed();
  jumpToIndex(activeIndex);
}

function shareListing(listing) {
  const text = `${listing.title}, ${listing.suburb} - ${listing.displayPrice}`;
  navigator.clipboard?.writeText(text);
  detailBadge.textContent = "Copied";
  setTimeout(() => (detailBadge.textContent = listing.tag), 1300);
}

function openEnquiry(listing) {
  enquiryStatus.textContent = listing.title;
  document.querySelector(".deal-drawer").classList.add("mobile-open");
  document.querySelector("#enquiryPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function applyFilters() {
  const state = stateFilter.value;
  const budget = Number(budgetFilter.value);
  currentListings = listings.filter((listing) => {
    const stateMatch = state === "all" || listing.state === state;
    return stateMatch && listing.price <= budget;
  });
  if (!currentListings.length) currentListings = listings.filter((listing) => state === "all" || listing.state === state);
  activeIndex = 0;
  renderFeed();
}

function jumpToIndex(index) {
  const cards = [...feed.querySelectorAll(".listing-card")];
  if (!cards.length) return;
  activeIndex = Math.max(0, Math.min(index, cards.length - 1));
  cards[activeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
  updateDetails(currentListings[activeIndex]);
}

function jumpToListing(id) {
  const index = currentListings.findIndex((listing) => listing.id === id);
  if (index >= 0) jumpToIndex(index);
}

function currentFromScroll() {
  const cards = [...feed.querySelectorAll(".listing-card")];
  const top = feed.scrollTop;
  const index = Math.round(top / (cards[0]?.offsetHeight || 1));
  if (index !== activeIndex && currentListings[index]) {
    activeIndex = index;
    updateDetails(currentListings[activeIndex]);
  }
}

stateFilter.addEventListener("change", applyFilters);
budgetFilter.addEventListener("input", () => {
  budgetValue.textContent = compactPrice(Number(budgetFilter.value));
  applyFilters();
});
depositInput.addEventListener("input", updateCalculator);
feed.addEventListener("scroll", () => window.requestAnimationFrame(currentFromScroll));
prevButton.addEventListener("click", () => jumpToIndex(activeIndex - 1));
nextButton.addEventListener("click", () => jumpToIndex(activeIndex + 1));
enquiryButton.addEventListener("click", () => openEnquiry(currentListings[activeIndex]));
enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  enquiryStatus.textContent = "Lead sent";
  enquiryForm.reset();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.querySelector(".deal-drawer").classList.remove("mobile-open");
});
document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

budgetValue.textContent = compactPrice(Number(budgetFilter.value));
renderFeed();
