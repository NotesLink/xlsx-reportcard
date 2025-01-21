const config = {
    // Marksheet Title use <br> for next line
    Title: "PERIODIC ASSESSMENT - III [2023-24]<br>MARK SHEET",
    // List of fields to include in subject column (type it in correct order)
    subjects: ["English", "Second Language", "Maths", "Science", "Physics", "Chemistry", "Biology", "Social Science", "Computer", "Total"],
    // Maximum marks for each subject
    MaxMarks: {
        "English": 25,
        "Maths": 25,
        "Science": 25,
        "Physics": 9,
        "Chemistry": 6,
        "Biology": 10,
        "Social Science": 25,
        "Second Language": 25,
        "Computer": 25,
        "Total": 150
    },
    // Names of columns containing student details
    StudentDetailColumnNames: ["Name", "Class"],
    // Please do not change
    Columns: ["Subject", "Maximum Marks", "Marks Obtained"],
    // logo filename/URL
    LogoURL: "logo.png",
    // To include in footer
    FooterAreas: ["Signature of Class Teacher", "Signature of Co-ordinator", "Signature of Principal"],
    // Table Font Size (CSS)
    tableFontSize: "1em"
}