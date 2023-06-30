//import statments from deffernt modules
const client = require('../Clients/client.js');
const asyncHandler = require('express-async-handler');

//this function get all chat entries
 const getAllChat = asyncHandler(async (req, res) => {
  const { CHAT_ID } = req.body;
  try {
    //
    const CHAT =
      await client.fetch(`*[_type=="chat" && _id=="4bb148f8-e2ff-4953-a6a5-c65fc28d5d63"]{
      ...,
      recivers->{
        userName,
        profileImage
      },
      latestMessage[]
    }`);
    res.status(200).json({
      chat: CHAT,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
    });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
});

//
 async function sendChat(req, res) {
  var currentdate = new Date();
  var datetime = `last seen: ${currentdate.getDate()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getFullYear()} at ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  const { senderId, content, messageId, chatId } = req.body;
  try {
    const TO_BE_UPDATED = await client.fetch(
      `*[_type=="messages" && _id=="${messageId}"]`
    );
    if (
      TO_BE_UPDATED[0].messsage !== null ||
      TO_BE_UPDATED[0].messsage.length !== 0
    ) {
      const _ = await client
        .patch(messageId)
        .setIfMissing({ message: [] })
        .insert('after', 'message[-1]', [
          {
            _key: crypto.randomUUID(),
            _type: 'singleMessage',
            createdAt: datetime,
            sender: [
              { _key: crypto.randomUUID(), _ref: senderId, _type: 'reference' },
            ],
            subject: content,
          },
        ])
        .commit({ autoGenerateArrayKeys: true });
    }

    const UPDATED = await client.fetch(
      `*[_type=="messages" && _id=="${messageId}"]`
    );
    res.status(200).json({
      data: UPDATED,
    });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
}

//
module.exports = {
  getAllChat,
  sendChat,
};