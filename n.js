let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let left;
let right;
let target = 5;

function binaryS(arr, left, right, target)
{
    let mid = Math.floor(left + ((right - left ) / 2));
    if(arr[mid] === target)
    {
        return mid;
    }

    if(arr[mid] < target)
    {
        return binaryS(arr, mid + 1, right, target);
    }
    else
    {
        return binaryS(arr, left, mid - 1, target);
    }
}

console.log(binaryS(arr, 0, arr.length - 1, target));