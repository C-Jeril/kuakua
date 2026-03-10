# kuakua.app へようこそ

[![English|en](https://img.shields.io/badge/lang-en-green.svg)](README.md)
[![简体中文|zh](https://img.shields.io/badge/lang-zh-red.svg)](README.zh.md)
[![Español|es](https://img.shields.io/badge/lang-es-yellow.svg)](README.es.md)
[![العربية|ar](https://img.shields.io/badge/lang-ar-lightgrey.svg)](README.ar.md)
[![বাংলা|bn](https://img.shields.io/badge/lang-bn-blue.svg)](README.bn.md)
[![Português|pt](https://img.shields.io/badge/lang-pt-brightgreen.svg)](README.pt.md)
[![Русский|ru](https://img.shields.io/badge/lang-ru-darkblue.svg)](README.ru.md)
[![日本語|ja](https://img.shields.io/badge/lang-ja-orange.svg)](README.ja.md)
[![Deutsch|de](https://img.shields.io/badge/lang-de-black.svg)](README.de.md)
[![Tiếng Việt|vi](https://img.shields.io/badge/lang-vi-darkgreen.svg)](README.vi.md)
[![Français|fr](https://img.shields.io/badge/lang-fr-blue.svg)](README.fa.md)
[![فارسی](https://img.shields.io/badge/lang-fa-purple.svg)](README.fa.md)
[![Türkçe|tr](https://img.shields.io/badge/lang-tr-darkred.svg)](README.tr.md)
[![한국어|ko](https://img.shields.io/badge/lang-ko-cyan.svg)](README.ko.md)
[![ไทย|th](https://img.shields.io/badge/lang-th-gold.svg)](README.th.md)
[![Italiano|it](https://img.shields.io/badge/lang-it-darkorange.svg)](README.it.md)
[![Bahasa Melayu|ms](https://img.shields.io/badge/lang-ms-teal.svg)](README.ms.md)
[![Filipino|tl](https://img.shields.io/badge/lang-tl-pink.svg)](README.tl.md)
[![Dansk|da](https://img.shields.io/badge/lang-da-darkblue.svg)](README.da.md)
[![Norsk|no](https://img.shields.io/badge/lang-no-lightblue.svg)](README.no.md)
[![Svenska|sv](https://img.shields.io/badge/lang-sv-darkgreen.svg)](README.sv.md)
[![Suomi|fi](https://img.shields.io/badge/lang-fi-blue.svg)](README.fi.md)
[![Íslenska|is](https://img.shields.io/badge/lang-is-darkred.svg)](README.is.md)
[![Nederlands|nl](https://img.shields.io/badge/lang-nl-orange.svg)](README.nl.md)
[![Polski|pl](https://img.shields.io/badge/lang-pl-purple.svg)](README.pl.md)
[![Ελληνικά|el](https://img.shields.io/badge/lang-el-lightblue.svg)](README.el.md)
[![Čeština|cs](https://img.shields.io/badge/lang-cs-darkblue.svg)](README.cs.md)
[![Magyar|hu](https://img.shields.io/badge/lang-hu-red.svg)](README.hu.md)
[![Română|ro](https://img.shields.io/badge/lang-ro-green.svg)](README.ro.md)
[![हिन्दी|hi](https://img.shields.io/badge/lang-hi-orange.svg)](README.hi.md)
[![Bahasa Indonesia|id](https://img.shields.io/badge/lang-id-red.svg)](README.id.md)
[![繁體中文|zh-TW](https://img.shields.io/badge/lang-zh--TW-blue.svg)](README.zh-TW.md)

## はじめに

**Kuakua**は、最新のWebテクノロジーで構築された総合的な心理学・ウェルビーイングプラットフォームです。私たちは心理学の科学を誰にとってもアクセスしやすく、魅力的で、有益なものにすることを目指しています。

ポジティブ心理学に焦点を当てたプラットフォームとして、私たちは人間の内発的な成長能力とウェルビーイングを信じています。エビデンスに基づいたツール、インタラクティブな体験、厳選されたコンテンツを通じて、個人が自分自身をより深く理解し、メンタルヘルスを向上させるお手伝いをします。

### プラットフォーム概要

| モジュール | 数 | 説明 |
|--------|-------|-------------|
| 🎮 **ゲーム** | 140+ | 認知ゲーム、パズル、リラックスゲーム、クラシックブラウザゲーム |
| 📋 **テスト** | 150+ | 心理セルフアセスメントツールと検証済み尺度 |
| 🧪 **実験** | 90+ | 古典的認知パラダイムと実験課題のインタラクティブ実装 |
| 🛠️ **ツール** | 30+ | 集中力、生産性、ウェルビーイングのための実用ツール |
| 📚 **ドキュメント** | 200+ | 心理学知識ベースと研究ドキュメント |
| ✍️ **ブログ** | 200+ | 心理学、ウェルビーイング、個人的成長に関する記事 |
| 🌍 **言語** | 32 | RTL言語を含む完全な国際化サポート |

### 技術スタック

- **フレームワーク**: Next.js 16.1.6 + App Router
- **言語**: TypeScript 5.9.3
- **スタイリング**: Tailwind CSS 4.2.1 + DaisyUI 5.5.18
- **国際化**: next-intl（32言語）
- **状態管理**: Zustand 5.0.11
- **アニメーション**: Framer Motion 12.35.2
- **データベース**: Supabase (PostgreSQL)
- **デプロイ**: Vercel

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X8XB8D5)

---

## コアモジュール

### 🎮 ゲーム (`/games`)

140以上のゲームが複数のカテゴリーにわたって提供されています：

- **認知トレーニング**: 反応時間、記憶、注意、情報処理速度テスト
- **クラシックパズル**: 数独、2048、テトリス、チェス、ソリティア
- **Googleクラシック**: 恐竜ゲーム、スネーク、パックマン、マインスイーパー
- **リラックスゲーム**: Perfect Tidy、塗り絵、ジグソーパズル
- **シミュレーション**: 人生リスタート、モノポリー、ビール流通ゲーム

**人気ゲーム:**
- [反応時間テスト](https://kuakua.app/games/reaction-time) - 神経反射速度を測定
- [チンパンジー記憶テスト](https://kuakua.app/games/chimp-test) - 霊長類レベルの空間記憶に挑戦
- [視覚記憶ゲーム](https://kuakua.app/games/visual-memory) - 短期記憶容量をテスト
- [タイピング速度テスト](https://kuakua.app/games/typing-test) - WPMと精度測定
- [2048](https://kuakua.app/games/2048) - クラシック数字パズル
- [人生リスタートシミュレーター](https://kuakua.app/games/life-restart) - マルチエンディング人生シミュレーション

### 📋 心理テスト (`/test`)

150以上の心理セルフアセスメントツールの総合コレクション：

**検証済み臨床尺度:**
- [PHQ-9](https://kuakua.app/test/phq-9) - うつ病スクリーニング患者健康質問票
- [GAD-7](https://kuakua.app/test/gad-7) - 全般性不安障害評価
- [DASS-21](https://kuakua.app/test/dass-21) - うつ・不安・ストレス尺度
- [PSQI](https://kuakua.app/test/psqi) - ピッツバーグ睡眠質問票
- [IES-R](https://kuakua.app/test/ies-r) - 事件影響尺度（トラウマ）

**性格評価:**
- [ビッグファイブ性格テスト](https://kuakua.app/test/bigfive-test) - 五因子モデル
- [MBTI](https://kuakua.app/test/mbti) - マイヤーズ・ブリッグス・タイプ指標
- [エニアグラムテスト](https://kuakua.app/test/enneagram-test) - 9つの性格タイプ
- [HEXACO](https://kuakua.app/test/hexaco) - 六因子性格モデル
- [DISCテスト](https://kuakua.app/test/disc-test) - 行動評価

**専門尺度:**
- [愛の言語テスト](https://kuakua.app/test/love-language-test) - チャップマンの5つの愛の言語
- [自己愛人格目録](https://kuakua.app/test/narcissistic-personality-inventory)
- [インターネット依存評価](https://kuakua.app/test/internet-addiction-assessment)
- [RIASECキャリアテスト](https://kuakua.app/test/riasec) - ホランドの職業興味

> ⚠️ **免責事項**: すべてのテストは教育・自己反省目的のみです。診断ツールではありません。メンタルヘルスの懸念がある場合は、資格のある医療専門家にご相談ください。

### 🧪 認知実験 (`/experiment`)

90以上の古典的認知パラダイムのインタラクティブ実装：

**注意・実行機能:**
- [ストループテスト](https://kuakua.app/experiment/stroop-test) - 認知干渉
- [N-Back課題](https://kuakua.app/experiment/n-back-task) - ワーキングメモリトレーニング
- [ウィスコンシンカード分類テスト](https://kuakua.app/experiment/wcst-test) - 認知柔軟性
- [Go/No-Go課題](https://kuakua.app/experiment/go-no-go-task) - 反応抑制
- [フランカー課題](https://kuakua.app/experiment/flanker-task) - 選択的注意

**意思決定:**
- [アイオワギャンブル課題](https://kuakua.app/experiment/iowa-gambling-task) - リスクベース意思決定
- [最後通牒ゲーム](https://kuakua.app/experiment/ultimatum-game) - 公平性と交渉
- [信頼ゲーム](https://kuakua.app/experiment/trust-game) - 社会的信頼行動
- [遅延割引](https://kuakua.app/experiment/delay-discounting) - 時間選好

**記憶・学習:**
- [内暗黙連合テスト](https://kuakua.app/experiment/implicit-association-test) - 無意識のバイアス
- [系列位置効果](https://kuakua.app/experiment/serial-position) - 記憶想起パターン
- [コルシブロック課題](https://kuakua.app/experiment/corsi-task) - 視空間記憶

**知覚:**
- [視覚探索課題](https://kuakua.app/experiment/visual-search-task) - 特徴vs結合探索
- [変化盲視](https://kuakua.app/experiment/change-blindness) - 視覚注意の限界
- [マガーク効果](https://kuakua.app/experiment/mcgurk-effect) - 視聴覚統合

### 🛠️ ツール (`/tools`)

日常のウェルビーイングのための実用ツール：

- [フォーカスフローシステム](https://kuakua.app/tools/focus-flow-system) - ポモドーロタイマーと休憩アクティビティ
- [スコアボード](https://kuakua.app/tools/scoreboard) - ゲームスコアトラッカー
- [文字カウンター](https://kuakua.app/tools/word-counter) - テキスト分析ツール
- [リラックス](https://kuakua.app/tools/relax) - 環境音と瞑想
- [タイムタブ](https://kuakua.app/tools/time-tab) - 世界時計とタイマー
- [ランダムジェネレーター](https://kuakua.app/tools/random-generator) - サイコロ、コイン、ランダム選択

### 📚 ナレッジベース (`/docs`)

包括的な心理学ドキュメント：

- **研究方法**: 実験デザイン、妥当性、信頼性、統計学
- **社会心理学**: 同調、偏見、帰属、集団力学
- **認知心理学**: 記憶、注意、知覚、意思決定
- **ポジティブ心理学**: ウェルビーイング、レジリエンス、感謝、意味
- **臨床心理学**: 評価、セラピーアプローチ、メンタルヘルス

### ✍️ ブログ (`/blog`)

日常生活における心理学を探求する記事：

- ポジティブ心理学の応用
- 認知科学の洞察
- 文化心理学の視点
- 実践的なウェルビーイング戦略
- 研究概要

### 🌍 探索 (`/explore`)

厳選された心理学リソース集：

- 外部ウェブサイトとアプリ
- メンタルヘルスAIツール
- 研究データベース
- 専門リソース

---

## ポジティブ心理学

### ポジティブ心理学とは？

ポジティブ心理学は、2000年にマーティン・セリグマンとミハイ・チクセントミハイによって正式に導入された、人間のフラリッシュを理解し促進することに専念する科学分野です。伝統的な心理学が病理に焦点を当てるのとは異なり、ポジティブ心理学は何が人生を生きる価値あるものにするかを研究します。

### 核心概念

- **エウダイモニア**: 最高の人間の善—フラリッシュと意味ある生活
- **主観的ウェルビーイング (SWB)**: 生活満足度と感情バランス
- **性格の強み**: 個人が成長するのを可能にする美徳
- **フロー**: 最適体験と没頭
- **レジリエンス**: 逆境から回復する能力

### 主な利点

研究により、ポジティブ心理介入は以下のことが示されています：

1. **ウェルビーイングの向上**: ポジティブ感情と生活満足度の増加
2. **レジリエンスの構築**: 困難に対処する戦略の発達
3. **関係の改善**: 社会的つながりと共感の促進
4. **パフォーマンスの向上**: 集中力、創造性、生産性の強化
5. **健康の促進**: 身体的・精神的健康アウトカムのサポート

### 実践的応用

- **味わい**: ポジティブな体験をマインドフルに楽しむ
- **感謝**: 人生の恵みを認識し感謝する
- **親切**: 思いやりと利他を実践する
- **意味**: 目的と意義を追求する
- **成長**: チャレンジを機会として捉える

---

## 注目コンテンツ

### 人気ゲーム

| ゲーム | 説明 | リンク |
|------|-------------|------|
| 反応時間 | 世界平均と反応速度を競う | [プレイ](https://kuakua.app/games/reaction-time) |
| チンパンジー記憶 | 空間想起チャレンジ | [プレイ](https://kuakua.app/games/chimp-test) |
| 視覚記憶 | 短期記憶評価 | [プレイ](https://kuakua.app/games/visual-memory) |
| シーケンス記憶 | 適応的難易度のパターン想起 | [プレイ](https://kuakua.app/games/sequence-memory) |
| タイピングテスト | WPMと精度測定 | [プレイ](https://kuakua.app/games/typing-test) |
| 2048 | 数字マージパズル | [プレイ](https://kuakua.app/games/2048) |
| 数独 | クラシックロジックパズル | [プレイ](https://kuakua.app/games/sudoku) |
| チェス | AI付き戦略ボードゲーム | [プレイ](https://kuakua.app/games/chess) |

### 注目テスト

| テスト | 目的 | リンク |
|------|---------|------|
| ビッグファイブ | 性格特性 | [テストを受ける](https://kuakua.app/test/bigfive-test) |
| PHQ-9 | うつ病スクリーニング | [テストを受ける](https://kuakua.app/test/phq-9) |
| GAD-7 | 不安評価 | [テストを受ける](https://kuakua.app/test/gad-7) |
| 愛の言語 | 関係の好み | [テストを受ける](https://kuakua.app/test/love-language-test) |
| MBTI | 性格タイプ | [テストを受ける](https://kuakua.app/test/mbti) |
| エニアグラム | 性格パターン | [テストを受ける](https://kuakua.app/test/enneagram-test) |

### 注目実験

| 実験 | 認知領域 | リンク |
|------------|-----------------|------|
| ストループテスト | 認知干渉 | [試す](https://kuakua.app/experiment/stroop-test) |
| N-Back | ワーキングメモリ | [試す](https://kuakua.app/experiment/n-back-task) |
| WCST | 認知柔軟性 | [試す](https://kuakua.app/experiment/wcst-test) |
| IAT | 内暗黙連合 | [試す](https://kuakua.app/experiment/implicit-association-test) |
| ハノイの塔 | 計画・問題解決 | [試す](https://kuakua.app/experiment/hanoi-tower) |

---

## クイックリンク

- 🏠 **ホームページ**: [kuakua.app](https://kuakua.app)
- 🎮 **ゲーム**: [kuakua.app/games](https://kuakua.app/games)
- 📋 **テスト**: [kuakua.app/test](https://kuakua.app/test)
- 🧪 **実験**: [kuakua.app/experiment](https://kuakua.app/experiment)
- 🛠️ **ツール**: [kuakua.app/tools](https://kuakua.app/tools)
- 📚 **ドキュメント**: [kuakua.app/docs](https://kuakua.app/docs)
- ✍️ **ブログ**: [kuakua.app/blog](https://kuakua.app/blog)
- 🌍 **探索**: [kuakua.app/explore](https://kuakua.app/explore)
- 🗳️ **投票**: [kuakua.app/vote](https://kuakua.app/vote)
- 🎴 **デイリーカード**: [kuakua.app/drawcard](https://kuakua.app/drawcard)

---

## 私たちのミッション

Kuakuaは**心理学的に根拠があり、倫理的に責任があり、グローバルにアクセス可能なツールとコンテンツ**を構築し、個人が自分自身をより深く理解し、ウェルビーイングを向上させることを目指しています。

私たちは信じています：
- 心理学の知識は誰にとってもアクセス可能であるべき
- セルフアセスメントツールは自己認識と成長を促進できる
- インタラクティブな体験は学習を魅力的にする
- エビデンスに基づいたアプローチは有意義な結果をもたらす
- 長期的な信頼は短期的な指標より重要

---

## サポート

Kuakuaが役立つと感じたら、私たちの活動をサポートしてください：

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X8XB8D5)

---

*最終更新: 2026-03-10*
*バージョン: 2.0*
