<script>
	import {t, locale} from 'svelte-i18n'
</script>


<div class="bg-contain bg-right bg-no-repeat border-b border-gray-300" style="background-image: url('images/banner-bg-2.jpg')">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('how_to_use_title')}</h1>
	</div>
</div>

<div class="max-w-screen-lg mx-auto py-16 px-4 sm:px-8 prose">
	{#if $locale === 'hk'}
		<h2>如何用此PWA網頁</h2>
		<p>你可以把此網站，在手機中儲存為APP書籤形式，方便隨時打開手機便用到。方法如下：</p>

		<div class="mb-4">
			<div class="border-b-2 border-gray-300 inline-block">iOS 用戶</div>
			<ul>
				<li>手機打開safari 瀏覽器，輸入網址 rooftopinstitute.org/artistparents</li>
				<li>按分享</li>
				<li>往下拉，按「添加到主屏幕」</li>
				<li>完成</li>
			</ul>
			<img src="images/ios-add-to-home-screen-hk.gif" alt="gif">
		</div>

		<div class="mb-4">
			<div class="border-b-2 border-gray-300 inline-block">Android 用戶</div>
			<ul>
				<li>手機打開Chrome 瀏覽器，輸入網址 rooftopinstitute.org/artistparents</li>
				<li>按分享</li>
				<li>往下拉，按「新增至主螢幕 」</li>
				<li>完成</li>
			</ul>
			<img src="images/android-add-to-home-screen-hk.gif" alt="gif">
		</div>
	{:else}
		<h2>How to use this PWA web page：</h2>
		<p>You can save this website as an APP bookmark in your phone, so that you can easily access it
			on your phone. Methods as below:</p>
		<div class="mb-4">
			<div class="inline-block border-b-2 border-gray-300">For iOS users</div>
			<ul>
				<li>Open the safari browser on the phone, and type “rooftopinstitute.org/artistparents”</li>
				<li>Press “to share”</li>
				<li>Scroll down and press &quot;Add to Home Screen”</li>
				<li>Done</li>
			</ul>
			<img src="images/ios-add-to-home-screen-en.gif" alt="gif">
		</div>

		<div class="mb-4">
			<div class="inline-block border-b-2 border-gray-300">For Android users</div>
			<ul>
				<li>Open the Chrome browser on the phone, and type “rooftopinstitute.org/artistparents”</li>
				<li>Press “to share”</li>
				<li>Scroll down and press "Add to Home Screen”</li>
				<li>Done</li>
			</ul>
			<img src="images/android-add-to-home-screen-en.gif" alt="gif">
		</div>
	{/if}
</div>
