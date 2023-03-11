
def shellSort(arr, n):
    # code here
    gap = n // 2

    while gap > 0:
        j = gap
        # Check the array in from left to right
        # Till the last possible index of j
        while j < n:
            delta = j - gap # This will keep help in maintain gap value

            while delta >= 0:
                # If value on right side is already greater than left side
                # We don't do swap else we swap
                temp = arr[delta + gap]
                left = arr[delta]

                if temp > left:
                    break
                else:
                    arr[delta + gap], arr[delta] = arr[delta], arr[delta + gap]

                delta = delta - gap # To check left side also
                            # If the element present is greater than current element
            j += 1
        gap = gap // 2


arr5 = [12, 34, 54, 2, 3]
# arr5 = [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68]
print("input array:", arr5)

shellSort(arr5, len(arr5))
print("sorted array", arr5)