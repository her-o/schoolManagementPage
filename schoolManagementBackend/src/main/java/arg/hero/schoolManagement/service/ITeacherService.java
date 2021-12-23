package arg.hero.schoolManagement.service;

import java.util.List;
import java.util.Optional;

import arg.hero.schoolManagement.model.Teacher;

public interface ITeacherService {
	Teacher addTeacher(Teacher teacher);
	List<Teacher> findAllTeachers();
	Optional<Teacher> findTeacherById(Long id);
	Teacher updateTeacherById(Long id, Teacher teacher);
	Teacher deleteTeacherById(Long id);
}
