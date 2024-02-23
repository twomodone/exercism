// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalNumOfBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++){
    totalNumOfBirds += birdsPerDay[i];
  } return totalNumOfBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsByWeek = [];
  let currentDay = 1;
  let totalNumOfBirds = 0;
  
  for (let i = 0; i < birdsPerDay.length; i++){
    totalNumOfBirds += birdsPerDay[i];
    if (currentDay === 7){
      birdsByWeek.push(totalNumOfBirds);
      currentDay = 0;
      totalNumOfBirds = 0;
    }
    
    currentDay++;
  }
  return birdsByWeek[week - 1];
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++){
    if (i % 2 === 0){
      birdsPerDay[i]++;
    }
  } return birdsPerDay;
}
