use ("university")

db.students.insertMany([
    { student_id: 1,  name: "Mohamed", age: 22, city: "Cairo",      gpa: 3.5 },
    { student_id: 2,  name: "Ahmed",   age: 23, city: "Giza",       gpa: 3.2 },
    { student_id: 3,  name: "Mai",     age: 21, city: "Alexandria", gpa: 3.8 },
    { student_id: 4,  name: "Sara",    age: 24, city: "Cairo",      gpa: 3.6 },
    { student_id: 5,  name: "Omar",    age: 22, city: "Luxor",      gpa: 3.1 },
    { student_id: 6,  name: "Youssef", age: 20, city: "Aswan",      gpa: 3.4 },
    { student_id: 7,  name: "Hana",    age: 19, city: "Cairo",      gpa: 3.9 },
    { student_id: 8,  name: "Tarek",   age: 25, city: "Giza",       gpa: 3.0 },
    { student_id: 9,  name: "Nour",    age: 22, city: "Alexandria", gpa: 3.7 },
    { student_id: 10, name: "Laila",   age: 23, city: "Cairo",      gpa: 3.5 },

    { student_id: 11, name: "Bassem",  age: 27, city: "Luxor",      gpa: 3.3, email: "bassem11@school.edu",   phone: "01000000011", gender: "Male",   level: 5 },
    { student_id: 12, name: "Farah",   age: 21, city: "Aswan",      gpa: 3.6, email: "farah12@school.edu",    phone: "01000000012", gender: "Female", level: 2 },
    { student_id: 13, name: "Karim",   age: 24, city: "Giza",       gpa: 3.2, email: "karim13@school.edu",    phone: "01000000013", gender: "Male",   level: 4 },
    { student_id: 14, name: "Salma",   age: 20, city: "Cairo",      gpa: 3.8, email: "salma14@school.edu",    phone: "01000000014", gender: "Female", level: 2 },
    { student_id: 15, name: "Yara",    age: 26, city: "Alexandria", gpa: 3.4, email: "yara15@school.edu",     phone: "01000000015", gender: "Female", level: 5 },

    { student_id: 16, name: "Ziad",    age: 22, city: "Luxor",      gpa: 3.1 },
    { student_id: 17, name: "Farida",  age: 19, city: "Cairo",      gpa: 3.9 },
    { student_id: 18, name: "Hassan",  age: 23, city: "Giza",       gpa: 3.0 },
    { student_id: 19, name: "Nada",    age: 21, city: "Aswan",      gpa: 3.7 },
    { student_id: 20, name: "Rania",   age: 24, city: "Cairo",      gpa: 3.5 },

    { student_id: 21, name: "Khaled",  age: -5,  city: "Giza",       gpa: 3.2, email: "khaled21@school.edu",   phone: "01000000021", gender: "Male",   level: 3 },
    { student_id: 22, name: "Mona",    age: -1,  city: "Cairo",      gpa: 3.6, email: "mona22@school.edu",     phone: "01000000022", gender: "Female", level: 2 },
    { student_id: 23, name: "Ramy",    age: 0,   city: "Aswan",      gpa: 3.3, email: "ramy23@school.edu",     phone: "01000000023", gender: "Male",   level: 1 },
    { student_id: 24, name: "Dina",    age: 150, city: "Giza",       gpa: 3.8, email: "dina24@school.edu",     phone: "01000000024", gender: "Female", level: 4 },
    { student_id: 25, name: "Adel",    age: 999, city: "Cairo",      gpa: 3.4, email: "adel25@school.edu",     phone: "01000000025", gender: "Male",   level: 5 },
    { student_id: 26, name: "Sami",    age: null, city: "Luxor",     gpa: 3.1, email: "sami26@school.edu",     phone: "01000000026", gender: "Male",   level: 3 },

    { student_id: 27, name: "Aya",     age: 22, city: "Cairo",      gpa: 3.5 },
    { student_id: 28, name: "Mahmoud", age: 23, city: "Giza",       gpa: 3.0 },
    { student_id: 29, name: "Reem",    age: 21, city: "Alexandria", gpa: 3.7 },
    { student_id: 30, name: "Walid",   age: 24, city: "Luxor",      gpa: 3.2 },

    { student_id: 31, name: "Dalia",   age: 20, city: "Aswan",      gpa: 3.7, email: "dalia31@school.edu",    phone: "01000000031", gender: "Female", level: 2 },
    { student_id: 32, name: "Amr",     age: 25, city: "Cairo",      gpa: 3.6, email: "amr32@school.edu",      phone: "01000000032", gender: "Male",   level: 5 },
    { student_id: 33, name: "Shaimaa", age: 19, city: "Giza",       gpa: 3.9, email: "shaimaa33@school.edu",  phone: "01000000033", gender: "Female", level: 1 },

    { student_id: 34, name: "Tamer",   age: 22, city: "Alexandria", gpa: 3.5 },
    { student_id: 35, name: "Heba",    age: 23, city: "Luxor",      gpa: 3.3 },
    { student_id: 36, name: "Ibrahim", age: 21, city: "Aswan",      gpa: 3.7 },
    { student_id: 37, name: "Menna",   age: 24, city: "Cairo",      gpa: 3.6 },
    { student_id: 38, name: "Mostafa", age: 20, city: "Giza",       gpa: 3.4 },

    { student_id: 39, name: "Noor",    age: 26, city: "Alexandria", gpa: 3.5, email: "noor39@school.edu",     phone: "01000000039", gender: "Female", level: 5 },
    { student_id: 40, name: "Rana",    age: 22, city: "Luxor",      gpa: 3.9, email: "rana40@school.edu",     phone: "01000000040", gender: "Female", level: 3 },

    { student_id: 41, name: "Sherif",  age: 19, city: "Aswan",      gpa: 3.2 },
    { student_id: 42, name: "Amina",   age: 23, city: "Cairo",      gpa: 3.6 },
    { student_id: 43, name: "Fady",    age: 21, city: "Giza",       gpa: 3.4 },
    { student_id: 44, name: "Ghada",   age: 24, city: "Alexandria", gpa: 3.3 },
    { student_id: 45, name: "Hatem",   age: 20, city: "Luxor",      gpa: 3.5 },

    { student_id: 46, name: "Israa",   age: 25, city: "Aswan",      gpa: 3.7, email: "israa46@school.edu",    phone: "01000000046", gender: "Female", level: 5 },
    { student_id: 47, name: "Jana",    age: 19, city: "Cairo",      gpa: 3.8, email: "jana47@school.edu",     phone: "01000000047", gender: "Female", level: 1 },
    { student_id: 48, name: "Kareem",  age: 22, city: "Giza",       gpa: 3.5, email: "kareem48@school.edu",   phone: "01000000048", gender: "Male",   level: 3 },

    { student_id: 49, name: "Lina",    age: 23, city: "Alexandria", gpa: 3.6 },
    { student_id: 50, name: "Marwan",  age: 21, city: "Luxor",      gpa: 3.1 },
    { student_id: 51, name: "Nada",    age: 24, city: "Aswan",      gpa: 3.7 },
    { student_id: 52, name: "Ola",     age: 20, city: "Cairo",      gpa: 3.8 },
    { student_id: 53, name: "Peter",   age: 26, city: "Giza",       gpa: 3.4 },

    { student_id: 54, name: "Rania",   age: 22, city: "Alexandria", gpa: 3.4, email: "rania54@school.edu",    phone: "01000000054", gender: "Female", level: 3 },
    { student_id: 55, name: "Samer",   age: 19, city: "Luxor",      gpa: 3.2, email: "samer55@school.edu",    phone: "01000000055", gender: "Male",   level: 1 },
    { student_id: 56, name: "Tasneem", age: 23, city: "Aswan",      gpa: 3.6, email: "tasneem56@school.edu",  phone: "01000000056", gender: "Female", level: 4 },

    { student_id: 57, name: "Usama",   age: 21, city: "Cairo",      gpa: 3.5 },
    { student_id: 58, name: "Viola",   age: 24, city: "Giza",       gpa: 3.2 },
    { student_id: 59, name: "Wael",    age: 20, city: "Alexandria", gpa: 3.4 },
    { student_id: 60, name: "Yasmin",  age: 25, city: "Luxor",      gpa: 3.9 },
    { student_id: 61, name: "Zain",    age: 19, city: "Aswan",      gpa: 3.3 },

    { student_id: 62, name: "Abdelrahman", age: 22, city: "Cairo",  gpa: 3.3, email: "abdel62@school.edu",    phone: "01000000062", gender: "Male",   level: 3 },
    { student_id: 63, name: "Basma",   age: 23, city: "Giza",       gpa: 3.7, email: "basma63@school.edu",    phone: "01000000063", gender: "Female", level: 4 },
    { student_id: 64, name: "Cyrine",  age: 21, city: "Alexandria", gpa: 3.8, email: "cyrine64@school.edu",   phone: "01000000064", gender: "Female", level: 2 },

    { student_id: 65, name: "Doaa",    age: 24, city: "Luxor",      gpa: 3.5 },
    { student_id: 66, name: "Ehab",    age: 20, city: "Aswan",      gpa: 3.5 },
    { student_id: 67, name: "Fatma",   age: 26, city: "Cairo",      gpa: 3.6 },
    { student_id: 68, name: "Gamal",   age: 22, city: "Giza",       gpa: 3.1 },
    { student_id: 69, name: "Hala",    age: 19, city: "Alexandria", gpa: 3.4 },

    { student_id: 70, name: "Islam",   age: 23, city: "Luxor",      gpa: 3.6, email: "islam70@school.edu",    phone: "01000000070", gender: "Male",   level: 4 },
    { student_id: 71, name: "Jihad",   age: 21, city: "Aswan",      gpa: 3.4, email: "jihad71@school.edu",    phone: "01000000071", gender: "Male",   level: 2 },
    { student_id: 72, name: "Kholoud", age: 24, city: "Cairo",      gpa: 3.8, email: "kholoud72@school.edu",  phone: "01000000072", gender: "Female", level: 4 },

    { student_id: 73, name: "Loay",    age: 20, city: "Giza",       gpa: 3.3 },
    { student_id: 74, name: "Mariam",  age: 25, city: "Alexandria", gpa: 3.9 },
    { student_id: 75, name: "Nabil",   age: 19, city: "Luxor",      gpa: 3.2 },
    { student_id: 76, name: "Ola",     age: 22, city: "Aswan",      gpa: 3.4 },
    { student_id: 77, name: "Passant", age: 23, city: "Cairo",      gpa: 3.5 },

    { student_id: 78, name: "Ramy",    age: 21, city: "Giza",       gpa: 3.2, email: "ramy78@school.edu",     phone: "01000000078", gender: "Male",   level: 2 },
    { student_id: 79, name: "Sondos",  age: 24, city: "Alexandria", gpa: 3.9, email: "sondos79@school.edu",   phone: "01000000079", gender: "Female", level: 4 },
    { student_id: 80, name: "Tarek",   age: 20, city: "Luxor",      gpa: 3.5, email: "tarek80@school.edu",    phone: "01000000080", gender: "Male",   level: 2 },

    { student_id: 81, name: "Abeer",   age: 26, city: "Aswan",      gpa: 3.6 },
    { student_id: 82, name: "Bilal",   age: 22, city: "Cairo",      gpa: 3.7 },
    { student_id: 83, name: "Camelia", age: 19, city: "Giza",       gpa: 3.8 },
    { student_id: 84, name: "Diaa",    age: 23, city: "Alexandria", gpa: 3.1 },
    { student_id: 85, name: "Eman",    age: 21, city: "Luxor",      gpa: 3.4 },

    { student_id: 86, name: "Fouad",   age: 24, city: "Aswan",      gpa: 3.3, email: "fouad86@school.edu",    phone: "01000000086", gender: "Male",   level: 4 },
    { student_id: 87, name: "Gihan",   age: 20, city: "Cairo",      gpa: 3.7, email: "gihan87@school.edu",    phone: "01000000087", gender: "Female", level: 2 },
    { student_id: 88, name: "Hany",    age: 25, city: "Giza",       gpa: 3.6, email: "hany88@school.edu",     phone: "01000000088", gender: "Male",   level: 5 },

    { student_id: 89, name: "Iman",    age: 19, city: "Alexandria", gpa: 3.5 },
    { student_id: 90, name: "Jamal",   age: 22, city: "Luxor",      gpa: 3.4 },
    { student_id: 91, name: "Karma",   age: 23, city: "Aswan",      gpa: 3.6 },
    { student_id: 92, name: "Lamia",   age: 21, city: "Cairo",      gpa: 3.8 },
    { student_id: 93, name: "Maged",   age: 24, city: "Giza",       gpa: 3.3 },

    { student_id: 94, name: "Nesma",   age: 20, city: "Alexandria", gpa: 3.9, email: "nesma94@school.edu",    phone: "01000000094", gender: "Female", level: 2 },
    { student_id: 95, name: "Osama",   age: 26, city: "Luxor",      gpa: 3.5, email: "osama95@school.edu",    phone: "01000000095", gender: "Male",   level: 5 },
    { student_id: 96, name: "Rasha",   age: 22, city: "Aswan",      gpa: 3.4, email: "rasha96@school.edu",    phone: "01000000096", gender: "Female", level: 3 },

    { student_id: 97, name: "Sameh",   age: 19, city: "Cairo",      gpa: 3.6 },
    { student_id: 98, name: "Tamer",   age: 23, city: "Giza",       gpa: 3.2 },
    { student_id: 99, name: "Vivian",  age: 21, city: "Alexandria", gpa: 3.7 },

    { student_id: 100, name: "Youssef", age: 24, city: "Luxor",     gpa: 3.6, email: "youssef100@school.edu", phone: "01000000100", gender: "Male",   level: 4 }
])

