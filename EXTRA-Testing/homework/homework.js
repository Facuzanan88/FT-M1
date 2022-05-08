const layout = [
    [{ type: 'VIP', booked: false }, { type: 'VIP', booked: true }, { type: 'VIP', booked: true }, { type: 'VIP', booked: false }],
    [{ type: 'NORMAL', booked: false }, { type: 'VIP', booked: true }, { type: 'VIP', booked: false }, { type: 'NORMAL', booked: false }],
    [{ type: 'NORMAL', booked: false }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: false }],
    [{ type: 'ECONOMIC', booked: true }, { type: 'NORMAL', booked: true }, { type: 'NORMAL', booked: true }, { type: 'ECONOMIC', booked: false }],
    [{ type: 'ECONOMIC', booked: false }, { type: 'ECONOMIC', booked: true }, { type: 'ECONOMIC', booked: false }, { type: 'ECONOMIC', booked: false }]
];

function checkSeatStatus(a, b) {
    if (typeof a !== 'string') {
        throw new TypeError('First parameter is not a string');
    }
    if (a.length !== 1) {
        throw new TypeError('The parameter habe to be only a lyrics')
    }
    if (a.charCodeAt(0) > 69) {
        throw new TypeError('The range of accepted letters is up to E')
    }
    if (typeof b !== 'number') {
        throw new TypeError('Second parameter is not a number')
    }
    if (b > 3) {
        throw new TypeError('The range of accepted letters is up to 3')
    }
    let seat = getSeat(a, b);
    return seat.booked;
};

function book(a, b) {
    if (checkSeatStatus(a, b)) {
        return 'Seat in ' + a + b + ' is already booked'
    } else {
        let seat = getSeat(a, b);
        seat.booked = true;
        return 'Seat in ' + a + b + ' successfully booked'
    }
}

function getRowNumber(x) {
    return x.charCodeAt(0) - 65;
};

function getSeat(a, b) {
    let index = getRowNumber(a);
    let asiento = layout[index][b];
    return asiento;
}
function reservedSeats() {
    let contador = 0;
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j].booked) {
                contador += 1;
            }
        }
    }
    return contador;
};

function totalSeats() {
    let contador = 0;
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            contador += 1;
        }
    }
    return contador;
};

function freeSeats() {
    let contador = 0;
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j].booked !== true) {
                contador += 1;
            }
        }
    }
    return contador;
};

function collect() {
    let contador = 0;
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j].booked !== true) {
                if (layout[i][j].type === 'VIP') {
                    contador += 600;
                };
                if (layout[i][j].type === 'NORMAL') {
                    contador += 450;
                };
                if (layout[i][j].type === 'ECONOMIC') {
                    contador += 300;
                };
            }
        }
    }
    return contador;
};

function collectBeta() {
    const contador = {
        VIP: 0,
        NORMAL: 0,
        ECONOMIC: 0
    };
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j].booked !== true) {
                if (layout[i][j].type === 'VIP') {
                    contador.VIP += 600;
                };
                if (layout[i][j].type === 'NORMAL') {
                    contador.NORMAL += 450;
                };
                if (layout[i][j].type === 'ECONOMIC') {
                    contador.ECONOMIC += 300;
                };
            }
        }
    }
    return contador;
};

module.exports = {
    checkSeatStatus,
    getRowNumber,
    book,
    reservedSeats,
    totalSeats,
    freeSeats,
    collect
};