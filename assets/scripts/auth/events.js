'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing up')
  const data = getFormFields(event.target)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signing in')
  const data = getFormFields(event.target)
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Changed password')
  const data = getFormFields(event.target)
  document.getElementById('sign-up').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// sign out function which triggers sign in/up elements to appear
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Signed out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreatePainting = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPainting(data)
    .then(ui.paintingCreateSuccess)
    .catch(ui.paintingCreateFailure)
  // console.log('create Painting api data is ' + api.data)
}

const onUpdatePainting = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePainting(data)
    .then(ui.updatePaintingSuccess)
    .catch(ui.updatePaintingFailure)
}

const onFindPainting = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findPainting(data)
    .then(ui.findPaintingSuccess)
    .catch(ui.findPaintingFailure)
}

const onDeletePainting = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // find id based on painting name
  api.deletePainting(data)
    .then(ui.deletePaintingSuccess)
    .delete(ui.deletePaintingFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePainting,
  onUpdatePainting,
  onFindPainting,
  onDeletePainting
}
