// we are using promise function for providing sync

let stateOfThePage = function (state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('Page is loaded')
        } else {
            reject('Page is not loaded yet')
        }
    })
    
}


console.log(stateOfThePage(true)
        .then((result) => {
            console.log(result); 
        }).catch((err) => {
            console.log(err);
        }));


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 3000);
}).then((result) => {
    console.log(result);
    return result*2;
}).then((result2) => {
    console.log(result2);
    return result2*2;
}).then((result3) => {
    console.log(result3);
    return result3*2;
})