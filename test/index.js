const token="";
const client_id="";

const validateGoogle = require('../index');

async function runTest() {
    console.log(await validateGoogle(client_id, token));
}

runTest().then(()=>{
    console.log("Test finished");
    process.exit();
})
