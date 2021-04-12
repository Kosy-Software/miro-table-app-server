
exports.handler = async (event) => {
    var jwt = require('jsonwebtoken');
    let token = jwt.sign({}, process.env.MIRO_CLIENT_SECRET, { issuer: process.env.MIRO_CLIENT_ID, expiresIn: 300 });

    const response = {
        statusCode: 200,
        body: token
    };
    return response;
};