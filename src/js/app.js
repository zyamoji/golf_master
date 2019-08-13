import get_position from './get_position';
import calc_dist_from_lon_lat from './calc_dist_from_lon_lat';
import get_course_data from './get_course_data';
import shot_counter from './shot_counter';
import style from '../css/style'


// 位置取得ボタン
const position_get_btn = document.getElementById('position_get_btn');
// クリックしたら位置取得
position_get_btn.addEventListener("click", async function() {
    // 現在地の取得の処理を待つためにawait
    const {ball_lng, ball_lat} = await get_position();

    // 選択されたホールのカップ情報を取得
    const cup_lng_lat = get_course_data("course_select", "hole_select")
        
    // 現在地からカップまでの距離を計算
    const {meter, yard} = calc_dist_from_lon_lat(ball_lng, ball_lat, cup_lng_lat["lng"], cup_lng_lat["lat"]);
    // 計算結果を表示
    document.getElementById('app').innerHTML = "カップまで" + Math.round(yard) + "y (" + Math.round(meter) + " m)";
}, false)

// 打数カウンタ
shot_counter();

// コース情報の読み込み
document.addEventListener('DOMContentLoaded', function() {
    get_course_data("course_select", "hole_select")
    console.log("コース情報を読み込みました")
}, false)