import $http from './instance'

export const getCarInfo = (id) => {
    return $http.get('/api/car/' + id)
}

export const getImg = (path) => {
    return $http.get('/api/' + path, {responseType: 'blob'})
}