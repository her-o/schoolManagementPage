package arg.hero.schoolManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import arg.hero.schoolManagement.model.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
