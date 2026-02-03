import express from 'express'

import { getuser,createuser,getuserbyid ,updateduser} from './userController.js'
import User from './userModels.js'

const signup = express.Router()

signup.get('/',getuser)

signup.get('/:id',getuserbyid)

signup.post('/',createuser)

signup.put('/',updateduser)


export default signup;