// 現在地情報の取得
// そのままでは非同期実行されるので、Promiseで返す
export default function() {
    // Promise化して現在地の取得まで実行を止める
    return new Promise((resolve, reject) =>  {
        // 現在地の取得機能がない場合
        if (!navigator.geolocation) {
            alert("位置情報の取得機能がありません。")
        } else {
            // 現在地取得
            navigator.geolocation.getCurrentPosition(function (position) {
                const ball_lat = position.coords.latitude;
                const ball_lng = position.coords.longitude;
                // 現在地情報を返す
                resolve({"ball_lng": ball_lng, "ball_lat": ball_lat})
            }, function (err) {
                // エラー時の処理
                if (err.code == 0) {
                    alert("不明なエラーです")
                } else if (err.code == 1) {
                    alert("許可がもらえませんでした")
                } else if (err.code == 2) {
                    alert("位置情報の取得に失敗しました")
                }　else if (err.code == 3) {
                    alert("位置情報の取得がタイムアウトしました")
                }
                // エラーコードを返す
                reject(err.code)
             }, {
                 // オプション
                 enableHighAccuracy: true,
                 timeout: 1000,
                 maximumAge: 1000
             })
        }
    })
}

