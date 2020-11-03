const dbUser = require('../modal/user')
const dbService = require('../services/database_service')
const logger=require("../services/logger")
const caching=require("../middleware/rediscaching")


exports.CreateBlog = async (req, res) => {

        console.log("file==>", req.file);// middle ware will upload ur files and add the file info in req.file/req.files
        console.log("body==>", req.body);
         // and form data will be present inside req.body

        var datetime = new Date();
        var timestamp = datetime.getTime();
        let blogData = {
                id:timestamp,
                title: req.body.title,
                description: req.body.description,
                postedby: req.body.postedby,
                postdate: datetime,
                imagePath: req.file.path,
                image: req.file.filename,
                lastEdit:datetime
        }
        try {
                let response = await dbService.add('blog', blogData)
                caching.saveCache("url",response)
                res.send(response);

        } catch (error) {
                console.error(error);
        }
}

exports.getBlogs=async (req,res)=>{
        let response=await dbService.findAll('blog',{})
        return res.send({ blogData: response });
        
}
exports.deleteBlog=async (req,res)=>{
        console.log(req.body.id)
        let response=await dbService.delete('blog',{"id":req.body.id})
        
        return res.send({blogData: response})
}

exports.updatePost=async (req,res) =>{

        var datetime = new Date();
        let data = {
        
                title: req.body.title,
                description: req.body.description,
                lastEdit:datetime
        }

        let response=await dbService.UpdateOne('blog',{"id":req.body.id},data)
        logger.error(response)
        return res.send({blogData: response})
}

exports.updateBlogImage=async(req,res)=>{
        console.log("file==>", req.file);  console.log("body==>", req.body);
        

        var datetime = new Date();

        let blogData = {           
                imagePath: req.file.path,
                image: req.file.filename,
                lastEdit:datetime
        }
        try {
                let response = await dbService.UpdateOne('blog',{"id":req.body.id}, blogData)
                res.send(response);

        } catch (error) {
                console.error(error);
        }
}