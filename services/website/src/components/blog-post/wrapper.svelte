<script>
  import Footer from "../footer.svelte";
  import ImageZoom from "./image-zoom.svelte";
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
  let body_visible = false
  let related_posts_visible = false
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
    setTimeout(() => {
      body_visible = true
      related_posts_visible = true
    }, 500)
  })
</script>

<style>
  div.content :global(img) {
    cursor: zoom-in;
  }
</style>

<svelte:head>
  <link href="prism.css" rel="stylesheet" />
</svelte:head>

<Topbar/>

<div class="pb-10">
  <div class="bg-orange-500">
    <div class="max-w-screen-md mx-auto px-4 pt-16">
      {#if header_visible}
        <div transition:fly={{y:100, duration: 600}} class="mb-8 lg:text-center">
          <p class="text-orange-300 font-bold mb-2 text-p2">{this_post.metadata[`intro_title_${$locale}`]}</p>
          <h1 class="font-bold text-white text-t1 mb-4">{this_post.metadata[`title_${$locale}`]}</h1>
          <p class="text-orange-300 font-bold mb-2 text-sm">{this_post.metadata[`artist_name_${$locale}`]}</p>
        </div>
        <img src="blog-posts/{this_post.metadata.createdAt.split('T')[0]}-{this_post.metadata.slug}/cover.jpg"
             class="max-w-sm lg:max-w-md mx-auto w-full rounded-lg -mb-16"
             alt="cover"/>
      {/if}
    </div>
  </div>

  <div class="bg-orange-300 pt-8 md:pt-16">
    <div class="max-w-screen-lg mx-auto px-4 py-12">
      {#if body_visible}
        <div class="block sm:flex" transition:fly={{y:100, duration: 600}}>
          <div class="lg:col-span-4 text-orange-700 _prose" bind:this={body_el} use:show_post_body>
            <slot/>
          </div>
          <div class="my-4 sm:my-0 sm:w-60 flex-shrink-0 text-orange-500 sm:ml-8">
            <div class="mb-8">
              <p class="font-bold">{this_post.metadata[`artist_name_${$locale}`]}</p>
              <p>{this_post.metadata[`artist_bio_${$locale}`]}</p>
            </div>
            <a href="/blog/category/{this_post.metadata.category[0].slug}/1" class="block bg-orange-500 rounded text-white p-4">
              <div class="flex items-center leading-none">
                <p>{$t('work_category')}</p>
                <p class="text-t1 mono ml-2">{this_post.metadata.category[0].num}</p>
              </div>
              <p class="text-xs">{this_post.metadata.category[0][`name_${$locale}`]}</p>
            </a>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <ShareButton title="{this_post.metadata[`title_${$locale}`]}" text="分享出去吧！"/>
          <button class="bg-white bg-opacity-80 {bookmarked ? 'text-white' : 'text-orange-500'} font-bold w-full rounded h-10 flex items-center justify-center"
                  class:bg-orange-500={bookmarked}
                  on:click={onToggleBookmark}>
            {bookmarked ? 'bookmarked' : 'bookmark' }
          </button>
        </div>
      {/if}
    </div>
  </div>

  <div class="bg-orange-300 bg-opacity-50">
    {#if related_posts_visible}
    <div transition:fade class="max-w-screen-lg mx-auto p-4">
      <h3 class="text-center mb-4 text-orange-500 font-bold">{$t('other_works')}</h3>
      <div class="grid grid-cols-2 gap-2 sm:gap-2">
        {#each related_posts as p}
          <a href="/blog/{p.metadata.slug}" class="block bg-orange-400 text-orange-500 text-p3 rounded py-4 px-2">
            <p class="mono text-sm">{p.metadata.category[0].num}</p>
            <h3 class="text font-bold mb-4 leading-tight">{p.metadata[`intro_title_${$locale}`]}</h3>
            <p class="text-xs">{p.metadata[`artist_name_${$locale}`]}</p>
          </a>
        {/each}
      </div>
    </div>
    {/if}
  </div>
</div>