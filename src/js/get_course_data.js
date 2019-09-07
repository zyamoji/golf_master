export default function(course_id, hole_id) {
    // コース情報ファイルを指定
    const course_object = require('../../course_information.json');

    // 選択されたコース情報を取得
    const selected_course = document.getElementById(course_id).value
    // 選択されたホール情報を取得
    const selected_hole = document.getElementById(hole_id).value

    // 選択されたコース/ホールのカップ緯度経度を取得
    for (let course_info of course_object["courses"]) {
        // 選択されたコースならホール選択に移る
        if (course_info["name"] == selected_course) {
            for (let hole_info of course_info["holes"]) {
                if (hole_info["number"] == Number(selected_hole)) {
                    console.log(Number(selected_hole))
                    return hole_info
                }
            }
        }
    }
}