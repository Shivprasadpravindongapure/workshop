// src/data/workshops.js
// Static workshop data — replace with API calls when backend is ready.

const workshops = [
  {
    id: 1,
    title: 'Python for Scientific Computing',
    description:
      'Learn NumPy, SciPy, and Matplotlib to solve engineering and science problems using Python.',
    date: 'April 20, 2026',
    duration: '2 days',
    seats: 18,
    category: 'Python',
    isFull: false,
  },
  {
    id: 2,
    title: 'Spoken Tutorial: C Programming',
    description:
      'Beginner-friendly workshop on C programming following FOSSEE Spoken Tutorial materials.',
    date: 'April 25, 2026',
    duration: '1 day',
    seats: 0,
    category: 'C',
    isFull: true,
  },
  {
    id: 3,
    title: 'Introduction to Scilab',
    description:
      'Hands-on workshop covering Scilab basics for matrix computations and signal processing.',
    date: 'May 3, 2026',
    duration: '1 day',
    seats: 30,
    category: 'Scilab',
    isFull: false,
  },
  {
    id: 4,
    title: 'OpenFOAM for CFD',
    description:
      'Understand Computational Fluid Dynamics workflows using the OpenFOAM open-source toolbox.',
    date: 'May 10, 2026',
    duration: '3 days',
    seats: 12,
    category: 'CFD',
    isFull: false,
  },
];

export default workshops;
