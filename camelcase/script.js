function countWords(string) {
    let count = 1;
    for (let i = 1; i < string.length - 1; i++) {
        if (string[i] >= 'A' && string[i] <= 'Z')
            count++;
    }
    return count;
}
let string = "saveChangesInTheEditor";
console.log(countWords(string));