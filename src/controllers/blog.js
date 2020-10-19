const dbUser = require('../modal/user')
const dbService = require('../services/database_service')



exports.CreateBlog = async (req, res) => {

        console.log("file==>", req.file);// middle ware will upload ur files and add the file info in req.file/req.files
        console.log("body==>", req.body); // and form data will be present inside req.body

        var datetime = new Date();
        let blogData = {
                title: req.body.title,
                description: req.body.description,
                postedby: req.body.postedby,
                postdate: datetime,
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

exports.getBlogs=async (req,res)=>{
        let response=await dbService.findAll('blog',{})
        return res.send({ blogData: response });
        
}