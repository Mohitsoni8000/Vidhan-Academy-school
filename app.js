const express = require('express');
const sequelize = require('./config/config');
const path = require('path');

const app = express();


// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ================= VIEW ENGINE (EJS) =================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//ejs route
app.get("/admissions/create", (req, res) => {
  res.render("createAdmission");
});

app.get("/subjects/create", (req, res) => {
  res.render("createSubject");
});

app.get("/classes/create", (req, res) => {
  res.render("createclass");
});

app.get("/sections/create", (req, res) => {
  res.render("createsection");
});


app.get("/fees/create", (req, res) => {
  res.render("createfees");
});

app.get("/teachers/create", (req, res) => {
  res.render("createteacher");
});

app.get("/dash", (req, res) => {
  res.render("dashboard");
});



app.get('/Inquiry',(req,res)=>{
  res.render("inquiry");
});



// ================= HOME ROUTE =================
app.get('/', (req, res) => {
  res.render('schoolwebsite');
});


// ================= ROUTES =================
app.use('/Subject', require('./routes/subjectroute'));
app.use('/Class', require('./routes/classroute'));
app.use('/Section', require('./routes/sectionroute'));
app.use('/Admission', require('./routes/admissionroute'));
app.use('/Teacher', require('./routes/teacherroute'));
app.use('/Fees', require('./routes/feesroute'));
app.use('/Inquiry', require('./routes/inquiryroute'));


// ================= DATABASE + SERVER START =================
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully ✅');

    await sequelize.sync();
    console.log('Database synced successfully ✅');

    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });

  } catch (error) {
    console.error('Database connection failed ❌', error);
  }
};

startServer();