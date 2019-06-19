import request from '@/plugins/axios'

//host:api.nytimes.com/svc/books/v3

export function getReviewsByFormat(format,params,){
 return request({url: `http://api1/reviews.${format}`,method:'get',params,}).then(res => {
		return res.data
	})}
