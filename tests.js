import { CalculateDueDate } from "./assessment"

console.log("TESTING");
let success = 0;
let failed = 0;

// Expected Behaviour Test Cases
const goodTests = [
    //input date, input hours, expected due date
    ["2023-10-10T10:00:00", 1, "2023-10-10T11:00:00"],
    ["2023-10-10T16:30:00", 1, "2023-10-11T09:30:00"],
    ["2023-10-10T10:00:00", 17, "2023-10-12T11:00:00"],
    ["2023-10-13T16:00:00", 1, "2023-10-13T17:00:00"],
    ["2023-10-13T16:10:00", 1, "2023-10-16T09:10:00"],
    ["2023-10-10T10:00:00", 33, "2023-10-16T11:00:00"],
    ["2023-10-10T10:00:00", 100, "2023-10-26T14:00:00"]
]

console.log("Expected Behavoiur Testing");

for(let i = 0; i < goodTests.length; i++){

    ((index = i + 1, inputDate = goodTests[i][0], turnaroundHours = goodTests[i][1], expectedResult = goodTests[i][2]) =>
    {
        if(CalculateDueDate( new Date(inputDate), turnaroundHours )[1].toString() === new Date(expectedResult).toString()){
            console.log(`✔ Test#${index} passed`);
            success++;
        } else {
            console.log(`❌ Test#${index} failed`);
            failed++;
        }
    })();
}

console.log(`✔ Successfull: ${success}/${success + failed}`);
console.log(`❌ Failed: ${failed}/${success + failed}`);