module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        headers: { 'foobar': 'baz'},
        body: ["2134", "Jarod", "Hannah", "Kevin", "Mitch","Colby"]
    }
};
