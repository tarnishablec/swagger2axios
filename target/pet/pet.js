import request from '@/plugins/axios'

//host:petstore.swagger.io/v2

export function postPet(){return request({url: `http://api1/pet`,method:'post',data,}).then(res => {
		return res.data
	})}export function putPet(){return request({url: `http://api1/pet`,method:'put',data,}).then(res => {
		return res.data
	})}export function getPetFindByStatus(){return request({url: `http://api1/pet/findByStatus`,method:'get',data,}).then(res => {
		return res.data
	})}export function getPetFindByTags(){return request({url: `http://api1/pet/findByTags`,method:'get',data,}).then(res => {
		return res.data
	})}export function getPetByPetId(){return request({url: `http://api1/pet/${petId}`,method:'get',data,}).then(res => {
		return res.data
	})}export function postPetByPetId(){return request({url: `http://api1/pet/${petId}`,method:'post',data,}).then(res => {
		return res.data
	})}export function deletePetByPetId(){return request({url: `http://api1/pet/${petId}`,method:'delete',data,}).then(res => {
		return res.data
	})}export function postUploadImageFromPetByPetId(){return request({url: `http://api1/pet/${petId}/uploadImage`,method:'post',data,}).then(res => {
		return res.data
	})}