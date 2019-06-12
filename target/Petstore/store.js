import request from '@/plugins/axios'
export function getStoreInventory(){return request({url: 'http://petstore.swagger.io/v2/store/inventory',method:'get',params:{},}).then(res => {
		return res.data
	})}export function postStoreOrder(data){return request({url: 'http://petstore.swagger.io/v2/store/order',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getStoreOrderByOrderId(orderId,){return request({url: `http://petstore.swagger.io/v2/store/order/${orderId}`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function deleteStoreOrderByOrderId(orderId,){return request({url: `http://petstore.swagger.io/v2/store/order/${orderId}`,method:'delete',params:{},}).then(res => {
		return res.data
	})}