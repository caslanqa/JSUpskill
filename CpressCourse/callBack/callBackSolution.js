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