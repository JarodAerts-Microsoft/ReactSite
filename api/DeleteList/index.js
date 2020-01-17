module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // var requestBody = req.body;
    // var list = JSON.parse(requestBody);

    context.res = {
        body: ["deleted"]
    }
};