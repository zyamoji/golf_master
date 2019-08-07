import get_position from './get_position';
import calc_dist_from_lon_lat from './calc_dist_from_lon_lat';

const deg_x1 = 139.639445; // tee
const deg_y1 = 35.598297;
const deg_x2 = 139.638682; // cup
const deg_y2 = 35.599348;

// 位置取得ボタン
const position_get_btn = document.getElementById('position_get_btn');
// クリックしたら位置取得
position_get_btn.addEventListener("click", async function() {
    // 現在地の取得の処理を待つためにawait
    const {ball_lng, ball_lat} = await get_position();
    // 現在地からカップまでの距離を計算
    const {meter, yard} = calc_dist_from_lon_lat(ball_lng, ball_lat, deg_x2, deg_y2);
    // 計算結果を表示
    document.getElementById('app').innerHTML = "カップまでの距離は" + Math.round(yard) + "y (" + Math.round(meter) + " m)";
}, false)