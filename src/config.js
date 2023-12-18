var _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6InJhbSJ9.ZlRJryXSibFMHwtWEPLCqXNjS3NGD415Gub0lQPt474';
export const API_URL = 'http://127.0.0.1:8000/api/'
// const response = await axios.get(`http://127.0.0.1:8000/api/student/`);
export const TOKEN = _token


export const HEADERS = {
    
    Authorization: `${_token}`,
    'Content-Type': 'application/json',
};
