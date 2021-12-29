const obj = {
  'string': 123,
  key1: 456
}


function strObj (name, obj) {
  if (obj.hasOwnProperty(name)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

strObj('string', obj)