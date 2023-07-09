// Teachers BluePrint
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}

// interface that inherits all the Teacher properties
interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return firstName[0] + ". " + lastName; 
}

interface printTeacherFunction {
  (param1: string, param2: string): string;
}
