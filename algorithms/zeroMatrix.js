function zeroMatrix(matrix){
    let zeros = []
    for (let i = 0; i < matrix.length; i++){                //row
        for (let j = 0; j < matrix[i].length; j++){ // column
            if (matrix[i][j] === 0){
                zeros.push([i,j])
            }
        }
    }
    console.log(zeros)

    for (let i = 0; i < zeros.length; i++){
        let row = zeros[i][0]
        let column = zeros[i][1]
        for (let j = 0; j < matrix[row].length; j++){
            matrix[row][j] = 0
            matrix[j][column] = 0
        }
    }
    return matrix
    
}


zeroMatrix([[9,1,2],[3,4,0],[6,7,8]])
