#ZeroMQ


This package extends [ØMQ](http://www.zeromq.org/) support for meteor through the [node zmq bindings](https://github.com/JustinTulloss/zeromq.node) by Justin Tulloss.

This package exposes a single global server-side object named ZeroMQ.  Everything else is as it is in Justin's package.  The environment running the package is **required** to have the ZeroMQ libraries installed.
   

##Examples

### Push/Pull
```js
// producer.js
var sock = ZeroMQ.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

setInterval(function(){
  console.log('sending work');
  sock.send('some work');
}, 500);
```

```js
// worker.js
var sock = ZeroMQ.socket('pull');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});
```

### Pub/Sub

```js
// pubber.js
var sock = ZeroMQ.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');

setInterval(function(){
  console.log('sending a multipart message envelope');
  sock.send(['kitty cats', 'meow!']);
}, 500);
```

```js
// subber.js
var sock = ZeroMQ.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
console.log('Subscriber connected to port 3000');

sock.on('message', function(topic, message) {
  console.log('received a message related to:', topic, 'containing message:', message);
});
```

Please see the [Node zmq Readme](https://github.com/JustinTulloss/zeromq.node/blob/master/README.md) for more info.