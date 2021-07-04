import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  contactArray: Contact[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  AddContact(contact: Contact) {
    this.contactArray.push(contact);
    this.contact = new Contact();
    console.log(this.contactArray);
  }
}
