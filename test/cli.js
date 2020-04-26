const validateGoogle = require('../index');


async function runTest() {
    const reader = require('readline-sync');
    let clientID = reader.question("Google ClientID: ");
    let token = reader.question("Token:");
    
    console.log(await validateGoogle(clientID, token));


}


runTest().finally(()=>{
    console.log("Test finished");
    process.exit();
})
