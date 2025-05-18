// Use case: Robust config handler
function createUser(name, { role = "user", active = true } = {}) {
    return { name, role, active };
  }
  
  console.log(createUser("Hrishi")); 
  // { name: 'Hrishi', role: 'user', active: true }
  
  console.log(createUser("Admin", { role: "admin" }));
  // { name: 'Admin', role: 'admin', active: true }
  