<script>
	import {t} from 'svelte-i18n'
	import Icon from '../../components/ui-elements/icon.svelte'
	const posts = [
		{
			title: '從1960到到現代的指令藝術',
			author: '許寶'
		},
		{
			title: '父母子女bababa',
			author: 'stella方'
		}
	]
</script>

<div class="bg-orange-500 text-white">
	<div class="max-w-screen-lg mx-auto px-8 py-16">
		<h1 class="text-p3 font-bold">{$t('preface_title')} 2</h1>
	</div>
</div>

<div class="bg-orange-300 bg-opacity-30">
	<div class="max-w-screen-md mx-auto px-2 py-4 md:py-8">
		<div class="text text-orange-700 prose">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis dicta doloribus ea earum, error eum eveniet facilis fugiat, ipsam maxime, neque odit optio quibusdam quod repellendus sit tenetur?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis dicta doloribus ea earum, error eum eveniet facilis fugiat, ipsam maxime, neque odit optio quibusdam quod repellendus sit tenetur?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis dicta doloribus ea earum, error eum eveniet facilis fugiat, ipsam maxime, neque odit optio quibusdam quod repellendus sit tenetur?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis dicta doloribus ea earum, error eum eveniet facilis fugiat, ipsam maxime, neque odit optio quibusdam quod repellendus sit tenetur?</p>
		</div>
		<div class="h-0.5 bg-orange-300 my-4"></div>
		<div class="text-orange-500 font-bold">
			<p>羅玉梅，又係藝術家，又係阿媽，仲係編輯。</p>
			<p>2021年1月15日</p>
		</div>
	</div>
</div>

<div class="bg-orange-300 bg-opacity-10">
	<div class="max-w-screen-md mx-auto px-4 sm:px-8 py-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
			{#each posts as p}
				<div class="bg-orange-300 bg-opacity-30 hover:bg-opacity-60 rounded p-4 text-orange-500 flex flex-col">
					<p>序言</p>
					<h3 class="text-p3 font-bold mb-8">{p.title}</h3>
					<div class="flex items-center">
						<p class="mt-auto">{p.author}</p>
						<div class="flex-1"></div>
						<Icon className="w-4" name="right"/>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.prose p {
		margin: 1em 0;
	}
</style>