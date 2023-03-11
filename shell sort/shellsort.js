
//  gap      - (пробел) отступ
//  delta    - (зазор)
//  interval - зазор - частота
//  temp     - insertion value

function shell_sort(arr, interval) {
    let gap = Math.round(arr.length / interval);

    do {
        //      0     1      2      3     4
        //
        //  |  12  |  34  |  54  |  2  |  3  |
        //  |             |                  |
        //  |_____________|                  |
        //        gap     |                  |
        //      отступ    |__________________|
        //                     for (кружаня)
        //                |  54  |
        //                  temp
        //
        //                   ^
        //                   |       |    |
        //                 outer ----------->
        //                   |       3    4
        //      |     |      |
        //   <------------ inner
        //      0     1      2
        for (let outer = gap; outer < arr.length; outer++) {
            // delta
            let temp = arr[outer];
            let inner = outer;

            while (inner > (gap - 1) && arr[inner - gap] >= temp) {
                arr[inner] = arr[inner - gap]
                inner = inner - gap
            }

            arr[inner] = temp
        }
        gap = Math.round((gap - 1) / interval);
        console.log(1)
    } while (gap > 0)
}


shell_sort([12, 34, 54, 2, 3],  3);
// [32, 95, 16, 82, 24, 66, 35, 19, 75, 54, 40, 43, 93, 68]
// [12, 34, 54, 2, 3]
// https://www.geeksforgeeks.org/shellsort/?ref=gcse