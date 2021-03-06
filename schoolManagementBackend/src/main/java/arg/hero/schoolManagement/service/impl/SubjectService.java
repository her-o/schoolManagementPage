package arg.hero.schoolManagement.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import arg.hero.schoolManagement.model.Student;
import arg.hero.schoolManagement.model.Subject;
import arg.hero.schoolManagement.model.Teacher;
import arg.hero.schoolManagement.repository.StudentRepository;
import arg.hero.schoolManagement.repository.SubjectRepository;
import arg.hero.schoolManagement.repository.TeacherRepository;
import arg.hero.schoolManagement.service.ISubjectService;

@Service
@Transactional
public class SubjectService implements ISubjectService {

	@Autowired
	private SubjectRepository repository;
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private TeacherRepository teacherRepository;
	
	
	@Override
	public Subject addSubject(Subject subject) {
		return repository.save(subject);
	}

	@Override
	public List<Subject> findAllSubjects() {
		return repository.findAll();
	}

	@Override
	public Optional<Subject> findSubjectById(Long id) {
		return repository.findById(id);
	}
	

	@Override
	public Subject updateSubjectById(Long id, Subject subject) {
		Subject updatedSubject = repository.findById(id).get();
		updatedSubject.setName(subject.getName());
		updatedSubject.setTeacher(subject.getTeacher());
		updatedSubject.setStudents(subject.getStudents());
		return repository.save(updatedSubject) ;
	}

	@Override
	public Subject deleteSubjectById(Long id) {
		Subject deletedSubject = repository.findById(id).get();
		repository.delete(deletedSubject);
		return deletedSubject;
	}
	
	public Student getStudentByEmail(String email) {
		return studentRepository.findByEmail(email).get();
	}
	
	public Teacher getTeacherById(Long id) {
		return teacherRepository.findById(id).get();
	}

	public Subject enroleStudent(Long id, String studentEmail) {
		Subject subjectToUpdate = repository.getById(id);
		Student studentToUpdate = studentRepository.findByEmail(studentEmail).get();
		studentToUpdate.getSubjects().add(subjectToUpdate);
		subjectToUpdate.getStudents().add(studentToUpdate);
		return repository.save(subjectToUpdate);
	}

	public List<Student> findStudentsToEnrole(Long id) {
		Subject subject = repository.findById(id).get();
		List<Student> studentsToEnrole = studentRepository.findAll()
												  .stream()
												  .filter(student -> !subject.getStudents().contains(student))
												  .toList();
		return studentsToEnrole;
	}
}
