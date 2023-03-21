// Define constants for KRA, NHIF, and NSSF values
const KRA_THRESHOLD = 24000;
const KRA_RATE_1 = 0.1;
const KRA_RATE_2 = 0.15;
const KRA_RATE_3 = 0.2;
const KRA_RATE_4 = 0.25;
const NHIF_RATES = [150, 300, 400, 500, 600, 750];
const NSSF_RATE_EMPLOYEE = 0.06;
const NSSF_RATE_EMPLOYER = 0.06;

// Define variables for employee salary and benefits
let basicSalary = 50000;
let benefits = 10000;

// Calculate gross salary
let grossSalary = basicSalary + benefits;

// Calculate KRA tax
let kraTax;
if (grossSalary <= KRA_THRESHOLD) {
  kraTax = 0;
} else if (grossSalary <= 40000) {
  kraTax = (grossSalary - KRA_THRESHOLD) * KRA_RATE_1;
} else if (grossSalary <= 80000) {
  kraTax = (1600 + (grossSalary - 40000) * KRA_RATE_2);
} else if (grossSalary <= 120000) {
  kraTax = (8800 + (grossSalary - 80000) * KRA_RATE_3);
} else {
  kraTax = (16800 + (grossSalary - 120000) * KRA_RATE_4);
}

// Calculate NHIF deduction
let nhifDeduction = NHIF_RATES[Math.ceil(grossSalary / 1000 / 6) - 1];

// Calculate NSSF deductions
let nssfDeductionEmployee = grossSalary * NSSF_RATE_EMPLOYEE;
let nssfDeductionEmployer = grossSalary * NSSF_RATE_EMPLOYER;

// Calculate net salary
let netSalary = grossSalary - kraTax - nhifDeduction - nssfDeductionEmployee;

// Output results
console.log(`Gross Salary: ${grossSalary}`);
console.log(`KRA Tax: ${kraTax}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction (Employee): ${nssfDeductionEmployee}`);
console.log(`NSSF Deduction (Employer): ${nssfDeductionEmployer}`);
console.log(`Net Salary: ${netSalary}`);
