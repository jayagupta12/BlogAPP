const dbService = require('../services/database_service')
const tokenService = require('../services/token')

exports.CreateUser = async (req, res) => {
        let response = await dbService.find("user", {"email":response.body.email})
        if (response) {
                let response = await dbService.add("user", req.body);
                res.send(response);
        }
        else {
                res.send({ user: "user already exist" });
        }

}

exports.LoginUser = async (req, res) => {
        let response = await dbService.find("user", { "email": req.body.email, "pass": req.body.pass })

        if (response) {
                const token = tokenService.generateAccessToken({ "email": req.body.email });
                return res.send({ responsetoken: token, user: response });
        }
        else {
                let checkEmail = await dbService.find("user", { "email": req.body.email })
                console.error(checkEmail)
                if (checkEmail) {
                        return res.send({ user: "invalid email and password" });
                }
                else {
                        return res.send({ user: "you are not registered" })
                }
        }

}



