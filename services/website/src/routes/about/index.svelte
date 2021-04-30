<script>
	import {t, locale} from 'svelte-i18n'
	import {preface_store} from "../../stores";
	import Icon from '../../components/ui-elements/icon.svelte'
</script>

<div class="bg-cover bg-center border-b border-gray-300" style="background-image: url('/images/pattern.jpg')">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('about')}</h1>
	</div>
</div>

<div class="bg-gray-200">
	<div class="max-w-screen-lg mx-auto px-4 sm:px-8 py-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
			{#each $preface_store as p}
				<a href="/about/{p.slug}" class="bg-white shadow rounded p-4 flex flex-col border border-gray-100 hover:border-gray-300">
					<h3 class="text font-bold mb-8 leading-tight">{p[`name_${$locale}`]}</h3>
					<div class="flex items-center text-sm">
						<p class="mt-auto">{p[`author_${$locale}`]}</p>
						<div class="flex-1"></div>
						<Icon className="w-4" name="right"/>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>