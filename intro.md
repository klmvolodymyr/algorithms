Two of the most valuable resources for a computer 
program are time and memory.

```
    Time to run code = number of instructions * time to execute each instruction.
```

The number of instructions depends on the code you used, and the time taken to execute
each code depends on your machine and compiler.

In this case, the total number of instructions executed (let's say x) are
`x = 1 + (10^11 + 1) + (10^11) + 1`, which is `x = 2 * 10^11 + 3`

Lets us assume that a computer can execute `y = 10^8` instructions in one second 
(it can vary subject to machine configuration). The time taken to run above code is
```
    Time to run y instructions = 1 second
    Time to run 1 instructuin = 1 / y seconds
    Time to run x instructions = x * (1/y) seconds = x / y seconds
    
    Time to run the code = x / y = (2 * 10^11 + 3 / 10^8 (greater than 33 minutes)
```

Memory is expensive 

Memory is not always available in abundance. While dealing with code/system which requires 
you to store or produce a lot of data, it is critical for your algorithm to save the 
usage of memory by storing only their date of birth, not their age.
You can always calculate it on the fly using their date of birth and current date.


Binary Search Complexity
    Time Complexities:
        - Best case complexity: 0(1)
        - Average case complexity: 0(log n)
        - Worst case complexity: 0(log n)
    Space Complexity
        - The space complexity of the binary search os 0(1)
