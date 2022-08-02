import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: (_page, _limit=2)=> axiosService.get(urls.posts, {
        params: {
            _start: (_page - 1) * _limit,
            _limit
        }}),
    getById: (id)=> axiosService.get(`${urls.posts}/${id}`),
    getByUserId: (id, _page, _limit=2)=> axiosService.get(`${urls.users}/${id}/posts`, {
        params: {
            _start: (_page - 1) * _limit,
            _limit
        }})
}

export {
    postService
}