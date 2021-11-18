import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { medDeta } from '../models/medDeta.model';
import { MedicineDetaService } from '../services/medicineDeta/medicine-deta.service';

@Component({
  selector: 'app-updatemed-deta',
  templateUrl: './updatemed-deta.component.html',
  styleUrls: ['./updatemed-deta.component.css']
})
export class UpdatemedDetaComponent implements OnInit {

  constructor(private route:ActivatedRoute,private medAddService:MedicineDetaService,private fb: FormBuilder) { }
  id:any;
  med_deta:medDeta={
    _id: '',
    medicine_name: '',
    quentity: 0,
    medicine_type: '',
    medicine_price: 0,
    medicine_image: '',
    medicine_compogision: '',
    medicine_work: '',
    date: ''
  }

  updateMedForm!:FormGroup
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMeddeta()

    this.updateMedForm = this.fb.group({
      _id:[],
      medicine_name : [],
      quentity: [],
      medicine_type:[''],
      medicine_price:[],
      medicine_image:[''],
      medicine_compogision:[''],
      medicine_work:[''],
      date:[''],
      })
      
  }
  getMeddeta(){
    this.medAddService.getMedListById(this.id).subscribe(
      (res)=>{
        this.med_deta = res;
        this.updateMedForm.get('_id')?.setValue(this.med_deta._id)
        this.updateMedForm.get('medicine_name')?.setValue(this.med_deta.medicine_name)
        this.updateMedForm.get('quentity')?.setValue(this.med_deta.quentity)
        this.updateMedForm.get('medicine_type')?.setValue(this.med_deta.medicine_type)
        this.updateMedForm.get('medicine_price')?.setValue(this.med_deta.medicine_price)
        this.updateMedForm.get('medicine_image')?.setValue(this.med_deta.medicine_image)
        this.updateMedForm.get('medicine_compogision')?.setValue(this.med_deta.medicine_compogision)
        this.updateMedForm.get('medicine_compogision')?.setValue(this.med_deta.medicine_compogision)
        this.updateMedForm.get('medicine_work')?.setValue(this.med_deta.medicine_work)
        this.updateMedForm.get('date')?.setValue(this.med_deta.date)
      },(err)=>{
        console.log(err.message)
      }

    )
  }
  onSubmit(){
    console.log(this.updateMedForm.value)
    this.medAddService.updateMed(this.updateMedForm.value).subscribe(
      (res)=>{
        console.log("ok")
        alert("update success")
      },
      (err)=>{
        console.log(err.message)
      }
    )
  }

}
