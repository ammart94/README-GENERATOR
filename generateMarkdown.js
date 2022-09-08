
function generateMarkdown(data) {
  



  // Generate Table of Contents conditionally based on userResponses
  let TOFC= `## Table of Contents`;

  if (userResponses.installation !== '') { TOFC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { TOFC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { TOFC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { TOFC+= `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let readME = 
  `# ${userResponses.title}

 
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}

  `

  // Add Table of Contents to markdown
   readME += TOFC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  readME +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  readME +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {

  readME +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  readME +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  readME +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
 };

  // Add developer section to markdown
  readME += developer;

  // Return markdown
  return readME;
  




module.exports = generateMarkdown;
