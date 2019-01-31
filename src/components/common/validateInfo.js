const validate = ({ day, month, year }) => {
  const errors = {};
  let reg = /[^[0-9]/;
  let mydate = new Date();
  mydate.setFullYear(year, month - 1, day);
  let currdate = new Date();
  currdate.setFullYear(currdate.getFullYear() - 18);

  if (!day) errors.day = 'day is required';
  else if (reg.test(day) || !(31 >= day) || !(day >= 1))
    errors.day = 'incorrect date';
  else if (day.length === 1) errors.day = 'need 2 numbers';

  if (!month) errors.month = 'month is required';
  else if (reg.test(month) || !(12 >= month) || !(month >= 1))
    errors.month = 'incorrect date';
  else if (month.length === 1) errors.month = 'need 2 numbers';

  if (!year) errors.year = 'year is required';
  else if (reg.test(year) || !(2019 >= year) || !(year >= 1955))
    errors.year = 'incorrect date';
  else if (currdate < mydate) errors.year = 'no 18 years old';

  return errors;
};

export default validate;
