---
title: "很重要所以說 CBAM（1）：這不是來搶錢的嗎？"
date: "2023-07-17"
description: "為了應對全球暖化與氣候變遷衝擊，從 1997 年京都議定書時期開始到今天，給二氧化碳貼上一個價格標籤，藉由金融的力量讓企業開始減碳的「碳定價」（carbon pricing）遊戲規則，漸漸發展成熟了。甚至現在還出現了 CBAM 這個「碳關稅」，要所有進口歐盟的廠商都多繳一筆錢。這真的不是平白無故來搶錢的嗎？這篇文章就要來好好解釋 CBAM 的由來、設計機制、如何計算商品碳排，讓你一次清楚搞懂 CBAM 究竟是什麼。"
image: "/images/blog/all-about-cbam-1/1-cbam-coming.png"
imageDesc: "CBAM 已經來到全世界國際企業的大門口了"
imageLink: "https://www.freepik.com/free-photo/professional-cyclist-women_31981071.htm#query=emission&position=3&from_view=search&track=sph"
---

<p>為了應對全球暖化與氣候變遷衝擊，從 1997 年京都議定書時期開始到今天，給二氧化碳貼上一個價格標籤，藉由金融的力量讓企業開始減碳的「碳定價」（carbon pricing）遊戲規則，漸漸發展成熟了。</p>
<p>碳費、碳交易、碳抵銷、碳權、自願性市場、強制性市場...1997 年到現在 26 年間，出現了大量的「碳名詞」，讓人看得一頭霧水。</p>
<p>甚至現在還出現了 CBAM 這個「碳關稅」，要所有進口歐盟的廠商都多繳一筆錢。這難道不是平白無故來搶錢的嗎？</p>
<p>先別「碳焦慮」，這篇文章就要來好好解釋 CBAM 的由來、設計機制、如何計算商品碳排，讓你一次清楚搞懂 CBAM 究竟是什麼。</p>
<h2 id="-">目錄</h2>
<ol>
    <li><a href="#cbam-eu-ets">搞懂 CBAM 前一定要先理解：EU ETS 到底是什麼？</a></li>
    <li><a href="#cbam-carbon-leakage">CBAM 是為了預防「碳洩漏」？</a></li>
    <li><a href="#cbam-schedule">CBAM 的上路時程</a></li>
    <li><a href="#cbam-scope">CBAM 究竟要「算誰的帳」？</a></li>
    <li><a href="#cbam-how-to-inventory">CBAM 這筆帳該怎樣算？碳的部分</a></li>
</ol>
<h2 id="cbam-eu-ets">搞懂 CBAM 前先理解：EU ETS 到底是什麼？</h2>
<p>CBAM 是「碳定價」裡面，跟「碳交易」直接相關的一項政策。</p>
<p>「碳定價」主要包含兩種經濟工具，第一種是「碳費」（carbon fee）屬於國際上常見，也是在台灣即將上路的。第二種是「碳交易」。</p>
<p>「碳交易」存在目的不是金融炒作，而是為了要「減碳」：藉由「自由市場看不見的一雙手」來決定碳價格，藉此反應出碳排造成溫室效應的經濟成本，促使企業不得不採取更激進的減碳行為。</p>
<p>我們以全球規模最大的碳交易市場體系，歐盟碳排放交易市場（EU ETS）為例。</p>
<p>歐盟目前已經喊出自己的<a href="https://climate.ec.europa.eu/eu-action/european-green-deal/2030-climate-target-plan_en">減碳目標</a>： 2030 年之前溫室氣體排放量減少至 1990 年基準的 55% 以下 ，並且在 2050 年達成「氣候中和」（或稱為「淨零」）。</p>
<p>因此歐盟從這個目標規劃，參考 SBTi 科學減碳目標倡議，決定出歐盟地區未來每一年能夠排放二氧化碳的「總扣打」，再根據各企業規模比例，每年發放給歐盟內的高碳排企業，並且規定他們只能發放這個額度內的溫室氣體。</p>
<p>這個扣打，就是「碳排放權」（carbon allowance），又稱為「碳權」。</p>
<p>要注意的是，這裡說的「碳權」（carbon allowance, carbon permit）是屬於總量管制碳交易市場，和自願性碳抵銷市場的「碳權」（carbon credit，碳信用）是完全不一樣的兩件事情。</p>
<p>但是在台灣大多翻譯皆稱為「碳權」，因此時常有混淆的時候，在使用上要特別注意。</p>
<figure>
    <img src="/images/blog/all-about-cbam-1/2-eu-ets.png" alt="全球規模最大的碳交易市場體系，歐盟碳排放交易市場（EU ETS）">
    <figcaption>全球規模最大的碳交易市場體系，歐盟碳排放交易市場（EU ETS）（<a href="https://www.investigate-europe.eu/en/2020/eu-emissions-trading-scheme-explained/">圖片來源</a>）</figcaption>
