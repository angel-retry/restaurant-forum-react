# 餐廳論壇
這個專案是透過react、chakra UI製作成的餐廳論壇網站，可以分享餐廳資訊和交流討論，下面有網站連結以及更詳細的功能介紹。

這個專案有串接後端API，請參考[餐廳論壇API](https://github.com/angel-retry/restaurant-forum-api)。

## 網站連結
[https://restaurant-forum-react.vercel.app/auth](https://restaurant-forum-react.vercel.app/auth)
登入的時候可以使用一下帳號做登入
```
email: user1@example.com
password: 12345678
```
## 網站截圖
- 登入畫面
![image](https://github.com/angel-retry/restaurant-forum-react/assets/71422058/5d76fdb0-9701-4aa2-8ef4-0edf01be3b77)
- 首頁
![image](https://github.com/angel-retry/restaurant-forum-react/assets/71422058/189ef0a1-26b4-4fb7-87cf-5dd9412c166c)
- 個人頁面
![image](https://github.com/angel-retry/restaurant-forum-react/assets/71422058/1a3f3397-2684-4abb-828a-0812a89aa84e)

## Features - 產品功能
### 登入/註冊/GOOGLE快速登入
- 使用者可以註冊帳號以及登入。
- 使用者可以透過GOOGLE帳號登入。
### 首頁
- 使用者可以瀏覽所有餐廳資訊
- 使用者可以使用搜尋功能查詢餐廳名字、介紹、位置。
- 使用者可以直接收藏、按讚餐廳。
- 使用者可以按下餐廳種類選擇查看哪種種類的餐廳。
### 創建、更新、刪除餐廳
- 使用者可以創建餐廳資訊。
- 使用者可以編輯自己所創建的餐廳。
- 使用者可以刪除自己所創建的餐廳。
### 使用者互動
- 使用者可以追蹤其他使用者。
- 使用者可以到其他使用者創建的餐廳留言。
### 使用者個人頁面
- 使用者可以查看各個使用者的頁面資訊，包括:粉絲、追蹤者、創建餐廳、收藏餐廳、喜歡餐廳、留言過的餐廳。
- 使用者如果是查看自己個人頁面，可以編輯自己個人資訊，包括: 大頭貼、名字、自我介紹。
### TOP 10 餐廳
- 使用者可以查看收藏數最高的餐廳。
### TOP 10 美食達人
- 使用者可以查看粉絲最多的使用者。
- 使用者可以直接追隨/取消追隨Top 10美食達人。
### 最新動態
- 使用者可以查看最新建的餐廳以及最新的留言資訊。
### 顏色模式
- 使用者可以選擇網站為 light / dark mode。

## Installing - 專案安裝流程
1. 請git clone專案。
```
git clone https://github.com/angel-retry/restaurant-forum-react.git
```
2. git clone後，cd專案名稱，進入該專案資料夾。
```
cd restaurant-forum-react
```
3. 接下來安裝專案套件。
```
npm install
```
4. 請設定好後端URL[餐廳論壇後端API](https://github.com/angel-retry/restaurant-forum-api)，才可以成功使用該網站功能。
5. 請啟動專案
```
npm run dev
```
6. 接下來在terminal看到以下內容，代表伺服器建立成功。
```
$ npm run dev

> restaurants-forum-react@0.0.0 dev
> vite


  VITE v5.2.13  ready in 3313 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
7. 點擊[http://localhost:5173/](http://localhost:5173/)前往網站。

## Development tool - 開發工具
- **[@chakra-ui/icons](https://www.npmjs.com/package/@chakra-ui/icons)** v2.1.1
- **[@chakra-ui/react](https://www.npmjs.com/package/@chakra-ui/react)** v2.8.2
- **[@emotion/react](https://www.npmjs.com/package/@emotion/react)** v11.11.4
- **[@emotion/styled](https://www.npmjs.com/package/@emotion/styled)** v11.11.5
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)** v3.6.0
- **[axios](https://www.npmjs.com/package/axios)** v1.7.2
- **[framer-motion](https://www.npmjs.com/package/framer-motion)** v11.2.10
- **[react](https://www.npmjs.com/package/react)** v18.2.0
- **[react-dom](https://www.npmjs.com/package/react-dom)** v18.2.0
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form)** v7.51.5
- **[react-icons](https://www.npmjs.com/package/react-icons)** v5.2.1
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** v6.23.1
- **[yup](https://www.npmjs.com/package/yup)** v1.4.0
- **[zustand](https://www.npmjs.com/package/zustand)** v4.5.2
