import newblock from "../models/blog.model"


export const createblog = async(req,res)=>{

    let blogdata = { data:req.body.data}

    let blog = await newblock.create(blogdata)

        if(blog){
            
            return res.status(200).json({
                message:"suesss",
                data:blog,
                status:true
            })

        }
        else{
            return res.status(500).json({
                message:"soething is worngf",
                status:false
            })
        }

}

export const editblog = async(req,res)=>{

    const _id = req.params.id;
    const updatedblog= await newblock.findByIdAndUpdate(_id,{data:req.body.data,upsert:false})

        if(updatedblog){
            
            return res.status(200).json({
                message:"suesss",
                data:updatedblog,
                status:true
            })

        }
        else{
            return res.status(500).json({
                message:"soething is worngf",
                status:false
            })
        }

}

export const getblog = async(req,res)=>{

    const _id = req.params.id;
    const blog= await newblock.findById(_id)

        if(blog){
            
            return res.status(200).json({
                message:"suesss",
                data:blog,
                status:true
            })

        }
        else{
            return res.status(500).json({
                message:"soething is worngf",
                status:false
            })
        }

}


export const getallblog = async(req,res)=>{

 
    const blog= await newblock.find()

        if(blog){
            
            return res.status(200).json({
                message:"suesss",
                data:blog,
                status:true
            })

        }
        else{
            return res.status(500).json({
                message:"soething is worngf",
                status:false
            })
        }

}


export const deleteblog = async(req,res)=>{

    const _id = req.params.id;
    const blog= await newblock.findByIdAndDelete(_id)

        if(blog){
            
            return res.status(200).json({
                message:"suesss",
                data:blog,
                status:true
            })

        }
        else{
            return res.status(500).json({
                message:"soething is worngf",
                status:false
            })
        }

}