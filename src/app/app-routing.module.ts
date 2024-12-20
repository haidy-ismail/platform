import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentComponent } from './components/payment/payment/payment.component';
import { ApprovPaymentComponent } from './components/payment/approv-payment/approv-payment.component';
import { TeacherDashComponent } from './components/teacherDash/teacher-dash/teacher-dash.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponent } from './components/main/main.component';
import { StudentComponent } from './components/student/student.component';
import { ExamComponent } from './components/exam/exam.component';
import { PaperComponent } from './components/paper/paper.component';
import { ClassComponent } from './components/class/class.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { SignStudentComponent } from './components/sign-student/sign-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { PolicyComponent } from './components/policy/policy.component';
import { CovenantsComponent } from './components/covenants/covenants.component';
import { PrepExamComponent } from './components/prep-exam/prep-exam.component';
import { DegreeComponent } from './components/degree/degree.component';
import { ExamPaperComponent } from './components/exam-paper/exam-paper.component';
import { TestComponent } from './components/test/test.component';
import { AdminComponent } from './components/admin/admin.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { Curriculum2Component } from './components/curriculum2/curriculum2.component';
import { StudyScheduleComponent } from './components/study-schedule/study-schedule.component';
import { StudentTransComponent } from './components/student-trans/student-trans.component';
import { ReasonTransferComponent } from './components/reason-transfer/reason-transfer.component';
import { MainSkillsComponent } from './components/main-skills/main-skills.component';
import { FinalScheduleComponent } from './components/final-schedule/final-schedule.component';
import { StatementComponent } from './components/statement/statement.component';

const routes: Routes = [
  {path:'login', component:SignupFormComponent},
  {path:'sign-up',component:LoginFormComponent},
  {path:'home',component:HomeComponent},
  {path:'payment',component:PaymentComponent},
  {path:'approve',component:ApprovPaymentComponent},
  {path:'teacherDash',component:TeacherDashComponent},
  {path:'payment', component:PaymentComponent},
  {path:'profile',component:ProfileComponent},
  {path:'approve', component:ApprovPaymentComponent},
  {path:'main',component:MainComponent},
  {path:'student',component:StudentComponent},
  {path:'exam',component:ExamComponent},
  {path:'paper',component:PaperComponent},
  {path:'class',component:ClassComponent},
  {path:'studentPro',component:StudentProfileComponent},
  {path:'signStudent',component:SignStudentComponent},
  {path:'loginStudent',component:LoginStudentComponent},
  {path:'policy',component:PolicyComponent},
  {path:'degree',component:DegreeComponent},
  {path:'covenants',component:CovenantsComponent},
  {path:'prepExam',component:PrepExamComponent},
  {path:'examPaper',component:ExamPaperComponent},
  {path:'adminForm',component:AdminComponent},
  {path:'skills',component:SkillsComponent},
  {path:'try',component:SignUpComponent},
  {path:'certificate',component:CertificatesComponent},
  {path:'teacher',component:TestComponent},
  {path:'curriculum',component:CurriculumComponent},
  {path:'curriculumT', component:Curriculum2Component},
  {path:'study',component:StudyScheduleComponent},
  {path:'transfer',component:StudentTransComponent},
  {path:'reason',component:ReasonTransferComponent},
  {path:'mainSkill',component:MainSkillsComponent},
  {path:'final',component:FinalScheduleComponent},
  {path:'statement',component:StatementComponent},
  {path:'',component:LoginFormComponent},
  {path:'**',component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
