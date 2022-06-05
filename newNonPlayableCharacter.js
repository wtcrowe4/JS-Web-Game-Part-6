function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1000 - y;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        element.style.zIndex = 1000 - y
    }

    setInterval(moveCharacter, 1)

    function walkEast(time) {
        return new Promise(resolve => {
            direction = 'east'
            element.src = `./assets/red-character/east.gif`
            setTimeout(() => {
                stop()
                resolve()
            }, time)
        })
    }

    function walkNorth(time) {
        return new Promise(resolve => {
            direction = 'north'
            element.src = `./assets/red-character/north.gif`
            setTimeout(() => {
                stop()
                resolve()
            }, time) 
        })
    }

    function walkWest(time) {
        return new Promise(resolve => {
            direction = 'west'
            element.src = `./assets/red-character/west.gif`
            setTimeout(() => {
                stop()
                resolve()
            }, time)
        })
    }

    function walkSouth(time) {
        return new Promise(resolve => {
            direction = 'south'
            element.src = `./assets/red-character/south.gif`
            setTimeout(() => {
                stop()
                resolve()
            }, time)
        })
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}