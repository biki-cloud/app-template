# ベースイメージとしてOpenJDKを使用
FROM openjdk:17-jdk-slim AS build

# 作業ディレクトリを設定
WORKDIR /app

# Gradle Wrapperをコピー
COPY gradlew gradlew
COPY gradle gradle
COPY build.gradle build.gradle
COPY settings.gradle settings.gradle

# 依存関係を解決するために必要なファイルをコピー
COPY src src

# アプリケーションをビルド
RUN ./gradlew build -x test

# 実行用のイメージを作成
FROM openjdk:17-jdk-slim

# 作業ディレクトリを設定
WORKDIR /app

# ビルドしたJARファイルをコピー
COPY --from=build /app/build/libs/*.jar app.jar

# アプリケーションを実行
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
