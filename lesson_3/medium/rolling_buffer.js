// Question 4: Rolling Buffer
// Alyssa was asked to write an implementation of a rolling buffer. You can
// add and remove elements from a rolling buffer. However, once the buffer
// becomes full, any new elements will displace the oldest elements in the
// buffer.

// She wrote two implementation of the code for adding elements to the buffer.
// In presenting the code to her team leader, she said "Take your pick.
// Do you prefer 'push()' or 'concat()' for modifying the buffer?".

// Is there a difference between these impelementations, other than the
// method she usd to add an element to the buffer?
let currentBuffer = ["shot1", "shot2", "shot3"];
let size = 10;
function addRollingBuffer1(buffer, maxBufferSize, newElement) {
  // mutate the argument
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

addRollingBuffer1(currentBuffer, size, "shot4");
console.log(currentBuffer);

function addRollingBuffer2(buffer, maxBufferSize, newElement) {
  // we are reassinging the argument a new value
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
addRollingBuffer2(currentBuffer, size, "shot5");
console.log(currentBuffer);

// The two methods works diffrently as follows
// addRollingBuffer2 doesn't mutate the 'buffer' argument if the buffer length
// is less than maxBufferSize
// addRollingBuffer1 mutates the 'buffer' argument if the buffer length is
// smaller or bigger than the maxBufferSize
