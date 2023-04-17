window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://stephenphamgetresumecounter.azurewebsites.net/api/GetResumeCounter?code=Iz_tw9h2Ghy2U9zcIXIGVrIfP-_CbGqEh-G2fxUpuphsAzFu0qIfgg=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter'; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}