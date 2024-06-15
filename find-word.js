const string = "My Name is jatin"
const string3 = "hello "
const find = "jatin"

const findWord = (string, find) => {
    let i = 0;
    let j = 0;
    let found = false;
    while (i < string.length) {
        if (string[i] === find[j]) {
            i++;
            j++;
            while (j < find.length) {
                if (string[i] !== find[j]) {
                    j = 0;
                    break;
                }
                if (j === find.length - 1) {
                    found = true;
                }
                i++;
                j++;
            }
        }
        else {
            i++;
        }
        if (found) {
            break;
        }
    }
    console.log(found);
    return found;
}
findWord(string, find);