// Function to get the current year
export function getCurrentYear() {
	return new Date().getFullYear();
  }
  
  // Function to return footer text based on a condition
  export function getFooterCopy(isIndex) {
	return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  