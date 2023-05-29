function waitingServerToAct(myCallBack) {
    let dataNeeded;
    setTimeout(() => {
        console.log('Database connection succesfully');
        dataNeeded = 'AWS';
        myCallBack(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function functionThatNeedBackEndData(info) {
    console.log('I need to use backend data ' + info);
}

waitingServerToAct(functionThatNeedBackEndData);


/**
 * At the begining JS develeoper came up with this callBack solution for asyn
 * Then with ES6 they introduce promises
 * After 2017 they started to use async functions and await keywords
 */

