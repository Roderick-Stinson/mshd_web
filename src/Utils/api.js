import $http from './instance'

export const getPeopleInfo=() => {
    return $http.get('https://www.fastmock.site/mock/8ee827c64313195a1f6f9aa99cac6f6d/mshd/DeathStatistics')
}

export const getInjuredPeopleInfo = () => {
    return $http.get('https://www.fastmock.site/mock/8ee827c64313195a1f6f9aa99cac6f6d/mshd/InjuredStatistics')
}

