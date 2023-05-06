import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vrushank',
    email: 'vrushank@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mit patel',
    email: 'mit@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
