module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        headers: { 'foobar': 'baz'},
        body: ["234", "Jarod", "Hannah", "Kevin", "Mitch","Colby"]
    }
};
