console.log("Script Loading .....")




const interval = setInterval(()=>{
    const titleElement = document.querySelector(".job-details-jobs-unified-top-card__job-title h1 a")
    
    const companyName = document.querySelector(".job-details-jobs-unified-top-card__company-name a")
    const jobPreferences = document.querySelectorAll(".job-details-fit-level-preferences button")
    const detailList = document.querySelectorAll("#job-details ul li")
   
    if (titleElement && companyName && jobPreferences.length > 0){
         let jobDetails = {}
    if(detailList.length > 1){
    jobDetails = {
        role: detailList[0]?.innerText.trim() || "",
        location: detailList[1]?.innerText.trim() || "",
        jobType: detailList[2]?.innerText.trim() || "",
        salary: detailList[3]?.innerText.trim() || ""
    };
    
}
    console.log("Details", jobDetails)
    
     let preferencesList = [];
    if (jobPreferences){
   
    for (const Preference of jobPreferences){
        preferencesList.push(Preference.innerText); 
    }
    console.log(preferencesList)
    }
   
    
    const jobUrl = window.location.href;

    const job = {
        title:titleElement.innerText,
        company:companyName.innerText,
        jobPreferences: preferencesList,
        details:jobDetails,
        url:jobUrl
    }
    console.log(job)
    clearInterval(interval)
    }else {
        console.log("Waiting for Page")
    }
    
   
},2000);