</figure>
<p>但問題是，一定會有企業排放太多，超過政府發放的碳權數量，那該怎麼辦呢？</p>
<p>這時候，這個必須超額排放的企業，就必須去碳交易市場上購買其他減碳表現比較優良的企業所「用剩的」碳權，來「合理化」自己的超額碳排放。</p>
<p>因此，減碳表現優良的企業不需要多負擔碳排的成本，甚至可以把碳權售出，成為額外的收入來源。直至現在（2023/07）EU ETS 市場上的碳權售價為每噸 92.310 歐元，相對於環保署可能制定的每噸 300 元台幣幾乎高了 10 倍。</p>
<p>除此之外，歐盟為了達成「<a href="https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets/emissions-cap-and-allowances_en">每年減碳 2.2%</a>」（phase 4: 2021~2030）的目標，免費的碳權分配額將會逐年減少，漸漸從免費發放轉變成拍賣。因此對於歐盟內的高碳排企業而言，「碳成本」非常高，而且只會越來越高。</p>
<p>企業自然會開始思考規避的方法。於是開始有企業到歐盟境外，勞動力便宜的國家設廠，然後再進口到歐盟內，藉此降低碳排。</p>
<p>這樣情況，實際上仍然有製程上的碳排放，但是在計算上就洩漏了，因此被稱為「碳洩漏」（carbon leakage），是指盤查上的漏網之魚，不是真的哪裡有二氧化碳漏氣了。</p>
<p>說完「碳洩漏」，CBAM 的由來就比較好懂了。</p>
<h2 id="cbam-carbon-leakage">CBAM 是為了預防「碳洩漏」？</h2>
<p>CBAM 全名是「碳邊境調整機制」（Carbon Border Adjustment Mechanism）。</p>
<p>CBAM 的設計目的是把進口產品的碳排量與歐盟內同類別的產品互相比較，並且要求進口商購買「CBAM 憑證」來抵換掉超出的排放量。</p>
<p>這樣的做法目的是要解決大量高碳排產品輸入境內的「碳洩漏」問題。除了歐洲企業到境外設廠再進口以外，他國生產的產品碳成本也相較歐盟企業還要低上許多，變相成為在地歐盟企業花費大量努力減碳，但是卻因此喪失國際競爭力。</p>
<p>因此 CBAM 實際意義是為了預防「碳洩漏」，也是一種平衡歐盟境內企業高昂的碳成本與境外企業低廉碳成本的立足點，達成公平競爭的手段。在台俗稱 CBAM 為「碳關稅」，雖然直觀好懂，但是也容易讓人產生歐盟反自由貿易的誤解，這點必須要釐清。</p>
<h2 id="cbam-schedule">CBAM 的上路時程</h2>
<p>以下是歐盟 CBAM 的時程：</p>
<p>2021 年 7 月 14 日 宣告。
2022 年 6 月 22 日再次公告， 
2023 年 5 月 10 日公布<a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">執行細項草案</a>
2023 年 5 月 17 日正式生效，
2023 年 10 月 1 日到 2025 年 12 月 31 日為過渡期，所有進口歐盟產品必須申報碳排放量。</p>
<p>而為了確保歐盟境內與進口貨品公平競爭，歐盟預計將於 2026 年 CBAM 正式收費後開始逐年減少免費 ETS 碳權配額，並且最後於 2034 年完全取消免費配額。</p>
<p>歐盟也預計在 2030 年左右，配合 EU ETS 的進程進行改革檢討，並將討論是否將間接排放納入計價範疇裡。</p>
<p>因此 CBAM 在生效之後，任何意圖與歐盟國家做生意進口的廠商，都將直接成為 EU ETS 遊戲規則的玩家之一，必須跟歐盟企業負擔接近的碳成本。</p>
<h2 id="cbam-scope">CBAM 究竟要「算誰的帳」？</h2>
<figure>
    <img src="/images/blog/all-about-cbam-1/3-cbam-scope.png" alt="CBAM 鎖定的管制商品究竟有哪些">
    <figcaption>CBAM 鎖定的管制商品（製圖：櫛構科技）</figcaption>
