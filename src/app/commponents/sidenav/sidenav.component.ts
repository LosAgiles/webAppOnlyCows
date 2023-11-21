import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {UserService} from "../../services/user.service";

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
          style({opacity:1})
          )
      ]),
      transition(':leave',[
        style({opacity:0}),
        animate('350ms',
          style({opacity:1})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
            keyframes([
              style({transform:'rotate(0deg)', offset:'0'}),
              style({transform:'rotate(2turn)', offset:'1'}),
            ]))
      ])
    ])

  ]
})
export class SidenavComponent implements OnInit{

  @Output()onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()

  screenWidth = 0
  collapsed=false
  navData=navbarData
  showSideNav:boolean=false

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth
    if(this.screenWidth<=768){
      this.collapsed=false
      this.onToggleSideNav.emit(
        {collapsed:this.collapsed, screenWidth:this.screenWidth})
    }
  }

  constructor(private _userService:UserService) {

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit(
      {collapsed:this.collapsed, screenWidth:this.screenWidth})
  }

  closeSideNav(){
    this.collapsed=false
    this.onToggleSideNav.emit(
      {collapsed:this.collapsed, screenWidth:this.screenWidth})
  }

  getShowSideNav(){
    return this.showSideNav
  }
}
