import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'] // Use styleUrls instead of styleUrl
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
 
  submitForm() {
    // You would typically implement HTTP service to send the form data to your server here
    // For example, using Angular HttpClient to make a POST request to your server endpoint
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
