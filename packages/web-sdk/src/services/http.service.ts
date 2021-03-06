import { http } from './http';

class HttpService {
    get(url: string) {
        try {
            return new Promise((resolve, reject) => {
                http.get(url).then(({ data }) => {
                    resolve(data)
                }).catch((error) => {
                    reject(error)
                });
            });
        } catch (error) {
            console.error(error);
        }
    }
    post(payload: object, url: string) {
        try {
            return new Promise((resolve, reject) => {
                http.post(url, payload).then(({ data }) => {
                    resolve(data);
                }).catch((error) => {
                    reject(error);
                });
            });
        } catch (error) {
            console.error(error);
        }
    }
};

export const $httpService = new HttpService();