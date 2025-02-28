function getUserInfo() {
    let name = prompt("Enter your name:");
    while (!name) {
    name = prompt("Name cannot be empty. Please enter your name:");
    }
            
    let profession = prompt("Enter your profession:");
    while (!profession) {
    profession = prompt("Profession cannot be empty. Please enter your profession:");
    }
            
    let about = prompt("Write a short bio about yourself:");
    while (!about) {
    about = prompt("Bio cannot be empty. Please enter something about yourself:");
    }
            
    let skills = prompt("Enter your skills separated by commas:");
    while (!skills) {
        skills = prompt("Skills cannot be empty. Please enter at least one skill:");
    }
            
    let contact = prompt("Enter your contact email:");
    while (!contact) {
        contact = prompt("Contact cannot be empty. Please enter your contact email:");
    }
            
    let imageUrl = prompt("Enter the URL of your profile picture:");
    while (!imageUrl) {
        imageUrl = prompt("Image URL cannot be empty. Please enter a valid URL:");
    }
            
    alert(`Name: ${name}\nProfession: ${profession}\nAbout: ${about}\nSkills: ${skills}\nContact: ${contact}\nProfile Picture: ${imageUrl}`);
    console.log("User Info:", { name, profession, about, skills, contact, imageUrl });
            
    document.getElementById("name").textContent = name;
    document.getElementById("profession").textContent = profession;
    document.getElementById("about").textContent = about;
    document.getElementById("contact-info").textContent = contact;
    document.getElementById("profile-pic").src = imageUrl;
            
    let skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = "";
    skills.split(',').forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}
        
function updateBio() {
    getUserInfo();
}
        
window.onload = getUserInfo;