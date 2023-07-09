// Creates an interface called Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creates student 1
const student1: Student = {
    firstName: "Ukaegbu",
    lastName: "Ndukwe",
    age: 29,
    location: "Lagos",
};

// Creates student 2
const student2: Student = {
    firstName: "Mary",
    lastName: "Tom",
    age: 25,
    location: "Lagos",
};

// Creates an array of students
const studentsList: Student[] = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
