# あなたに合う資産防衛タイプ診断（静的LP）

## 概要
TikTok・YouTube・note等から流入したユーザー向けに、家計防衛/学習/比較/実践の優先度を可視化する7問診断LPです。ダークテーマの金融系デザインで、結果タイプごとに最適なCTAへ分岐します。

## ファイル構成
- `index.html` : LP本体（ヒーロー、図解1、診断フォーム、結果表示、CTA、免責、広告表記）
- `style.css` : ダークUIスタイル（スマホファースト、カードUI、レスポンシブ、選択中強調）
- `script.js` : 診断ロジック、結果描画、CTA出し分け、保存機能
- `privacy.html` : プライバシーポリシー
- `README.md` : 本ファイル

## CTAリンク一覧（現行設定）
- FP相談: https://px.a8.net/svt/ejp?a8mat=4B1HTJ+3R5F3M+5MAS+5YJRM
- トウシェル: https://px.a8.net/svt/ejp?a8mat=4B1EPK+2HWH4I+20NK+ZRQ0X
- DMM株: https://px.a8.net/svt/ejp?a8mat=4B1EPK+3VBGC2+1WP2+15QHIA
- Amazon書籍: https://amzn.to/4eqEm4Y
- note: https://note.com/dreamrize
- YouTube: https://www.youtube.com/@dreamdragon0512

## 免責文と広告表記を削除しない注意
法令・ガイドライン対応のため、`index.html` / `privacy.html` / `script.js` にある免責文と広告表記は削除しないでください。

## 診断ロジックの変更方法
- 設問変更: `index.html` の各選択肢 `data-type` を更新
- 判定ロジック: `script.js` の `decideType`（同点優先順位: guard → learn → balance → growth）を編集
- 結果文言/CTA順: `script.js` の `RESULTS` を編集

## 最終調整の確認項目
1. TOPにチャート・グラフ系のビジュアルが表示される
2. ダークテーマ（ネイビー×ゴールド）を維持している
3. 図解2が削除されている
4. 図解3が削除されている
5. 図解1「資産防衛タイプ4分類」が残っている
6. 診断フォーム見出し下の空エラー枠が通常時に表示されない
7. 未回答時のみエラー表示される
8. Q1〜Q7の質問見出しがゴールド系で表示される
9. 4タイプ判定・CTA分岐・保存機能が維持される
10. privacy.html が表示できる
