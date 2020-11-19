// 1. Task one

function customCycle(result, numberOfIterations) {
    if (numberOfIterations === 1) {
        return result;
    } else {
        let finalResult = result * customCycle(result, numberOfIterations - 1);
        return finalResult;
    }
}

console.log(customCycle(3, 5));