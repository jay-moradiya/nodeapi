const { postUser, getUser, getUserById, putUser, deleteUser } = require("../controller/userController");

const route = (app) => {
    app.route('/user')
        // post new user
        .post(postUser)

        //get user data
        .get(getUser)

    app.route('/user/:userId')
        //get data by id
        .get(getUserById)

        // put user data
        .put(putUser)

        // delete user data
        .delete(deleteUser)
}

module.exports = route