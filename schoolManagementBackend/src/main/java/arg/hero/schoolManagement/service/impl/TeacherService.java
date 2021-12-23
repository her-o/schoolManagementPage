package arg.hero.schoolManagement.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import arg.hero.schoolManagement.model.Teacher;
import arg.hero.schoolManagement.repository.TeacherRepository;
import arg.hero.schoolManagement.service.ITeacherService;

@Service
@Transactional
public class TeacherService implements ITeacherService {

	@Autowired
	private TeacherRepository repository;
	
	@Override
	public Teacher addTeacher(Teacher teacher) {
		return repository.save(teacher);
	}

	@Override
	public List<Teacher> findAllTeachers() {
		return repository.findAll();
	}

	@Override
	public Optional<Teacher> findTeacherById(Long id) {
		return repository.findById(id);
	}

	@Override
	public Teacher updateTeacherById(Long id, Teacher teacher) {
		Teacher updatedTeacher = repository.findById(id).get();
		updatedTeacher.setName(teacher.getName());
		updatedTeacher.setSubjects(teacher.getSubjects());
		return repository.save(updatedTeacher);
	}

	@Override
	public Teacher deleteTeacherById(Long id) {
		Teacher deletedTeacher = repository.findById(id).get();
		repository.delete(deletedTeacher);
		return deletedTeacher;
	}

}
