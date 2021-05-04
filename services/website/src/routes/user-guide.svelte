<script>
	import {t, locale} from 'svelte-i18n'
</script>


<div class="bg-cover bg-center border-b border-gray-300" style="background-image: url('/images/pattern.jpg')">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('how_to_use_title')}</h1>
	</div>
</div>

<div class="max-w-screen-lg mx-auto py-16 px-4 sm:px-8">
	{#if $locale === 'hk'}
		<h2>如何用此PWA網頁</h2>
		<p>你可以把此網站，在手機中儲存為APP書籤形式，方便隨時打開手機便用到。</p>
		<p>方法如下：</p>

		iOS 用戶
		 手機打開safari 瀏覽器
		 輸入網址 rooftopinstitute.org/artistparents
		 按分享
		 往下拉，按「添加到主屏幕Add to Home Screen」
		 完成
		手機桌面會顯示 “LOGO”
		示範短片：

		Android 用戶
		 手機打開Chrome 瀏覽器
		 按分享
		 往下拉，按「添加到主屏幕Add to Home Screen」
		 完成
		手機桌面會顯示 “LOGO”
		示範短片：
	{:else}
	{/if}


	How to use this PWA web page：
	You can save this website as an APP bookmark in your phone, so that you can easily access it
	on your phone.
	Methods as below:
	For iOS users
	• Open the safari browser on the phone
	• Press “to share”
	• Scroll down and press &quot;Add to home screen”
	• Done
	The phone desktop will display &quot;LOGO&quot;
	Demo video:

	For Android users

	• Open the Chrome browser on the phone
	• Press “to share”
	• Scroll down and press &quot;Add to home screen”
	• Done
	The phone desktop will display &quot;LOGO&quot;
	Demo video:
</div>
