//5. Task five

Array.prototype.mForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

function myForEach(array) {
    array.mForEach(function (element) {
        console.log(element);
    })
}
myForEach([1, 4, 5]);

Array.prototype.mFilter = function (callback) {
    let filtered = [];
    let filteredArrayIndex = 0;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            filtered[filteredArrayIndex] = this[i];
            filteredArrayIndex++
        }
    }
    return filtered;
};

function myFilter(array) {
    return array.mFilter(function (element) {
        return element > 3
    })
}

console.log(myFilter([2, 4, 1, 5,]));

Array.prototype.mMap = function (callback) {
    let mapped = [];
    for (let i = 0; i < this.length; i++) {
        mapped[i] = callback(this[i]);
    }
    return mapped;
};

function myMap(array) {
    return array.mMap(function (element) {
        return element * 2;
    })
}

console.log(myMap([2, 1, 5, 2]));

Array.prototype.mFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])){
            return this[i]
        }
    }
};

function myFind(array) {
     return array.mFind(function (element) {
        return element === 2;
    })
}

console.log(myFind([2, 1, 5, 2]));





