package arg.hero.schoolManagement.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import arg.hero.schoolManagement.model.Student;
import arg.hero.schoolManagement.repository.StudentRepository;
import arg.hero.schoolManagement.service.IStudentService;

@Service
@Transactional
public class StudentService implements IStudentService {
	
	@Autowired
	private StudentRepository repository;

	@Override
	public Student addStudent(Student newStudent) {
		return repository.save(newStudent);
	}

	@Override
	public List<Student> findAllStudents() {
		return repository.findAll();
	}

	@Override
	public Optional<Student> findStudentById(Long id) {
		return repository.findById(id);
	}
	
	@Override
	public Student updateStudentById(Long id, Student student) {
		Student updatedStudent = repository.findById(id).get();
		updatedStudent.setName(student.getName());
		updatedStudent.setSubjects(student.getSubjects());
		return repository.save(updatedStudent);
	}

	@Override
	public Student deleteStudentById(Long id) {
		Student deletedStudent = repository.findById(id).get();
		repository.deleteById(id);
		return deletedStudent;
	}

	

}
