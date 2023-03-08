package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Family;
import com.example.demo.Service.Familyservice;

@RestController
@CrossOrigin("http://localhost:3000")
public class FamilyController {
	@Autowired
	private Familyservice fam;
	
	@GetMapping("/view")
	public List<Family> get(){
		return fam.getAddress();
	}
		
	@PostMapping("/post")
	public String get(@RequestBody Family f) {
		fam.saveDetails(f);
		return "Value added";
	}
	
	@PutMapping("/put")
	public String put(@RequestBody Family f) {
		fam.updateDetails(f);
		return "Value Updated";
	}
	
	@DeleteMapping("/delete/{pId}")
	public void delete(@PathVariable int pId) {
		fam.deleteDetails(pId);
	}
}
