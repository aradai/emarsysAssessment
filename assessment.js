/**
 * Give how many days need to add if the date is on a weekend day.
 * @param {number} dayNumber - The number of the day, week starts with sunday so that is 0.
 * @return {number} Number we need to add to skip the weekend.
 */
function CorrectWeekend(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 1;
    case 6:
      return 2;
    default:
      return 0;
  }
}

/**
 * Create error message if CalculateDueDate get wrong input.
 * @param {Date} submitDate - The time when issue arrived.
 * @param {number} turnaroundTime - The time until have to provide solution for the issue, works only with whole number.
 * @return {String} Error message or empty string if there is no error.
 */
function HandleWrongInput(submitDate, turnaroundTime) {
  if (!(submitDate instanceof Date) && typeof turnaroundTime !== "number") {
    return "Wrong Typed Arguments";
  }

  if (!submitDate || isNaN(submitDate)) {
    return "Bad submitDate Argument";
  }

  if (!turnaroundTime || typeof turnaroundTime !== "number") {
    return "Bad turnaroundTime Argument";
  }

  if (turnaroundTime < 1) {
    return "Non Positive turnaroundTime Argument";
  }

  return "";
}

/**
 * Calculate due date from the given parameters
 * @summary For more complex explanation see the given assessment.
 * @param {Date} submitDate - The time when issue arrived.
 * @param {number} turnaroundTime - The time until have to provide solution for the issue, works only with whole number.
 * @return {[String, Date]} The first parameters contains the error message if any, otherwise empty string,
 * the second is the duedate if do not have error message otherwise current date.
 */
export function CalculateDueDate(submitDate, turnaroundTime) {

  const message = HandleWrongInput(submitDate, turnaroundTime);
  if (message.length !== 0) {
    return [message, new Date()];
  }

  const beginOfWorkTime = 9;
  const endOfWorkTime = 17;
  const submitHours = submitDate.getHours();
  const fullHour = submitDate.getMinutes() == 0 && submitDate.getSeconds() == 0;
  turnaroundTime = Math.floor(turnaroundTime);
  const remainingHours = turnaroundTime % 8;

  if (submitHours + remainingHours <= endOfWorkTime && fullHour) {
    submitDate.setHours(submitHours + remainingHours);
  } else {
    submitDate.setDate(submitDate.getDate() + 1);
    submitDate.setHours(
      beginOfWorkTime + (submitHours + remainingHours - endOfWorkTime)
    );
  }

  let correction = CorrectWeekend(submitDate.getDay());
  submitDate.setDate(submitDate.getDate() + correction);

  turnaroundTime -= remainingHours;
  let days = turnaroundTime / 8;
  for (let i = 0; i < days; i++) {
    submitDate.setDate(submitDate.getDate() + 1);
    correction = CorrectWeekend(submitDate.getDay());
    submitDate.setDate(submitDate.getDate() + correction);
  }

  return [message, submitDate];
}
