<template>
	<header class="menu">
		<nav>
			<nuxt-link v-for="(l, i) in routes" :key="i" :to="l.link">
				<span>{{l.name}}</span>
			</nuxt-link>
		</nav>
		<button @click.prevent="singIn">auth</button>
	</header>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';

const routes = [{
	name: 'home',
	link: '/'
},{
	name: 'contact',
	link: '/contact'
},{
	name: 'blog',
	link: '/blog'
}]
const userStore = useAuthStore();


const config = useRuntimeConfig();
const REQ = `/api/login`;
const singIn = async () => {
	await userStore.singIn(REQ, {email:'email@test.com', password:'Test-123'});
};
</script>

<style lang="scss" scoped>
.menu{
	display: flex;
	justify-content: space-between;
}
nav{
	display: flex;
	a{
		margin-right: 10px;
	}
}
</style>