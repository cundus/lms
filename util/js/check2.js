// Sample user object with a 'role' property
const currentUser = localStorage.getItem("user");
console.log(currentUser);

const user = JSON.parse(currentUser);
console.log(user);

// Function to check if the user has the required role
function isUserAllowed(role) {
  return user && user.role === role;
}

// Example of a protected route with redirection
function protectedRoute() {
  if (currentUser && user.role === "guru") {
    // User has the required role, allow access
    console.log(`Access granted for "${role}" role.`);
  } else if (currentUser && user.role === "siswa") {
    // console.log(`Access denied. User must have the role "${role}". Redirecting to home...`);
    localStorage.removeItem("user");
    window.location.href = '/'; // Redirect to the home page
  }else {
    // User is not logged in or does not have the required role
    // console.log(`Access denied. User must have the role "${role}". Redirecting to home...`);
    localStorage.removeItem("user");
    window.location.href = '/'; // Redirect to the home page
  }
}

// Example usage of the protected route with redirection
// const siswaRedirectUrl = '/auth/login.html?role=siswa'; // Replace with the actual login URL for "siswa"
// protectedRoute('siswa', siswaRedirectUrl);

const guruRedirectUrl = '/auth/login.html?role=guru'; // Replace with the actual login URL for "guru"
protectedRoute();
