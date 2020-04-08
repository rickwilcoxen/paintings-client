'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  document.getElementById('message').style.display = 'block'
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signUpSuccess data is: ', data)
}

const signUpFailure = function (data) {
  $('#message').text('Error on Sign up')
  document.getElementById('message').style.display = 'block'
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('signUpFailure data is: ', data)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('message').style.display = 'block'
  // console.log('signInSuccess data is: ', data)
  document.getElementById('sign-out').style.display = 'block'
  document.getElementById('sign-in').style.display = 'none'
  document.getElementById('change-pw').style.display = 'block'
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('create').style.display = 'block'
  document.getElementById('update').style.display = 'block'
  document.getElementById('find-all').style.display = 'block'
  document.getElementById('delete').style.display = 'block'
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Sign in fail')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('signInFailure data is: ', data)
  document.getElementById('message').style.display = 'block'
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('message').style.display = 'block'
}

const changePasswordFailure = function (data) {
  $('#message').text('change password fail')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('changePasswordFailure data is: ', data)
  document.getElementById('message').style.display = 'block'
}

const signOutSuccess = function () {
  $('#message').text('sign out success')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('message').style.display = 'block'
  document.getElementById('sign-out').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
  document.getElementById('change-pw').style.display = 'none'
  document.getElementById('sign-up').style.display = 'block'
}

const signOutFailure = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('sign out failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const paintingCreateSuccess = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('log painting success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const paintingCreateFailure = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('log painting failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const updatePaintingSuccess = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('update painting success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const updatePaintingFailure = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('update painting failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const findPaintingSuccess = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('found paintings!')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('found-paintings').style.display = 'block'
  $('#found-paintings').text('Paintings you have: ' + store.paintings)
}

const findPaintingFailure = function () {
  document.getElementById('message').style.display = 'block'
  $('#message').text('unable to find paintings')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  paintingCreateSuccess,
  paintingCreateFailure,
  updatePaintingSuccess,
  updatePaintingFailure,
  findPaintingSuccess,
  findPaintingFailure
}
