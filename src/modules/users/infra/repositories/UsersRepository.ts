import { loadLocalStorage, saveLocalStorage, saveSessionStorage } from "../../../../utils/utilsLocalStorage";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

import { User } from "../entities/User";

export class UsersRepository implements IUsersRepository {

  private users: User[];
  private static INSTANCE: UsersRepository;
  private KEYDB = '@CreedTech:users';

  constructor() {
    this.users = loadLocalStorage(this.KEYDB)
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }
    return UsersRepository.INSTANCE
  }

  async create(data_user: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, data_user)

    this.users = saveLocalStorage(user, this.KEYDB)
    
    saveSessionStorage({id: user.id, username: user.username})
    
    return user
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }

}
