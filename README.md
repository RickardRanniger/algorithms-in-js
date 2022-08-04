# Algorithms in js

A collection of algorithms written in Javascript.

---
## Fibonacci ( [fibonacci.js](https://github.com/RickardRanniger/algorithms-in-js/blob/main/fibonacci.js) )
Two implementations of the fibonacci algorithm. With and without recursion

|n|fibonacci|
|:-:|:-:|
|0|0|
|1|1|
|2|1|
|3|2|
|4|3|
|5|5|
|6|8|

|function|Time Complexity|
|---|---|
| fibinacciRecursion(n, {}) | No Cache $O(2^n)$ Cache $O(n)$ |
| fibonacciIterative(n) | $O(n)$ | 
|||


## Find optimal combination ( [find_optimal_combination.js](https://github.com/RickardRanniger/algorithms-in-js/blob/main/find_optimal_combination.js) )
Find the optimal combination of an infinite set of numbers to match the target. It perfoms pretty performant on fairly small sets. Max depth is set to 15 which give you the best solution in an overwhelming amount of cases.

|function|Time Complexity|
|---|---|
| findOptimalCombination(target, items) | $O(n^d)$ d=depth| 
|||

|set|target|optimal solution|
|---|:-:|---|
|[ 7 ]|21|[ 7, 7, 7 ] = 21|
|[ 7 ]|22|[ 7, 7, 7, 7 ] = 28|
|[ 7, 3 ]|22|[ 7, 3, 3, 3 ] = 23|
|[ 2, 1 ]|5|[ 2, 2, 1 ] = 5|