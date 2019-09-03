export default function () {

    // 読み込みボタン押したらデータを表示
    read_from_localstorage_btn.addEventListener("click", function () {
        // 選択されたコース情報を取得
        const selected_course = document.getElementById("course_select").value
        // 選択されたホール情報を取得
        const selected_hole = document.getElementById("hole_select").value
        // 表示領域
        const display_shot_counter = document.getElementById("display_shot_counter")

        // localStorageから読み出す
        const shot_data = localStorage.getItem(selected_course)

        if (shot_data == undefined) {
            display_shot_counter.innerHTML = "ログはありません"
        } else {
            const shot_json_data = JSON.parse(shot_data)
            
            // データはあるけど、ホール情報がない時
            const hole_key = "hole_" + selected_hole
            if (shot_json_data[hole_key] == undefined) {
                display_shot_counter.innerHTML = "ログはありません"
            } else {
                const this_hole_data = shot_json_data[hole_key]
                console.log(Object.keys(this_hole_data))
                display_shot_counter.innerHTML = ""
                for (var date_key of Object.keys(this_hole_data)) {
                    display_shot_counter.innerHTML += date_key + " のデータ↓<br>"
                    for (const time_key of Object.keys(this_hole_data[date_key])) {
                        display_shot_counter.innerHTML += time_key.slice(0, 2) + ":" + time_key.slice(2, 4) + " → " + this_hole_data[date_key][time_key]["shot_count"] + "打<br>"
                    }
                    console.log(this_hole_data[date_key])
                }
                //display_shot_counter.innerHTML = JSON.stringify(this_hole_data)
            }

            
        }
    })
}