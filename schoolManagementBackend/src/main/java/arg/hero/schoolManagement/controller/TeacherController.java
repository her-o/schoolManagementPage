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

import arg.hero.schoolManagement.model.Teacher;
import arg.hero.schoolManagement.service.impl.TeacherService;

@RestController
@RequestMapping("/teachers")
@CrossOrigin("*")
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	@PostMapping()
	public Teacher addTeacher(@RequestBody Teacher teacher) {
		return teacherService.addTeacher(teacher);
	}
	
	@GetMapping("")
	public List<Teacher> getAllTeachers() {
		return teacherService.findAllTeachers();
	}
	
	@GetMapping("/{id}")
	public Teacher getTeacherById(@PathVariable Long id) {
		return teacherService.findTeacherById(id).get();
	}
	
	@PutMapping("/{id}")
	public Teacher updateTeacherById(@PathVariable Long id, @RequestBody Teacher teacher) {
		return teacherService.updateTeacherById(id, teacher);
	}
	
	@DeleteMapping("/{id}")
	public Teacher deleteTeacherById(@PathVariable Long id) {
		return teacherService.deleteTeacherById(id);
	}

}
