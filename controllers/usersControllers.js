const usersServices = require('../services/usersServices');

const getAllUsers = async (_req, res) => {
  try {
    const users = await usersServices.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usersServices.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

const createUsers = async (req, res) => {
 // console.log('ENTROU NO CONTROLLER');
  const { displayName, email, password, image } = req.body;
  try {
   // console.log('ENTROU NO TRY');
    const token = await usersServices.createUsers(displayName, email, password, image);
    // console.log(token, 'TOKEN');
    if (token.msgError) {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUsers,
};