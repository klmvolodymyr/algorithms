# Binarey Search in python
def binarySearchRecursive(array, x, low, high):

    if high >= low:

        mid = low + (high - low)//2

        # If found at mid, then return it
        if array[mid] == x:
            return mid

        # Search the left half
        elif array[mid] > x:
            return binarySearchRecursive(array, x, low, mid-1)

        # Search the right half
        else:
            return binarySearchRecursive(array, x, mid + 1, high)
    else:
        return -1


def binarySearchIterative(array, x, low, high):
    # Repeat until the pointers low and high meet erach other
    while low <= high:
        mid = low + (high - low) // 2

        if array[mid] == x:
            return mid

        elif array[mid] < x:
            low = mid + 1

        else:
            high = mid - 1

    return -1

array = [3, 4, 5, 6, 7, 8, 9]
x = 8

result = binarySearchIterative(array, x, 0, len(array) - 1)

array = [3, 4, 5, 6, 7, 8, 9]
x = 8

result1 = binarySearchRecursive(array, x, 0, len(array) - 1)

if result != -1:
    print("1 - Element is present at index " + str(result))
else:
    print("Not found")


if result1 != -1:
    print("2 - Element is present at index " + str(result))
else:
    print("Not found")