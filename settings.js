// settings.js

// Toggle the visibility of a settings section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}

// Save settings (mock function for now)
function saveSettings(settingType) {
    alert(`${settingType} settings saved successfully!`);
}
