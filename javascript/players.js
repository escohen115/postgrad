
let depthChart = {}

function addPlayerToDepthChart(position, position_depth, player){
    if (position_depth === 0) position_depth = 1
    if (depthChart[position]){
        depthChart[position][position_depth] = player
    }else{
        depthChart[position] = {[position_depth]: [player]}   
    }
}


addPlayerToDepthChart("QB", 1 , {name: "simcha"} )
addPlayerToDepthChart("QB", 2 , {name: "simcha"} )

console.log(JSON.stringify(depthChart))



// let depthChart = {}

// function addPlayerToDepthChart(player, position, position_depth=0){
// // if the position exists, iterate through the keys of the position and find the max. set
// //the position_depth to max+1
// //
// //if the position does not exist, then set it to 1

//   // let max = 0
//   // let keys = Object.keys(depthChart[position])
//   // for (let i=0;i<keys.length;i++){
//   //   if (keys[i] > max){
//   //     max = keys[i]
//   //   }
//   // }
  
//   if (depthChart[position]){ //need to add new position depth to position
//     depthChart[position][position_depth] = player
//   } else {
//     depthChart[position] =  {[position_depth]: player}
//   }
// }

// let player = {
//   "player_id": 1,
//   "name": "Bob",
//   "position": "WR"
//  }
// let position = "RB"
// let position_depth = 1

// addPlayerToDepthChart(player,position,position_depth)
// addPlayerToDepthChart({player_id: 2, name: "Alex", position: "QB"}, "RB", 2)
// addPlayerToDepthChart({player_id: 2, name: "Alex", position: "QB"}, "QB", 1)

// console.log(JSON.stringify(depthChart, null, 2))

