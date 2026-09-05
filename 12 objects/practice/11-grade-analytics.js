const grades = {
  math: 5,
  physics: 4,
  english: 5,
  history: 3,
  cs: 5
};

let totalGradesSum = 0;
let totalSubjects = 0;
let topGradesCount = 0;

for (const subject in grades) {
  const grade = grades[subject];
  totalGradesSum += grade;
  totalSubjects++;
  if (grade === 5) {
    topGradesCount++;
  }
}

const averageGrade = totalGradesSum / totalSubjects;

module.exports = { totalGradesSum, totalSubjects, topGradesCount, averageGrade };
