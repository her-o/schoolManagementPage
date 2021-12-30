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
		updatedSubject.setSchedule(subject.getSchedule());
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
}
