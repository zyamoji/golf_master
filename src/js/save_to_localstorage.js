export default function () {
           
    // 保存ボタン押したらデータを保存
    save_to_localstorage_btn.addEventListener("click", function () {
        // 選択されたコース情報を取得
        const selected_course = document.getElementById("course_select").value
        // 選択されたホール情報を取得
        const selected_hole = document.getElementById("hole_select").value
        // 打数を取得
        const shot_count = document.getElementById("shot_counter_box").value

        // 追記するので、一旦読み出してから追記、保存する
        const shot_data = localStorage.getItem(selected_course)
        // JSONデータを初期化
        let shot_json_data = {}
        // なにかデータが有るときは、それで上書きする
        if (shot_data != null) {
            shot_json_data = JSON.parse(shot_data)
        }
        
        // データを保存するけど、深い階層まで一気に保存するためには、毎回undefinedじゃないかを確認する
        // 時刻の階層は、絶対初やからない前提良いかも
        // 時刻をキーにしたオブジェクトを作成
        // 時間と分を2桁にする
        const now_time = new Date();
        const shot_hour_str = ('0' + now_time.getHours()).slice(-2);
        const shot_minutes_str = ('0' + now_time.getMinutes()).slice(-2);

        const time_str_len4 = shot_hour_str + shot_minutes_str

        const time_obj = {
            [time_str_len4]: {
                "shot_count": shot_count
            }
        }

        // 日付をキーにするため、文字列を生成
        const shot_year = String(now_time.getFullYear());
        const shot_month = ('0' + (now_time.getMonth() + 1)).slice(-2);
        const shot_day = ('0' + now_time.getDate()).slice(-2);
        const date_key = shot_year + shot_month + shot_day;
        // 日付オブジェクトを作成

        const hole_key = "hole_" + selected_hole;
        // そもそもホール情報が無い時
        if (shot_json_data[hole_key] == undefined) {
            shot_json_data[hole_key] = {
                [date_key]: time_obj
            }
        // ホール情報があって同じ日付が無い時
        } else if (shot_json_data[hole_key][date_key] == undefined) {
            shot_json_data[hole_key][date_key] = time_obj
        // ホール情報があって同じ日付もある時
        } else if (shot_json_data[hole_key][date_key] != undefined) {
            shot_json_data[hole_key][date_key][time_str_len4] = {
                "shot_count": shot_count
            }
        }
        
        localStorage.setItem(selected_course, JSON.stringify(shot_json_data));
    }, false)
}