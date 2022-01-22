function Device(name, energy, on){
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
  
Device.prototype.aboutInfo = function(name, energy, on){
    console.log(`The ${name} consumes: ${energy} Vt in a hour`)
  }



const myComputer = new Device('My computer', '200', true);
const myFan = new Device('My fan', '15', false);


myComputer.onOff('My computer', '200', true)
myComputer.aboutInfo('My computer', '200', true)
myFan.onOff('My fan', '0', false)
myFan.aboutInfo('My fan', '0', false)
