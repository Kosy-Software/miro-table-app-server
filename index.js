
exports.handler = async (event) => {
    var jwt = require('jsonwebtoken');
    let token = jwt.sign({}, process.env.MIRO_CLIENT_SECRET, { issuer: process.env.MIRO_CLIENT_ID, expiresIn: Date.UTC() + 300000 }); //Expires in 5 minutes (5 * 60 * 1000)

    const response = {
        statusCode: 200,
        body: token
    };
    return response;
};