const dbUser = require('../modal/user')
const dbService = require('../services/database_service')



exports.CreateBlog = async (req, res) => {

        console.log("file==>", req.file);// middle ware will upload ur files and add the file info in req.file/req.files
        console.log("body==>", req.body); // and form data will be present inside req.body


        let blogData = {
                title: req.body.title,
                description: req.body.description,
                postedby: req.body.postedby,
                postdate: req.body.postdate,
                imagePath: req.file.path,
                image: req.file.filename
        }
        try {
                let response = await dbService.add('blog', blogData)
                res.send(response);

        } catch (error) {
                console.error(error);
        }
}