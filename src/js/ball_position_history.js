export default (tmp_ball_position, ball_position_array) => {
    // 現在の位置を追加
    ball_position_array.push(Object.assign({}, tmp_ball_position))
    
    // 現在も含め、ボールの位置を描画
    const ball_history_display = document.getElementById("ball_history")
    ball_history_display.innerHTML = ""

    for (const ball_pos of ball_position_array) {
        ball_history_display.innerHTML += `${ball_pos["lng"]}, ${ball_pos["lat"]}<br />`
    }
    //console.log(tmp_ball_position)
    //console.log(ball_position_array)
    

    return ball_position_array
}