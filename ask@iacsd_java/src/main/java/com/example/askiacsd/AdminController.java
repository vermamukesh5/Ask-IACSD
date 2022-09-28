package com.example.askiacsd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/iacsd/")
@CrossOrigin
public class AdminController {

	@Autowired
	public MybatisRepository repository;
	
	@GetMapping("/admins")
	public List<String> getAllAdmins(){
		
		return repository.getAllAdmins();
	}
	
	@GetMapping("/verified/answers")
	public List<String> getAllVerifiedAnswers(){
		
		return repository.getAllVerifiedAnswers();
	}
	
	@GetMapping("/insert/answer")
	public void insertAnswer(String questionId) {
		repository.insertAnswer(questionId);
	}
	
	
	@GetMapping("/unverify/answer")
	public void deleteAnswer(String questionId ) {
		repository.deleteAnswer(questionId);
	}
	public AdminController() {
		// TODO Auto-generated constructor stub
	}

}
