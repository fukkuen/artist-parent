<script>
  import { stores } from '@sapper/app';
  import {t} from 'svelte-i18n'

  export let description;
  export let image;
  export let title;

  const { page } = stores();
</script>

<meta property="og:description" content="{description}">
<meta property="og:image" content="{image}">
<meta property="og:site_name" content={$t('site_title')}>
<meta property="og:title" content="{title}">
<meta property="og:type" content="article">
<meta property="og:url" content="https://artist-parent.vercel.app{$page.path}">
