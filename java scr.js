// Example: Dynamic update of skills list
const skillsList = document.querySelector('#skills ul');

// Add new skill to the list
function addSkill(skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
}

// Example: Interactive button to add a new skill
const addSkillButton = document.querySelector('#add-skill-button');
addSkillButton.addEventListener('click', function() {
    
   
});
