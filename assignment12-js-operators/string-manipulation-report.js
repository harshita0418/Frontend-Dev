let productName = "  wireless headphones PRO  ";

console.log("=== String Manipulation Report ===");
console.log(`Original: "${productName}"`);

const trimmed = productName.trim();
const lowercase = trimmed.toLowerCase();
const words = lowercase.split(' ');
const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
const formatted = capitalized.join(' ');
const finalTitle = formatted.replace("Pro", "Pro Edition");

console.log(`\nCleaned Title: "${finalTitle}"`);
console.log(`Title Length: ${finalTitle.length} characters`);
