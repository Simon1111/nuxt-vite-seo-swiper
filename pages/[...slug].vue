<template>
	<div class="container container-page">
		<h1 class="container-page--title h0">Error 404</h1>
		<p>Page Not Found: {{ $route.fullPath }}</p>
	</div>
</template>

<script setup>
	setResponseStatus(404)
</script>