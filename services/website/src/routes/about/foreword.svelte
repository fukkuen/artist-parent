<script>
	import {locale} from 'svelte-i18n'
	import Wrapper from "./_preface_wrapper.svelte"
</script>

<Wrapper slug="foreword">
	{#if $locale === 'hk'}
		<h2>《事件譜之又係藝術家又係阿爸阿媽》搞邊科？</h2>

		<p>獲西九文化區管理局「藝術紓困計劃 2020」資助，《事件譜之又係藝術家又係阿爸阿媽》邀請四
			十七位已為人父母的藝術家，以「指令藝術」（instructional art）的創作模式，分享與子女之
			間的日常交流。簡單的閒話家常、陪伴、同行與觀察；邊個話阿爸阿媽一定要好努力㗎？向孩子
			撒謊？唔係呀嘛！做咩要留住屁股嘅溫度啫？指令？NO！對調角色才是真正的遊戲。</p>

		<h2>咩嘢係指令藝術？</h2>

		<p>指令藝術於普羅大眾而言可能是相對陌生的藝術類型，它是觀念藝術(conceptual art) 的一種，表
			現的是一個想法，而非實體藝術品。最廣為人知的是小野洋子(Yoko Ono) 在 1964 年出版的《葡
			萄柚:一本指令和圖畫書》(Grapefruit: A Book of Instructions and Drawings)。「指令」有可能是
			一個容易讓人誤會的字眼，是要向誰發出指令嗎?箇中有一種從屬關係嗎?指令藝術其實是一種具
			有開放性與參與性的藝術形式，通過執行， 讀者可以理解，甚至自行演繹。美術史家一般將「指
			令藝術」置於「事件譜」(Event Scores)的系譜底下，意指如樂譜般的行動事件。例如 George
			Brecht 的《滴漏音樂》（Drip Music），從一紙概念到執行，這具體的行動既可以視之為行為表
			演、實驗音樂，又或者是動態雕塑。</p>

		<p>除了網頁版，《事件譜之又係藝術家又係阿爸阿媽》更有限量發行的實體書：</p>
		<img src="images/book.jpg" alt="jpg">
		<ul>
			<li>18 x 18 厘米，平裝</li>
			<li>內文：128頁，彩色柯式印刷</li>
			<li>封面：彩色柯式印刷</li>
			<li>彩蛋：附神祕指令，讀者可以自由發揮</li>
			<li>中英對照</li>
			<li>印量500本，香港印刷</li>
			<li>ISBN：978-988-75731-0-4</li>
			<li>定價港幣一百八十元</li>
		</ul>
		<p>FB/IG @artist.parents</p>
		<p>如欲購買歡迎到以下的零售商查詢：艺鵠，一拳書館</p>

	{:else if $locale === 'en'}
		<h2>Event Scores by Artist-Parents what’s up?</h2>
		<p>Supported by the ‘Arts Relief Scheme 2020’ of the West Kowloon Cultural District Authority,
			Event Scores by Artist-Parents invited 47 artists who are already parents to share the exchange
			with their children in the creative mode of instructional art. Simple chit- chat, companionship,
			engagement or observation; who says dad and mum must work hard? Lying to children? No
			way! What does it mean to keep the warmth of the buttocks? Instruction? NO! the real game lies
			in the role swap.</p>

		<h2>What is Instructional art?</h2>
		<p>Instructional art may be a relatively unfamiliar form of art to the general public. Rather than a
			piece of physical artwork, it is a type of conceptual art that expresses an idea. The most widely
			known example is Grapefruit: A Book of Instructions and Drawings by Yoko Ono published in
			1964. ‘Instructional’ is perhaps a misnomer. Are we giving instructions to someone? Is there a
			kind of subordination within? Instructional art is actually an open and participatory art form.
			Through execution, readers can understand and even create their own experience. Art historians
			generally place instructional art under the genealogy of ‘Event Scores’, which refers to an action-
			based event. For example, George Brecht’s Drip Music, from a concept on paper to execution,
			comprises specific actions that can be regarded as performance art, experimental music, or a
			moving sculpture.</p>

		<p>Besides web version, Event Scores by Artist-Parents has published book copies:</p>
		<img src="images/book.jpg" alt="jpg">
		<ul>
			<li>18 x 18 cm, paperback</li>
			<li>Text: 128 pages, color offset printing</li>
			<li>Cover: color offset printing</li>
			<li>Bonus: with mysterious instruction, readers can improvise</li>
			<li>in both Chinese and English</li>
			<li>500 copies, printed in Hong Kong</li>
			<li>ISBN: 978-988-75731-0-4</li>
			<li>Price: HK$180</li>
		</ul>

		<p>FB / IG @ artist.parents</p>

		<p>Please visit the following retailers for purchase and inquiries: ACO, Book Punch</p>
	{/if}
</Wrapper>
