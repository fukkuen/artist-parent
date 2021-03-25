<script>
  import Header from "../components/header/index.svelte";
  import AppBar from "../components/header/app-bar.svelte";
  import TailwindCSS from "../components/tailwindcss.svelte";

  export let segment;
</script>

<TailwindCSS />

<main>
	<slot></slot>
</main>

<AppBar/>