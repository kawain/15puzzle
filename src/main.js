const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const start = document.getElementById("start")

// セル正方形のサイズ
const cellSize = 100
// 画面縦のセル数
const screenH = 4
// 画面横のセル数
const screenW = screenH
// 画面配列
const screen = Array(screenH)
// 空の数字
const emptyCell = 16
// 空の座標
const emptyCellPoint = {}
// 移動量
let moveCount = 0

function init() {
    // 配列に代入
    for (let row = 0; row < screenH; row++) {
        screen[row] = Array(screenW)
        for (let col = 0; col < screenW; col++) {
            let n = row * screenW + col + 1
            if (n === emptyCell) {
                emptyCellPoint.row = row
                emptyCellPoint.col = col
            }
            screen[row][col] = n
        }
    }
}

function shuffle() {
    for (let i = 0; i < 1000; i++) {
        let n = Math.floor(Math.random() * 4)
        switch (n) {
            case 0:
                swap(1, 0, true)
                break
            case 1:
                swap(0, 1, true)
                break
            case 2:
                swap(-1, 0, true)
                break
            case 3:
                swap(0, -1, true)
                break
        }
    }
}

function draw() {
    // 描画
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < screenH; row++) {
        for (let col = 0; col < screenW; col++) {
            if (screen[row][col] !== emptyCell) {
                ctx.fillStyle = "black"
                ctx.font = "50px 'Rowdies', cursive"
                ctx.textAlign = "center"
                ctx.textBaseline = "middle"
                ctx.fillText(`${screen[row][col]}`, col * cellSize + 50, row * cellSize + 55)
            }
            ctx.strokeStyle = "black"
            ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize)
        }
    }

    if (moveCount > 0) {
        start.innerText = moveCount
    }

    if (moveCount > 0 && gameClear()) {
        start.disabled = false
        start.innerText = `スタート ${moveCount}`
        alert("クリア！")
    }
}

function swap(row, col, isShuffle = false) {
    const row1 = emptyCellPoint.row + row
    const col1 = emptyCellPoint.col + col
    // 範囲チェック
    if (row1 < 0 || row1 >= screenH || col1 < 0 || col1 >= screenW) {
        return
    }

    [screen[emptyCellPoint.row][emptyCellPoint.col], screen[row1][col1]] = [screen[row1][col1], screen[emptyCellPoint.row][emptyCellPoint.col]]
    emptyCellPoint.row = row1
    emptyCellPoint.col = col1

    if (!isShuffle) {
        moveCount++
        draw()
    }
}

function gameClear() {
    for (let row = 0; row < screenH; row++) {
        for (let col = 0; col < screenW; col++) {
            let n = row * screenW + col + 1
            if (screen[row][col] !== n) {
                return false
            }
        }
    }
    // ゲームクリア
    return true
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 87 || e.keyCode === 38) {
        // w 上の場合、下のマスと入れ替え
        swap(1, 0)
    } else if (e.keyCode === 65 || e.keyCode === 37) {
        // a 左の場合、右のマスと入れ替え
        swap(0, 1)
    } else if (e.keyCode === 83 || e.keyCode === 40) {
        // s 下の場合、上のマスと入れ替え
        swap(-1, 0)
    } else if (e.keyCode === 68 || e.keyCode === 39) {
        // d 右の場合、左のマスと入れ替え
        swap(0, -1)
    }
})

start.addEventListener("click", (e) => {
    e.target.disabled = true
    start.innerText = `スタート`
    e.target.blur()
    moveCount = 0
    shuffle()
    draw()
})

init()
draw()
