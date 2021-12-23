package arg.hero.schoolManagement.service;

import java.util.List;
import java.util.Optional;

import arg.hero.schoolManagement.model.Subject;


public interface ISubjectService {
	Subject addSubject(Subject subject);
	List<Subject> findAllSubjects();
	Optional<Subject> findSubjectById(Long id);
	Subject updateSubjectById(Long id, Subject subject);
	Subject deleteSubjectById(Long id);
}
