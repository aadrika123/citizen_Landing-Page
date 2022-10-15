export default function CitizenApplyApiList() {
    let baseUrl = "http://192.168.0.166"
    let apiList = {
        //1
        api_safInboxList: `${baseUrl}/api/saf/inbox`,
        //2
        api_getSafDetailsById: `${baseUrl}/api/saf/details`,
        //3
        api_getMasterData: `${baseUrl}/api/property/saf/apply`,
        //4
        api_postNewAssissment: `${baseUrl}/api/property/saf/apply`
    }

    return apiList
}