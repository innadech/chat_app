function handleLogin(username) {
  login(username)
  renderNicknameList(nicknames)
  renderChatFlow(messages)
}

function handleSendMessage(message) {
  setCurrentMessage(message)
  sendMessage()
  renderChatFlow(messages)
}
function handleSetCurrrentMessage(message) {
  setCurrentMessage(message)
}

function handlePingNickname(text) {
  console.log(text)
  pingNickname(text)
  renderInputMessage(currentMessage)
}
