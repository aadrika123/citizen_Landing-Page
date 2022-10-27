import React from 'react'

const baseUrl = "http://192.168.0.16:8000/";
export const TRADE =
{
    UPDATE_API_LIST:baseUrl+"api/edit-api/", //requires an id param at the end
    GET_API_BY_ID: baseUrl + "api/get-api-by-id/", //requires an id param at the end
    SAVE_API_LIST: baseUrl + "api/save-api",
    GET_API_LIST: baseUrl + "api/get-all-apis",
    MASTER_DATA_API: baseUrl + "api/trade/apply/", //requires an STRING param at the end
    VALIDATE_HOLDING: baseUrl + "api/trade/getPropertyByHolding", //request payload is holding no
    GET_CHARGE: baseUrl + "api/trade/getCharge",   // request payload is applicationType, areaSqft, natureOfBusiness[id],tocStatus,
    SEARCH_LICENSE_FOR_APPLY: baseUrl + "api/trade/searchLicense" // provide license number as the post data with application type

}
// let token = JSON.parse(window.localStorage.getItem('token'))
let token = window.localStorage.getItem('token')
export const HEADER = {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
    }
}


