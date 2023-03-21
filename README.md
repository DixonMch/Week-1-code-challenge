# Week-1-code-challenge
Challenge 1:
Project Title: Student grade generator.
Project description: The Grade Calculator is a simple JavaScript program that prompts the user to enter a student's marks as a number between 0-100. The program then checks the range of the marks and assigns the appropriate grade based on the following grading scale:

Marks greater than 79 are assigned an "A" grade
Marks between 60 and 79 (inclusive) are assigned a "B" grade
Marks between 50 and 59 (inclusive) are assigned a "C" grade
Marks between 40 and 49 (inclusive) are assigned a "D" grade
Marks less than 40 are assigned an "E" grade
Once the grade has been assigned, the program outputs the grade to the console.

Project setup: Requirements
Node.js (v12.18.3 or higher)
NPM (v6.14.6 or higher)
Installation:
1. Clone the repository: git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
2. Change into the project directory: cd YOUR-REPOSITORY
3. Install the dependencies: npm install
Usage:
1. Run the program: node index.js
2. The program will prompt you to enter a student's marks. Enter a number between 0-100 and press enter.
3. The program will output the corresponding grade to the console.

Created by Dixon Mogaka.


Challenge 2:
Project Title: Speed detector.
Project description: This program first prompts the user to input the speed of the car in km/h. It then converts the input to a number using the Number() function.

Next, the program checks if the speed is less than 70. If it is, it outputs "Ok". Otherwise, it calculates the number of demerit points by subtracting 70 from the speed, dividing the result by 5, and rounding down to the nearest integer using the Math.floor() function. It then outputs the total number of demerit points using console.log() with a template literal.

Finally, the program checks if the number of demerit points is greater than or equal to 12. If it is, it outputs "License suspended" using console.log().

Project setup: 
1. Create a new directory for the project, e.g. "speed-camera".
2. Open a code editor in the "speed-camera" directory.
3. Create a new file in the directory called "index.js".
4. Copy the code you provided into the "index.js" file.
5. Initialize a new NPM package in the directory by running npm init in the terminal. Follow the prompts to set up the package.json file.
6. Install any necessary dependencies, such as a testing library, by running npm install [package-name] in the terminal.
7. Add a script to the package.json file to run the program. 
8. Test the program by running npm start in the terminal.
This setup assumes that you have Node.js and NPM installed on your system. If you don't have them installed, you'll need to download and install them first.

Created by Dixon Mogaka.

Challenge 3: Net Salary Calculator.
Project description: In this program, we first define constants for the KRA, NHIF, and NSSF values provided in the links. We then define variables for the employee's basic salary and benefits and calculate the gross salary by adding the two.

We then calculate the KRA tax based on the gross salary using the tax rates provided in the link. We calculate the NHIF deduction based on the gross salary by looking up the appropriate rate in the NHIF_RATES array. We calculate the NSSF deductions based on the gross salary using the NSSF_RATE_EMPLOYEE and NSSF_RATE_EMPLOYER constants.

Finally, we calculate the net salary by subtracting the KRA tax, NHIF deduction, and NSSF deduction from the gross salary. We output the results to the console.
Project setup: 
1. Create a new directory for your project and navigate into it in your terminal.
2. reate a new file called index.js and open it in your code editor.
3. Inside index.js, write the code to prompt the user for the basic salary and benefits of the employee and calculate the deductions and net salary according to the provided tax rates.
Created by Dixon Mogaka.