import express from 'express'
//
import {
  getAllChat,
  sendChat,
  deleteChatForMe,
  deleteChatForEveryone,
  reactOnChat,
  accessChat,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} from '../Controllers/ChatControllers.js'
import protect from '../Middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getAllChat)
router.route('/').post(sendChat)
router.route('/group').post(createGroupChat)
router.route('/rename').put(renameGroup)
router.route('/groupremove').put(removeFromGroup)
router.route('/groupadd').put(addToGroup)

export default router
