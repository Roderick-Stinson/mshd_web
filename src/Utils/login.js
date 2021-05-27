import $http from './instance'

export const login=(data) => {
    return $http.post('/api/login', null, {params: data})
}
