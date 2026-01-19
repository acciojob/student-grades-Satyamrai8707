//your JS code here. If required.
// Fetch students from CSV file asynchronously
fetch("students.csv")
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split("\n");
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      const name = values[0];

      let sum = 0;
      let count = 0;

      for (let j = 1; j < values.length; j++) {
        sum += Number(values[j]);
        count++;
      }

      const average = sum / count;

      console.log(`${name} : ${average}`);
    }
  })
  .catch(error => console.error(error));
