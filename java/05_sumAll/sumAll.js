const sumAll = function(inicio, fin) {
    if (inicio >= 0 && fin >=0 &&
        typeof inicio === "number" && typeof fin === "number" &&
        Number.isInteger(inicio) && Number.isInteger(fin)
     ) {
        valor = 0
        if (fin > inicio) {
            for (let i = inicio; i <= fin; i++) {
                valor += i
            }
        }
        if (fin < inicio) {
            for (let i = fin; i <= inicio; i++) {
                valor += i
            }
        }
        return valor }
    else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
