module.exports = {
    name: 'alive',
    aliases: ['a'],
    category: 'music',
    exp: 0,
    description: 'Testing stuff',
    async execute(client, arg, M) {
        M.reply(
            `හැම දෙයක්ම වැඩ කරනවා`
 // send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await sock.sendMessage(id, buttonMessage)
        )
    }
}
