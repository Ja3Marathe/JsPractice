function findDeleteItems(oldArray, newArray) {
    const deleted = [];
    for (let i = 0; i < oldArray.length; i++) {
        let available = false;
        for (let j = 0; j < newArray.length; j++) {
            if (oldArray[i] === newArray[j]) {
                available = true;
                break;
            }
        }
        if (!available) {
            deleted.push(oldArray[i]);
        }
    }
    console.log(`Deleted item are ${deleted}`);
}
findDeleteItems([12, 7, 14, 98, 32], [7, 98, 32]);