export const toFenString = (board, color = 'b', Castling ='-', En_Passant='-')=>{
    let fen = ""
    board.forEach(function (row, i) {
        let emptyPieceSoFar = 0
        let fenRow = ""
        for(let i=0;i<row.length; i++){
            if(row[i] === null)
                emptyPieceSoFar ++
            else{
                if(emptyPieceSoFar > 0){
                    fenRow += emptyPieceSoFar
                    emptyPieceSoFar = 0
                }
                fenRow += row[i].name                
            }                
        }
        if(emptyPieceSoFar > 0)
            fenRow += emptyPieceSoFar
        if( i<7)
           fenRow+='/'
        fen += fenRow
    });
    fen += " " + color
    fen += " " + Castling
    fen += " " + En_Passant
    fen += " 0 1"
    return fen
}