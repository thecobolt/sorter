class Sorter {
    constructor() {
        this.array = []; 
        this.compareFunction = (left,right) => left - right; 
    }
    add(element) {
        this.array.push(element); 
    }
    at(index) {
        return this.array[index]; 
    }
    get length() {
        return this.array.length; 
    }
    toArray() {
        return this.array; 
    }
    sort(indices) {
        var sortArray = [];
        indices.sort().forEach(x => sortArray.push(this.array[x]));
        sortArray.sort(this.compareFunction);  
        indices.forEach((x, y) => this.array[x] = sortArray[y]);
    }
    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
  }
}
module.exports = Sorter;
