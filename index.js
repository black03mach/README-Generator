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
            choices: ["BSD", "ISC", "MIT", "Boost"],
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
                else if (email2 != true) {
                    return "Not a valid email."
                }
                else {
                    return true;
                }
            }
        },

    ]).then(response => {
        console.log(response)
        let data2Write = "";
        switch (response.license){
            case "BSD":
                data2Write += "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n"
                break;
            case "ISC":
                data2Write += "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n"
                break;
            case "MIT":
                data2Write += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT\n)"
                break;
            case "Boost":
                data2Write += "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n"
                break;
        }
        data2Write += "\n";
        data2Write += "* [User](##user)\n";
        data2Write += "\n";
        data2Write += "* [Password](##password)\n";
        data2Write += "\n";
        data2Write += "* [Description](##description)\n";
        data2Write += "\n";
        data2Write += "* [Installation Instructions](##installation-instructions)\n";
        data2Write += "\n";
        data2Write += "* [Usage Information](##usage-information)\n";
        data2Write += "\n";
        data2Write += "* [Contribution Guidelines](##contribution-guidelines)\n";
        data2Write += "\n";
        data2Write += "* [Testing Instructions](##testing-instructions)\n";
        data2Write += "\n";
        data2Write += "* [Questions](##questions)\n";
        data2Write += "\n";
        data2Write += `# ${response.title}\n`;
        data2Write += "\n";
        data2Write += "## User\n";
        data2Write += "\n";
        data2Write += `${response.user}\n`;
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
        data2Write += `Github username: ` + `${response.github}\n`;
        data2Write += "https://github.com/black03mach\n";
        data2Write += `Please contact me via email: ` + `${response.email} with any questions/concerns.\n`;

        fs.writeFile('readme-out.md', data2Write, 'utf8', err => {
            if (err) return console.log(err);
            return console.log("We finished writing the file.")
        });
    });