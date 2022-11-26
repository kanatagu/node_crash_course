const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listner
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
