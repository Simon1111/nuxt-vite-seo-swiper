<template>
	<div>
		<h1>{{$route.name}}</h1>
		<div class="sections">
			<section v-for="(v, i) in sections" :key="i" class="section">
				<div class="section-slider">
					<Swiper
						@afterInit="afterInitHandler"
						@swiper="onSwiper"
					>
						<SwiperSlide v-for="(s, index) in v.slider" :key="index" class="section-slider--block">
							<img v-if="s.type === 'image'" :src="s.path" alt="" />
							<video
								v-else
								:src="s.path"
								poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
								width="620"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<article><p>{{ v.text }}</p></article>
			</section>
		</div>
	</div>
</template>

<script lang="ts" setup>
import meta from '~/utility/meta';

useHead(meta('home', 'Bla-bla seo lorem'));

const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ad cumque? Explicabo hic alias, omnis, voluptate doloribus, tempore nam quibusdam laboriosam aut nihil expedita quasi maiores. Fugiat dolore sed ullam.";

const sections = [
	{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			},
			{
				type: 'video',
				path: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
			},
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			},
			{
				type: 'video',
				path: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
			}
		]
	},{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			},
			{
				type: 'video',
				path: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
			},
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			}
		]
	},{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			}
		]
	},{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			},
			{
				type: 'video',
				path: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
			}
		]
	},{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			}
		]
	},{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			},
			{
				type: 'video',
				path: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
			}
		]
	},{
		text,
		slider: [
			{
				type: 'image',
				path: 'https://like-list.com/default.jpg'
			}
		]
}];

const getVideos = (nodes, activeClass?: string) => {
	return nodes.map((e) => e.children[0]).filter((e) => {
		if (activeClass) {
			return e.localName==='video' && [...e.parentNode.classList].includes(activeClass);
		}
		return e.localName==='video';
	})
};


const startActiveVideos = (videos) => {
	videos.forEach(async function(video: HTMLVideoElement) {
		try {
			if (video.paused) {
				await video.play();
			}
		}
		catch(err) {
			console.error(err);
		}
	});
}

const afterInitHandler = (swiper) => {
	try {
		const options = {
			root: null,
			rootMargin: "0px",
		};
		let observer = new IntersectionObserver(
			function(entries, observer) {
				let viewportIntersection = entries[0];
				let videos = getVideos(swiper.slides, 'swiper-slide-active');

				// start playing video in the active slide
				if (viewportIntersection.isIntersecting) {
					startActiveVideos(videos);
				}
				// stop playing video in the active slide
				else {
					videos.forEach(function(video: HTMLVideoElement) {
						video.pause();
					});
				}
			},
			options
		);
		observer.observe(swiper.el);
	}
	catch(err) {
		console.error(err);
	}
};

const onSwiper = (s) => {
	s.on('sliderFirstMove', (swiper) => startActiveVideos(getVideos(swiper.slides, 'swiper-slide-active')));

	s.on('slideChangeTransitionEnd', function (swiper) {
		getVideos(swiper.slides).forEach(function(video: HTMLVideoElement) {
			video.pause();
		});

		startActiveVideos(getVideos(swiper.slides, 'swiper-slide-active'))
	});
};
</script>

<style lang="scss" scoped>
.sections{
	display: flex;
	flex-direction: column;
	width: 100%;
}
.section{
	display: flex;
	article{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		font-size: 24px;
		line-height: 1.5;
	}
	&-slider{
		max-width: 50%;
		min-width: 50%;
		&--block{
			justify-content: center;
			display: flex;
		}
	}
	&:nth-child(odd){
		flex-direction: row-reverse;
	}
}
</style>