
function App() {
   const createGrid = () => {
     let grid = [[]];
     for (let z = 0; z < 3; z++) {
       grid[z] = [];
       for (let y = 0; y < 3; y++) {
         grid[z] = [...grid[z], ["", "", "", "", "", "", "", "", ""]];
       }
     }

     // for (let y = 0; y < grid.length; y++) {
     //   for (let x = 0; x < grid[y].length; x++) {
     //     grid[y][x] = [""];
     //   }
     // }
     return grid;
   };


  const readGrid = () => {
for (let a = 0; a < grid[0].length; a++) {
  for (let b = 0; b < grid[0][a].length; b++) {
    let temp = [];
    for (let c = 0; c < grid[0][a][b].length; c++) {
        grid[0][a][b][c]
    }
  }
}

  }
  
  const checkWin = () => {
     // check in each box
    let boxCompleted
    for (let a = 0; a < grid[0].length; a++) {
      for (let b = 0; b < grid[0][a].length; b++) {
        let temp = [];
        for (let c = 0; c < grid[0][a][b].length; c++) {
          if (grid[0][a][b][c] !== "" && temp.includes[grid[0][a][b][c]] === false) {
            temp = [...temp, grid[0][a][b][c]];
          } 
        }
        if (temp.length === 9) {
          boxCompleted = [...boxCompleted, "X"]
        }
      }
    }

   };


  return (
    <div className="App">
      <header>
        <div>SUDOKU</div>
        <div>
          <button>EASY</button>
          <button>MEDIUM</button>
          <button>HARD</button>
        </div>
      </header>
    </div>
  );
}

export default App;
