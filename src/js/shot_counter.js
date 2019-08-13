export default function () {
    // 打数カウンタ増加ボタン
    const shot_inc_btn = document.getElementById('shot_inc_btn');
    // 打数カウンタ減少ボタン
    const shot_dec_btn = document.getElementById('shot_dec_btn');
    
    // 増加ボタン押したら数を増やす
    shot_inc_btn.addEventListener("click", function () {
        // 打数カウンタ
        const shot_counter = Number(document.getElementById('shot_counter_box').value);
        // 1足した数字を表示
        document.getElementById('shot_counter_box').value = shot_counter + 1
    }, false)

    // 減少ボタン押したら数を減らす
    shot_dec_btn.addEventListener("click", function () {
        // 打数カウンタ
        const shot_counter = Number(document.getElementById('shot_counter_box').value);
        // マイナスにはしない
        if (shot_counter == 0) {
            return;
        }
        // 1引いた数字を表示
        document.getElementById('shot_counter_box').value = shot_counter - 1
    }, false)
}