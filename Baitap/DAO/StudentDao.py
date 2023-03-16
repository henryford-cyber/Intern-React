
from Student import Student


class StudentDao:
    def __init__(self, db):
        self.db = db

    def add_student(self, student):
        cursor = self.db.cursor()
        sql = "INSERT INTO Student (name,birtdate,mathscores,physicscore,chemistryscore) VALUES(%s, %s, %s, %s, %s)"
        values = (student.name, student.birtdate,
                  student.mathscores, student.physicscore)
        cursor.execute(sql, values)
        self.db.commit()
        return cursor.lastrowid

    def update_student(self, student):
        cursor = self.db.cursor()
        sql = "UPDATE Student SET name=%s, birtdate=%s, mathscores=%s, physicscore=%s, chemistryscore=%s WHERE id=%s"
        values = (student.name, student.birtdate,
                  student.mathscores, student.physicscore)
        cursor.execute(sql, values)
        self.db.commit()

    def delete_student(self, student):
        cursor = self.db.cursor()
        sql = "DELETE FROM students WHERE id=%s"
        values = (student.id,)
        cursor.execute(sql, values)
        self.db.commit()

    def get_student_by_id(self, id):
        cursor = self.db.cursor()
        sql = "SELECT * FROM students WHERE id=%s"
        values = (id,)
        cursor.execute(sql, values)
        result = cursor.fetchone()
        if result is not None:
            return Student(result[0], result[1], result[2], result[3], result[4], result[5])
        else:
            return None

    def get_all_students(self):
        cursor = self.db.cursor()
        sql = "SELECT * FROM students"
        cursor.execute(sql)
        results = cursor.fetchall()
        students = []
        for result in results:
            student = Student(result[0], result[1],
                              result[2], result[3], result[4], result[5])
            students.append(student)
            return students
