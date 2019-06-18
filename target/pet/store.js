import request from '@/plugins/axios'

//host:petstore.swagger.io/v2

export function getStoreInventory(){return request({url: `http://api1/store/inventory`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function postStoreOrder(data){return request({url: `http://api1/store/order`,method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getOrderByOrderIdFromStore(orderId,){return request({url: `http://api1/store/order/${orderId}`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function deleteOrderByOrderIdFromStore(orderId,){return request({url: `http://api1/store/order/${orderId}`,method:'delete',params:{},}).then(res => {
		return res.data
	})}