const DISCLAIMER = '本診断は一般的な情報提供を目的とした簡易チェックであり、個別の投資助言・税務助言・金融商品の勧誘を目的とするものではありません。投資には元本割れ等のリスクがあります。不動産投資には空室、家賃下落、修繕費、価格下落、金利上昇等のリスクがあります。具体的な判断は、各サービス提供会社、金融機関、税理士、FP等の専門家にご確認ください。';
const AD_TEXT = '当サイトには広告・アフィリエイトリンクが含まれます。';

const CTA_MAP = {
  fp: { label: '無料FP相談で家計を整理する', url: 'https://px.a8.net/svt/ejp?a8mat=4B1HTJ+3R5F3M+5MAS+5YJRM' },
  toshell: { label: '無料の不動産投資相談で確認する', url: 'https://px.a8.net/svt/ejp?a8mat=4B1EPK+2HWH4I+20NK+ZRQ0X' },
  dmm: { label: 'DMM株で投資の選択肢を確認する', url: 'DMM_LINK_HERE' },
  amazon: { label: 'Amazon書籍で学ぶ', url: 'https://amzn.to/4eqEm4Y' },
  note: { label: 'noteで資産防衛の考え方を読む', url: 'https://note.com/dreamrize' },
  youtube: { label: 'YouTubeで補足情報を見る', url: 'https://www.youtube.com/@dreamdragon0512' }
};

const RESULTS = {
  guard: { badge: '守り優先型', title: 'まずは「守り」を固める段階です', description: '今は投資商品を比較する前に、家計・固定費・保険・住宅ローン・生活防衛資金を整理するのが優先です。不安の正体を分解すると、必要な対策が見えやすくなります。', status: '家計防衛と生活基盤の整備を優先する状態です。', actions: ['家計と固定費を見直す', '生活防衛資金を確認する', 'FP相談で全体像を整理する'], ctas: ['fp', 'note', 'amazon', 'youtube'] },
  balance: { badge: 'バランス型', title: '守りと増やす選択肢を比較してよい段階です', description: '家計の土台を意識しながら、将来に向けた資産形成も考え始められる状態です。不動産投資や資産保全の選択肢も、即決ではなく比較材料として確認すると有効です。', status: '守りを維持しつつ、増やす手段の比較ができる状態です。', actions: ['家計の守りを維持する', '不動産投資や資産保全の仕組みを確認する', '複数の選択肢を比較する'], ctas: ['toshell', 'fp', 'note', 'amazon', 'youtube'] },
  learn: { badge: '学習優先型', title: 'まずは学習して判断軸を作る段階です', description: '興味はあるものの、今はすぐに相談や申込へ進むより、基礎知識を整理する方が向いています。リスクとリターン、NISA、不動産投資、家計防衛の違いを把握しましょう。', status: '判断軸を作るための知識整理が優先の状態です。', actions: ['noteで診断結果の考え方を読む', '書籍で資産形成の全体像を学ぶ', 'YouTubeで補足情報を見る'], ctas: ['note', 'amazon', 'youtube', 'fp'] },
  growth: { badge: '余力あり型', title: '少額から実践を検討できる段階です', description: '生活防衛資金や家計余力がある程度あり、投資への関心も高い状態です。ただし、いきなり大きく始めるのではなく、少額・分散・長期視点を前提に検討しましょう。', status: '実践可能な余力があり、比較と小さな実行に進める状態です。', actions: ['NISAや株式投資の基本を確認する', '少額から始められる証券サービスを比較する', '必要に応じて相談や学習導線も活用する'], ctas: ['dmm', 'note', 'amazon', 'youtube', 'fp', 'toshell'] }
};

const form = document.getElementById('diagnosis-form');
const err = document.getElementById('form-error');
const resultSection = document.getElementById('result-section');
const ctaSection = document.getElementById('cta-section');
const learningSection = document.getElementById('learning-section');
const resultCard = document.getElementById('result-card');
const ctaList = document.getElementById('cta-list');
const saveBtn = document.getElementById('save-result');

document.getElementById('disclaimer-result').textContent = DISCLAIMER;
document.getElementById('disclaimer-footer').textContent = DISCLAIMER;

let latest = null;

function decideType(scores) {
  const priority = ['guard', 'learn', 'balance', 'growth'];
  return priority.reduce((best, t) => (scores[t] > scores[best] ? t : best), 'guard');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  err.textContent = '';
  const scores = { guard: 0, balance: 0, learn: 0, growth: 0 };
  const answers = [];

  for (let i = 1; i <= 7; i++) {
    const picked = form.querySelector(`input[name="q${i}"]:checked`);
    if (!picked) {
      err.textContent = '未回答の質問があります。7問すべてに回答してください。';
      return;
    }
    scores[picked.dataset.type] += 1;
    answers.push({ question: `Q${i}`, answer: picked.value, type: picked.dataset.type });
  }

  const type = decideType(scores);
  const data = RESULTS[type];
  latest = { type, data, answers };

  resultCard.className = `type-${type}`;
  resultCard.innerHTML = `
    <span class="badge">${data.badge}</span>
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <p><strong>あなたの状態：</strong>${data.status}</p>
    <h4>おすすめアクション</h4>
    <ol>${data.actions.map(a => `<li>${a}</li>`).join('')}</ol>
  `;

  ctaList.innerHTML = data.ctas.map((key, idx) => {
    const cta = CTA_MAP[key];
    return `<a class="cta-btn ${idx === 0 ? '' : 'sub'}" href="${cta.url}" target="_blank" rel="noopener noreferrer">${idx === 0 ? '主CTA：' : 'サブCTA：'}${cta.label}</a>`;
  }).join('');

  resultSection.classList.remove('hidden');
  ctaSection.classList.remove('hidden');
  learningSection.classList.remove('hidden');
  ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

saveBtn.addEventListener('click', () => {
  if (!latest) {
    err.textContent = '先に診断を実行してください。';
    return;
  }
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const filename = `asset-defense-check-result-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}.txt`;
  const lines = [
    '診断名: あなたに合う資産防衛タイプ診断',
    `診断日時: ${now.toLocaleString('ja-JP')}`,
    `判定タイプ: ${latest.data.badge}`,
    '回答内容:',
    ...latest.answers.map(a => `${a.question}: ${a.answer} (${a.type})`),
    `結果コメント: ${latest.data.description}`,
    'おすすめアクション:',
    ...latest.data.actions.map((a, i) => `${i + 1}. ${a}`),
    `表示された主CTA: ${CTA_MAP[latest.data.ctas[0]].label}`,
    `免責文: ${DISCLAIMER}`,
    `広告表記: ${AD_TEXT}`
  ].join('\n');

  const blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});
