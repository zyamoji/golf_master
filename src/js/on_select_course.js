import get_course_data from './get_course_data';

export default function () {

    course_select.addEventListener('change', () => {
        course_change_action();
    })
    
    hole_select.addEventListener('change', () => {
        course_change_action();
    })

    // コース、ホールが変更されたときの挙動
    const course_change_action = () => {
        // 選択されたホールの情報を取得
        const hole_info = get_course_data("course_select", "hole_select") || []
        //console.log(hole_info)

        // コース図URLがあれば、コース図表示ボタンを表示する
        if (hole_info["course_layout_url"]) {
            //console.log("Exist")
            show_course_layout_btn.classList.remove('is-hidden')
        } else {
            //console.log("not exist")
            show_course_layout_btn.classList.add('is-hidden')
        }
    }
    
}