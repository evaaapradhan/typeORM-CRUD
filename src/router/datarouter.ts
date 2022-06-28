import { Request, Respose, Router } from "express";
import { deletedata, findAll, findByID, update, upost } from "../services/routeservices";

import { Userdata } from "../contracts/Userdata";


export const DataRouter: Router = Router();

DataRouter.get("/getdata", async (req: Request, res: Respose) => {
    try{
        const result = await findAll();
        res.send(result);
    } catch (error){
        //logger
        res.status(404).send('Error occured'+ error);
    }
});
//find by Id
DataRouter.get("/get/:id", async (req: Request, res: Respose) => {
    try{
        const result = await findByID(Number(req.params.id));
        res.send(result);
    } catch (error){
        //logger
        res.status(404).send('Error occured '+error);
    }
});

//POST
DataRouter.post("/", async(req:Request, res:Respose)=>{
    // const newUser: Userdata = {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     age: req.body.age
    // }
    try{
        const result = await upost(req.body);
        res.status(200).json(result)
    } catch (error){
        //logger
        res.status(404).json('error');
    }
})

//DELETE
DataRouter.delete('/data/:id', async(req:Request, res:Respose)=>
{
    let deleteid:number = Number(req.params.id)
    const todelete = await deletedata (deleteid)
    res.status(200).json({message:`data of id ${deleteid} has been deleted`, data: todelete  })
})

//PUT
DataRouter.put('/data/:id', async(req:Request, res:Respose)=>{ 
    let updateid:number = Number(req.params.id)
    // let updated:Userdata = req.body
    try{
        // console.log(updated)
         const updatedArray = await update(updateid, req.body)
         res.status(200).json({message:"update success", data:updatedArray})
    }catch(error){
        res.json(error)
    }
})