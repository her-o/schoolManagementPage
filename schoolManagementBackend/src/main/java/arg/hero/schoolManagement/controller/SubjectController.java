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
import arg.hero.schoolManagement.model.Subject;
import arg.hero.schoolManagement.service.impl.SubjectService;

@RestController
@RequestMapping("/subjects")
@CrossOrigin("*")
public class SubjectController {
	
	@Autowired
	private SubjectService service;
	
	@PostMapping() 
	public Subject addSubject(@RequestBody Subject subject) {
		return service.addSubject(subject);
	}
	
	@GetMapping()
	public List<Subject> getAllSubjects() {
		return service.findAllSubjects();
	}
	
	@GetMapping("/{id}")
	public Subject getSubjectById(@PathVariable Long id) {
		return service.findSubjectById(id).get();
	}
	
	@PutMapping("/{id}")
	public Subject updateSubjectById(@PathVariable Long id, @RequestBody Subject subject) {
		return service.updateSubjectById(id, subject);
	}
	
	@DeleteMapping("/{id}")
	public Subject deleteSubjectById(@PathVariable Long id) {
		return service.deleteSubjectById(id);
	}
	
	@GetMapping("/{id}/students")
	public List<Student> getSubjectStudents(@PathVariable Long id) {
		return service.findSubjectById(id).get().getStudents();
	}
	
	@GetMapping("/{id}/studentsToEnrole")
	public List<Student> getStudentsToEnrole(@PathVariable Long id) {
		return service.findStudentsToEnrole(id);
	}
	
	@PutMapping("/{id}/enrole")
	public Subject enroleStudent(@PathVariable Long id, @RequestBody String studentEmail) {
		return this.service.enroleStudent(id, studentEmail);
	}
}
