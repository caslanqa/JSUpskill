/**
 * ===> In Java codes executing line by line.
 * Next line is waiting previous line is completed
 * This is sync
 * 
 * ===> In JS codes executing without waiting line completed for next one
 * This is async
 */

function waitingServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log('Database connection succesfully');
        dataNeeded = 'AWS'
        console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function functionThatNeedBackEndData(info) {
    console.log('I need to use backend data ' + info);
}

let data = waitingServerToAct(); // it will provide connection to db and returns data from db


functionThatNeedBackEndData(data);