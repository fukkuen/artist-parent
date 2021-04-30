<script>
  import SeoHeadPost from "../seo/head-post.svelte";
  import Topbar from '../../components/header/top-bar.svelte'
  import Icon from '../../components/ui-elements/icon.svelte'
  import {locale, t} from 'svelte-i18n'
  import ShareButton from './_share_button.svelte'
  import {fade, fly} from 'svelte/transition'
  import {onMount} from 'svelte'
  import {bookmarkStore} from "../../stores";

  export let post;
  let this_post = post.post
  let related_posts = post.related_posts
  let body_el
  let header_visible = false
  $: {
    console.log($locale)
    if (body_el) show_post_body(body_el)
  }
  $: bookmarked = $bookmarkStore.includes(this_post.metadata.record_no)

  const show_post_body = (node) => {
    const hk_node = node.querySelector('.hk')
    const en_node = node.querySelector('.en')
    hk_node.style.display = $locale === 'hk' ? 'block' : 'none'
    en_node.style.display = $locale === 'en' ? 'block' : 'none'
  }

  const onToggleBookmark = () => {
    bookmarkStore.toggleBookmark(this_post.metadata.record_no)
  }

  onMount(() => {
    header_visible = true
  })
</script>

<SeoHeadPost post={this_post}/>

<Topbar/>

<div class="bg-cover bg-center" style="background-image: url('/images/pattern.jpg')">
  <div class="max-w-screen-md mx-auto px-4 pt-16">
    {#if header_visible}
      <div in:fly={{y:100, duration: 600}} class="mb-8 lg:text-center">
        <h1 class="font-bold text-black text-t1 mb-4">{this_post.metadata[`title_${$locale}`]}</h1>
        <p class="text-gray-400 font-bold mb-2 text-sm">{this_post.metadata.record_no}. {this_post.metadata[`artist_name_${$locale}`]}</p>
      </div>
      <img in:fade={{duration: 600}} src="blog-posts/{this_post.metadata.createdAt.split('T')[0]}-{this_post.metadata.slug}/cover.jpg"
           class="max-w-sm lg:max-w-md mx-auto w-full rounded-lg -mb-16"
           alt="cover"/>
    {/if}
  </div>
</div>

<div class="bg-gray-100 pt-8 md:pt-16">
  <div class="max-w-screen-lg mx-auto px-4 py-12">
    <div class="block sm:flex mb-4 sm:mb-12">
      <div class="lg:col-span-4 text-gray-700 _prose leading-loose text sm:text-p2 w-full" bind:this={body_el} use:show_post_body>
        <slot/>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-8 sm:w-60 flex-shrink-0 text-gray-500">
        <div class="mb-8">
          <p class="font-bold">{this_post.metadata[`artist_name_${$locale}`]}</p>
          <p class="text-sm">{this_post.metadata[`artist_bio_${$locale}`]}</p>
        </div>
        <a href="/blog/category/{this_post.metadata.category[0].slug}/1" class="block bg-white border border-gray-300 hover:text-red-500 rounded p-4">
          <div class="flex items-center leading-none mb-2">
            <p class="text-sm mt-2">{$t('work_category')}</p>
            <p class="text-t1 mono ml-2 leading-none">{this_post.metadata.category[0].num}</p>
          </div>
          <p class="text-xs">{this_post.metadata.category[0][`name_${$locale}`]}</p>
        </a>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-4">
      <ShareButton title="{this_post.metadata[`title_${$locale}`]}" text="分享出去吧！"/>
      <button class="shadow-inner border border-gray-300 hover:border-red-500 {bookmarked ? 'text-red-500' : 'text-gray-500'} bg-white font-bold w-full rounded h-10 flex items-center justify-center"
              on:click={onToggleBookmark}>
        <Icon name="love" className="w-4"/>
        <span class="ml-2">
            {$t(bookmarked ? 'bookmarked' : 'bookmark')}
          </span>
      </button>
    </div>
  </div>
</div>

<div class="bg-gray-200">
  <div class="max-w-screen-lg mx-auto px-4 py-8 sm:py-8">
    <h3 class="text-center mb-2 sm:mb-4 text sm:text-p2 text-gray-600 font-bold">{$t('other_works')}</h3>
    <div class="grid grid-cols-2 gap-2 sm:gap-4">
      {#each related_posts as p}
        <a href="/blog/{p.metadata.slug}" class="group block bg-white hover:shadow text-gray-500 text-p3 rounded py-4 px-2 sm:py-4 sm:px-4">
          <p class="mono text-sm">{p.metadata.category[0].num}</p>
          <h3 class="text sm:text-p2 font-bold mb-4 leading-tight group-hover:text-red-500">{p.metadata[`title_${$locale}`]}</h3>
          <p class="text-xs">{p.metadata.record_no}. {p.metadata[`artist_name_${$locale}`]}</p>
        </a>
      {/each}
    </div>
  </div>
</div>