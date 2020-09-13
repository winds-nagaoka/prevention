export function unixTimeFull (intTime) {
  const time =  intTime || new Date().getTime()
  var d = new Date(time)
  var year = d.getFullYear()
  var month = d.getMonth() + 1
  var day = d.getDate()
  var hour = ('0' + d.getHours()).slice(-2)
  var min = ('0' + d.getMinutes()).slice(-2)
  // var sec = ('0' + d.getSeconds()).slice(-2)
  return (year + '/' + month + '/' + day + ' ' + hour + ':' + min)
}

export function getYear () {
  var d = new Date()
  var year = d.getFullYear()
  return (year)
}

export function unixDate (intTime) {
  var d = new Date(intTime)
  var year = d.getFullYear()
  var month = d.getMonth() + 1
  var day = d.getDate()
  return (year + '/' + month + '/' + day)
}

export function unixTime (intTime) {
  var d = new Date(intTime)
  var hour = ('0' + d.getHours()).slice(-2)
  var min  = ('0' + d.getMinutes()).slice(-2)
  return (hour + ':' + min);
}
