import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateForm(event: string){
    const value = event;
  }

  public contactFormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    emailAddress: new FormControl("")
  })

  submitForm() {
    alert(JSON.stringify(this.contactFormGroup.value));
  }
}
