import get_course_data from './get_course_data';

export default function () {

    // コースレイアウト表示ボタン
    const show_course_layout_btn = document.getElementById('show_course_layout_btn');
    // モーダルダイアログ
    const modal = document.getElementById('modal');

    // 読み込みボタン押したらコースレイアウトを表示
    show_course_layout_btn.addEventListener("click", function () {
        // 選択されたホールの情報を取得
        const hole_info = get_course_data("course_select", "hole_select")

        // コースレイアウト表示imgタグ
        const course_layout_image = document.getElementById('course_layout_image');
        course_layout_image.src = hole_info["course_layout_url"]

        modal.classList.add('is-active')
        
    })

    // そのへんをクリックしたらモーダルを閉じる
    // コースレイアウト表示ボタン
    const modal_background = document.getElementById('modal_background');

    // 読み込みボタン押したらコースレイアウトを表示
    modal_background.addEventListener("click", function () {
        modal_close()

    })

    // コースレイアウト表示ボタン
    const modal_close_btn = document.getElementsByClassName('modal-close')[0];

    // 読み込みボタン押したらコースレイアウトを表示
    modal_close_btn.addEventListener("click", function () {
        modal_close()

    })

    const modal_close = () => {
        // コースレイアウト表示imgタグ
        const course_layout_image = document.getElementById('course_layout_image');
        course_layout_image.src = ""
        modal.classList.remove('is-active')
    }
}