# Binary Search

Binary Search is a searching algorithm for finding
an element's position in a sorted array.


```
    Binary search can be implemented only on a sorted
    list of items. If the elements are not sorted already, we need to sort them first.
```


## Binary Search Working
Binary Search Algorithm can be implemented in two ways
which are discussed below.

    1. Iteractive Method
    2. Recursive Method

The recursive method follows the divide and conquer approach.
The general steps for both methods are discussed below.

1. The array in which searching is to be performed is:
```
        3 | 4 | 5 | 6 | 7 | 8 | 9
```
            Initial array
Let `x = 4` be the element to be searched.

2. Set two pointers low and high at the lowest and the highest positions respectively.
```
            3 | 4 | 5 | 6 | 7 | 8 | 9
            ^                       ^
            |                       |
           low                     high
```
                Setting pointers

3. Find the middle element `mid` of the array ie. `arr[(low + high)/2] = 6`.
```
            3 | 4 | 5 | 6 | 7 | 8 | 9
                        ^
                        |
                       mid
```
                    Mid element
4. If `x == mid`, the return mid. Else, compare the element to be searched with m.

5. If `x > mid`, compare `x` with the middle element of the elements on the right
    side of `mid`. This is done by setting `low` to `low = mid + 1`. 
 
6. Else, compare `x` with the middle element of the elements on the
   left side of `mid`. This is done by setting `high` to `high = mid - 1`.
```
            3 | 4 | 5 | 6 | 7 | 8 | 9
            ^       ^
            |       |
           low     high
```
                Finding mid element

7. Repeate steps 3 to 6 until low meets high.
```
            3 | 4 | 5
                ^
                |
               mid
```
            Mid element

8. x = 4 is found
```
            3 | 4 | 5
                ^
                |
               mid
```
             Found