module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    
    const shoppingList = {
        "results": [
            {
                "name": "milk",
                "quantity": "1 gallon",
                "url": "https://www.delish.com/cooking/recipe-ideas/recipes/a30276/strawberry-jam-recipe/",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singleimagebug-strawberry-jam-1555107425.jpg?crop=1.00xw:0.947xh;0,0&resize=980:*"
            },
            {
                "name": "wheat bread",
                "quantity": "2 loaves",
                "image": "https://images-gmi-pmc.edge-generalmills.com/3c52c450-983f-415d-9947-2b0429926ce2.jpg?crop=0.447xw:1.00xh;0.0969xw,0&resize=980:*"
            },
            {
                "name": "apples",
                "quantity": "5",
                "image": "https://cdn.shopify.com/s/files/1/2336/3219/products/fuji_x850.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*"
            }
        ]
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(shoppingList)
    };
};
