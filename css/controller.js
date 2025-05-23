
function handleLogin(newUserName) {
  login(newUserName)
  renderNicknameList(nicknames)
  renderChatFlow(messages)
}

function handleSendMessage(message){ 
  sendMessage(message)
  renderChatFlow(messages)
}

