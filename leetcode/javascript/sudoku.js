var isValidSudoku = function(board) {

    for (let i = 0; i < board.length; i++){
        let row = new Set(['1','2','3','4','5','6','7','8','9'])
        let col = new Set(['1','2','3','4','5','6','7','8','9'])  
        
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] !== '.'){
                let place = board[i][j]
                if (!row.has(place)){
                    console.log('line 16')
                    return false
                }
                
                if (row.has(place)){
                    row.delete(place)
                }
            }
            
            if (board[j][i] !== '.'){        
                let place2 = board[j][i]
                
                if (!col.has(place2)){
                    console.log('j:', j, 'i:', i, place2, 'line 28')
                    return false
                }
                if (col.has(place2)){
                     col.delete(place2)
                }
            }            
        }
    }
    
     for (let row = 0; row < 9; row += 3){
         for (let i = 0; i < 9; i+=3){
            let sqr = new Set(['1','2','3','4','5','6','7','8','9'])
            
             for (let j = 0 + row; j < 3 + row ; j++){
                 for (let k = 0 + i; k < 3 + i; k++){
                     console.log(board[j][k])

                     if (board[j][k] !== '.'){
                         let place1 = board[j][k]
                         
                         if (!sqr.has(place1)){
                           return false
                         } 
                            
                         if (sqr.has(place1)){
                           sqr.delete(place1)  
                         } 
                         
                     }
                 }
             }
         }         
         
     }
     
    
    return true
};
