import { CalculateDueDate } from "./assessment";

console.log("TESTING CalculateDueDate\n");
let success = 0;
let failed = 0;

const suitableInputTests = [
  //input date, input hours, expected due date
  ["2023-10-10T10:00:00", 1, "2023-10-10T11:00:00"],
  ["2023-10-10T16:30:00", 1, "2023-10-11T09:30:00"],
  ["2023-10-10T10:00:00", 17, "2023-10-12T11:00:00"],
  ["2023-10-13T16:00:00", 1, "2023-10-13T17:00:00"],
  ["2023-10-13T16:10:00", 1, "2023-10-16T09:10:00"],
  ["2023-10-10T10:00:00", 33, "2023-10-16T11:00:00"],
  ["2023-10-10T10:00:00", 100, "2023-10-26T14:00:00"],
];

const wrongInputTests = [
  //input date, input hours, errormsg
  ["a", "b", "Wrong Typed Arguments"],
  ["a", 2, "Bad submitDate Argument"],
  [new Date(), "b", "Bad turnaroundTime Argument"],
  [null, 1, "Bad submitDate Argument"],
  [new Date(), null, "Bad turnaroundTime Argument"],
  [NaN, 1, "Bad submitDate Argument"],
  [new Date(), NaN, "Bad turnaroundTime Argument"],
  [undefined, 1, "Bad submitDate Argument"],
  [new Date(), undefined, "Bad turnaroundTime Argument"],
  [new Date(), 0, "Bad turnaroundTime Argument"],
  [new Date(), -10, "Non Positive turnaroundTime Argument"],
];

console.log("Expected Due Date Testing\n");

for (let i = 0; i < suitableInputTests.length; i++) {
  ((
    index = i + 1,
    inputDate = suitableInputTests[i][0],
    turnaroundHours = suitableInputTests[i][1],
    expectedResult = suitableInputTests[i][2]
  ) => {
    const result = CalculateDueDate(new Date(inputDate), turnaroundHours);
    if (
      result[1].toString() === new Date(expectedResult).toString() &&
      result[0].length === 0
    ) {
      console.log(`✔ Test#${index} passed`);
      success++;
    } else {
      console.log(`❌ Test#${index} failed`);
      failed++;
    }
  })();
}

console.log("\nWrong Input Testing\n");

for (let i = 0; i < wrongInputTests.length; i++) {
  const element = wrongInputTests[i];
  ((
    index = i + 1 + suitableInputTests.length,
    inputDate = wrongInputTests[i][0],
    turnaroundHours = wrongInputTests[i][1],
    expectedMessage = wrongInputTests[i][2]
  ) => {
    const result = CalculateDueDate(inputDate, turnaroundHours);
    if (
      result[1].toString() === new Date().toString() &&
      result[0] === expectedMessage
    ) {
      console.log(`✔ Test#${index} passed`);
      success++;
    } else {
      console.log(`❌ Test#${index} failed`);
      failed++;
    }
  })();
}

console.log();
console.log(`✔ Successfull: ${success}/${success + failed}`);
console.log(`❌ Failed: ${failed}/${success + failed}`);
