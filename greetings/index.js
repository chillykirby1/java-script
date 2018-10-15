let hour = 18; //Change this simulating automatically reading time from Internet Clock or System Tray Clock
if (6<= hour)
if(hour < 12)
console.log('Good Morning');
if (12 <= hour)
if (hour < 18)
console.log('Good Afternoon');
if (18 <= hour)
console.log('good evening');
if (hour > 24)
console.log('not a time')
