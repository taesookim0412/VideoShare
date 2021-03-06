import axios, {AxiosResponse} from "axios";
import {VideoDataResponse} from "./../Videos/VideoInterfaces";

export function getOneVideoFromAPI(id: string){
    return new Promise<AxiosResponse<VideoDataResponse>>((resolve) => {
        axios.get(`/api/video/one/${id}`).then((data:AxiosResponse<VideoDataResponse>) =>{
            resolve(data)
        })
    })
}