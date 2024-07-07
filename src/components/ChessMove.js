
export const initMoveHistory = ()=>{
    var moveHistory ={
        uci:"",
        moves:[]
    }
    return moveHistory
}

const toUCI = (source)=>{
    return String.fromCharCode(97 + source.x, 49 + (7 - source.y))
}
export const toBoardCoordination = (uci)=>{
    const source={
        x:uci.charCodeAt(0) - 97,
        y: 8 - (uci.charCodeAt(1) - 48)
    }
    const dest ={
        x:uci.charCodeAt(2) - 97,
        y: 8-(uci.charCodeAt(3) - 48)
    }
    return {source,dest}
}

export const addMove = (moveHistory, source, dest)=>{
    var move ={
        source,
        dest,
    }
    moveHistory.moves.push(move)
    moveHistory.uci = moveHistory.uci + " " + toUCI (source) + toUCI(dest)
    return toUCI (source) + toUCI(dest)
}