</figure>
<p>所以 CBAM 鎖定的管制商品究竟有哪些？</p>
<p>歐洲議會和理事會在 2023 年 5 月 10 日頒布了 <a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">CBAM 建立草案</a>， 根據草案細節我們目前能總結的是這樣：</p>
<ol>
<li><p>CBAM 目前主要鎖定的高碳排產品，如鋼鐵、水泥、鋁、肥料、電力以及氫氣等，且目前<a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">草案 Article 7.1 條</a>中註明，在 Annex II 的產品（鋼鐵、鋁製品、氫氣等）並不需要針對「外購電力」的部分進行申報，只需要針對「直接排放」來申報即可。</p>
</li>
<li><p>CBAM 目前仍然在草案階段，還有許多變動的可能。下一個階段可能規範的對象包括運輸業、有機化學、塑膠等。</p>
</li>
</ol>
<h2 id="cbam-how-to-inventory">CBAM 這筆帳該怎樣算？碳的部分</h2>
<p>在 2023 年 10 月 1 日正式實行後，進口商都需要申報產品的碳排量（還不用付錢，只要報就好）。</p>
<p>在針對產品碳排放計算方面，CBAM 碳排放的計算方式有點介於我們常見的 ISO 14067 碳足跡和 ISO 14064-1 溫室氣體盤查兩種方法之間，針對製程的「直接排放」（生產產品的製程中所產生的溫室氣體）與「間接排放」（外購電力所產生的溫室氣體排放）進行計算。</p>
<p>例如，CBAM 規範中將貨物分為「簡單貨物」（simple goods）與「複雜貨物」（complex goods）兩種計算方式。</p>
<p>「簡單貨物」是指製程中只加入了簡單的物料與燃料，且這些物料為零碳排含量。廠商必須計算該貨物在製程中的溫室氣體排放量，也就是，產品從公司生產出來到一出了大門，這段過程中總共排放了多少溫室氣體。</p>
<p>而「複雜貨物」則是必須將所有原料的碳含量都計算進去，有些類似碳足跡生命週期中的「原料、製程」這兩個階段的碳排放。</p>

<p>目前這個申報數字是由歐盟認可之在地機構來查證，未來是否可以開放授權台灣國家認可之機構進行查證，還在協商階段。</p>
<p>而假設，進口商對於某些貨品無法計算排放量，那可以由出口國提供相關貨品類別數據，或者由歐盟執委會選擇「預設值」來計算。</p>
<p>但這個預設值有可能會挺可觀的：由歐盟執委會選擇 EU ETS 列管貨品碳排表現中後段班（草案中的建議為表現最差的 10%，實際值未訂），再根據每國平均排放強度乘以一個加成係數 （pro portionately mark-up）來訂定。這個加成係數也尚未公布。</p>
<p>因此，如果廠商對於本身貨物無法進行完整的碳盤查，未來要負擔的碳成本可能會遠高於那些有辦法進行盤查、減量的競爭對手。</p>
<p>這門全新的「碳管理」領域，正在考驗企業大量數據收集與處理的挑戰，十分要求企業的「數據治理」能力。</p>
<p>且數位時代的調查也顯示，42% 的企業認為「缺乏先進工具」是進行完整碳盤查，永續轉型的一大門檻。櫛構科技以豐富資料科學背景團隊組成，致力於應用 AI 演算法建模協助企業制定數據驅動的永續策略，藉此落地「數據永續」的願景。</p>
<p>除了隨手關燈，我們可以<a href="https://combogic.com/">做更多</a>。</p>
<p>下一篇：<a href="./all-about-cbam-2">好好講 CBAM（2）：求進口商的心理陰影面積</a></p>
<h2 id="reference">參考資料</h2>
<p><a href="https://eur-lex.europa.eu/eli/reg/2023/956/oj">EUR-Lex - 32023R0956 - EN - EUR-Lex (europa.eu)</a></p>
<p><a href="https://www.whitecase.com/insight-alert/eu-agreement-carbon-border-adjustment-mechanism">The EU Agreement on a Carbon Border Adjustment Mechanism | White &amp; Case LLP (whitecase.com)</a></p>
<p><a href="https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets/emissions-cap-and-allowances_en">Emissions cap and allowances (europa.eu)</a></p>


