import Product from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'
import ViewProfile from './ViewProfile.vue'

export const routes = [
		{
			path: '',
			components: {
				default: Product
			}
		},
		{
			path: '/products/:productId',
			props: true,
			name: 'product',
			component: ViewProduct
		},
		{
			path: '/cart', 
			component: Cart, alias: '/shopping-cart'
		},
		{
			path: '/user/viewProfile',
			name: 'viewProfile',
			component: ViewProfile,
			meta: {
				isAuthRequired: true
			}
		},
		{
			path: '*',
			component: { template: '<h1>Page not found!</h1>'}
		}
	];