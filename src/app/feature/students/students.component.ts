import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, OnDestroy {
  isLoading = false;
  errorMessage = null;
  studentsData: any = [
    {name:'Amit',class:'1',section:'A',sub1:'PCM',sub2:'ECE',sub3:'CSC'},
    {name:'Ram',class:'3',section:'z',sub1:'PRM',sub2:'ECE',sub3:'CSC'},
    {name:'Namre',class:'4',section:'x',sub1:'ERM',sub2:'ECE',sub3:'CSC'},
    {name:'Kamer',class:'9',section:'d',sub1:'CPM',sub2:'ECE',sub3:'CSC'},
    {name:'asdd',class:'3',section:'e',sub1:'KCM',sub2:'ECE',sub3:'CSC'},
  ];
  studentsDataKey: any = []
  studentsSubs!: Subscription;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.isLoading = true;
    // this.studentsSubs = this.studentService
    //   .getStudents()
    //   .pipe(
    //     map((response:any) => {
    //       // for (let key of Object.keys(Object.values(response)[0])) {
    //       //   this.studentsDataKey.push(key);
    //       // }
    //       // // [this.studentsDataKey[0], this.studentsDataKey[1]] = [
    //       // //   this.studentsDataKey[1],
    //       // //   this.studentsDataKey[0],
    //       // // ];

    //       // for (let value of Object.values(response)) {
    //       //   this.studentsData.push(value);
    //       // }
    //       this.studentsDataKey = response['data'].map((res: any) => res.id);
    //       response['data'].map((res: any) => {
    //         this.studentsData.push({
    //           name: res.employee_name,
    //           class: Math.random(),
    //           section: res.employee_age,
    //           sub1: "PCM",
    //           sub2: "ECE",
    //           sub3: "CSC",
  
    //         })
    //       })
         

    //     })
    //   )
    //   .subscribe(
    //     () => (this.isLoading = false),
    //     (error) => {
    //       this.errorMessage = error.message;
    //     }
    //   );
  }



  ngOnDestroy() {
   // this.studentsSubs.unsubscribe();
  }
}
