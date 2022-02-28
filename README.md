## Stripe の公式サンプルコード（React, node）を TypeScript 化しました。

[stripe Docs - カスタムの支払いフロー](https://stripe.com/docs/payments/quickstart)

公式にいいサンプルがなく、型注釈を必要としたり少し設定が難しくエラーを解消するのに時間がかかったので作成しました。

TypeScript で stripe を導入する方の手助けになれば幸いです。

## Setup Stripe Secret API Key

```bash
% cp .env.example .env

# .envのSTRIPE_SECRET_API_KEYを使用したいStripeアカウントのSecret APIキーに変更する
```

## Installation

```bash
# 環境をビルドして起動する
docker-compose up --build

# コンテナに入る
docker-compose exec app bash

# 必要なパッケージをダウンロードする
npm install
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

値を入力し Pay Now をクリックすると成功とともに URL に`paymentIntent` が返ってきます。

## お願い

型で不十分な箇所があったりしたら追加して頂けると幸いです。
