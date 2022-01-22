class Device {
  constructor (name, energy, on){
  this.name = name,
  this.energy = energy
  this.on = on
  this.onOff = function(){
    if(this.on == true) {
      console.log(`${name} is on`)
    } else {
      console.log(`${name} is off`)
    }
  }
}
}

class aboutInfo extends Device {
  constructor (name, energy, on) {
    super (name, energy, on)
    console.log(`The ${name} consumes: ${energy} Vt in a hour`)
  }
}

const myComputer = new aboutInfo('My computer', '200', true);
const myFan = new aboutInfo('My fan', '15', false);


myComputer.onOff('My computer', '200', true)
myFan.onOff('My fan', '0', false)
