"use strict";(self.webpackChunkthincode=self.webpackChunkthincode||[]).push([[907],{7907:(C,f,n)=>{n.r(f),n.d(f,{PerfilModule:()=>H});var m=n(4666),c=n(7340),o=n(2560),d=n(1059),r=n(2508),a=n(9857),u=n(8091),w=n(4981);function P(s,i){1&s&&(o.TgZ(0,"div",19)(1,"div")(2,"small"),o._uU(3,"*Campo requerido"),o.qZA()()())}function E(s,i){1&s&&(o.TgZ(0,"div",19)(1,"div")(2,"small"),o._uU(3,"*Campo requerido"),o.qZA()()())}function N(s,i){1&s&&(o.TgZ(0,"div",19)(1,"div")(2,"small"),o._uU(3,"*Campo requerido"),o.qZA()()())}function Z(s,i){1&s&&(o.TgZ(0,"div",19)(1,"div")(2,"small"),o._uU(3,"*Campo requerido"),o.qZA()()())}function T(s,i){1&s&&(o.TgZ(0,"div",19)(1,"div")(2,"small"),o._uU(3,"*Campo requerido"),o.qZA()(),o.TgZ(4,"div")(5,"small"),o._uU(6,"*Formato no valido."),o.qZA()()())}function U(s,i){if(1&s){const e=o.EpF();o.TgZ(0,"div",8)(1,"div",20)(2,"button",21),o.NdJ("click",function(){o.CHM(e);const l=o.oxw();return o.KtG(l.guardar())}),o._uU(3),o.qZA()()()}if(2&s){const e=o.oxw();o.xp6(3),o.Oqu(e.nameButtom)}}const p=function(s){return{"is-invalid":s}};let I=(()=>{class s{constructor(e,t,l){this._formB=e,this.userService=t,this.privilegiosService=l,this.disabledUserName=!0,this.statusButton=0,this.statusPass=0,this.formularioGeneral=this._formB.group({idUser:new r.NI,userName:new r.NI,name:new r.NI,firstLastName:new r.NI,secondLastName:new r.NI,email:new r.NI})}ngOnInit(){let e=JSON.parse(sessionStorage.getItem("user"));this.userService.getById(e.user.idUser).subscribe(t=>{console.log(t);let l=new a.pv(t.data);console.log(t.data),l.userName=e.user.userName,this.formularioGeneral=this.getFormularioGeneral(l)}),this.privilegiosService.getPrivilegios().subscribe(t=>{this.arrPrivilegios=t}),this.privilegiosService.setPrivilegios(),this.arrPrivilegios.forEach(t=>{5==t.idprivilegio&&(this.nameButtom=t.etiqueta,this.statusButton=t.status),4==t.idprivilegio&&(this.nameComponent=t.etiqueta)})}getFormularioGeneral(e){return this._formB.group({idUser:[null==e?null:e.idUser,[r.kI.nullValidator]],userName:[null==e?null:e.userName,[r.kI.required]],name:[null==e?null:e.name,[r.kI.required]],firstLastName:[null==e?null:e.firstLastName,[r.kI.required]],secondLastName:[null==e?null:e.secondLastName,[r.kI.nullValidator]],email:[null==e?null:e.email,[r.kI.email,r.kI.required]]})}getFormControl(e){return this.formularioGeneral.controls[e]}guardar(){if(console.log(this.formularioGeneral.value),this.formularioGeneral.valid){let e=new u.Zr,t=new u.Vm;this.userService.upDateData(this.formularioGeneral.value).subscribe(l=>{this.getFormularioGeneral(l.data),this.ngOnInit(),e.bottomStartOk(t.MSG_EMERGENTE_TRANSACCION_OK)},l=>{e.bottomEndError("error")})}}}return s.\u0275fac=function(e){return new(e||s)(o.Y36(r.qu),o.Y36(w.K),o.Y36(d._))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-mi-perfil"]],decls:40,vars:24,consts:[["id","accordionExample",1,"accordion"],[1,"accordion-item"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"accordion-button"],["id","collapseOne","aria-labelledby","headingOne","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse","show"],[3,"formGroup"],[1,"accordion-body"],[1,"panel"],[1,"mb-3","row"],["for","staticEmail",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","text","id","Usuario","formControlName","userName",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["for","inputPassword",1,"col-sm-2","col-form-label"],["type","text","id","Nombre","formControlName","name",1,"form-control",3,"ngClass"],["type","text","id","appaterno","formControlName","firstLastName",1,"form-control",3,"ngClass"],["type","text","id","appaterno","formControlName","secondLastName",1,"form-control",3,"ngClass"],["type","email","id","correo","formControlName","email",1,"form-control",3,"ngClass"],["class","mb-3 row",4,"ngIf"],[1,"text-danger"],[1,"col-sm-10","m-2"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h2",2)(3,"button",3),o._uU(4),o.qZA()(),o.TgZ(5,"div",4)(6,"form",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),o._uU(11,"Usuario"),o.qZA(),o.TgZ(12,"div",10),o._UZ(13,"input",11),o.qZA(),o.YNc(14,P,4,0,"div",12),o.qZA(),o.TgZ(15,"div",8)(16,"label",13),o._uU(17,"Nombre"),o.qZA(),o.TgZ(18,"div",10),o._UZ(19,"input",14),o.qZA(),o.YNc(20,E,4,0,"div",12),o.qZA(),o.TgZ(21,"div",8)(22,"label",9),o._uU(23,"Apellido paterno"),o.qZA(),o.TgZ(24,"div",10),o._UZ(25,"input",15),o.qZA(),o.YNc(26,N,4,0,"div",12),o.qZA(),o.TgZ(27,"div",8)(28,"label",9),o._uU(29,"Apellido materno"),o.qZA(),o.TgZ(30,"div",10),o._UZ(31,"input",16),o.qZA(),o.YNc(32,Z,4,0,"div",12),o.qZA(),o.TgZ(33,"div",8)(34,"label",13),o._uU(35,"Correo"),o.qZA(),o.TgZ(36,"div",10),o._UZ(37,"input",17),o.qZA(),o.YNc(38,T,7,0,"div",12),o.qZA(),o.YNc(39,U,4,1,"div",18),o.qZA()()()()()()),2&e&&(o.xp6(4),o.hij(" ",t.nameComponent," "),o.xp6(2),o.Q6J("formGroup",t.formularioGeneral),o.xp6(7),o.Q6J("ngClass",o.VKq(14,p,(t.getFormControl("userName").touched||t.getFormControl("userName").dirty)&&t.getFormControl("userName").invalid)),o.uIk("disabled",!0),o.xp6(1),o.Q6J("ngIf",(t.getFormControl("userName").touched||t.getFormControl("userName").dirty)&&t.getFormControl("userName").invalid),o.xp6(5),o.Q6J("ngClass",o.VKq(16,p,(t.getFormControl("name").touched||t.getFormControl("name").dirty)&&t.getFormControl("name").invalid)),o.xp6(1),o.Q6J("ngIf",(t.getFormControl("name").touched||t.getFormControl("name").dirty)&&t.getFormControl("name").invalid),o.xp6(5),o.Q6J("ngClass",o.VKq(18,p,(t.getFormControl("firstLastName").touched||t.getFormControl("firstLastName").dirty)&&t.getFormControl("firstLastName").invalid)),o.xp6(1),o.Q6J("ngIf",(t.getFormControl("firstLastName").touched||t.getFormControl("firstLastName").dirty)&&t.getFormControl("firstLastName").invalid),o.xp6(5),o.Q6J("ngClass",o.VKq(20,p,(t.getFormControl("secondLastName").touched||t.getFormControl("secondLastName").dirty)&&t.getFormControl("secondLastName").invalid)),o.xp6(1),o.Q6J("ngIf",(t.getFormControl("secondLastName").touched||t.getFormControl("secondLastName").dirty)&&t.getFormControl("secondLastName").invalid),o.xp6(5),o.Q6J("ngClass",o.VKq(22,p,(t.getFormControl("email").touched||t.getFormControl("email").dirty)&&t.getFormControl("email").invalid)),o.xp6(1),o.Q6J("ngIf",(t.getFormControl("email").touched||t.getFormControl("email").dirty)&&t.getFormControl("email").invalid),o.xp6(1),o.Q6J("ngIf",185!=t.statusButton))},dependencies:[m.mk,m.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),s})();var b=n(2340),A=n(7217),F=n(9855),S=n(8987);function R(s,i){if(1&s&&(o.TgZ(0,"div")(1,"small"),o._uU(2),o.ALo(3,"json"),o.qZA()()),2&s){const e=o.oxw(2);o.xp6(2),o.hij(" No Valido ",o.lcZ(3,1,e.f.actualPassword.errors.incorrect),"")}}function L(s,i){if(1&s&&(o.TgZ(0,"div",17),o.YNc(1,R,4,3,"div",18),o.qZA()),2&s){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.f.actualPassword.errors.incorrect)}}function q(s,i){if(1&s&&(o.TgZ(0,"div")(1,"small"),o._uU(2),o.ALo(3,"json"),o.qZA()()),2&s){const e=o.oxw(2);o.xp6(2),o.hij(" No Valido ",o.lcZ(3,1,e.f.newPassword.errors.incorrect),"")}}function y(s,i){1&s&&(o.TgZ(0,"div")(1,"small"),o._uU(2,"El maximo de caracteres es 8. "),o.qZA()())}function O(s,i){if(1&s&&(o.TgZ(0,"div",17),o.YNc(1,q,4,3,"div",18),o.YNc(2,y,3,0,"div",18),o.qZA()),2&s){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.f.newPassword.errors.incorrect),o.xp6(1),o.Q6J("ngIf",e.f.newPassword.errors)}}function G(s,i){if(1&s&&(o.TgZ(0,"div")(1,"small"),o._uU(2),o.ALo(3,"json"),o.qZA()()),2&s){const e=o.oxw(2);o.xp6(2),o.hij(" No Valido ",o.lcZ(3,1,e.f.confirmPassword.errors.incorrect),"")}}function M(s,i){1&s&&(o.TgZ(0,"div")(1,"small"),o._uU(2,"El formato de la contrase\xf1a debe contener al menos un car\xe1cter especial,un n\xfamero y una m\xe1yuscula. "),o.qZA()())}function J(s,i){1&s&&(o.TgZ(0,"div")(1,"small"),o._uU(2,"El maximo de caracteres es 8. "),o.qZA()())}function x(s,i){if(1&s&&(o.TgZ(0,"div",17),o.YNc(1,G,4,3,"div",18),o.YNc(2,M,3,0,"div",18),o.YNc(3,J,3,0,"div",18),o.qZA()),2&s){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.f.confirmPassword.errors.incorrect),o.xp6(1),o.Q6J("ngIf",e.f.confirmPassword.errors.pattern),o.xp6(1),o.Q6J("ngIf",e.f.confirmPassword.errors)}}function V(s,i){if(1&s){const e=o.EpF();o.TgZ(0,"div",8)(1,"div",19)(2,"button",20),o.NdJ("click",function(){o.CHM(e);const l=o.oxw();return o.KtG(l.validate())}),o._uU(3),o.qZA()()()}if(2&s){const e=o.oxw();o.xp6(2),o.Q6J("disabled",e.isValid()),o.xp6(1),o.Oqu(e.nameButtom)}}const g=function(s){return{"is-invalid":s}},v=new u.Zr,_=new u.Q3,Y=new u.Vm;let D=(()=>{class s{constructor(e,t,l,h,X){this._formB=e,this.auth=t,this.loginService=l,this.privilegiosService=h,this.httpClient=X,this.statusGenerales=0,this.statusPass=0,this.password="",this.nameComponent="",this.pattern="[0-9]+",this.pattern3="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{1,}",this.passwordForm=this._formB.group({actualPassword:["",r.kI.required],newPassword:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(8)]],confirmPassword:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(8)]]}),this.loading=!1}ngOnInit(){this.privilegiosService.getPrivilegios().subscribe(e=>{this.arrPrivilegios=e}),this.privilegiosService.setPrivilegios(),this.arrPrivilegios.forEach(e=>{e.descripcion.includes("GuardarContrasena")&&(this.nameButtom=e.etiqueta,this.statusPass=e.status),6==e.idprivilegio&&(this.nameComponent=e.etiqueta)})}get f(){return this.passwordForm.controls}isValid(){return!this.passwordForm.valid}validate(){this.passwordForm.get("newPassword").value==this.passwordForm.get("confirmPassword").value?this.passwordForm.get("newPassword").value!=this.passwordForm.get("actualPassword").value?this.submit():(this.passwordForm.controls.newPassword.setValue(""),this.passwordForm.controls.confirmPassword.setValue(""),this.passwordForm.controls.newPassword.setErrors({incorrect:" : Contrase\xf1a nueva igual a contrase\xf1a actual"}),this.passwordForm.controls.confirmPassword.setErrors({incorrect:" : Contrase\xf1a nueva igual a contrase\xf1a actual"})):(this.passwordForm.controls.newPassword.setValue(""),this.passwordForm.controls.confirmPassword.setValue(""),this.passwordForm.controls.newPassword.setErrors({incorrect:" : Contrase\xf1a no coincide"}),this.passwordForm.controls.confirmPassword.setErrors({incorrect:" : Contrase\xf1a no coincide"}))}submit(){this.loading=!0;let e=new a.lj;console.log(this.auth.currentUserValue);let t=this.auth.currentSession;e.userName=t.user.userName,e.newPassword=btoa(this.passwordForm.get("confirmPassword").value),e.actualPassword=btoa(this.passwordForm.get("actualPassword").value),e.lastLoginDate=t.user.lastLoginDate,this.executeChangePassword(e)}executeChangePassword(e){sessionStorage.getItem("ip")?(e.ip=sessionStorage.getItem("ip"),this.doChange(e)):this.httpClient.get(b.N.API_IPIFY).subscribe(t=>{e.ip=t.ip,this.doChange(e)},()=>{v.errorToast(_._500_GENERAL_ERROR)})}doChange(e){this.loginService.changePassword(e).subscribe(t=>{this.loading=!1,this.auth.refreshToken(t.data.token),v.bottomStartOk(Y.MSG_EMERGENTE_TRANSACCION_OK),this.passwordForm.reset()},t=>{this.loading=!1,(400===t.status||404===t.status)&&(this.passwordForm.controls.actualPassword.setValue(""),this.passwordForm.controls.actualPassword.setErrors({incorrect:" : Contrase\xf1a Incorrecta"}),v.errorToast(_._ERROR_LOGIN_CHANGE_CURRENT_PASS_INCORRECT))})}getFormControl(e){return this.passwordForm.controls[e]}}return s.\u0275fac=function(e){return new(e||s)(o.Y36(r.qu),o.Y36(A.$),o.Y36(F.r),o.Y36(d._),o.Y36(S.eN))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-cambio-pass"]],decls:28,vars:15,consts:[["id","accordionPass",1,"accordion"],[1,"accordion-item"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseTwo","aria-expanded","true","aria-controls","collapseTwo",1,"accordion-button"],["id","collapseTwo","aria-labelledby","headingOne","data-bs-parent","#accordionPass",1,"accordion-collapse","collapse","show"],[3,"formGroup"],[1,"accordion-body"],[1,"panel"],[1,"mb-3","row"],["for","staticEmail",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","password","id","Usuario","formControlName","actualPassword",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["for","inputPassword",1,"col-sm-2","col-form-label"],["type","password","id","Nombre","formControlName","newPassword",1,"form-control",3,"ngClass"],["type","password","id","appaterno","formControlName","confirmPassword",1,"form-control",3,"ngClass"],["class","mb-3 row",4,"ngIf"],[1,"text-danger"],[4,"ngIf"],[1,"col-sm-10","m-2"],[1,"btn","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h2",2)(3,"button",3),o._uU(4),o.qZA()(),o.TgZ(5,"div",4)(6,"form",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),o._uU(11,"Actual"),o.qZA(),o.TgZ(12,"div",10),o._UZ(13,"input",11),o.YNc(14,L,2,1,"div",12),o.qZA()(),o.TgZ(15,"div",8)(16,"label",13),o._uU(17,"Nuevo"),o.qZA(),o.TgZ(18,"div",10),o._UZ(19,"input",14),o.YNc(20,O,3,2,"div",12),o.qZA()(),o.TgZ(21,"div",8)(22,"label",9),o._uU(23,"Confirmar"),o.qZA(),o.TgZ(24,"div",10),o._UZ(25,"input",15),o.YNc(26,x,4,3,"div",12),o.qZA()(),o.YNc(27,V,4,2,"div",16),o.qZA()()()()()()),2&e&&(o.xp6(4),o.hij(" ",t.nameComponent," "),o.xp6(2),o.Q6J("formGroup",t.passwordForm),o.xp6(7),o.Q6J("ngClass",o.VKq(9,g,t.f.actualPassword.invalid&&(t.f.actualPassword.dirty||t.f.actualPassword.touched))),o.xp6(1),o.Q6J("ngIf",t.f.actualPassword.invalid&&(t.f.actualPassword.dirty||t.f.actualPassword.touched)),o.xp6(5),o.Q6J("ngClass",o.VKq(11,g,t.f.newPassword.invalid&&(t.f.newPassword.dirty||t.f.newPassword.touched))),o.xp6(1),o.Q6J("ngIf",t.f.newPassword.invalid&&(t.f.newPassword.dirty||t.f.newPassword.touched)),o.xp6(5),o.Q6J("ngClass",o.VKq(13,g,t.f.confirmPassword.invalid&&(t.f.confirmPassword.dirty||t.f.confirmPassword.touched))),o.xp6(1),o.Q6J("ngIf",t.f.confirmPassword.invalid&&(t.f.confirmPassword.dirty||t.f.confirmPassword.touched)),o.xp6(1),o.Q6J("ngIf",185!=t.statusPass))},dependencies:[m.mk,m.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,m.Ts]}),s})();function Q(s,i){1&s&&o._UZ(0,"app-mi-perfil")}function B(s,i){1&s&&o._UZ(0,"app-cambio-pass")}const j=[{path:"",redirectTo:"",pathMatch:"full"},{path:"mi-perfil",component:(()=>{class s{constructor(e){this.privilegiosService=e,this.statusGenerales=0,this.statusPass=0,this.nameComponent=""}ngOnInit(){this.privilegiosService.getPrivilegios().subscribe(e=>{this.arrPrivilegios=e}),this.privilegiosService.setPrivilegios(),console.log(this.arrPrivilegios),this.arrPrivilegios.forEach(e=>{"Generales"==e.descripcion&&(this.statusGenerales=e.status),"Contrasena"==e.descripcion&&(this.statusPass=e.status)})}}return s.\u0275fac=function(e){return new(e||s)(o.Y36(d._))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-generales"]],decls:3,vars:2,consts:[[4,"ngIf"],[1,"row","mt-5"]],template:function(e,t){1&e&&(o.YNc(0,Q,1,0,"app-mi-perfil",0),o._UZ(1,"div",1),o.YNc(2,B,1,0,"app-cambio-pass",0)),2&e&&(o.Q6J("ngIf",185!=t.statusGenerales),o.xp6(2),o.Q6J("ngIf",185!=t.statusPass))},dependencies:[m.O5,I,D]}),s})(),canActivate:[n(6570).e],data:{breadcrumb:"Mi perfil",page:"/mi-perfil",data:[a.Iu.ADMIN,a.Iu.COORDINADOR]}}];let z=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[c.Bz.forChild(j),c.Bz]}),s})(),H=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[m.ez,z,r.u5,r.UX]}),s})()},4981:(C,f,n)=>{n.d(f,{K:()=>o});var m=n(7413),c=n(2560);let o=(()=>{class d extends m.y{constructor(a){super(a),this.port=this.PORT_USER}getUserByProfile(a){return super.get(this.URL_MODULE_USER+this.SERVICE_GET_USER_BY_PROFILE+"/"+a)}getUser(a){return super.post(this.URL_MODULE_USER+this.SERVICE_GET_USER_BY_PROFILE,a)}sendUserEmail(a){return super.post(this.URL_MODULE_USER+this.SERVICE_POST_SEND_MAIL,a)}getUserAssigUnAssig(a,u){return super.get(this.URL_MODULE_USER+this.SERVICE_GET_ASSIGN1+"/"+a+this.SERVICE_GET_ASSIGN2+"/"+u)}upDateData(a){return super.post(this.URL_MODULE_USER+this.SERVICE_UPDATE_DATA_USER,a)}getById(a){return super.get(this.URL_MODULE_USER+"/"+a)}getHeaders(){return super.get(this.URL_MODULE_USER+this.SERVICE_GET_HEADERS)}getDataUsers(a){return super.put(this.URL_MODULE_USER+this.SERVICE_GET_DATA_USERS,null)}getDataUsersByConf(a){return super.put(this.URL_MODULE_USER+this.SERVICE_GET_USERS_BY_CONF+"/"+a,null)}getDataFilter(a){return super.put(this.URL_MODULE_USER+this.SERVICE_GET_DATA_FILTER,a)}putResetStatusPass(a,u){return super.put(this.URL_MODULE_USER+this.SERVICE_PUT_RESET_PASS+"/"+a+"/"+u,null)}}return d.\u0275fac=function(a){return new(a||d)(c.LFG(c.zs3))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);
//# sourceMappingURL=907.js.map