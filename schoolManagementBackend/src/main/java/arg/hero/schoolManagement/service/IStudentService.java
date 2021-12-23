package arg.hero.schoolManagement.service;

import java.util.List;
import java.util.Optional;

import arg.hero.schoolManagement.model.Student;

public interface IStudentService {
	
	Student addStudent(Student student);
	List<Student> findAllStudents();
	Optional<Student> findStudentById(Long id);
	Student updateStudentById(Long id, Student student);
	Student deleteStudentById(Long id);
	
}
