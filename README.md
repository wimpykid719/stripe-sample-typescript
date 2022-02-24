## Stripeの公式サンプルコード（React, node）をTypeScript化しました。

[stripe Docs - カスタムの支払いフロー](https://stripe.com/docs/payments/quickstart)

公式にいいサンプルがなく、型注釈を必要としたり少し設定が難しくエラーを解消するのに時間がかかったので作成しました。

TypeScriptでstripeを導入する方の手助けになれば幸いです。


## Installation

```bash
# 環境をビルドして起動する
docker-compose up --build

# コンテナに入る
docker-compose exec app bash

# 必要なパッケージをダウンロードする
# npm install
```

## Usage

前提条件：コンテナに入った状態

```bash
# localhost:8080でアプリが起動する
npm run start
```

![stripe-ts](https://user-images.githubusercontent.com/23703281/155453501-914bd2cd-923a-4757-a1ef-7c93041aaff4.png)

テスト用のカードで `4242 4242 4242 4242` が使える。
あとは任意の数値を入力する。

![stripe-ts-succeeded](https://user-images.githubusercontent.com/23703281/155454997-0ae29fed-72c5-4170-b45e-38d2f8797308.png)

値を入力しPay Nowをクリックすると成功とともにURLに`paymentIntent` が返ってきます。


## お願い

型で不十分な箇所があったりしたら追加して頂けると幸いです。
