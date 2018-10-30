import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppvarProvider } from '../../providers/appvar/appvar';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  server = {
    host:'192.168.0.117',
    port:'2018'
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appvar:AppvarProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  saveSetting(server){
    this.appvar.server = server
  }
}
