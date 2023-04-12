
//  gap      - (пробел) отступ
//  delta    - (зазор)
//  interval - зазор - частота
//  temp     - insertion value



// function shell_sort(arr, interval) {
//     let gap = Math.round(arr.length / interval);
//
//     do {
//
//         //      0      1     2
//         //  |  32  |  95  |  16  |  82  |  24  |  66  |  35  |  19  |  75  |  54  |  40  |  43  |  93  |  68  |
//
//         //      0     1      2      3     4
//         //
//         //  |  12  |  34  |  54  |  2  |  3  |
//         //  |             |                  |
//         //  |_____________|                  |
//         //        gap     |                  |
//         //      отступ    |__________________|
//         //                     for (кружаня)
//         //                |  54  |
//         //                  temp
//         //
//         //                   ^
//         //                   |       |    |
//         //                 outer ----------->
//         //                   |       3    4
//         //      |     |      |
//         //   <------------ inner
//         //      0     1      2
//         for (let outer = gap; outer < arr.length; outer++) {
//             // delta
//             let temp = arr[outer];
//             let inner = outer;
//
//             while (inner > (gap - 1) && arr[inner - gap] >= temp) {
//                 arr[inner] = arr[inner - gap];
//                 inner = inner - gap;
//             }
//
//             arr[inner] = temp
//         }
//
//         gap = Math.round((gap - 1) / interval);
//         console.log(1);
//
//     } while (gap > 0)
// }
//
// shell_sort([12, 34, 54, 2, 3],  3);
// [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68]
// [12, 34, 54, 2, 3]
// https://www.geeksforgeeks.org/shellsort/?ref=gcse
/**
    PROCEDURE SHELL_SORT(ARRAY, N)

        WHILE GAP < LENGTH(ARRAY) /3 :
                GAP = ( INTERVAL * 3 ) + 1
          END WHILE LOOP

          WHILE GAP > 0 :

            FOR (OUTER = GAP; OUTER < LENGTH(ARRAY); OUTER++):
                INSERTION_VALUE = ARRAY[OUTER]
                INNER = OUTER;

                WHILE INNER > GAP-1 AND ARRAY[INNER – GAP] >= INSERTION_VALUE:
                    ARRAY[INNER] = ARRAY[INNER – GAP]
                    INNER = INNER – GAP
                END WHILE LOOP

                ARRAY[INNER] = INSERTION_VALUE

             END FOR LOOP

          GAP = (GAP -1) /3;

        END WHILE LOOP

    END SHELL_SORT
 */

//                                      7   8   9   10  11  12  13
//                          4   5   6   7   8   9   10  11  12  13
//              1   2   3   4   5   6   7   8   9   10  11  12  13
let arr = [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68];
//          0   1   2   3   4   5   6   7   8   9   10  11  12  13


//    0   1   2  3  4
// let arr1 = [12, 34, 54, 2, 3];
// Javascript implementation of ShellSort

/* An utility function to print array of size n*/
function printArray(arr)
{
    let n = arr.length;
    for (let i = 0; i < n; ++i)
        document.write(arr[i] + " ");
    document.write("<br>");
}

/* function to sort arr using shellSort */
function sort(arr)
{
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
    {
        console.log(`loop 1 gap - ${gap}`);
        // Do a gapped insertion sort for this gap size.
        // The first gap elements a[0..gap-1] are already
        // in gapped order keep adding one more element
        // until the entire array is gap sorted
        for (let i = gap; i < n; i += 1)
        {
            console.log(`\tloop 2 gap - ${gap}, i - ${i}`);
            // add a[i] to the elements that have been gap
            // sorted save a[i] in temp and make a hole at
            // position i
            let temp = arr[i];

            // shift earlier gap-sorted elements up until
            // the correct location for a[i] is found
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                console.log(`\t\tloop 3 gap - ${gap}, i - ${i}, j - ${j}`);
                arr[j] = arr[j - gap];

            // put temp (the original a[i]) in its correct
            // location
            arr[j] = temp;
        }
    }
    return arr;
}




sort(arr);




















