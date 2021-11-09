const path = require("path");
const BlogPost = require("../models/BlogPost");

module.exports = async (req,res)=>{
    let image = req.files.image;
    await image.mv(path.resolve(__dirname, 'public/img', image.name), async (error) => {
        await BlogPost.create({...req.body, image: '/img/' + image.name})
        res.redirect('/')
    })
}