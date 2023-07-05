<template>
	<h1>{{$route.name}}</h1>
	<ul>
		<li v-for="id in 5" :key="id">
			<nuxt-link :to="`/blog/${id}`"><span>{{id}}</span></nuxt-link>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import meta from '~/utility/meta';

useHead(meta('blog', 'Bla-bla seo lorem'));
</script>