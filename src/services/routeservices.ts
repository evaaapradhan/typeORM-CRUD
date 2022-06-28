import { User } from '../entity/User';
import {Userdata} from '../contracts/Userdata'
import { AppDataSource } from '../srcdata/data-source';
export const findAll = () => {
    const usertable = AppDataSource.manager.find(User);
    return Promise.resolve(usertable);
  };
  
  export const findByID = (id: number) => {
    const user = AppDataSource.manager.find((item) => item.id == id);
    if (user) {
      return Promise.resolve(user);
    }
    return Promise.reject();
  };

//POST
export const upost = (item: Userdata) => {
    // const usertable = AppDataSource.manager.save(Use);
 AppDataSource.manager.insert(User,item)  //--> existing entity , new data
  return Promise.resolve(findAll());
  };
 
  //Delete
  export const deletedata = async (deleteid: number)=>{
    const datarepository = AppDataSource.getRepository(User)
    const D = await datarepository.findOneBy({
      id: deleteid,
    })
    if (D)
await datarepository.remove(D)
return Promise.resolve(findAll())
  }

  //update
  export const update = async(updateid:number, u:Userdata) => {
    const datarepository = AppDataSource.getRepository(User)
    const Updateuser = await datarepository.findOneBy({
      id: updateid,
    })
    console.log(Updateuser)
    if (Updateuser)
    {
      Updateuser.firstName=u.firstName,
      Updateuser.lastName = u.lastName,
      Updateuser.age = u.age
    }
    await datarepository.save(Updateuser)
    return Promise.resolve(findAll())
  }