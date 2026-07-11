console.log("GigTrack: Scanning job list...");

const extractJobCards = () => {
    // Select all job cards in the list
    const cards = document.querySelectorAll(".job-card-container--clickable");
    const jobs = [];

    cards.forEach(card => {
        const titleElement = card.querySelector(".job-card-list__title--link");
        const companyElement = card.querySelector(".artdeco-entity-lockup__subtitle");
        
        if (titleElement) {
            jobs.push({
                title: titleElement.innerText.trim(),
                link: titleElement.href, // This gets the actual URL
                company: companyElement ? companyElement.innerText.trim() : "Unknown"
            });
        }
    });

    return jobs;
};

// Use MutationObserver to watch the list as you scroll or click
const observer = new MutationObserver(() => {
    const jobData = extractJobCards();
    console.log("Found", jobData.length, "jobs in list:", jobData);
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});