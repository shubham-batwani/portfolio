import { Component, OnInit } from '@angular/core';
import {Projects} from '../models/models'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList: Projects[] = [
    {

      image: '../../assets/icons8-speech-bubble-50.png',
      name: 'Flock: Real Time Chat App',
      description: 'It is a Real time char platform, which enables user to join a chat room and interact collectively. It is a Full Stack website where server uses Web Sockets to respond with the messages to the selective groups and users.',
    },
    {
      image: '../../assets/icons8-social-60.png',
      name: 'Mock Social Media',
      description: 'A Full Stack App which lets user posts anything on their wall and subsequently comment and like others posts. NodeJs is used for backend along with sequelize as a ORM of mysql.',
    },
    {
      image: '../../assets/icons8-white-board-96.png',
      name: 'Virtual Board',
      description: 'An online Web app purelu made out of Fundamental development tools which enables user to sketch their thoughts on the white canves, the Vanilla Js is used for providing dynamic behaviour to website.',
    },
    {
      image: '../../assets/icons8-tic-tac-toe-64.png',
      name: 'Tic-Tac-Toe',
      description: 'A terminal based game coded in C++- which needs two users to play together simultaneously.Basic programming fundamntals and logic is used for the functioning of project.',
    },
    {
      image: '../../assets/icons8-snake-64.png',
      name: 'Web Game',
      description: 'A Two-Dimentional old school interactive Snake game developed on web frontend which responds to user actions and displays the score to the players.',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
