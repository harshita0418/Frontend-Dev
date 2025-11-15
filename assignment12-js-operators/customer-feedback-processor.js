const feedback = "Great product! Fast delivery and amazing sound quality!";

console.log("=== Customer Feedback Processor ===");
console.log(`Feedback: "${feedback}"`);

const words = feedback.split(' ');
const wordCount = words.length;

console.log(`\nWord Count: ${wordCount}`);

const hasBad = feedback.toLowerCase().includes("bad");
const hasPoor = feedback.toLowerCase().includes("poor");

let sentiment;
if (hasBad || hasPoor) {
    sentiment = "Needs Improvement";
} else {
    sentiment = "Positive Feedback";
}

console.log(`Sentiment Analysis: ${sentiment}`);

console.log("\n--- Testing Negative Feedback ---");
const negativeFeedback = "Poor quality product. Very bad experience.";
console.log(`Feedback: "${negativeFeedback}"`);
const hasNegative = negativeFeedback.toLowerCase().includes("bad") || negativeFeedback.toLowerCase().includes("poor");
console.log(`Sentiment: ${hasNegative ? "Needs Improvement" : "Positive Feedback"}`);
