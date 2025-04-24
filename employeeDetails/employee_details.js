// Definición de datos de empleados
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Budgeting' },
    { id: 4, name: 'Mary Lee', age: 26, department: 'IT', salary: 52000, specialization: 'JavaScript' },
    { id: 5, name: 'Steve Brown', age: 32, department: 'HR', salary: 48000, specialization: 'Conflict Resolution' }
  ];
  
  // Mostrar todos los empleados
  function displayEmployees() {
    const totalEmployees = employees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
  
  // Calcular suma total de salarios
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  
  // Mostrar empleados de RRHH
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
  // Buscar empleado por ID
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML =
        'No se ha encontrado ningún empleado con este ID.';
    }
  }
  
  // Buscar empleados por especialización
  function findEmployeesBySpecialization(skill) {
    const specializedEmployees = employees.filter(employee =>
      employee.specialization.toLowerCase() === skill.toLowerCase()
    );
    if (specializedEmployees.length > 0) {
      const output = specializedEmployees.map(emp =>
        `<p>${emp.id}: ${emp.name} - ${emp.specialization} - $${emp.salary}</p>`
      ).join('');
      document.getElementById('employeesDetails').innerHTML = output;
    } else {
      document.getElementById('employeesDetails').innerHTML =
        `No se encontraron empleados con especialización en ${skill}.`;
    }
  }
  