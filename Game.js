 const Board = require("./Board");
 const Player = require("./Player");
 
 class Game {
    constructor (board,player0,player1) {
        this.board = board ;
        this.player0 = player0 ;
        this.player1 = player1 ;
        this.turn = 0 ;
        this.isGameOver = false ;
    }
    static newGame(player0Name,player1Name) {
        //validation 
        let board = new Board()
        let player0 = new Player(player0Name, "X")
        let player1 = new Player(player1Name, "O")
        return new Game(board,player0,player1)
    }

    play(cellNumber){
        //validate CellNumber
        if (this.isGameOver){
            return false 
        }
       let isCellEmpty = this.board.isEmpty(cellNumber)
       if(isCellEmpty){
        return "Cell Already Marked"
       }
       if (this.turn % 2 == 0) {
        currentPlayer = this.player0
        } else {
            currentPlayer = this.player1
        }
        currentPlayer.markCell(this.board.cells[cellNumber]) ;
        this.turn++
         let [winnerSymbol , gameState] =this.board.analyse()
         if(gameState == ""){
            return "Continue"
        }
        if (gameState == "Win !"){
            if(winnerSymbol=="X") {
                return this.player0.name + "is Winner"
            }  return this.player1.name + "is Winner"
        }
        this.isGameOver = true
        return "Game has been Drawed"
    }

}
const g1 = Game.newGame("Gunjan","Neel")
g1.play();