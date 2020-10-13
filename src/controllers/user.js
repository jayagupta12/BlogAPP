const dbUser = require('../modal/user')
const dbService = require('../services/database_service')

exports.CreateUser = async (req, res) => {
        let response = await dbService.checkEmail("user", req.body)
        if (response == 0) {
                let response = await dbService.add("user", req.body);
                res.send(response);
        }
        else {
                res.send({ user: "user already exist" });
        }

}

exports.LoginUser = async (req, res) => {
        let response = await dbService.find("user", req.body)
        res.send(response)
}

exports.CreateBlog = async (req, res) => {
        let response = await dbService.add("blog", req.body);
        res.send(response);
}