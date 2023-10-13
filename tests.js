import { CalculateDueDate } from "./assessment"

console.log("TESTING")
let success = 0;
let failed = 0;

const date = new Date();

// Expected Behaviour Test Cases

(() => {
    if(CalculateDueDate(new Date("2023-10-10T10:00:00"),1)[1].toString() === new Date("2023-10-10T11:00:00").toString()){
        console.log("✔ Test#1 passed");
        success++;
    } else {
        console.log("❌ Test#1 failed");
        failed++;
    }
})();

(() => {
    if(CalculateDueDate(new Date("2023-10-10T16:30:00"),1)[1].toString() === new Date("2023-10-11T9:30:00").toString()){
        console.log("✔ Test#2 passed");
        success++;
    } else {
        console.log("❌ Test#2 failed");
        failed++;
    }
})();

(() => {
    if(CalculateDueDate(new Date("2023-10-10T10:00:00"),17)[1].toString() === new Date("2023-10-12T11:00:00").toString()){
        console.log("✔ Test#3 passed");
        success++;
    } else {
        console.log("❌ Test#3 failed");
        failed++;
    }
})();

(() => {
    if(CalculateDueDate(new Date("2023-10-13T16:00:00"),1)[1].toString() === new Date("2023-10-13T17:00:00").toString()){
        console.log("✔ Test#4 passed");
        success++;
    } else {
        console.log("❌ Test#4 failed");
        failed++;
    }
})();

(() => {
    if(CalculateDueDate(new Date("2023-10-13T16:10:00"),1)[1].toString() === new Date("2023-10-16T09:10:00").toString()){
        console.log("✔ Test#5 passed");
        success++;
    } else {
        console.log("❌ Test#5 failed");
        failed++;
    }
})();

(() => {
    if(CalculateDueDate(new Date("2023-10-10T10:00:00"),33)[1].toString() === new Date("2023-10-16T11:00:00").toString()){
        console.log("✔ Test#6 passed");
        success++;
    } else {
        console.log("❌ Test#6 failed");
        failed++;
    }
})();

(() => {
    if(CalculateDueDate(new Date("2023-10-10T10:00:00"),100)[1].toString() === new Date("2023-10-16T11:00:00").toString()){
        console.log("✔ Test#7 passed");
        success++;
    } else {
        console.log("❌ Test#7 failed");
        failed++;
    }
})();

console.log(`✔ Successfull: ${success}/${success + failed}`);
console.log(`❌ Failed: ${failed}/${success + failed}`);