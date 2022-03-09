//thanks to Tammana for this one
const combine = (leftArr, rightArr) => {
    let ar3 = []

    let l1 = leftArr.length - 1

    let l2 = rightArr.length - 1

    let i = j = k = 0

    while (i <= l1 && j <= l2) {
        if (leftArr[i] >= rightArr[j]) {
            ar3.push(rightArr[j++])

        } else {
            ar3.push(leftArr[i++])

        }
    }

    while (i <= l1) {
        ar3.push(leftArr[i]);
        i++;
    }

    while (j <= l2) {
        ar3.push(rightArr[j++]);
    }

    return ar3;
}