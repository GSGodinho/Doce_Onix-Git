import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Brownie } from '../Brownies';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  
  BrowniesForm: FormGroup|any;
  brownie= new Brownie();
  errorMessage:string|undefined;
  hasErrors: boolean | undefined;




  constructor(private formBuild: FormBuilder,private alert: AlertController) { }



  ngOnInit():void {
    this.BrowniesForm=this.formBuild.group(
    { 
      id: new FormControl(this.brownie.ID,[Validators.required]),
      nome: new FormControl(this.brownie.nome,[Validators.required,Validators.minLength(4)]),
      preco: new FormControl(this.brownie.preco,[Validators.required]),
      descricao: new FormControl(this.brownie.descricao,[Validators.required]),
      dataFabricao: new FormControl(this.brownie.dataFabricacao,[Validators.required])
    })
  }

  async Enviar()
  {
    this.errorMessage='';
    if (this.BrowniesForm.get("id").hasError('required'))
      {
        this.errorMessage=this.errorMessage+"Id é obrigatório.";
      };
    if (this.BrowniesForm.get("nome").hasError('required'))
      {
        this.errorMessage=this.errorMessage+"Nome é obrigatório.";
      };
    if (this.BrowniesForm.get("nome").hasError('minLength'))
      {
        this.errorMessage=this.errorMessage+"Minimo de 4 Caracteres em Nome";
      };
    if (this.BrowniesForm.get("preco").hasError('required'))
      {
        this.errorMessage=this.errorMessage+"Preco é obrigatório.";
      };
    if (this.BrowniesForm.get("descricao").hasError('required'))
      {
        this.errorMessage=this.errorMessage+"Descrição é obrigatório.";
      }
    if (this.BrowniesForm.get("dataFabricao").hasError('required'))
      {
        this.errorMessage=this.errorMessage+"Data é obrigatório.";
      };

      this.hasErrors = this.errorMessage.length > 0;
      
      if(!this.hasErrors)
        {
          await this.presentAlert('Sucesso','Cadastro Bem sucedido','Gravado com sucesso',['OK'])
        }else
        {
          await this.presentAlert('ERROR','Cadastro MAL sucedido',this.errorMessage,['OK'])
        }
  }
  async presentAlert(header: string, subHeader: string, message: string, buttons: string[]){
    const alert = await this.alert.create({
      header,
      subHeader,
      message,
      buttons
    });
    await alert.present();
  }


}
