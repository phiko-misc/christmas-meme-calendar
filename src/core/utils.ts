import { readFile } from "fs";
import path from "path";

/**
 * Shuffle arrays
 * @template T
 * @param {T[]} array Can take any type you want of arrays
 * @returns {T[]} a shuffled
 * 
 * ```js
 * // Can be used like this
 * const sortArray = [1, 2, 3, 4, 5, 6];
 * const shuffledArray = shuffle(sortArray); // [2, 5, 6, 4, 1, 3]
 * ```
 */
export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};


/**
 * Get a random number
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}