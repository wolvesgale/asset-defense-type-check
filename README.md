# あなたに合う資産防衛タイプ診断（静的LP）

## 概要
TikTok・YouTube・note等から流入したユーザー向けに、家計防衛/学習/比較/実践の優先度を可視化する7問診断LPです。結果タイプに応じてCTAを出し分けます。

## ファイル構成
- `index.html` : LP本体（診断フォーム、結果表示、CTA、免責、広告表記）
- `style.css` : 全体スタイル（スマホファースト、カードUI、レスポンシブ）
- `script.js` : 診断ロジック、結果描画、CTA出し分け、保存機能
- `privacy.html` : プライバシーポリシー
- `README.md` : 本ファイル

## ローカル確認方法
1. このディレクトリで `index.html` をブラウザで開く
2. 7問に回答して結果表示、CTA順、保存ボタン動作を確認する

## Vercel公開方法
1. GitHubへpush
2. Vercelで対象リポジトリをImport
3. Framework Presetは `Other`
4. Build Commandは空欄、Output Directoryは `/`（ルート静的配信）
5. Deploy

## CTAリンク差し替え箇所
`script.js` の `CTA_MAP` を編集してください。

## DMM_LINK_HERE の差し替え方法
1. `script.js` を開く
2. `CTA_MAP.dmm.url` の `DMM_LINK_HERE` を実リンクに置換する
3. 保存して再デプロイ

## 免責文と広告表記を削除しない注意
法令・ガイドライン対応のため、`index.html` / `privacy.html` / `script.js` にある免責文と広告表記は削除しないでください。

## 診断ロジックの変更方法
- 設問変更: `index.html` の各選択肢 `data-type` を更新
- 判定ロジック: `script.js` の `decideType`（同点優先順位: guard → learn → balance → growth）を編集
- 結果文言/CTA順: `script.js` の `RESULTS` を編集
