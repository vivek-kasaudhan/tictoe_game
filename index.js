

let currPlayer  = "X"
const arr  = new Array(9).fill(null)
console.log(arr)

function checkWinner(){
    if(arr[0]!==null && arr[0]==arr[1] &&arr[1]==arr[2] ||
        arr[3]!==null && arr[3]==arr[4] &&arr[4]==arr[5]||
        arr[6]!==null && arr[6]==arr[7] &&arr[7]==arr[8]||
        arr[0]!==null && arr[0]==arr[3] &&arr[3]==arr[6]||
        arr[1]!==null && arr[1]==arr[4] &&arr[4]==arr[7]||
        arr[2]!==null && arr[2]==arr[5] &&arr[5]==arr[8]||
        arr[2]!==null && arr[2]==arr[4] &&arr[4]==arr[6]||
        arr[0]!==null && arr[0]==arr[4] &&arr[4]==arr[8]
        
        
        )
        {
            document.write(`winner is ${currPlayer}`)
        }
        if(!arr.some(e=>e===null)){
            document.write(`Match is Draw`)
            return
        }
}

function handleclick(el){
    const id = Number(el.id)
    if(arr[id]!==null) return
    arr[id] = currPlayer
    el.innerText = currPlayer
  // Add a class based on the currentPlayer to style the element
  el.classList.add(currPlayer === "X" ? "player-x" : "player-o");

    checkWinner()

    currPlayer = currPlayer==="X"?"0":"X"

   

}




