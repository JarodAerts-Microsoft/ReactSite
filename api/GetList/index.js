module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        headers: { 'foo8': 'baz'},
        body: {'Joe', 'Misha', 'Mitali', 'Wenonah'}
    }
};
