//  Stopwatch using Constructor Pattern:

function Stopwatch () {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running) {
            throw new Error('Stopwatch has already started.');
        }
        running = true;
        startTime = new Date().getTime();
    }

    this.end = function () {
        if (!running) {
            throw new Error('Stopwatch has already ended.');
        }
        running = false;
        endTime = new Date().getTime();
        let second = (endTime - startTime) / 1000;
        duration += second;
    }

    this.reset    = function () {
        startTime = null;
        endTime   = null;
        running   = false;
        duration  = 0;
    }

    Object.defineProperty(this, 'duration', {
        get : function () {
            return duration;
        }
    })
}

const stopWatch = new Stopwatch();
console.log(stopWatch);