db.attendances.insertMany([
    { student_id: 1,  date: "2026-10-01", status: "Present" },
    { student_id: 2,  date: "2026-10-01", status: "Absent"  },
    { student_id: 3,  date: "2026-10-01", status: "Present" },
    { student_id: 4,  date: "2026-10-01", status: "Present" },
    { student_id: 5,  date: "2026-10-01", status: "Absent"  },
    { student_id: 6,  date: "2026-10-01", status: "Present" },
    { student_id: 7,  date: "2026-10-01", status: "Present" },
    { student_id: 8,  date: "2026-10-01", status: "Absent"  },
    { student_id: 9,  date: "2026-10-01", status: "Present" },
    { student_id: 10, date: "2026-10-01", status: "Present" },

    { student_id: 11, date: "2026-10-02", status: "Present", note: "arrived late" },
    { student_id: 12, date: "2026-10-02", status: "Absent"  },
    { student_id: 13, date: "2026-10-02", status: "Present", note: "excused" },
    { student_id: 14, date: "2026-10-02", status: "Present" },
    { student_id: 15, date: "2026-10-02", status: "Absent"  },

    { student_id: 16, date: "2026-10-02", status: "Present" },
    { student_id: 17, date: "2026-10-02", status: "Present" },
    { student_id: 18, date: "2026-10-02", status: "Absent"  },
    { student_id: 19, date: "2026-10-02", status: "Present" },
    { student_id: 20, date: "2026-10-02", status: "Present" },

    { student_id: 21, date: "2026-10-03", status: "Present", note: "checked in" },
    { student_id: 22, date: "2026-10-03", status: "Absent"  },
    { student_id: 23, date: "2026-10-03", status: "Present" },
    { student_id: 24, date: "2026-10-03", status: "Present", note: "verified" },
    { student_id: 25, date: "2026-10-03", status: "Absent"  },
    { student_id: 26, date: "2026-10-03", status: "Present" },

    { student_id: 27, date: "2026-10-03", status: "Present" },
    { student_id: 28, date: "2026-10-03", status: "Absent"  },
    { student_id: 29, date: "2026-10-03", status: "Present" },
    { student_id: 30, date: "2026-10-03", status: "Present" },

    { student_id: 31, date: "2026-10-04", status: "Present", note: "on time" },
    { student_id: 32, date: "2026-10-04", status: "Present", note: "late 5 min" },
    { student_id: 33, date: "2026-10-04", status: "Absent"  },

    { student_id: 34, date: "2026-10-04", status: "Present" },
    { student_id: 35, date: "2026-10-04", status: "Absent"  },
    { student_id: 36, date: "2026-10-04", status: "Present" },
    { student_id: 37, date: "2026-10-04", status: "Present" },
    { student_id: 38, date: "2026-10-04", status: "Absent"  },

    { student_id: 39, date: "2026-10-05", status: "Present", note: "excused" },
    { student_id: 40, date: "2026-10-05", status: "Present" },

    { student_id: 41, date: "2026-10-05", status: "Absent"  },
    { student_id: 42, date: "2026-10-05", status: "Present" },
    { student_id: 43, date: "2026-10-05", status: "Present" },
    { student_id: 44, date: "2026-10-05", status: "Absent"  },
    { student_id: 45, date: "2026-10-05", status: "Present" },

    { student_id: 46, date: "2026-10-06", status: "Present", note: "medical" },
    { student_id: 47, date: "2026-10-06", status: "Present" },
    { student_id: 48, date: "2026-10-06", status: "Absent"  },

    { student_id: 49, date: "2026-10-06", status: "Present" },
    { student_id: 50, date: "2026-10-06", status: "Absent"  },
    { student_id: 51, date: "2026-10-06", status: "Present" },
    { student_id: 52, date: "2026-10-06", status: "Present" },
    { student_id: 53, date: "2026-10-06", status: "Absent"  },

    { student_id: 54, date: "2026-10-07", status: "Present", note: "checked in" },
    { student_id: 55, date: "2026-10-07", status: "Absent"  },
    { student_id: 56, date: "2026-10-07", status: "Present" },

    { student_id: 57, date: "2026-10-07", status: "Present" },
    { student_id: 58, date: "2026-10-07", status: "Absent"  },
    { student_id: 59, date: "2026-10-07", status: "Present" },
    { student_id: 60, date: "2026-10-07", status: "Present" },
    { student_id: 61, date: "2026-10-07", status: "Absent"  },

    { student_id: 62, date: "2026-10-08", status: "Present", note: "verified" },
    { student_id: 63, date: "2026-10-08", status: "Present" },
    { student_id: 64, date: "2026-10-08", status: "Absent"  },

    { student_id: 65, date: "2026-10-08", status: "Present" },
    { student_id: 66, date: "2026-10-08", status: "Absent"  },
    { student_id: 67, date: "2026-10-08", status: "Present" },
    { student_id: 68, date: "2026-10-08", status: "Present" },
    { student_id: 69, date: "2026-10-08", status: "Absent"  },

    { student_id: 70, date: "2026-10-09", status: "Present", note: "on time" },
    { student_id: 71, date: "2026-10-09", status: "Present" },
    { student_id: 72, date: "2026-10-09", status: "Absent"  },

    { student_id: 73, date: "2026-10-09", status: "Present" },
    { student_id: 74, date: "2026-10-09", status: "Present" },
    { student_id: 75, date: "2026-10-09", status: "Absent"  },
    { student_id: 76, date: "2026-10-09", status: "Present" },
    { student_id: 77, date: "2026-10-09", status: "Present" },

    { student_id: 78, date: "2026-10-10", status: "Present", note: "late" },
    { student_id: 79, date: "2026-10-10", status: "Present" },
    { student_id: 80, date: "2026-10-10", status: "Absent"  },

    { student_id: 81, date: "2026-10-10", status: "Present" },
    { student_id: 82, date: "2026-10-10", status: "Absent"  },
    { student_id: 83, date: "2026-10-10", status: "Present" },
    { student_id: 84, date: "2026-10-10", status: "Present" },
    { student_id: 85, date: "2026-10-10", status: "Absent"  },

    { student_id: 86, date: "2026-10-11", status: "Present", note: "excused" },
    { student_id: 87, date: "2026-10-11", status: "Present" },
    { student_id: 88, date: "2026-10-11", status: "Absent"  },

    { student_id: 89, date: "2026-10-11", status: "Present" },
    { student_id: 90, date: "2026-10-11", status: "Present" },
    { student_id: 91, date: "2026-10-11", status: "Absent"  },
    { student_id: 92, date: "2026-10-11", status: "Present" },
    { student_id: 93, date: "2026-10-11", status: "Absent"  },

    { student_id: 94, date: "2026-10-12", status: "Present", note: "on time" },
    { student_id: 95, date: "2026-10-12", status: "Present" },
    { student_id: 96, date: "2026-10-12", status: "Absent"  },

    { student_id: 97, date: "2026-10-12", status: "Present" },
    { student_id: 98, date: "2026-10-12", status: "Absent"  },
    { student_id: 99, date: "2026-10-12", status: "Present" },

    { student_id: 100, date: "2026-10-12", status: "Present", note: "verified" },

    { student_id: 101, date: "2026-10-13", status: "present" },
    { student_id: 102, date: "2026-10-13", status: "Maybe"   },
    { student_id: 103, date: "2026-10-13", status: null      },
    { student_id: 999, date: "2026-10-13", status: "Present", note: "orphan" }
])


