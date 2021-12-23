package arg.hero.schoolManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import arg.hero.schoolManagement.model.Student;
import arg.hero.schoolManagement.service.impl.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentsController {
	
	@Autowired
	private StudentService service;
	
	@PostMapping()
	public Student addStudent(@RequestBody Student student) {
		return service.addStudent(student);
	}
	
	@GetMapping()
	public List<Student> getAllStudents() {
		return service.findAllStudents();
	}
	
	@GetMapping("/{id}")
	public Student getStudentById(@PathVariable Long id) {
		return service.findStudentById(id).get();
	}
	
	@PutMapping("/{id}")
	public Student updateStudentById(@PathVariable Long id, @RequestBody Student student) {
		return service.updateStudentById(id, student);
	}
	
	@DeleteMapping("/{id}")
	public Student deleteStudentById(@PathVariable Long id) {
		return service.deleteStudentById(id);
	}
	

}
