# Kuakua - 心理學與幸福平台

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
[![Français|fr](https://img.shields.io/badge/lang-fr-blue.svg)](README.fr.md)
[![فارسی|fa](https://img.shields.io/badge/lang-fa-purple.svg)](README.fa.md)
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

## 平台概覽

| 模組 | 內容 | 描述 |
|------|------|------|
| 🎮 **遊戲** | 140+ 遊戲 | 益智遊戲、認知挑戰、放鬆遊戲、Google 經典 |
| 📋 **測驗** | 150+ 測驗 | 科學心理測驗、自我評估工具 |
| 🧪 **實驗** | 90+ 實驗 | 經典認知範式、互動實驗任務 |
| 🔧 **工具** | 30+ 工具 | 專注力、生產力和幸福感的實用工具 |
| 📚 **文檔** | 200+ 文章 | 心理學知識庫、理論與洞察 |
| 📝 **博客** | 200+ 文章 | 幸福感、自我成長、正向心理學文章 |
| 🌍 **語言** | 32 種語言 | 完整的國際化支援 |

## 技術棧

| 類別 | 技術 | 版本 |
|------|------|------|
| 框架 | Next.js (App Router) | 16.1.6 |
| 語言 | TypeScript | 5.9.3 |
| 樣式 | Tailwind CSS + DaisyUI | 4.2.1 / 5.5.18 |
| 國際化 | next-intl | 4.1.0 |
| 狀態管理 | Zustand | 5.0.11 |
| 動畫 | Framer Motion | 12.35.2 |
| 資料庫 | Supabase | - |
| 部署 | Vercel | - |

## 核心模組

### 🎮 遊戲 (`/games`)

多元化的互動遊戲集合，用於娛樂、放鬆和認知刺激。

| 類別 | 範例 |
|------|------|
| 益智 | 2048、數獨、拼圖、魔術方塊 |
| 認知 | 記憶力、N-Back、Stroop、反應時間 |
| 放鬆 | 繪畫、音樂、引導冥想 |
| Google 經典 | 貪吃蛇、小精靈、井字棋、接龍 |

### 📋 心理測驗 (`/test`)

基於科學的心理自我評估測驗。

| 類型 | 描述 |
|------|------|
| 驗證測驗 | 具有強有力實證支持的成熟工具（PHQ-9、GAD-7、Big Five） |
| 改編測驗 | 受驗證工具啟發的修改或縮短版本 |
| 探索測驗 | 受心理機制啟發的自我反思工具 |

### 🧪 認知實驗 (`/experiment`)

經典認知範式的互動實現。

| 領域 | 範例 |
|------|------|
| 注意力 | Stroop 效應、Flanker 任務 |
| 記憶 | N-Back、數字廣度、視覺記憶 |
| 決策 | 愛荷華博弈任務、風險評估 |
| 反應 | Go/No-Go、選擇反應時間 |

### 🔧 工具 (`/tools`)

日常幸福的實用工具。

- **專注流系統** - 帶休息活動的番茄鐘計時器
- **記分板** - 遊戲分數追蹤器
- **字數統計** - 文本分析工具
- **放鬆** - 環境音和冥想

### 📚 文檔 (`/docs`)

全面的心理學文檔。

- **研究方法**：實驗設計、效度、信度
- **社會心理學**：從眾、偏見、群體動力學
- **認知心理學**：記憶、注意力、知覺
- **正向心理學**：幸福感、韌性、感恩

### 📝 博客 (`/blog`)

探索日常生活中心理學的文章。

- 正向心理學應用
- 認知科學洞察
- 實用幸福策略

---

## 正向心理學

### 什麼是正向心理學？

正向心理學由 Martin Seligman 和 Mihaly Csikszentmihalyi 於 2000 年正式提出，是一個致力於理解和提升人類蓬勃發展的科學領域。

### 核心概念

- **幸福主義（Eudaimonia）**：最高的人類善——蓬勃發展和有意義的生活
- **主觀幸福感（SWB）**：生活滿意度和情緒平衡
- **性格優勢**：使個體能夠蓬勃發展的美德
- **心流（Flow）**：最佳體驗和投入
- **韌性**：從逆境中恢復的能力

### 主要益處

研究表明，正向心理學干預可以：

1. **提升幸福感**：增加積極情緒和生活滿意度
2. **建立韌性**：發展應對挑戰的策略
3. **改善關係**：培養社會連結和同理心
4. **提升表現**：增強專注力、創造力和生產力
5. **促進健康**：支持身心健康結果

---

## 精選內容

### 熱門遊戲

| 遊戲 | 描述 | 連結 |
|------|------|------|
| 反應時間 | 測試您的反應速度與全球平均值的比較 | [遊玩](https://kuakua.app/games/reaction-time) |
| 黑猩猩記憶 | 空間回憶挑戰 | [遊玩](https://kuakua.app/games/chimp-test) |
| 視覺記憶 | 短期記憶評估 | [遊玩](https://kuakua.app/games/visual-memory) |
| 2048 | 數字合併益智遊戲 | [遊玩](https://kuakua.app/games/2048) |

### 精選測驗

| 測驗 | 目的 | 連結 |
|------|------|------|
| Big Five | 人格特質 | [參加測驗](https://kuakua.app/test/bigfive-test) |
| PHQ-9 | 憂鬱篩查 | [參加測驗](https://kuakua.app/test/phq-9) |
| GAD-7 | 焦慮評估 | [參加測驗](https://kuakua.app/test/gad-7) |
| MBTI | 人格類型 | [參加測驗](https://kuakua.app/test/mbti) |

---

## 快速連結

- 🏠 **首頁**：[kuakua.app](https://kuakua.app)
- 🎮 **遊戲**：[kuakua.app/games](https://kuakua.app/games)
- 📋 **測驗**：[kuakua.app/test](https://kuakua.app/test)
- 🧪 **實驗**：[kuakua.app/experiment](https://kuakua.app/experiment)
- 🔧 **工具**：[kuakua.app/tools](https://kuakua.app/tools)
- 📚 **文檔**：[kuakua.app/docs](https://kuakua.app/docs)
- 📝 **博客**：[kuakua.app/blog](https://kuakua.app/blog)

---

## 我們的使命

Kuakua 旨在構建**心理學基礎扎實、道德負責、全球可及的工具和內容**，幫助個人更好地了解自己並提升幸福感。

我們相信：
- 心理學知識應該對每個人都開放
- 自我評估工具可以促進自我覺察和成長
- 互動體驗使學習變得有趣
- 基於證據的方法能產生有意義的結果

---

*最後更新：2026-03-10*
*版本：2.0*
