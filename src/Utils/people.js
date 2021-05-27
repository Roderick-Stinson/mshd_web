import $http from './instance'

export const getPeopleInfo=() => {
    return $http.get('https://60af314c5b8c300017debe26.mockapi.io/people')
}
