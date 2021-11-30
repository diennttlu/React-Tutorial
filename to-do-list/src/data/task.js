const uuidv4 = require('uuid/v4');

let items = [
    {
        id: uuidv4(),
        name: "Tìm hiểu adapter",
        level: 0 // 0 small, 1 Medium, 2 High
    },
    {
        id: uuidv4(),
        name: "Code màn hình CRUD Whitelist Wallet",
        level: 2 // 0 small, 1 Medium, 2 High
    },
    {
        id: uuidv4(),
        name: "Code màn hình CRUD Reward",
        level: 1 // 0 small, 1 Medium, 2 High
    }
];

export default items;