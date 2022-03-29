let grade = document.getElementById('grade');
let active = undefined;

const setGrade = (grade) => {
  grade = grade;

  if (active) {
    active.classList.remove('active');
  }
  newActive = document.getElementById(`rating-${grade}`);
  newActive.classList.add('active');
  active = newActive;
}

const vote = () => {
  if (!active) {
    alert('You must select a rating');
    return ;
  }
  grade.innerHTML = active.innerHTML
  document.getElementById('voting').style.display = 'none';
  document.getElementById('voted').classList.remove('hidden');
}