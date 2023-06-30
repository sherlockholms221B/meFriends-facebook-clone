// import statments from deffernt modules
const asyncHandler = require('express-async-handler');
const client = require('../Clients/client.js');
//this function get all chat entries
 const getAllMessage = asyncHandler(async (req, res) => {
  const { CHAT_ID } = req.query;
  // console.log(req.body)

  //
  try {
    //
    const message =
      await client.fetch(`*[_type=="messages" && _id=="ff3d0f5f-d44a-415d-ba8a-0c4384067352"]{
     ...
    }`);
    res.status(200).json({
      messages: message,
      sound: 'ALL_POST_TUNING_SOUND',
      message: 'Success',
    });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
});

//
 const sendMessage = asyncHandler(async (req, res) => {
  var currentdate = new Date();
  var datetime = `last seen: ${currentdate.getDate()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getFullYear()} at ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  const { sender, content, messageId, chatId } = req.body;
  try {
    const TO_BE_UPDATE_MESSAGE = await client.fetch(
      `*[_type=="chat" && _id=="${chatId}"]`
    );
    if (
      TO_BE_UPDATE_MESSAGE[0].latestMessage !== null ||
      TO_BE_UPDATE_MESSAGE[0].latestMessage.length !== 0
    ) {
      const _ = await client
        .patch(chatId)
        .setIfMissing({ latestMessage: [] })
        .insert('replace', 'latestMessage[-1]', [
          {
            _key: crypto.randomUUID(),
            _type: 'singleMessage',
            createdAt: datetime,
            sender: [
              { _key: crypto.randomUUID(), _ref: sender, _type: 'reference' },
            ],
            subject: content,
          },
        ])
        .commit({ autoGenerateArrayKeys: true });
    }
    //
    const UPDATE_MESSAGE = await client.fetch(
      `*[_type=="chat" && _id=="${chatId}"]`
    );
    //
    res.status(200).json({
      chat: UPDATE_MESSAGE,
    });
    //
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
});
const _ = () => {
  console.log('hello world');
};

 const recieveMessage = (req, res) => {
  const { MESSAGE_ID } = req.body;
  console.log(MESSAGE_ID);

  try {
    switch (MESSAGE_ID) {
      case !MESSAGE_ID:
        res.status(402).json({
          errMeg: 'plase select a chat to begin',
        });
        break;
      //
      case MESSAGE_ID:
        if (MESSAGE_ID === typeof String) {
          const data = client.fetch(
            `*[_type=="message" && _id== "${MESSAGE_ID}"]`
          );

          console.log(data.length);
          res.status(200).json({
            data,
          });
        }
        break;
      default:
        res.status(403).json({
          srrMsg: 'something went wrong with our server. Check letter!',
        });
        break;
    }
  } catch (error) {
    //  throw new error()
    res.status(404).json({
      errMeg: error.message,
    });
  }
};


module.exports = {
  getAllMessage,sendMessage,recieveMessage
}