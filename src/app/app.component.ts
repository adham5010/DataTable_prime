import { Component } from '@angular/core';
import { sampleCustomers } from './Cus';
import { UsersService } from './app.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any[]=[];
  cols:any[] = [];
  columnOptions: SelectItem[];
      constructor(private UsersService:UsersService) { }
      ngOnInit() {
       this.UsersService.getAllUsers().subscribe((data)=>{
        this.data = data;
        for (let Key in data[0]) {
          if(!(Key.toLowerCase()=='id' || Key.toLowerCase()=='password'))
          this.cols.push({field: Key, header: Key}); 
        }
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
       });          
      }
      
}
