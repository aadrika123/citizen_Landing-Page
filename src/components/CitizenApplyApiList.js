export default function CitizenApplyApiList() {
    let baseUrl = "http://192.168.0.16:8000"
    let apiList = {
        //1
        api_safInboxList: `${baseUrl}/api/saf/inbox`,
        //2
        api_getSafDetailsById: `${baseUrl}/api/saf/details`,
        //3
        api_getMasterData: `${baseUrl}/api/property/saf/master-saf`,
        //4
        api_postNewAssissment: `${baseUrl}/api/property/saf/apply`,
        //5
        api_getProfileDetails: `${baseUrl}/api/my-profile-details`,
        //6
        api_EditMyProfile: `${baseUrl}/api/edit-my-profile`,
        //7
         api_getAllUlb: `${baseUrl}/api/get-all-ulb`,
        //login
         api_citizenLogin: `${baseUrl}/api/login`,
        //7
         api_citizenRegister: `${baseUrl}/api/citizen-register`
    }

    return apiList
}