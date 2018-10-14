package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Employee;
import com.example.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;
import com.example.controller.*;
import com.example.repository.*;
//import java.util.ArrayList;

@RestController
public class EmployeeController {
	
	@Autowired
	public EmployeeService employeeService;
	
	@RequestMapping(value = "/")
	public ResponseEntity<Employee> get() {
		Employee employee = new Employee();
		employee.setName("Murat");
		employee.setLastName("Doganay");
		employee.setActive(true);
		
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	
	
	public List<Employee> update(@RequestBody Employee employee) {
		
		

		return employeeService.getAllEmployees();
	}
	
	
	
}

