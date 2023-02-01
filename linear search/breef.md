# Linear Search

```
    Linear search os a sequential searching algorithm where we
    start from one end and check every element of the list until
    the desired element is found. It is ther simplest sewarching algorithm.
```

## How Linear Search Works?
```
    The following steps are followed to search for an element `k = 1` in the list below.
           | 2 | 4 | 0 | 1 | 9 |
        `Array to be searched for`
```

1. Start from the first element, compare `k` with each element `x`.
```
        k = 1
    
        | 2 | 4 | 0 | 1 | 9 |
          ^
          |
        k != 2
    
        | 2 | 4 | 0 | 1 | 9 |
              ^
              |
            k != 2
       
       | 2 | 4 | 0 | 1 | 9 |
                 ^
                 |
              k != 0      
               
       `Compare with each element`
```

2. If `x == k`, return index.
```
        | 2 | 4 | 0 | 1 | 9 |
                      ^
                      |
                    k = 1
                    
            Element found
```

3. Else, return `not found`.

```
    LinearSearch(array, key)
        for each iteam in the array
            if item == value
                return its index
```

# Linear Search Complexities
*Time Complexity*: `0(n)`