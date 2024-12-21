# ベースイメージとしてNode.jsを使用
FROM node:18 AS build

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストールするために必要なファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 本番用のサーバーを提供するためにNginxを使用
FROM nginx:alpine

# ビルドしたファイルをNginxの公開ディレクトリにコピー
COPY --from=build /app/dist /usr/share/nginx/html

# Nginxの設定を変更する場合は、以下のように設定ファイルをコピー
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]
# このDockerfileでは、Node.jsのイメージをベースにしています。そのため、Node.jsのアプリケーションをビルドするための手順を記述しています。
