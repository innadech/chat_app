let currentNickname = ''
let currentMessage = ''
let nicknames = []
let messages = []

function setCurrentMessage(message) {
  currentMessage = message
}

function pingNickname(nickname) {
  currentMessage = ''
  currentMessage = `@${nickname} ${currentMessage}`
}

function addListNickname() {
  if (!nicknames.includes(currentNickname)) {
    nicknames.push(currentNickname)
    return true
  } else {
    return false
  }
}

function login(nickname) {
  currentNickname = nickname
  let isOk = addListNickname()
  if (isOk) {
    systemMessage()
  }
}

function systemMessage() {
  const currentMessageSystem = `{system} ${currentNickname} вошел(ла) в чат.`
  messages.push(currentMessageSystem)
}

function sendMessage() {
  const messageToSend = `[${currentNickname}]: ${currentMessage}`
  if (!messages.includes(messageToSend)) {
    messages.push(messageToSend)
  }
}
