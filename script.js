const students = [
  {
    roll: "101",
    password: "12345",
    name: "Shuvom Kumar Das",
    class: "10",
    subjects: [
      { n: "Bangla", m: 65 },
      { n: "English", m: 70 },
      { n: "Math", m: 80 },
    ],
  },
  {
    roll: "102",
    password: "abcd",
    name: "Prapti roy Jitu",
    class: "10",
    subjects: [
      { n: "Bangla", m: 95 },
      { n: "English", m: 80 },
      { n: "Math", m: 90 },
    ],
  },
];

function grade(m) {
  if (m >= 80) return "A+";
  if (m >= 70) return "A";
  if (m >= 60) return "A-";
  if (m >= 50) return "B";
  if (m >= 40) return "C";
  if (m >= 33) return "D";
  return "F";
}

function showResult() {
  const roll = document.getElementById("roll").value.trim();
  const pass = document.getElementById("password").value.trim();
  const r = document.getElementById("result");

  const s = students.find(x => x.roll === roll && x.password === pass);

  if (!s) {
    r.innerHTML = "<p style='color:red'>Result not found or password incorrect</p>";
    return;
  }

  let total = 0;
  let rows = s.subjects.map(sub => {
    total += sub.m;
    return `<tr><td>${sub.n}</td><td>${sub.m}</td><td>${grade(sub.m)}</td></tr>`;
  }).join("");

  r.innerHTML = `
    <p><strong>${s.name}</strong> | Roll ${s.roll} | Class ${s.class}</p>
    <table width="100%">
      <tr><th>Subject</th><th>Marks</th><th>Grade</th></tr>
      ${rows}
    </table>
    <p><b>Total:</b> ${total}</p>
  `;
}
