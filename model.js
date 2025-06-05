let currentNickname = ''
let currentMessage = ''
let nicknames = []
let messages = []

function setCurrentMessage(message) {
  currentMessage = message
}

function pingNickname(nickname) {
  // Проверяем, есть ли уже никнейм в currentMessage
  if (currentMessage.indexOf('@') !== -1) {
    // Если никнейм есть, удаляем старый никнейм (до первого пробела)
    const spaceIndex = currentMessage.indexOf(' ')
    if (spaceIndex !== -1) {
      currentMessage = currentMessage.substring(spaceIndex + 1) // Удаляем всё до первого пробела
    } else {
      currentMessage = '' // Если пробела нет, очищаем сообщение
    }
  }
  // Добавляем новый никнейм
  if (nickname) {
    currentMessage = `@${nickname} ${currentMessage}`.trim()
  }
}
function pingNickname(nickname) {
  if (currentMessage.indexOf(`@${nickname}`) !== -1) {
    return
  } else {
    currentMessage = `@${nickname} ${currentMessage}`
  }
}

// function pingNickname(nickname) {
//   if (currentMessage.includes(nickname)) {
//     return
//   } else {
//     currentMessage = `@${nickname} ${currentMessage}`
//   }
// }

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
