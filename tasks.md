1. Binary Search

2. You have an unordered array X of n integers. Find the array M containing
n elements where Mi is the product of all integers in X except for Xi. You may
not use division. You can use extra memory.

3. BFS without recursion

4. Your job is to arrange n ill-behaved children in a straight line, facing front. You
are given a list of m statements of the form “i hates j”. If i hates j, then you do not
want put i somewhere behind j, because then i is capable of throwing something
at j.
(a) Give an algorithm that orders the line, (or says that it is not possible) in
O(m + n) time.

(b) Suppose instead you want to arrange the children in rows such that if i hates
j, then i must be in a lower numbered row than j. Give an efficient algorithm
to find the minimum number of rows needed, if it is possible.

5. Minimum Spanning Trees

6. find the longest common prefix in a list of phrases

7. Given a sorted array and a number, find the count of sum of 2 numbers greater than or iqual to that number

8. Print spiral matrix

9. Check is it is possible to create palindrome from a string

10. Connect all sublings in a tree

11. In a string detect the smallest window length with highest number of distinct characters. For eg.
A = “aabcbcdbca”, then ans would be 4 as of “dbca”

12. There's a function that concatenates two strings and returns the length of the resultant string.
When called upon a series of strings how do we minimize the cost of using this function.
Let's say we have 3 strings, A= "abc", B="def", C = "gh".
Now cost of merging AB = 6 and cost of merging the resultant string with C is 8.
Thus the total cost is 6 + 8 = 14.
However, if we merge A and C, then the cost is 5 and then merge B with this, the cost is 8, so the total cost is 13.
Find an algorithm that minimizes the cost of adding such a series of strings.

13. Given a sorted array of integers, using the same array, shuffle the integers to have unique elements and return the index.

Sample input : [3, 3, 4, 5, 5, 6, 7, 7, 7]
Sample output : [3, 4, 5, 6, 7, X, X, X, X]
In this case, it returns an index of 4.
The elements in the array after that index is negligible (don't care what value it is).

14. Design an algorithm to find all the common elements in two sorted lists of numbers.
For example, for the lists 2, 5, 5, 5 and 2, 2, 3, 5, 5, 7, the output should be 2, 5, 5.

15. Given a string find the minimum number of characters to be inserted for converting the string into a palindrome.

16. Given an array of size n and an integer k, return the of count of distinct numbers in all windows of size k.

17. Search an element in an array where difference between adjacent elements is 1

18. Find the element that appears once in a sorted array
Given a sorted array in which all elements appear twice (one after one) and one element appears only once. Find that element in O(log n) complexity.

19. Given an array where all elements appear even number of times except one.
All repeating occurrences of elements appear in pairs and these pairs are not adjacent
(there cannot be more than two consecutive occurrences of any element). 
Find the element that appears odd number of times.

20. Count all possible walks from a source to a destination with exactly k edges

21. You have three arrays
Merge the first two based no positions from corresponding items fro 3rd array
Negative items in 3rd array mean we don't wabt the corresponding item from 2nd array ni merged array.

Story - You gemerate set of Ads, and Set of Web results. Web results are already ordered.
You want optimally insert ads on the apge. You run a model and for each item in Ads array model predict where it should go in resulting array


Example:

a1:  10 11 12 13
a2:  01 02 03 04
a3:  01 -1 -1 03

res: 10 01 11 12 04 13

22. Create a powerset

23. LRUCache

24. Data structure: insert, remove, contains, get random element, all at O(1)

25. Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.
Return all such possible sentences.
For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].
A solution is ["cats and dog", "cat sand dog"].'''

26. Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

For example,
Given height = [2,1,5,6,2,3],
return 10.

27. Find the length of the longest correct subsequince of brackets of the same type

28. Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

29. Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

30. Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

31. Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

32. What is the best algorithm to find the minimum cost for joining a set of rods to produce one rod,
where in a single move you can join any two rods with cost of this operation equal to the length of the new rod?

Example:
Suppose the rod lengths are { 1,2,3 }
Then optimal way would be:
1) merge 1 and 2 => {3,3} cost = 3
2) merge 3 and 3 => {6} cost = 6

33. Remove the redundant brackets from a mathematical expression.
e.g. input: (a + (b*c)) * (d * ( f * j) )
output should be: (a + b * c) *d * f * j

Assumptions:

String is properly formatted. I don’t check whether there is a correct number of parenthesis etc
There is no spaces between the characters
Only following operators are allowed: ‘+’, ‘-‘, ‘*’,’/’

34. Given an array, print the Next Greater Element (NGE) for every element.
The Next greater Element for an element x is the first greater element on the right side of x in array.
Elements for which no greater element exist, consider next greater element as -1.

35. Remove all elements from a linked list of integers that have value val.

36. Given a set of ranges: (e.g. S = {(1, 4), (30, 40), (20, 91) ,(8, 10), (6, 7), (3, 9), (9, 12), (11, 14)}. 
And given a target range R (e.g. R = (3, 13) - meaning the range going from 3 to 13). Write an algorithm to find the smallest set of ranges that covers your target range. 
All of the ranges in the set must overlap in order to be considered as spanning the entire target range. 
(In this example, the answer would be {(3, 9), (9, 12), (11, 14)}.

37. Given predicted stock prices for next n days for a stock e.g :
15, 30, 42, 15, 20, 10, 50, 5 find the maximum profit that can be made with a single buy-sell transaction. 
If no profit can be made return 0. In the example buying at 15 and selling at 50 gives maximum profit. 
Note that the two prices are neither minimum nor maximum in the array.