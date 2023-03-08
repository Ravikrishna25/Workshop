package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Family;
import com.example.demo.repository.FamilyRepo;

@Service
public class Familyservice {
	@Autowired
	private FamilyRepo obj;
	
	public List<Family> getAddress()
	{
		return obj.findAll();
	}
	
	public Family saveDetails(Family f) {
		return obj.save(f);
	}
	
	public Family updateDetails(Family f) {
		return obj.save(f);
	}
	
	public void deleteDetails(int pId) {
		obj.deleteById(pId);
	}
}
