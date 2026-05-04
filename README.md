# あなたに合う資産防衛タイプ診断（静的LP）

## 概要
TikTok・YouTube・note等から流入したユーザー向けに、家計防衛/学習/比較/実践の優先度を可視化する7問診断LPです。ダークテーマの金融系デザインで、結果タイプごとに最適なCTAへ分岐します。

## ファイル構成
- `index.html` : LP本体（ヒーロー、図解3セクション、診断フォーム、結果表示、CTA、免責、広告表記）
- `style.css` : ダークUIスタイル（スマホファースト、カードUI、レスポンシブ、選択中強調）
- `script.js` : 診断ロジック、結果描画、CTA出し分け、保存機能
- `privacy.html` : プライバシーポリシー
- `README.md` : 本ファイル

## ローカル確認方法
1. このディレクトリで `index.html` をブラウザで開く
2. 7問に回答し、結果表示・CTA順・保存ボタン動作を確認する

## Vercel公開方法
1. GitHubへpush
2. Vercelで対象リポジトリをImport
3. Framework Presetは `Other`
4. Build Commandは空欄、Output Directoryは `/`（ルート静的配信）
5. Deploy

## CTAリンク一覧（現行設定）
- FP相談: https://px.a8.net/svt/ejp?a8mat=4B1HTJ+3R5F3M+5MAS+5YJRM
- トウシェル: https://px.a8.net/svt/ejp?a8mat=4B1EPK+2HWH4I+20NK+ZRQ0X
- DMM株: https://px.a8.net/svt/ejp?a8mat=4B1EPK+3VBGC2+1WP2+15QHIA
- Amazon書籍: https://amzn.to/4eqEm4Y
- note: https://note.com/dreamrize
- YouTube: https://www.youtube.com/@dreamdragon0512

## CTAリンク差し替え箇所
`script.js` の `CTA_MAP` を編集してください。

## 免責文と広告表記を削除しない注意
法令・ガイドライン対応のため、`index.html` / `privacy.html` / `script.js` にある免責文と広告表記は削除しないでください。

## 診断ロジックの変更方法
- 設問変更: `index.html` の各選択肢 `data-type` を更新
- 判定ロジック: `script.js` の `decideType`（同点優先順位: guard → learn → balance → growth）を編集
- 結果文言/CTA順: `script.js` の `RESULTS` を編集

## 完了後チェックリスト
1. DMM株リンクが反映されているか（`script.js` の `CTA_MAP.dmm.url`）
2. ダークテーマになっているか（`style.css` の配色）
3. 図解セクション3つが追加されているか（`index.html`）
4. 診断フォームが正常に動くか（未回答エラー含む）
5. 4タイプの結果分岐が正常か
6. 診断結果保存txtが正常にダウンロードできるか
7. 各CTAリンクが正しいか
8. スマホ表示で崩れていないか
9. 免責・広告表記が残っているか
10. `privacy.html` が表示できるか
