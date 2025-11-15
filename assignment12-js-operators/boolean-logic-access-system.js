const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

console.log("=== Boolean Logic Access System ===");
console.log(`Door Locked: ${isDoorLocked}`);
console.log(`Window Closed: ${isWindowClosed}`);
console.log(`Alarm On: ${isAlarmOn}`);
console.log(`Owner Inside: ${isOwnerInside}`);

const isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

console.log(`\nSystem Status: ${isSecure ? "Secure" : "Unsafe"}`);

console.log("\n--- Testing Different Scenarios ---");

const scenario1 = { door: true, window: true, alarm: true, owner: false };
console.log(`Scenario 1 (Owner not inside): ${scenario1.door && scenario1.window && scenario1.alarm && scenario1.owner ? "Secure" : "Unsafe"}`);

const scenario2 = { door: false, window: true, alarm: true, owner: true };
console.log(`Scenario 2 (Door unlocked): ${scenario2.door && scenario2.window && scenario2.alarm && scenario2.owner ? "Secure" : "Unsafe"}`);

const scenario3 = { door: true, window: true, alarm: false, owner: true };
console.log(`Scenario 3 (Alarm off): ${scenario3.door && scenario3.window && scenario3.alarm && scenario3.owner ? "Secure" : "Unsafe"}`);
