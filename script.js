function handleHireMeClick() {
    // Replace this with your LinkedIn profile URL
    var linkedinUrl = "https://www.linkedin.com/in/pranav-shimpi-792147222/";

    // Open LinkedIn profile in a new tab
    window.open(linkedinUrl, "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
    const educationItem = document.getElementById('education');
    const experienceItem = document.getElementById('experience');
    const detailsContainer = document.getElementById('details');

    const educationDetails = `
        <div class="detail detail-higher-secondary">
            <p class="detail-title">HIGHER SECONDARY EDUCATION</p>
            <p class="detail-subtitle">Zulal Bhilajirao Patil College, Dhule</p>
            <p class="detail-year">2018 – 2020</p>
        </div>
        <div class="detail detail-secondary">
            <p class="detail-title">SECONDARY EDUCATION</p>
            <p class="detail-subtitle">Jai Hind High School, Dhule</p>
            <p class="detail-year">2012 – 2018</p>
        </div>
        <div class="detail detail-computer-engineering">
            <p class="detail-title">B.E IN COMPUTER ENGINEERING</p>
            <p class="detail-subtitle">K K Wagh Institute of Engineering<br>Education and Research, Nashik</p>
            <p class="detail-year">2020 – 2024</p>
        </div>
    `;

    const experienceDetails = `
        <div class="detail detail-full-stack-intern">
            <p class="detail-title">Full Stack Developer Intern</p>
            <p class="detail-subtitle">Bharat Intern</p>
            <p class="detail-year">2023</p>
        </div>
        <div class="detail detail-persistent-internship">
            <p class="detail-title">Persistent Martian Summer <br> Internship Program 2023</p>
            <p class="detail-subtitle">Persistent</p>
            <p class="detail-year">2023</p>
        </div>
        <div class="detail detail-android-developer">
            <p class="detail-title">Android Developer</p>
            <p class="detail-subtitle">Lumiverse Solutions<br>Cyber Security Company</p>
            <p class="detail-year">Present</p>
        </div>
    `;

    function updateDetails(content) {
        detailsContainer.innerHTML = content;
        const details = document.querySelectorAll('.detail');
        details.forEach(detail => {
            setTimeout(() => detail.classList.add('visible'), 50);
        });
    }

    educationItem.addEventListener('click', () => {
        educationItem.classList.add('active');
        experienceItem.classList.remove('active');
        updateDetails(educationDetails);
    });

    experienceItem.addEventListener('click', () => {
        experienceItem.classList.add('active');
        educationItem.classList.remove('active');
        updateDetails(experienceDetails);
    });
});


function openGmail() {
    var emailAddress = "shimpipranav78@gmail.com";
    var subject = "Subject goes here"; // Optional: You can set a subject for the email
    var body = "Write your message here"; // Optional: You can pre-fill the body of the email

    var mailtoLink = "mailto:" + emailAddress +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    // Open Gmail with mailto link
    window.location.href = "https://mail.google.com/mail/u/shimpipranav78@gmail.com" + mailtoLink; // Replace '0' with your Gmail account number


}

