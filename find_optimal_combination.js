/**
 * Get the optimal combination to reach or come as close as possible to the target value.
 * 
 * @param { number } target 
 * @param { number[] } items 
 * @returns {{ items: number[], sum: number, maxDepth: number }}
 */
export function findOptimalCombination(target, items) {

    // Sort values in descending order.
    items.sort((a, b) => b - a);

    function findOptimalCombination(target, items, combination, pickedSum, bestCombination, depth) {

        if (bestCombination.maxDepth < depth) {
            bestCombination.maxDepth = depth;
        }

        // Replace best combination if a better one is detected.
        if (pickedSum >= target) {
            if (bestCombination.sum === 0 || pickedSum < bestCombination.sum || (pickedSum === bestCombination.sum && combination.length < bestCombination.items.length)) {
                bestCombination.items = combination;
                bestCombination.sum = pickedSum;
            };
            return false;
        }

        for (let x = 0; x < items.length; x++) {
            let sumWithNextItem = pickedSum + items[x];

            //Skip checking values greater than the current best combination.
            if (bestCombination.sum !== 0 && sumWithNextItem > bestCombination.sum) {
                continue;
            }
            if (findOptimalCombination(target, items, [...combination, items[x]], sumWithNextItem, bestCombination, depth + 1)) {
                return bestCombination;
            }
        }

        // Return current combination if maximum depth is reached
        return depth <= Math.max(bestCombination.maxDepth - 15, 0) ? bestCombination : false;
    }

    return findOptimalCombination(target, items, [], 0, { items: [], sum: 0, maxDepth: 0 }, 0);
}