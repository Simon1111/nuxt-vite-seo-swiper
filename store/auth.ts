import { defineStore } from 'pinia';
import { HEADERS as headers } from '~/common/constants';
import { fetchWithCookie } from '~/composables/fetch';

interface MODEL_BODY { } // your model

// it is assumed that authorization will use http_only

export const useAuthStore = defineStore('auth-store', {
	state: () => ({
		isAuth: <boolean>false,
		user: {}
	}),
	actions: {
		singIn: async function(req: string, body: MODEL_BODY) {
			try {
				const { data } = await useFetch(req, {
					method: 'POST',
					headers,
					body: JSON.stringify(body)
				});
				console.log(data)
				await this.getUser();
			} catch(err) {
				console.error(err);
			}
		},
		update: async function(req: string, body: MODEL_BODY) {
			// ..any operations
			const { data } = await useFetch(req, {
				method: 'POST',
				headers,
				body: JSON.stringify(body)
			});
			console.log(data);
			this.isAuth = true;
		},
		getUser: async function(url?: string|undefined) {
			const event = useRequestEvent();
			const result = await fetchWithCookie(event, `/api/user`);
			console.log(result);
		},
		singOut: function() {
			this.isAuth = false;
		},
	}
})