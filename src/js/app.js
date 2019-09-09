import get_position from './get_position';
import calc_dist_from_lon_lat from './calc_dist_from_lon_lat';
import get_course_data from './get_course_data';
import shot_counter from './shot_counter';
import save_to_localstorage from './save_to_localstorage';
import read_from_localstorage from './read_from_localstorage';
import show_course_layout from './show_course_layout';
import on_select_course from './on_select_course';
import style from '../css/style'
import bulma from '../css/bulma.min'


// 位置取得ボタン
const position_get_btn = document.getElementById('position_get_btn');
// クリックしたら位置取得
position_get_btn.addEventListener("click", async function () {
    // 現在地の取得の処理を待つためにawait
    const {
        ball_lng,
        ball_lat
    } = await get_position();

    // 選択されたホールの情報を取得
    const hole_info = get_course_data("course_select", "hole_select")

    // 現在地からカップまでの距離を計算
    const {
        meter,
        yard
    } = calc_dist_from_lon_lat(ball_lng, ball_lat, hole_info["cup_position"]["lng"], hole_info["cup_position"]["lat"]);
    // 計算結果を表示
    document.getElementById('app').innerHTML = "カップまで" + Math.round(yard) + "y (" + Math.round(meter) + " m)";
}, false)

// 打数カウンタ
shot_counter();

// 打数保存ボタン
const save_to_localstorage_btn = document.getElementById('save_to_localstorage_btn');
// クリックしたら打数保存
save_to_localstorage_btn.addEventListener("click", save_to_localstorage());

// 打数ログ読み込みボタン
const read_from_localstorage_btn = document.getElementById('read_from_localstorage_btn');
// クリックしたら打数保存
read_from_localstorage();

// コースレイアウトを表示するmodal
show_course_layout();

// コース図が変更された時
on_select_course();

// 起動時の処理
document.addEventListener('DOMContentLoaded', function () {
    // コース情報の読み込み
    get_course_data("course_select", "hole_select")
    console.log("コース情報を読み込みました")
}, false)