import { Request, Response } from 'express';

const getAllUsersController = (request: Request, response: Response) => {
    console.log('users');
    const users = [ { name: 'Peter', age: 30 }, { name: 'Dora', age: 28 } ];
    response.statusCode = 200;
    response.send(({ users: users }));
}

export default getAllUsersController;