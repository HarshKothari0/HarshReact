function EmployeeDetails() {
    var empid=1;
    var name= "Harsh Kothari";
    var age = 21;
    var designation = "Developer";
    var salary = 15000;
    var ReportsTo="Kapil";
    
  
  
    return {
      getEmpid:function() {
      return empid;
      },
      getName:function() {
      return name;
      },
      getSalary:function() {
      return salary;
      },
      getAge: function() {
      return age;
      },
      getManagerName: function() {
      return ReportsTo;
      },
      getDesignation: function() {
      return designation;
      }
      
    }
  }
  
  var Employee = EmployeeDetails()
  
  console.log("Employee ID : "+Employee.getEmpid());
  console.log("Employee Name : "+Employee.getName());
  console.log("Employee Age : "+Employee.getAge());
  console.log("Employee Desigantion : "+Employee.getDesignation());
  console.log("Salary : "+Employee.getSalary());
  console.log("Reports To : "+Employee.getManagerName());
  