import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimelineApiService } from 'src/app/services/timeline-api.service';
import { EmailResponseApiService } from 'src/app/services/email-response-api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() action!: (email:string, text: string) => {};
  @Input() togglemenu!: (event: any) => void;
  apiService: TimelineApiService;
  name: string | null;
  email: string;
  phone: string;
  message: string;
  nameValidated: boolean;
  emailValidated: boolean;
  phoneValidated: boolean;
  messageValidated: boolean;
  btnDisabled: boolean;

  constructor(private http: HttpClient) {
    this.apiService = new TimelineApiService(this.http);
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
    this.nameValidated = false;
    this.emailValidated = false;
    this.phoneValidated = false;
    this.messageValidated = false;
    this.btnDisabled = true;
  }

  ngOnInit() {
  }

  async sendContact(event: MouseEvent){
    const target = event.target as HTMLButtonElement;
    target.className = `${target.className} loading`;
    target.innerHTML = `<img style="max-width:25px;" src="/assets/img/loading.svg"/>`;
    const text = `Nome: ${this.name}\n Email: ${this.email}\n Telefone: ${this.phone}\n Mensagem: ${this.message}`
    this.apiService.sendMail(this.email, text)
     .subscribe((response: EmailResponseApiService) => {
       if(response.status === 'OK'){
        const passarito = document.getElementById('passarito_contact') as HTMLObjectElement;
        passarito.classList.remove('loading');
        passarito.classList.add('animateFadeIn');
        target.innerHTML = 'enviado';
        target.className = 'right sucess'
       }else{
        alert('Sentimos muito. Houve um erro ao enviar sua mensagem.')
        target.innerHTML = 'enviar';
        target.className = 'right';
       }
     });
  }

  handleNameInput(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  handleEmailInput(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.email = target.value;
  }

  handlePhoneInput(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
  }

  handleMessageInput(event: KeyboardEvent){
    const target = event.target as HTMLTextAreaElement;
    this.message = target.value;
  }
  nameReady(event: boolean){
    this.nameValidated = event;
    this.btnDisabled = !this.isFormReady();
  }
  
  emailReady(event: boolean){
    this.emailValidated = event;
    this.btnDisabled = !this.isFormReady();
  }

  phoneReady(event: boolean){
    this.phoneValidated = event;
    this.btnDisabled = !this.isFormReady();
  }

  messageReady(event: boolean){
    this.messageValidated = event;
    this.btnDisabled = !this.isFormReady();
  }
  isFormReady(): boolean{
    return this.nameValidated && this.emailValidated && this.phoneValidated && this.messageValidated;
  }
}
