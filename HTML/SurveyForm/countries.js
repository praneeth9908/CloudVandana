const countries = ['Afghanistan', 'Åland (Finland)', 'Albania', 'Algeria', 'American Samoa (US)', 'Andorra', 'Angola', 'Anguilla (BOT)', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Artsakh', 'Aruba (Netherlands)', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda (BOT)', 'Bhutan', 'Bolivia', 'Bonaire (Netherlands)', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands (BOT)', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands (BOT)', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island (Australia)', 'Cocos (Keeling) Islands (Australia)', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Curaçao (Netherlands)', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'DR Congo', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Falkland Islands (BOT)', 'Faroe Islands (Denmark)', 'Fiji', 'Finland', 'France', 'French Guiana (France)', 'French Polynesia (France)', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar (BOT)', 'Greece', 'Greenland (Denmark)', 'Grenada', 'Guadeloupe (France)', 'Guam (US)', 'Guatemala', 'Guernsey (Crown Dependency)', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man (Crown Dependency)', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jersey (Crown Dependency)', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique (France)', 'Mauritania', 'Mauritius', 'Mayotte (France)', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat (BOT)', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia (France)', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island (Australia)', 'North Korea', 'North Macedonia', 'Northern Cyprus', 'Northern Mariana Islands (US)', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands (BOT)', 'Poland', 'Portugal', 'Puerto Rico (US)', 'Qatar', 'Réunion (France)', 'Romania', 'Russia', 'Rwanda', 'Saba (Netherlands)', 'Saint Barthélemy (France)', 'Saint Helena, Ascension and Tristan da Cunha (BOT)', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (France)', 'Saint Pierre and Miquelon (France)', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Eustatius (Netherlands)', 'Sint Maarten (Netherlands)', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen (Norway)', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau (NZ)', 'Tonga', 'Transnistria', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands (BOT)', 'Tuvalu', 'U.S. Virgin Islands (US)', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wallis and Futuna (France)', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

function populateCountryDropdown() {
    const countryDropdown = document.getElementById("country");

    // Loop through the array and create an option element for each country
    countries.forEach(function(country) {
        const option = document.createElement("option");
        option.value = country;
        option.text = country;
        countryDropdown.appendChild(option);
    });
}
populateCountryDropdown();

function submitForm() {
    // Add form validation and display selected values in the popup
    // After displaying the popup, reset the form
    const form = document.getElementById("survey-form");
    if (!form.checkValidity()) {
        alert("Please fill in all required fields.");
        return;
    }
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    // const gender = document.getElementsByName("gender").label;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    // Display selected values in the popup
    const selectedValuesList = document.getElementById("selected-values");
    selectedValuesList.innerHTML = "";
    appendValue(selectedValuesList, "First Name", firstName);
    appendValue(selectedValuesList, "Last Name", lastName);
    appendValue(selectedValuesList, "Date Of Birth", dateOfBirth);
    appendValue(selectedValuesList, "Country", country);
    appendValue(selectedValuesList, "Profession", profession);
    appendValue(selectedValuesList, "Email", email);
    appendValue(selectedValuesList, "Mobile Number", mobileNumber);

    // Show the popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

function resetForm() {
    document.getElementById('survey-form').reset();

    // closePopup();
}

function closePopup() {
    // Hide the popup
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    resetForm();
}

function appendValue(container, label, value) {
    const listItem = document.createElement("li");
    listItem.innerText = `${label}: ${value}`;
    container.appendChild(listItem);
}