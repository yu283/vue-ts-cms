/*
const BASE_URL = 'http://xxx.rog/prod'
const BASE_NAME = 'rhy'
*/
/*

let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {

}
*/

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://rhy.org/prod'
} else {
  BASE_URL = 'http://rhy.org/test'
}

export { BASE_URL, TIME_OUT }
