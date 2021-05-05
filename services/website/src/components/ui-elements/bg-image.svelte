<script>
	export let src
	export let pt = 3/4*100

	const onLazyLoad = node => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					node.style.backgroundImage = `url(${src})`
					observer.disconnect();
				}
			});
		});

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<div style="padding-top:56%;" class="relative overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-no-repeat bg-center" use:onLazyLoad></div>
</div>