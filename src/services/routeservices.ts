import { User } from '../entity/User';
import {Userdata} from '../contracts/Userdata'
import { AppDataSource } from '../srcdata/data-source';

export const findAll = () => {
    const usertable = AppDataSource.manager.find(User);
    return Promise.resolve(usertable);
  };

   //GETBYID
  export const findByID = async(getid: number) => {
    // const findget = AppDataSource.getRepository(User)
    const finduser = await AppDataSource.getRepository(User).findOneBy({
      id: getid,
    })
    return Promise.resolve(finduser)
  };

//POST
export const upost = (item: Userdata) => {
    // const usertable = AppDataSource.manager.save(Use); //when using save have to delcare 
 AppDataSource.manager.insert(User,item)  //--> existing entity , new data
  return Promise.resolve(findAll());
  };
 
  //Delete
  export const deletedata = async (deleteid: number)=>{
    const findobject = await AppDataSource.getRepository(User).findOneBy({
      id: deleteid,
    })
    if (findobject)
await AppDataSource.getRepository(User).remove(findobject)
return Promise.resolve(findAll())
  }

  //update
  export const update = async(updateid:number, u:Userdata) => {
    const Updateuser = await AppDataSource.getRepository(User).findOneBy({
      id: updateid,
    })
    // findByID()
    console.log(Updateuser)
    if (Updateuser)
    {
      Updateuser.firstName=u.firstName,
      Updateuser.lastName = u.lastName,
      Updateuser.age = u.age
    }
    await AppDataSource.getRepository(User).save(Updateuser)
    return Promise.resolve(findAll())
  }