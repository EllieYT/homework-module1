// Get the `ul` element
var partnersList = document.getElementById("partners");

// Create an array with image paths and descriptions
var partners = [
  { imgSrc: "images/partner-bustour.png", altText: "Partner Bus Tours" },
  { imgSrc: "images/partner-cabinrental.png", altText: "Partner Cabin Rental" },
  {
    imgSrc: "images/partner-campingadv.png",
    altText: "Partner Camping Adventure",
  },
  {
    imgSrc: "images/partner-collegetours.png",
    altText: "Partner College Tours",
  },
  { imgSrc: "images/partner-rentalbike.png", altText: "Partner Bike Rentals" },
  { imgSrc: "images/partner-tourgroup.png", altText: "Partner Tour Group" },
];

// Loop through the array and create list items for each partner
partners.forEach(function (partner) {
  // Create `li` element
  var listItem = document.createElement("li");
  listItem.classList.add("partner");

  // Create `img` element
  var img = document.createElement("img");
  img.src = partner.imgSrc; // Set the image source
  img.alt = partner.altText; // Set the alt text

  // Append `img` to the `li` element
  listItem.appendChild(img);

  // Append `li` to the `ul` element
  partnersList.appendChild(listItem);
});
