// src/users/users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, username: 'john', password: 'changeme' },
    { id: 2, username: 'maria', password: 'guess' },
  ];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(username: string, password: string): Promise<any> {
    const newUser = { id: this.users.length + 1, username, password };
    this.users.push(newUser);
    return newUser;
  }
}
