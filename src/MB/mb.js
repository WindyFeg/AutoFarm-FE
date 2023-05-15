// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('http://makerzone.net', {
    username: "popos",
    password: "mqttserver"
})
var topic = 'historicalData'

client.on('message', (topic, message) => {
    message = message.toString()
    console.log(message)
})

client.on('connect', () => {
    client.subscribe(topic)
})