db.grades.insertMany([
    { student_id: 1,  math: 90, python: 87 },
    { student_id: 2,  math: 80, python: 76 },
    { student_id: 3,  math: 84, python: 88 },
    { student_id: 4,  math: 75, python: 90 },
    { student_id: 5,  math: 70, python: 95 },
    { student_id: 6,  math: 70, python: 88 },
    { student_id: 7,  math: 95, python: 85 },
    { student_id: 8,  math: 60, python: 72 },
    { student_id: 9,  math: 83, python: 92 },
    { student_id: 10, math: 78, python: 81 },

    { student_id: 11, math: 85, python: 83, note: "improved" },
    { student_id: 12, math: 88, python: 79 },
    { student_id: 13, math: 86, python: 91, note: "top of class" },
    { student_id: 14, math: 67, python: 74 },
    { student_id: 15, math: 72, python: 74 },

    { student_id: 16, math: 82, python: 77 },
    { student_id: 17, math: 89, python: 96 },
    { student_id: 18, math: 79, python: 84 },
    { student_id: 19, math: 68, python: 71 },
    { student_id: 20, math: 87, python: 90 },

    { student_id: 21, math: 120, python: 85, note: "needs review" },
    { student_id: 22, math: -10, python: 70, note: "invalid" },
    { student_id: 23, math: 200, python: 88, note: "invalid" },
    { student_id: 24, math: 65,  python: 72 },
    { student_id: 25, math: 55,  python: 61 },
    { student_id: 26, math: 72,  python: 68 },

    { student_id: 27, math: 76, python: 80 },
    { student_id: 28, math: 68, python: 73 },
    { student_id: 29, math: 82, python: 91 },
    { student_id: 30, math: 77, python: 81 },

    { student_id: 31, math: 79, python: 84, note: "improved" },
    { student_id: 32, math: 89, python: 86, note: "top of class" },
    { student_id: 33, math: 88, python: 93 },

    { student_id: 34, math: 66, python: 70 },
    { student_id: 35, math: 74, python: 79 },
    { student_id: 36, math: 81, python: 78 },
    { student_id: 37, math: 69, python: 74 },
    { student_id: 38, math: 88, python: 90 },

    { student_id: 39, math: 85, python: 90, note: "verified" },
    { student_id: 40, math: 76, python: 82 },

    { student_id: 41, math: 78, python: 82 },
    { student_id: 42, math: 69, python: 75 },
    { student_id: 43, math: 87, python: 94 },
    { student_id: 44, math: 71, python: 76 },
    { student_id: 45, math: 80, python: 85 },

    { student_id: 46, math: 87, python: 91, note: "excused" },
    { student_id: 47, math: 84, python: 92 },
    { student_id: 48, math: 63, python: 68 },

    { student_id: 49, math: 73, python: 78 },
    { student_id: 50, math: 90, python: 85 },
    { student_id: 51, math: 76, python: 81 },
    { student_id: 52, math: 74, python: 79 },
    { student_id: 53, math: 82, python: 88 },

    { student_id: 54, math: 79, python: 83, note: "checked" },
    { student_id: 55, math: 80, python: 86 },
    { student_id: 56, math: 91, python: 87 },

    { student_id: 57, math: 67, python: 72 },
    { student_id: 58, math: 83, python: 80 },
    { student_id: 59, math: 71, python: 77 },
    { student_id: 60, math: 95, python: 92 },
    { student_id: 61, math: 63, python: 68 },

    { student_id: 62, math: 84, python: 88, note: "on track" },
    { student_id: 63, math: 83, python: 89 },
    { student_id: 64, math: 73, python: 77 },

    { student_id: 65, math: 75, python: 80 },
    { student_id: 66, math: 67, python: 71 },
    { student_id: 67, math: 86, python: 93 },
    { student_id: 68, math: 75, python: 80 },
    { student_id: 69, math: 77, python: 82 },

    { student_id: 70, math: 88, python: 84, note: "good" },
    { student_id: 71, math: 70, python: 76 },
    { student_id: 72, math: 90, python: 93 },

    { student_id: 73, math: 60, python: 65 },
    { student_id: 74, math: 94, python: 90 },
    { student_id: 75, math: 65, python: 70 },
    { student_id: 76, math: 81, python: 85 },
    { student_id: 77, math: 82, python: 87 },

    { student_id: 78, math: 72, python: 76, note: "improving" },
    { student_id: 79, math: 90, python: 96 },
    { student_id: 80, math: 79, python: 83 },

    { student_id: 81, math: 78, python: 84 },
    { student_id: 82, math: 68, python: 73 },
    { student_id: 83, math: 85, python: 91 },
    { student_id: 84, math: 77, python: 81 },
    { student_id: 85, math: 68, python: 73 },

    { student_id: 86, math: 85, python: 89, note: "verified" },
    { student_id: 87, math: 83, python: 89 },
    { student_id: 88, math: 92, python: 88 },

    { student_id: 89, math: 66, python: 71 },
    { student_id: 90, math: 78, python: 82 },
    { student_id: 91, math: 77, python: 83 },
    { student_id: 92, math: 90, python: 86 },
    { student_id: 93, math: 61, python: 66 },

    { student_id: 94, math: 95, python: 91, note: "top" },
    { student_id: 95, math: 82, python: 88 },
    { student_id: 96, math: 74, python: 79 },

    { student_id: 97, math: 75, python: 80 },
    { student_id: 98, math: 69, python: 74 },
    { student_id: 99, math: 80, python: 86 },

    { student_id: 100, math: 92, python: 89, note: "verified" },

    { student_id: 101, math: 60, python: 65 },
    { student_id: 102, math: 71, python: 77 },
    { student_id: 103, math: 70, python: 75 },
    { student_id: 104, math: "65", python: 72 },
    { student_id: 999, math: 85, python: 80, note: "orphan" }
])

db.attendances.find()