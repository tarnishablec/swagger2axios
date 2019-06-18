import request from '@/plugins/axios'

//host:petstore.swagger.io/v2

export function getStoreInventory(){return request({url: `http://api1/store/inventory`,method:'get',data,}).then(res => {
		return res.data
	})}export function postStoreOrder(){return request({url: `http://api1/store/order`,method:'post',data,}).then(res => {
		return res.data
	})}export function getOrderByOrderIdFromStore(){return request({url: `http://api1/store/order/${orderId}`,method:'get',data,}).then(res => {
		return res.data
	})}export function deleteOrderByOrderIdFromStore(){return request({url: `http://api1/store/order/${orderId}`,method:'delete',data,}).then(res => {
		return res.data
	})}