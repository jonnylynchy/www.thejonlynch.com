title: NodeBots & Johnny-Five... The Addictive World of Javascript Robotics
date: 2015-12-08 22:10:53
categories:
- Javascript
tags:
- Robotics
- Node.js
- Javascript
---
## Javascript Robotics

I know what you're thinking.

> What do Javascript and robotics have to do with each other? Isn't Javascript a web-only language?

Well, I'm glad you asked. The answer is an astounding "No!" We now have the power to program electronic micro-controllers with Javascript.

> Yeah, but what can you really do with that?

**Pretty much whatever you want given enough time and resources.**

Want to program a robot that rolls around your house and streams live video of what's going on in any room to your phone? Yeah, you can do that. Or how about a sensor that you can insert into a potted plant to notify you when you need to water?

How about getting some fancy home automation going on? Yup, you can do that too.

If you know the basics of programming in Javascript, you can program micro-controllers.

> But how Jon? How do I do that?

Well, I'm glad you asked that too! With our handy little friends, <a href="http://johnny-five.io/" target="_blank">Johnny-Five</a> & <a href="https://nodejs.org/" target="_blank">Node.js</a>.

While there are many examples on the Johnny-Five site, I'll list out the basics. Here's what you'll need to get started:
- Some sort of micro-controller supported by Johnny-Five. There's a large list of them here: <a href="http://johnny-five.io/platform-support/" target="_blank">Johnny-Five Platform Support</a>.
- Usb cable for your micro-controller (They all come with one.)
- Computer with OS able to run nodejs
- Command line (Windows is fine, but there could be some challenges)
- <a href="https://www.arduino.cc/en/Main/Software" target="_blank">The Arduino IDE</a>
- And of course, a text editor
- Oh... and some stuff to plug into your micro-controller (LEDs, Sensors, etc.). There's a lovely starter kit here: <a href="https://www.sparkfun.com/j5ik">sparkfun.com/j5ik</a>

First, you'll need to install the Arduino IDE. Once installed, plug in your fancy-schmancy new micro-controller, and upload the Firmata file. (<a href="https://github.com/rwaldron/johnny-five/wiki/Getting-Started" target="_blank">Getting Started guide</a>)

Then just create a directory on your local machine and start going to town. I like using <a href="https://atom.io/" target="_blank">Atom</a> for node, so that's what I'm using in this example (replace 'atom' with whatever your text editor alias is.)

```bash
$ mkdir node-bots-playground && cd node-bots-playground;
$ touch node-test.js
$ atom .
```

Then in your text editor:

```javascript
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component instance
  var led = new five.Led(13);

  // "blink" the led in 500ms
  // on-off phase periods
  led.blink(500);
});
```

Save your file and plug in your LED as follows:
![LED on 13](http://johnny-five.io/img/breadboard/led-13.png "LED on 13")

Then fireup Johnny-Five with Node:

```bash
$ node node-test.js
```
Voila! You should see a blinking LED. Pretty cool huh?

I recently ordered this <a href="https://www.amazon.com/JavaScript-Robotics-Johnny-Five-Raspberry-BeagleBone/dp/1457186950/" target="_blank">book from Amazon</a> and am pretty pleased with the examples. There's a ton of cool stuff to build with Johnny-Five!

![JavaScript Robotics: Building NodeBots with Johnny-Five](https://images-na.ssl-images-amazon.com/images/I/51G1K%2BfEaoL._SX258_BO1,204,203,200_.jpg "Johnny-Five")
