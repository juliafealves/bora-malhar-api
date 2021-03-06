import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { email } = req.body;
    const studentExists = await Student.findOne({ where: { email } });

    if (studentExists)
      return res.status(400).json({ error: 'E-mail already exists.' });

    const { id, name, age, weight, height } = await Student.create(req.body);

    return res.json({ id, name, email, age, height, weight });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { id } = req.params;
    const student = await Student.findByPk(id);
    const { email } = req.body;

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists)
        return res.status(400).json({ error: 'E-mail already exists.' });
    }

    const { name, age, height, weight } = await student.update(req.body);

    return res.json({ id, name, email, age, height, weight });
  }
}

export default new StudentController();
