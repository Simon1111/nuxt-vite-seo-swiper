<template>
	<!-- nuxt indicator work incorect -->
	<div class="layout">
		<div class="top">
			<Header />
			<main class="main">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
	.top{
		min-height: calc(100.05vh - 80px);
	}
</style>