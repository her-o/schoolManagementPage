package arg.hero.schoolManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import arg.hero.schoolManagement.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
