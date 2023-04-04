import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute: 'Maharaja Surajmal Institute of Technology',
      course: 'B.Tech in Information Technology',
      duration: '2019-2023',
      score: '92%',
    },
    {
      institute: 'Goodley Public School',
      course: 'Higher Secondary Certificate',
      duration: '2017-1018',
      score: '81%',
    },
    {
      institute: 'Goodley Public School',
      course: 'Secondary School Certificate',
      duration: '2015-2016',
      score: '95%',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
