// Use activity 14, 15. Use the NPMJS website.
const inquirer = require('inquirer');
const PasswordPrompt = require('inquirer/lib/prompts/password');
const fs = require('fs');



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your username?',
            name: 'user',
            validate: user => {
                if (user.length < 1) {
                    return "Your user name is too short.";
                }
                else if (user.toLowerCase() != user) {
                    return "User name should have only lowercase values.";
                }
                else if (user.length > 39) {
                    return "User name is too long."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'password',
            message: 'Please enter your password.',
            name: 'password',
            validate: password => {
                if (password.length < 6) {
                    return "Password must be greater than 6 characters.";
                }
                else if (password.length > 32) {
                    return "Password must be less than 32 characters.";
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title',
            validate: title => {
                if (title.length < 1) {
                    return "Title is mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide a breif description of the project.',
            name: 'desc',
            validate: desc => {
                if (desc.length < 1) {
                    return "Description is mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What installation instructions are required.',
            name: 'install',
            validate: install => {
                if (install.length < 1) {
                    return "Installation instructions are mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the usage of this program?',
            name: 'usage',
            validate: usage => {
                if (usage.length < 1) {
                    return "Usage description is mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contrib',
            validate: contrib => {
                if (contrib.length < 1) {
                    return "Contribution guidelines are mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Please input any testing instructions.',
            name: 'testing',
            validate: testing => {
                if (testing.length < 1) {
                    return "Testing instructions are mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'list',
            message: 'Which licensure will be used for this application?',
            choices: ["BSD", "ISC", "MIT", "NCSA"],
            name: 'license',
            validate: license => {
                if (license.length < 1) {
                    return "Choice is mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
            validate: github => {
                if (github.length < 1) {
                    return "GitHub username is mandatory."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: email => {
                var email2 = email.includes("@")
                if (email.legnth < 1) {
                    return "GitHub username is mandatory."
                }
                else if(email2 != true){
                    return "Not a valid email."
                }
                else {
                    return true;
                }
            }
        },

    ]).then(response => {
        // this will call the EXACT input value.
        // console.log(response.user);
        // console.log(response.password)
        console.log(response)

        // fs.writeFile('readme-out.md', JSON.stringify(response, null, 2), 'utf8', err => {
        //     if(err) return console.log(err);
        //     return console.log("We finished writing the file.")
        // });
        let data2Write = "";
        data2Write += `# ${response.title}\n`;
        data2Write += "\n";
        data2Write += "## User\n"; // make a function for this?
        data2Write += "\n";
        data2Write += `${response.user}\n`; // make a function for the data? "data2Write += addNewSection("Site", response.whatever)
        data2Write += "\n";
        data2Write += "## Password\n";
        data2Write += "\n";
        data2Write += `${response.password}\n`;
        data2Write += "\n";
        data2Write += "## Description\n";
        data2Write += "\n";
        data2Write += `${response.desc}\n`;
        data2Write += "\n";
        data2Write += "## Installation Instructions\n";
        data2Write += "\n";
        data2Write += `${response.install}\n`;
        data2Write += "\n";
        data2Write += "## Usage Information\n";
        data2Write += "\n";
        data2Write += `${response.usage}\n`;
        data2Write += "\n";
        data2Write += "## Contribution Guidelines\n";
        data2Write += "\n";
        data2Write += `${response.contrib}\n`;
        data2Write += "\n";
        data2Write += "## Testing Instructions\n";
        data2Write += "\n";
        data2Write += `${response.testing}\n`;
        data2Write += "\n";
        data2Write += "## Questions\n";
        data2Write += "\n";
        data2Write += `Github username ` + `${response.github}\n`;
        data2Write += "https://github.com/black03mach\n";
        data2Write += `Please contact me @ Email: ` + `${response.email} with any questions/concerns.\n`;

        fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
            if (err) return console.log(err);
            return console.log("We finished writing the file.")
        });

    });
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README -- Done
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions -- Done
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests -- Done
// WHEN I choose a license for my application from a list of options -- Done
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username -- Done
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile -- Done
// WHEN I enter my email address -- Done
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions -- Done
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README