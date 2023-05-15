var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'historicalData'

var message = "hello"

client.on('connect', () => {
    setInterval(() => {

        client.publish(topic, message)
        console.log("sent")
    }, 5000)
})