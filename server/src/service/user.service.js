const { createUserDB, deleteUserDB, getUserDB, getUserIdDB, updateUserByIdDB } = require('../repository/user.repository')

async function createUser(name, surname, email, password) {
    const user = await createUserDB(name, surname, email, password)

    if (!user.length) throw new Error('Array is empty')

    return user
}

const updateUserById = async (id, name, surname, email, password) => {
    const data = await updateUserByIdDB(id, name, surname, email, password);
    return data
}

async function deleteUser(id) {
    const user = await deleteUserDB(id)

    if (!user.length) throw new Error('Id is not found')

    return user
}

const getUser = async () => {
    const user = await getUserDB();
    return user;
  };
  
const getUserId = async (id) => {
    const user = await getUserIdDB(id)
  ;
    return user;
  };

module.exports = { createUser, deleteUser, getUser, getUserId, updateUserById }