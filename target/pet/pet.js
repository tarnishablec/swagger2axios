import request from '@/plugins/axios'

//host:petstore.swagger.io/v2

export function postPet(data){return request({url: 'http://api1/pet',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function putPet(data){return request({url: 'http://api1/pet',method:'put',data,params:{},}).then(res => {
		return res.data
	})}export function getPetFindByStatus(status,){return request({url: 'http://api1/pet/findByStatus',method:'get',params:{status,},}).then(res => {
		return res.data
	})}export function getPetFindByTags(tags,){return request({url: 'http://api1/pet/findByTags',method:'get',params:{tags,},}).then(res => {
		return res.data
	})}export function getPetByPetId(petId,){return request({url: `http://api1/pet/${petId}`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function postPetByPetId(petId,){return request({url: `http://api1/pet/${petId}`,method:'post',params:{},}).then(res => {
		return res.data
	})}export function deletePetByPetId(petId,){return request({url: `http://api1/pet/${petId}`,method:'delete',params:{},}).then(res => {
		return res.data
	})}export function postUploadImageFromPetByPetId(petId,){return request({url: `http://api1/pet/${petId}/uploadImage`,method:'post',params:{},}).then(res => {
		return res.data
	})}