// task_1/dashboard/src/utils.js

// Function to get the current year
export function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  // Function to get footer copy based on whether it's the index page or not
  export function getFooterCopy(isIndex) {
    if (isIndex) {
      return 'Holberton School';
    } else {
      return 'Holberton School main dashboard';
    }
  }
