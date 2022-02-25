var Employee=(function EmployeeDetails(id,empname,empage,empdesig,empsalary,empManager) {
    var empid=id;
    var name= empname;
    var age = empage;
    var designation = empdesig;
    var salary = empsalary;
    var ReportsTo=empManager;
    
  
  
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
  })(1,"Harsh Kothari",21,"Developer",15000,"Kapil")
  
  
  console.log("Employee ID : "+Employee.getEmpid());
  console.log("Employee Name : "+Employee.getName());
  console.log("Employee Age : "+Employee.getAge());
  console.log("Employee Desigantion : "+Employee.getDesignation());
  console.log("Salary : "+Employee.getSalary());
  console.log("Reports To : "+Employee.getManagerName());
  