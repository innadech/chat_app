const elButtonSendMessage = document.querySelector('#btn_send_msg')
const elInputMessage = document.querySelector('#input_msg')
const elLabelLogin = document.querySelector('#btn_enter')
const elInputLogin = document.querySelector('#input_nickname')

elButtonSendMessage.onclick = onClickButtonSendMessage
elLabelLogin.onclick = onClickLabelLogin
elInputMessage.onkeypress = onKeyPressInput
elInputLogin.onkeypress = onKeyPressInputLogin
elInputMessage.oninput = onInputMessage

function onInputMessage() {
  handleSetCurrrentMessage(elInputMessage.value)
}

function onClickSpan(e) {
  console.log(e.target)
  const message = elInputMessage.value
  handleSetCurrrentMessage(message)
  handlePingNickname(e.target.textContent)
}
function renderInputMessage(text) {
  const elInputMessage = document.querySelector('#input_msg')
  elInputMessage.value = text
}

function onKeyPressInputLogin(e) {
  let key = e.key
  if (key === 'Enter') {
    const checkbox = document.querySelector('#chk_sm')
    if (checkbox) {
      checkbox.checked = true
      console.log(checkbox)
      onClickLabelLogin()
    }
  }
}

function onKeyPressInput(e) {
  let key = e.key
  if (key === 'Enter') {
    onClickButtonSendMessage()
  }
}

function onClickButtonSendMessage() {
  const elInputMessage = document.querySelector('#input_msg')
  if (elInputMessage.value !== '') {
    const text = elInputMessage.value
    handleSendMessage(text)
    elInputMessage.value = ''
  }
}

function onClickLabelLogin() {
  let elInputNickname = document.querySelector('#input_nickname')
  let nickname = elInputNickname.value
  handleLogin(nickname)
  elInputNickname.value = ''
}

function renderChatFlow(messages) {
  const elChatFlow = document.querySelector('.chat-flow')
  elChatFlow.innerHTML = ''
  for (const message of messages) {
    const elMessage = generateMessage(message)
    elChatFlow.appendChild(elMessage)
  }
}

function renderNicknameList(nicknames) {
  const elNickname = document.querySelector('.nickname-list')
  elNickname.innerHTML = ''
  for (const nickname of nicknames) {
    const elNicknameSpan = generateNicknameSpan(nickname)
    elNickname.appendChild(elNicknameSpan)
  }
}

function generateMessage(message) {
  const elDiv = document.createElement('div')
  const elDivWrapSpan = document.createElement('div')
  const elSpan = document.createElement('span')
  elDivWrapSpan.classList.add('msg-line')
  elDivWrapSpan.appendChild(elSpan)
  elSpan.textContent = message
  elDiv.appendChild(elDivWrapSpan)
  return elDiv
}

function generateNicknameSpan(nickname) {
  console.log(nickname)
  const elDivWrapSpan = document.createElement('div')
  const elSpan = document.createElement('span')
  elDivWrapSpan.classList.add('wrap-span')
  elDivWrapSpan.appendChild(elSpan)
  elSpan.onclick = onClickSpan
  elSpan.textContent = nickname
  return elDivWrapSpan
}
