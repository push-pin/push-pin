import home from '../download.png';
import student from '../student.jpg';
import teacher from '../teacher.jpg';

export const studentLink = [
  {
    address: '/teacher',
    image: home,
    description: 'Calendar',
  },
  {
    address: '/',
    image: student,
    description: 'Grades'
  },
  {
    address: '/',
    image: teacher,
    description: 'Assignments'
  },
  {
    address: '/',
    image: teacher,
    description: 'Resources'
  }
];

export const teacherLink = [
  {
    address: '/student',
    image: student,
    description: 'Calendar'
  },
  {
    address: '/',
    image: home,
    description: 'Grade Book'
  },
  {
    address: '/',
    image: teacher,
    description: 'Attendance'
  },
  {
    address: '/',
    image: teacher,
    description: 'Resources'
  },
  {
    address: '/',
    image: student,
    description: 'Create'
  }
];
