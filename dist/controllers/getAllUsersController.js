"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUsersController = (request, response) => {
    console.log('users');
    const users = [{ name: 'Peter', age: 30 }, { name: 'Dora', age: 28 }];
    response.statusCode = 200;
    response.send(({ users: users }));
};
exports.default = getAllUsersController;
//# sourceMappingURL=getAllUsersController.js.map