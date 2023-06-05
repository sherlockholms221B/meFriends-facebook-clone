import createSchema from 'part:@sanity/base/schema-creator'
import User from './User.js'
import Comment from './Comment.js'
import PostedBy from './PostedBy.js'
import Post from './Post.js'
import Reel from './Reel.js'
import Stories from './Stories.js'
import Chat from './Chat.js'
import Message from './Message.js'
import singleMessage from './SnMessage.js'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    User,
    Comment,
    PostedBy,
    Post,
    Reel,
    Stories,
    Chat,
    Message,
    singleMessage,
  ]),
})
