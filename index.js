const toggle = document.querySelector('input[type="checkbox"]');
const body = document.body;

// Get references to all elements you want to toggle
const nav = document.getElementById('nav');
const namedesc = document.getElementById('namedesc');
const pdes = document.getElementById('pdes');
const summary = document.getElementById('summary');
const osi = document.getElementById('osi');
const softw = document.getElementById('softw');
const calc = document.getElementById('calc');
const grade = document.getElementById('grade');
const calender = document.getElementById('calender');
const final = document.getElementById('final');
const cs = document.getElementById('cs');
const wd = document.getElementById('wd');
const skillsSection = document.getElementById('skills'); // Targeting the parent skills section
const skillParagraphs = document.querySelectorAll('#skill p'); // Targeting individual skill paragraphs

toggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    nav.classList.toggle('dark');
    namedesc.classList.toggle('dark');
    pdes.classList.toggle('dark');
    summary.classList.toggle('dark');
    osi.classList.toggle('dark');
    softw.classList.toggle('dark');
    calc.classList.toggle('dark');
    grade.classList.toggle('dark');
    calender.classList.toggle('dark');
    final.classList.toggle('dark');
    cs.classList.toggle('dark');
    wd.classList.toggle('dark');
    skillsSection.classList.toggle('dark'); // Toggle the dark class on the parent skills section

    // Loop through each skill paragraph and toggle the 'dark' class
    skillParagraphs.forEach(p => {
        p.classList.toggle('dark');
    });
});