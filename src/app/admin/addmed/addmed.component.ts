import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { medDeta } from '../models/medDeta.model';
import { MedicineDetaService } from '../services/medicineDeta/medicine-deta.service';

@Component({
  selector: 'app-addmed',
  templateUrl: './addmed.component.html',
  styleUrls: ['./addmed.component.css']
})
export class AddmedComponent implements OnInit {

  image:any;

  constructor( private fb: FormBuilder, private medAddService:MedicineDetaService) { }

  addMedForm!:FormGroup
  ngOnInit(): void {


    this.addMedForm = this.fb.group({
    _id:[''],
    medicine_name : [''],
    quentity: [],
    medicine_type:[''],
    medicine_price:[],
    medicine_image:[''],
    medicine_compogision:[''],
    medicine_work:[''],
    date:[''],
    file:[]
    })
  }

  meddata!:medDeta
  onFileSelected(event:any){
    console.log("hi")
    console.log(event.target.files)
    this.image=event.target.files[0]
    console.log(this.image)
    this.addMedForm.get('file')?.setValue(this.image);
    }
  onSubmit(){
    const file = new FormData
     file.append('image',this.image);
     file.append('_id',(this.addMedForm.get('_id')?.value))
     file.append('medicine_name',(this.addMedForm.get('medicine_name')?.value))
     file.append('quentity',(this.addMedForm.get('quentity')?.value))
     file.append('medicine_type',(this.addMedForm.get('medicine_type')?.value))
    //  file.append('medicine_image',(this.addMedForm.get('medicine_image')?.value))
     file.append('medicine_compogision',(this.addMedForm.get('medicine_compogision')?.value))
     file.append('medicine_work',(this.addMedForm.get('medicine_work')?.value))
     file.append('date',(this.addMedForm.get('date')?.value))
    this.addMedForm.get('file')?.setValue(this.image);
    this.medAddService.addMed(file).subscribe((res:any)=>{
      console.log( res)
      alert("Submit successfully")
    },
    (err)=>{
      console.log(err.message)
      this.meddata = this.addMedForm.value
      console.log(this.meddata)
    }
    )
    
  }

}
function xyz(arg0: string, xyz: any) {
  throw new Error('Function not implemented.');
}

