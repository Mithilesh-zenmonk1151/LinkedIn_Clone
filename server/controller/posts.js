const Post = require("../model/posts");
require("dotenv").config();
const User = require("../model/user");
exports.createPosts = async (req, res) => {
  try {
    console.log("llllll", req.body.userId);
    const userId = req.body.userId;
    const { title, body } = req.body;
    const userDetails = await User.findById(userId);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User Details Not Found",
      });
    }
    console.log(req.body);

    const post = await Post.create({
      userId: userDetails._id,
      title,
      body,
      imageUrl: "hhh",
    });
    return res.status(200).json({
      success: true,
      post,
      message: "User posted  successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be written. Please try again.",
    });
  }
};


exports.getPost= async(req,res)=>{
    try{
        const post= await Post.find();
         return res.status(200).json({
         success:true,
         post
    });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message: "user cann't get"

    })
    }



}
