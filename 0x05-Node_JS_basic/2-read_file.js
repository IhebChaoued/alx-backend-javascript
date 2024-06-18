const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '').slice(1);
        const students = {};
        let totalStudents = 0;

        lines.forEach(line => {
            const [firstname, lastname, age, field] = line.split(',');
            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(firstname);
            totalStudents += 1;
        });

        console.log(`Number of students: ${totalStudents}`);
        for (const field in students) {
            console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
