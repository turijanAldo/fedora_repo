"use strict";(self.webpackChunkthincode=self.webpackChunkthincode||[]).push([[252],{2693:(D,y,p)=>{p.d(y,{z:()=>b});var e=p(8091),o=p(7708),m=p(1059),C=p(4666),_=p(2508),O=p(1466);function v(f,u){if(1&f){const a=o.EpF();o.TgZ(0,"input",23,24),o.NdJ("ngModelChange",function(t){o.CHM(a);const l=o.oxw().index,s=o.oxw();return o.KtG(s.values[l]=t)})("blur",function(t){o.CHM(a);const l=o.oxw(),s=l.$implicit,n=l.index,r=o.oxw();return o.KtG(r.unfocus(s.type,n,t))})("keyup",function(){o.CHM(a);const t=o.oxw(),l=t.index,s=t.$implicit,n=o.oxw();return o.KtG(n.pattern(n.values[l],l,s.pattern))}),o.qZA()}if(2&f){const a=o.oxw(),i=a.$implicit,t=a.index,l=o.oxw();o.s9C("type",i.type),o.s9C("placeholder",i.placeholder),o.Q6J("ngModel",l.values[t])("pattern",i.pattern)}}function A(f,u){if(1&f&&(o.TgZ(0,"option"),o._uU(1),o.qZA()),2&f){const a=u.$implicit,i=o.oxw(2).$implicit,t=o.oxw();o.xp6(1),o.hij(" ",t.setListValue(a,i.listKey)," ")}}function k(f,u){if(1&f){const a=o.EpF();o.TgZ(0,"select",25,26),o.NdJ("change",function(){o.CHM(a);const t=o.MAs(1),l=o.oxw().index,s=o.oxw();return o.KtG(s.getSelectedValue(t.value,l))}),o.TgZ(2,"option",27),o._uU(3),o.qZA(),o.YNc(4,A,2,1,"option",28),o.qZA()}if(2&f){const a=o.oxw().$implicit;o.xp6(3),o.Oqu(a.placeholder),o.xp6(1),o.Q6J("ngForOf",a.list)}}function x(f,u){1&f&&(o.TgZ(0,"div",29),o._uU(1," Not Valid Data "),o.qZA())}function M(f,u){if(1&f&&(o.TgZ(0,"div",17)(1,"label",18),o._uU(2),o.qZA(),o.TgZ(3,"div",19),o.YNc(4,v,2,4,"input",20),o.YNc(5,k,5,2,"select",21),o.qZA(),o.YNc(6,x,2,0,"div",22),o.qZA()),2&f){const a=u.$implicit,i=u.index,t=o.oxw();o.xp6(2),o.hij("",a.label,":"),o.xp6(2),o.Q6J("ngIf",!t.isList(a.type)),o.xp6(1),o.Q6J("ngIf",t.isList(a.type)),o.xp6(1),o.Q6J("ngfor",!t.validation[i])}}let b=(()=>{class f{constructor(a){this.privilegiosService=a,this.filter=[],this.idFilter="filter",this.data=[],this.getValues=new o.vpe,this.visibleAdd=new o.vpe,this.util=new e.Zr,this.messages=new e.Q3,this.visible=!1,this.values=[],this.validation=[],this.flag=[],this.menuItemAdmin=[],this.navItem=[],this.namebuttom="",this.save={guardar:!1}}ngOnInit(){this.values=new Array(this.filter.length),this.values.fill("",0,this.filter.length),this.validation=new Array(this.filter.length),this.validation.fill(!0,0,this.filter.length),this.privilegiosService.getPrivilegios().subscribe(t=>{this.arrPrivilegios=t}),this.privilegiosService.setPrivilegios(),(new e.Zr).tree(this.arrPrivilegios,0);let i=this.arrPrivilegios.filter(t=>102==t.parentprivilegio&&1==t.status&&260==t.idprivilegio);this.namebuttom=i[0].etiqueta}getValuesAction(){let a=[],i=0,t=!1;for(const l of this.filter){let s="";"date"==l.type?" "!=this.values[i]&&(s=this.values[i]):s=this.values[i],a.push({id:l.id,value:s}),i++}this.validation.forEach(l=>{0==l&&(t=!0)}),t?this.util.errorToast(this.messages._FILTER):this.getValues.emit(a),this.flag=this.save.guardar,console.log(this.flag)}clean(){let a=document.querySelectorAll("select");for(let i=0;i<a.length;i++){let t=a[i].querySelectorAll("option");a[i].value=t[0].value,console.log(a[i])}this.values.fill("",0,this.filter.length),this.validation.fill(!0,0,this.filter.length),this.getValuesAction()}unfocus(a,i,t){"date"==a&&(""==this.values[i]?this.values[i]=" ":" "==this.values[i]&&(this.values[i]=""))}getVisible(){1==this.visible?(this.visible=!1,this.visibleAdd.emit(!0),this.clean()):(this.visible=!0,this.visibleAdd.emit(!1))}filterList(a){return this.data.filter(function(t){return!!function w(f,u){let a=[];u.forEach(t=>{Object.entries(f).forEach(([l,s])=>{if("object"!=typeof s||null==s)l==t.id&&((""+s).toLocaleLowerCase().includes(t.value.toLocaleLowerCase())?a.push(!0):a.push(!1));else{const n=t.id.split(".");if(n[0]==l){let r=!1;Object.entries(s).forEach(([c,d])=>{n[1]==c&&(r=!0,(""+d).toLocaleLowerCase().includes(t.value.toLocaleLowerCase())?a.push(!0):a.push(!1))}),r||(""==t.value.toLocaleLowerCase()?a.push(!0):a.push(!1))}}})});let i=!0;return a.forEach(t=>{t||(i=!1)}),i}(t,a)})}isList(a){return"list"==a}getSelectedValue(a,i){this.values[i]=a}set(a,i){this.values[i]=a}setListValue(a,i){if(null==i)return a;{const t=Object.entries(a);for(const l of t){const n=l[1];if(l[0]==i)return n}}}icon(a){return!(null==a||""==a)}pattern(a,i,t){null==t&&(t=".*");const l=a.match(t);this.validation[i]=""==a||null!=l&&l[0].length==a.length}}return f.\u0275fac=function(a){return new(a||f)(o.Y36(m._))},f.\u0275cmp=o.Xpm({type:f,selectors:[["app-filter"]],inputs:{filter:"filter",idFilter:"idFilter",data:"data"},outputs:{getValues:"getValues",visibleAdd:"visibleAdd"},decls:21,vars:3,consts:[["id","accordionExample",1,"accordion"],[1,"accordion-item"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseOne","aria-expanded","false","aria-controls","collapseOne",1,"accordion-button","collapsed"],["id","collapseOne","aria-labelledby","headingOne","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],[1,"accordion-body"],[1,"panel"],[1,"mb-4","col"],["class","mb-4 row",4,"ngFor","ngForOf"],[1,"mb-3","col"],[1,"form-check"],["matTooltip","Guardar","matTooltipClass","tooltipMat","type","checkbox","value","","id","flexCheckDefault",1,"form-check-input",3,"ngModel","ngModelChange","click"],["for","gridCheck1",1,"form-check-label"],[1,"mb-3","row"],[1,"col"],["matTooltip","Filtrar","matTooltipClass","tooltipMat",1,"btn","btn-info","btn-blue",3,"click"],[1,"hr-text"],[1,"mb-4","row"],["for","bDescripcion",1,"stilo","col-sm-3","col-form-label"],[1,"col-sm-9"],["class","form-control",3,"type","ngModel","placeholder","pattern","ngModelChange","blur","keyup",4,"ngIf"],["required","","class","form-control filter-input",3,"change",4,"ngIf"],["class","text-danger",4,"ngfor"],[1,"form-control",3,"type","ngModel","placeholder","pattern","ngModelChange","blur","keyup"],["txtName",""],["required","",1,"form-control","filter-input",3,"change"],["selectList",""],["selected","","disabled","","hidden","","value",""],[4,"ngFor","ngForOf"],[1,"text-danger"]],template:function(a,i){1&a&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h2",2)(3,"button",3),o._uU(4," Filtros "),o.qZA()(),o.TgZ(5,"div",4)(6,"form")(7,"div",5)(8,"div",6)(9,"div",7),o.YNc(10,M,7,4,"div",8),o.qZA(),o.TgZ(11,"div",9)(12,"div",10)(13,"input",11),o.NdJ("ngModelChange",function(l){return i.save.guardar=l})("click",function(){return i.clean()}),o.qZA(),o.TgZ(14,"label",12),o._uU(15,"Guardar como filtro predeterminado"),o.qZA()()(),o.TgZ(16,"div",13)(17,"div",14)(18,"button",15),o.NdJ("click",function(){return i.getValuesAction()}),o._uU(19),o.qZA()()()()()()()()(),o._UZ(20,"hr",16)),2&a&&(o.xp6(10),o.Q6J("ngForOf",i.filter),o.xp6(3),o.Q6J("ngModel",i.save.guardar),o.xp6(6),o.hij(" ",i.namebuttom," "))},dependencies:[C.sg,C.O5,_._Y,_.YN,_.Kr,_.Fj,_.Wl,_.JJ,_.JL,_.c5,_.On,_.F,O.gM],styles:[".col-md-3[_ngcontent-%COMP%]{padding-top:20px}.stilo[_ngcontent-%COMP%]{text-transform:lowercase}.stilo[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.filter-label-title[_ngcontent-%COMP%]{font-weight:700}.row-buttons[_ngcontent-%COMP%]{text-align:left;padding-top:52px}.filter-button[_ngcontent-%COMP%]{border:2px solid;text-align:left;margin:0 4px;border-radius:8px}.filter-icon[_ngcontent-%COMP%]{width:30px!important;height:17px!important}.filter-span[_ngcontent-%COMP%]{border-top:0px;border-right:0px}.filter-input[_ngcontent-%COMP%]{border:3px solid;border-top:0px;border-right:0px;border-left:0px}input[_ngcontent-%COMP%]:required{border-color:transparent;box-shadow:none!important;-webkit-box-shadow:none!important}select[_ngcontent-%COMP%]:required{border-color:transparent;box-shadow:none;-webkit-box-shadow:none!important}.text-danger[_ngcontent-%COMP%]{font-weight:700}\n/*# sourceMappingURL=filter.component.css.map*/"]}),f})()},2487:(D,y,p)=>{p.d(y,{I:()=>t});var e=p(7708),o=p(9857),m=p(8091),C=p(1059),_=p(4666),O=p(2302),v=p(2508),A=p(1466);const k=["checkBox"];function x(l,s){if(1&l){const n=e.EpF();e.ynx(0),e.TgZ(1,"i",10),e.NdJ("click",function(){const d=e.CHM(n).$implicit,g=e.oxw();return e.KtG(g.iconData(d))}),e.qZA(),e.BQk()}if(2&l){const n=s.$implicit;e.xp6(1),e.Gre("icon ",n.link,""),e.s9C("matTooltip",n.etiqueta)}}function M(l,s){if(1&l&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&l){const n=e.oxw().$implicit,r=e.oxw();e.xp6(1),e.Oqu(r.capitalizeFirstLetter(n))}}function b(l,s){if(1&l&&(e.ynx(0),e.YNc(1,M,2,1,"th",11),e.BQk()),2&l){const n=s.$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngIf",!r.evaluateTitle(n))}}function w(l,s){if(1&l){const n=e.EpF();e.TgZ(0,"td",15),e.NdJ("dblclick",function(){e.CHM(n);const c=e.oxw(2).$implicit,d=e.oxw();return e.KtG(d.doubleClick(c))}),e._uU(1),e.qZA()}if(2&l){const n=e.oxw().$implicit,r=e.oxw().$implicit;e.xp6(1),e.Oqu(r[n])}}function f(l,s){if(1&l&&(e.ynx(0),e.YNc(1,w,2,1,"td",14),e.BQk()),2&l){const n=s.$implicit;e.xp6(1),e.Q6J("ngIf","id"!=n&&"isSelected"!=n)}}function u(l,s){if(1&l){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"input",12,13),e.NdJ("ngModelChange",function(c){const g=e.CHM(n).$implicit;return e.KtG(g.isSelected=c)})("change",function(){e.CHM(n);const c=e.oxw();return e.KtG(c.isAllSelected())}),e.qZA()(),e.YNc(4,f,2,1,"ng-container",5),e.qZA()}if(2&l){const n=s.$implicit,r=e.oxw();e.xp6(2),e.s9C("value",n.id),e.Q6J("ngModel",n.isSelected),e.xp6(2),e.Q6J("ngForOf",r.keys(n))}}const a=function(l,s){return{itemsPerPage:l,currentPage:s}},i=new m.Zr;let t=(()=>{class l{constructor(n){this.privilegiosService=n,this.p=1,this.arrayIcons=[],this.getIcons=[],this.masterSelected=!1,this.paginado=10,this.th_rows=[],this.filas=[],this.columnas=[],this.arrKeysObject=[],this.emitData=new e.vpe,this.emitArrayData=new e.vpe,this.emitEventData=new e.vpe,this.copiaFilas=[],this.ArrayKeys=[],this.data=[],this.setCheckBox=new Set}ngDoCheck(){}set setData(n){let r=0,c=[];c.length=0;let d=[];const g=new Set;for(let h=0;h<n.length;h++)Object.keys(n[h]).length>=r&&(d.length=0,r=Object.keys(n[h]).length,d=Object.keys(n[h]));for(let h=0;h<n.length;h++){let L=this.defineObject(d);if("object"==typeof n[h]){for(let T=0;T<d.length;T++)L[d[T]]=n[h][d[T]]??null;Reflect.set(L,"isSelected",!1),c.push(L),g.add(L)}}this.showData=c}get getData(){return this.showData}evaluateTitle(n){return!!n.toLowerCase().includes("iduser")}ngOnChanges(n){this.copiaFilas=[...this.filas],this.generateObjectGeneric()}generateObjectGeneric(){let n=0;for(let r=0;r<this.copiaFilas.length;r++)Object.keys(this.copiaFilas[r]).length>=n&&(this.ArrayKeys.length=0,n=Object.keys(this.copiaFilas[r]).length,this.ArrayKeys=Object.keys(this.copiaFilas[r]));this.ArrayKeys.forEach(r=>{for(let c=0;c<this.copiaFilas.length;c++)"object"==typeof this.copiaFilas[c]&&(this.copiaFilas[c]=Reflect.set(this.copiaFilas[c],"isSelect",!0),1!=Reflect.has(this.copiaFilas[c],r)&&(this.copiaFilas[c]=Reflect.set(this.copiaFilas[c],r,"N/A"),console.log(this.copiaFilas)))})}ngOnInit(){this.privilegiosService.getPrivilegios().subscribe(n=>{this.arrPrivilegios=n}),this.privilegiosService.setPrivilegios(),"users"==this.tableFor?this.configUsersGrid():"solicitudes"==this.tableFor&&this.configSolicitudesGrid()}configUsersGrid(){i.tree(this.arrPrivilegios,0),this.arrPrivilegios.filter(c=>0==c.parentprivilegio&&1==c.status&&c.descripcion.includes("Menu principal"));let n=i.tree(this.arrPrivilegios,0),r=this.searchTree(n,"Usuarios");this.setIcons(r.children),setTimeout(()=>{let c=this.privilegiosService.getAllPrivilegiosArr();this.getIcons=new o.qh(this.privilegiosService.searchTree(c[1],102)).children},5e3)}configSolicitudesGrid(){i.tree(this.arrPrivilegios,0),this.arrPrivilegios.filter(c=>0==c.parentprivilegio&&1==c.status&&c.descripcion.includes("Solicitudes"));let n=i.tree(this.arrPrivilegios,0),r=this.searchTree(n,"Solicitudes");this.setIcons(r.children),setTimeout(()=>{let c=this.privilegiosService.getAllPrivilegiosArr();this.getIcons=new o.qh(this.privilegiosService.searchTree(c[1],254)).children},5e3)}setIcons(n){n.forEach(r=>{r.link.includes("fa")&&1==r.status&&this.arrayIcons.push(r.link)})}searchTree(n,r){if(n.descripcion==r)return n;if(null!=n.children){let c,d=null;for(c=0;null==d&&c<n.children.length;c++)d=this.searchTree(n.children[c],r);return d}return null}destructurinData(n){let r=[];for(let c of Object.values(n))r.push(c);return r}keys(n){let r=[];Object.create(n),Object.entries(n);for(let[g,h]of Object.entries(n))r.push(g);return r}getKeys(n){this.arrKeysObject.length=0;for(let r of n){this.th_rows.length==Object.keys(r).length&&(this.arrKeysObject=Object.keys(r));break}}defineObject(n){let r=Object.create(null);return n.forEach(c=>{Object.defineProperty(r,c,{configurable:!0,enumerable:!0,writable:!0,value:null})}),r}capitalizeFirstLetter(n){let r=n.toLowerCase();return r.charAt(0).toUpperCase()+r.slice(1)}doubleClick(n){this.emitData.emit(n)}checkUncheckAll(){for(let n=0;n<this.showData.length;n++)this.showData[n].isSelected=this.masterSelected;this.getCheckedItemList()}isAllSelected(){this.masterSelected=this.showData.every(function(n){return 1==n.isSelected}),this.getCheckedItemList()}getCheckedItemList(){this.checkedList=[];for(let n=0;n<this.showData.length;n++)this.showData[n].isSelected&&this.checkedList.push(this.showData[n]);this.emitArrayData.emit(this.checkedList),this.checkedList=JSON.stringify(this.checkedList)}iconData(n){this.emitEventData.emit(n)}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(C._))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-table-component"]],viewQuery:function(n,r){if(1&n&&e.Gf(k,5),2&n){let c;e.iGM(c=e.CRH())&&(r.viewChildren=c)}},inputs:{url:"url",paginado:"paginado",tableFor:"tableFor",th_rows:"th_rows",filas:"filas",columnas:"columnas",setData:"setData"},outputs:{emitData:"emitData",emitArrayData:"emitArrayData",emitEventData:"emitEventData"},features:[e.TTD],decls:24,vars:10,consts:[[1,"table-responsive"],[1,"container"],[1,"row"],[1,"col-md-2"],[1,"col-md-10"],[4,"ngFor","ngForOf"],[1,"table","table-bordered","table-striped","table-sm"],["type","checkbox","name","list_name","id","master_1",3,"ngModel","ngModelChange","change"],[1,"pagination"],["previousLabel","Previo","nextLabel","Siguiente",3,"pageChange"],["id","",2,"margin","4px",3,"matTooltip","click"],[4,"ngIf"],["type","checkbox","name","list_name",3,"ngModel","value","ngModelChange","change"],["checkBox",""],[3,"dblclick",4,"ngIf"],[3,"dblclick"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3)(4,"div",3)(5,"div",3)(6,"div",3)(7,"div",3),e.TgZ(8,"div",3)(9,"div",2),e._UZ(10,"div",3),e.TgZ(11,"div",4),e.YNc(12,x,2,4,"ng-container",5),e.qZA()()()()(),e.TgZ(13,"table",6)(14,"thead")(15,"tr")(16,"th")(17,"input",7),e.NdJ("ngModelChange",function(d){return r.masterSelected=d})("change",function(){return r.checkUncheckAll()}),e.qZA()(),e.YNc(18,b,2,1,"ng-container",5),e.qZA()(),e.TgZ(19,"tbody"),e.YNc(20,u,5,3,"tr",5),e.ALo(21,"paginate"),e.qZA()(),e.TgZ(22,"div",8)(23,"pagination-controls",9),e.NdJ("pageChange",function(d){return r.p=d}),e.qZA()()()),2&n&&(e.xp6(12),e.Q6J("ngForOf",r.getIcons),e.xp6(5),e.Q6J("ngModel",r.masterSelected),e.xp6(1),e.Q6J("ngForOf",r.th_rows),e.xp6(2),e.Q6J("ngForOf",e.xi3(21,4,r.getData,e.WLB(7,a,r.paginado,r.p))))},dependencies:[_.sg,_.O5,O.LS,v.Wl,v.JJ,v.On,A.gM,O._s],styles:["thead[_ngcontent-%COMP%]{background-color:#008ba1}.icon[_ngcontent-%COMP%]:hover{cursor:pointer;scale:1.2}\n/*# sourceMappingURL=table-component.component.css.map*/"]}),l})()},9317:(D,y,p)=>{p.d(y,{_U:()=>u,yy:()=>f});var e=p(7708),o=p(4666),m=p(2508);function C(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"form",11)(1,"input",12),e.NdJ("ngModelChange",function(s){e.CHM(t);const n=e.oxw();return e.KtG(n.available.picker=s)})("ngModelChange",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onFilter(s.available))}),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.available.picker)}}const _=function(a,i){return{selected:a,disabled:i}};function O(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"li",13),e.NdJ("click",function(s){const n=e.CHM(t),r=n.$implicit,c=n.index,d=e.oxw();return d.disabled||d.selectItem(d.available.pick,r),e.KtG(d.shiftClick(s,c,d.available,r))})("dragstart",function(s){const r=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.drag(s,r,c.available))})("dragend",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.dragEnd(s.available))}),e.TgZ(1,"label"),e._uU(2),e.qZA()()}if(2&a){const t=i.$implicit,l=e.oxw();e.Q6J("ngClass",e.WLB(3,_,l.isItemSelected(l.available.pick,t),l.disabled))("draggable",!l.disabled&&l.format.draggable),e.xp6(2),e.Oqu(t._name)}}function v(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"form",11)(1,"input",14),e.NdJ("ngModelChange",function(s){e.CHM(t);const n=e.oxw();return e.KtG(n.confirmed.picker=s)})("ngModelChange",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onFilter(s.confirmed))}),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.confirmed.picker)}}function A(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"li",13,15),e.NdJ("click",function(s){const n=e.CHM(t),r=n.$implicit,c=n.index,d=e.oxw();return d.disabled||d.selectItem(d.confirmed.pick,r),e.KtG(d.shiftClick(s,c,d.confirmed,r))})("dragstart",function(s){const r=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.drag(s,r,c.confirmed))})("dragend",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.dragEnd(s.confirmed))}),e.TgZ(2,"label"),e._uU(3),e.qZA()()}if(2&a){const t=i.$implicit,l=e.oxw();e.Q6J("ngClass",e.WLB(3,_,l.isItemSelected(l.confirmed.pick,t),l.disabled))("draggable",!l.disabled&&l.format.draggable),e.xp6(3),e.Oqu(t._name)}}const k=function(a,i){return{order:a,"margin-left":i}},x=function(a,i){return{"max-height":a,"min-height":i}},M=function(a){return{over:a}};class b{constructor(i){this._name=i,this.last=null,this.picker="",this.dragStart=!1,this.dragOver=!1,this.pick=[],this.list=[],this.sift=[]}get name(){return this._name}}var w=0;class f{constructor(i){this.differs=i,this.id="dual-list-"+w++,this.key="_id",this.display="_name",this.height="100px",this.filter=!1,this.format=f.DEFAULT_FORMAT,this.sort=!1,this.disabled=!1,this.destinationChange=new e.vpe,this.sorter=(t,l)=>t._name<l._name?-1:t._name>l._name?1:0,this.available=new b(f.AVAILABLE_LIST_NAME),this.confirmed=new b(f.CONFIRMED_LIST_NAME)}ngOnChanges(i){i.filter&&!1===i.filter.currentValue&&(this.clearFilter(this.available),this.clearFilter(this.confirmed)),i.sort&&(!0===i.sort.currentValue&&void 0===this.compare?this.compare=this.sorter:!1===i.sort.currentValue&&(this.compare=void 0)),i.format&&(this.format=i.format.currentValue,typeof this.format.direction>"u"&&(this.format.direction=f.LTR),typeof this.format.add>"u"&&(this.format.add=f.DEFAULT_FORMAT.add),typeof this.format.remove>"u"&&(this.format.remove=f.DEFAULT_FORMAT.remove),typeof this.format.all>"u"&&(this.format.all=f.DEFAULT_FORMAT.all),typeof this.format.none>"u"&&(this.format.none=f.DEFAULT_FORMAT.none),typeof this.format.draggable>"u"&&(this.format.draggable=f.DEFAULT_FORMAT.draggable)),i.source&&(this.available=new b(f.AVAILABLE_LIST_NAME),this.updatedSource(),this.updatedDestination()),i.destination&&(this.confirmed=new b(f.CONFIRMED_LIST_NAME),this.updatedDestination(),this.updatedSource())}ngDoCheck(){this.source&&this.buildAvailable(this.source)&&this.onFilter(this.available),this.destination&&this.buildConfirmed(this.destination)&&this.onFilter(this.confirmed)}buildAvailable(i){const t=this.sourceDiffer.diff(i);return!!t&&(t.forEachRemovedItem(l=>{const s=this.findItemIndex(this.available.list,l.item,this.key);-1!==s&&this.available.list.splice(s,1)}),t.forEachAddedItem(l=>{-1===this.findItemIndex(this.available.list,l.item,this.key)&&this.available.list.push({_id:this.makeId(l.item),_name:this.makeName(l.item)})}),void 0!==this.compare&&this.available.list.sort(this.compare),this.available.sift=this.available.list,!0)}buildConfirmed(i){let t=!1;const l=this.destinationDiffer.diff(i);return!!l&&(l.forEachRemovedItem(s=>{const n=this.findItemIndex(this.confirmed.list,s.item,this.key);-1!==n&&(this.isItemSelected(this.confirmed.pick,this.confirmed.list[n])||this.selectItem(this.confirmed.pick,this.confirmed.list[n]),this.moveItem(this.confirmed,this.available,this.confirmed.list[n],!1),t=!0)}),l.forEachAddedItem(s=>{const n=this.findItemIndex(this.available.list,s.item,this.key);-1!==n&&(this.isItemSelected(this.available.pick,this.available.list[n])||this.selectItem(this.available.pick,this.available.list[n]),this.moveItem(this.available,this.confirmed,this.available.list[n],!1),t=!0)}),void 0!==this.compare&&this.confirmed.list.sort(this.compare),this.confirmed.sift=this.confirmed.list,t&&this.trueUp(),!0)}updatedSource(){this.available.list.length=0,this.available.pick.length=0,void 0!==this.source&&(this.sourceDiffer=this.differs.find(this.source).create(null))}updatedDestination(){void 0!==this.destination&&(this.destinationDiffer=this.differs.find(this.destination).create(null))}direction(){return this.format.direction===f.LTR}dragEnd(i=null){return i?i.dragStart=!1:(this.available.dragStart=!1,this.confirmed.dragStart=!1),!1}drag(i,t,l){this.isItemSelected(l.pick,t)||this.selectItem(l.pick,t),l.dragStart=!0,i.dataTransfer.setData(this.id,t._id)}allowDrop(i,t){return i.dataTransfer.types.length&&i.dataTransfer.types[0]===this.id&&(i.preventDefault(),t.dragStart||(t.dragOver=!0)),!1}dragLeave(){this.available.dragOver=!1,this.confirmed.dragOver=!1}drop(i,t){i.dataTransfer.types.length&&i.dataTransfer.types[0]===this.id&&(i.preventDefault(),this.dragLeave(),this.dragEnd(),t===this.available?this.moveItem(this.available,this.confirmed):this.moveItem(this.confirmed,this.available))}trueUp(){let i=!1,t=this.destination.length;for(;(t-=1)>=0;)0===this.confirmed.list.filter(s=>"object"==typeof this.destination[t]?s._id===this.destination[t][this.key]:s._id===this.destination[t]).length&&(this.destination.splice(t,1),i=!0);for(let l=0,s=this.confirmed.list.length;l<s;l+=1){let n=this.destination.filter(r=>"object"==typeof r?r[this.key]===this.confirmed.list[l]._id:r===this.confirmed.list[l]._id);0===n.length&&(n=this.source.filter(r=>"object"==typeof r?r[this.key]===this.confirmed.list[l]._id:r===this.confirmed.list[l]._id),n.length>0&&(this.destination.push(n[0]),i=!0))}i&&this.destinationChange.emit(this.destination)}findItemIndex(i,t,l="_id"){let s=-1;return i.filter("object"==typeof t?function n(c){return c._id===t[l]&&(s=i.indexOf(c),!0)}:function r(c){return c._id===t&&(s=i.indexOf(c),!0)}),s}makeUnavailable(i,t){const l=i.list.indexOf(t);-1!==l&&i.list.splice(l,1)}moveItem(i,t,l=null,s=!0){let n=0,r=i.pick.length;for(l&&(n=i.list.indexOf(l),r=n+1);n<r;n+=1){let c=[];if(l){const d=this.findItemIndex(i.pick,l);-1!==d&&(c[0]=i.pick[d])}else c=i.list.filter(d=>d._id===i.pick[n]._id);1===c.length&&(0===t.list.filter(d=>d._id===c[0]._id).length&&t.list.push(c[0]),this.makeUnavailable(i,c[0]))}void 0!==this.compare&&t.list.sort(this.compare),i.pick.length=0,s&&this.trueUp(),setTimeout(()=>{this.onFilter(i),this.onFilter(t)},10)}isItemSelected(i,t){return i.filter(l=>Object.is(l,t)).length>0}shiftClick(i,t,l,s){if(i.shiftKey&&l.last&&!Object.is(s,l.last)){const n=l.sift.indexOf(l.last);if(t>n)for(let r=n+1;r<t;r+=1)this.selectItem(l.pick,l.sift[r]);else if(-1!==n)for(let r=t+1;r<n;r+=1)this.selectItem(l.pick,l.sift[r])}l.last=s}selectItem(i,t){const l=i.filter(s=>Object.is(s,t));if(l.length>0)for(let s=0,n=l.length;s<n;s+=1){const r=i.indexOf(l[s]);-1!==r&&i.splice(r,1)}else i.push(t)}selectAll(i){i.pick.length=0,i.pick=i.sift.slice(0)}selectNone(i){i.pick.length=0}isAllSelected(i){return 0===i.list.length||i.list.length===i.pick.length}isAnySelected(i){return i.pick.length>0}unpick(i){for(let t=i.pick.length-1;t>=0;t-=1)-1===i.sift.indexOf(i.pick[t])&&i.pick.splice(t,1)}clearFilter(i){i&&(i.picker="",this.onFilter(i))}onFilter(i){if(i.picker.length>0)try{const t=i.list.filter(l=>"[object Object]"===Object.prototype.toString.call(l)?void 0!==l._name?-1!==l._name.toLocaleLowerCase(this.format.locale).indexOf(i.picker.toLocaleLowerCase(this.format.locale)):-1!==JSON.stringify(l).toLocaleLowerCase(this.format.locale).indexOf(i.picker.toLocaleLowerCase(this.format.locale)):-1!==l.toLocaleLowerCase(this.format.locale).indexOf(i.picker.toLocaleLowerCase(this.format.locale)));i.sift=t,this.unpick(i)}catch(t){t instanceof RangeError&&(this.format.locale=void 0),i.sift=i.list}else i.sift=i.list}makeId(i){return"object"==typeof i?i[this.key]:i}makeName(i,t="_"){const l=this.display;function s(r){switch(Object.prototype.toString.call(r)){case"[object Number]":case"[object String]":return r;default:return void 0!==r?r[l]:"undefined"}}let n="";if(void 0!==this.display)switch(Object.prototype.toString.call(this.display)){case"[object Function]":n=this.display(i);break;case"[object Array]":for(let r=0,c=this.display.length;r<c;r+=1)if(n.length>0&&(n+=t),-1===this.display[r].indexOf("."))n+=i[this.display[r]];else{const d=this.display[r].split("."),g=i[d[0]];if(g)if(-1!==d[1].indexOf("substring")){const h=d[1].substring(d[1].indexOf("(")+1,d[1].indexOf(")")).split(",");switch(h.length){case 1:n+=g.substring(parseInt(h[0],10));break;case 2:n+=g.substring(parseInt(h[0],10),parseInt(h[1],10));break;default:n+=g}}else n+=g}break;default:n=s(i)}else n=s(i);return n}}f.AVAILABLE_LIST_NAME="available",f.CONFIRMED_LIST_NAME="confirmed",f.LTR="left-to-right",f.RTL="right-to-left",f.DEFAULT_FORMAT={add:"Add",remove:"Remove",all:"All",none:"None",direction:f.LTR,draggable:!0,locale:void 0},f.\u0275fac=function(i){return new(i||f)(e.Y36(e.ZZ4))},f.\u0275cmp=e.Xpm({type:f,selectors:[["dual-list"]],inputs:{id:"id",key:"key",display:"display",height:"height",filter:"filter",format:"format",sort:"sort",compare:"compare",disabled:"disabled",source:"source",destination:"destination"},outputs:{destinationChange:"destinationChange"},features:[e.TTD],decls:25,vars:40,consts:[[1,"dual-list"],[1,"listbox",3,"ngStyle"],["type","button","name","addBtn",1,"btn","btn-primary","btn-block",3,"ngClass","disabled","click"],["class","filter",4,"ngIf"],[1,"record-picker"],[3,"ngStyle","ngClass","drop","dragover","dragleave"],[3,"ngClass","draggable","click","dragstart","dragend",4,"ngFor","ngForOf"],[1,"button-bar"],["type","button",1,"btn","btn-primary","pull-left",3,"disabled","click"],["type","button",1,"btn","btn-default","pull-right",3,"disabled","click"],["type","button","name","removeBtn",1,"btn","btn-primary","btn-block",3,"ngClass","disabled","click"],[1,"filter"],["name","filterSource",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngClass","draggable","click","dragstart","dragend"],["name","filterDestination",1,"form-control",3,"ngModel","ngModelChange"],["itmConf",""]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return t.moveItem(t.available,t.confirmed)}),e._uU(3),e.qZA(),e.YNc(4,C,2,1,"form",3),e.TgZ(5,"div",4)(6,"ul",5),e.NdJ("drop",function(s){return t.drop(s,t.confirmed)})("dragover",function(s){return t.allowDrop(s,t.available)})("dragleave",function(){return t.dragLeave()}),e.YNc(7,O,3,6,"li",6),e.qZA()(),e.TgZ(8,"div",7)(9,"button",8),e.NdJ("click",function(){return t.selectAll(t.available)}),e._uU(10),e.qZA(),e.TgZ(11,"button",9),e.NdJ("click",function(){return t.selectNone(t.available)}),e._uU(12),e.qZA()()(),e.TgZ(13,"div",1)(14,"button",10),e.NdJ("click",function(){return t.moveItem(t.confirmed,t.available)}),e._uU(15),e.qZA(),e.YNc(16,v,2,1,"form",3),e.TgZ(17,"div",4)(18,"ul",5),e.NdJ("drop",function(s){return t.drop(s,t.available)})("dragover",function(s){return t.allowDrop(s,t.confirmed)})("dragleave",function(){return t.dragLeave()}),e.YNc(19,A,4,6,"li",6),e.qZA()(),e.TgZ(20,"div",7)(21,"button",8),e.NdJ("click",function(){return t.selectAll(t.confirmed)}),e._uU(22),e.qZA(),e.TgZ(23,"button",9),e.NdJ("click",function(){return t.selectNone(t.confirmed)}),e._uU(24),e.qZA()()()()),2&i&&(e.xp6(1),e.Q6J("ngStyle",e.WLB(24,k,t.direction()?1:2,t.direction()?0:"10px")),e.xp6(1),e.Q6J("ngClass",t.direction()?"point-right":"point-left")("disabled",0===t.available.pick.length),e.xp6(1),e.Oqu(t.format.add),e.xp6(1),e.Q6J("ngIf",t.filter),e.xp6(2),e.Q6J("ngStyle",e.WLB(27,x,t.height,t.height))("ngClass",e.VKq(30,M,t.available.dragOver)),e.xp6(1),e.Q6J("ngForOf",t.available.sift),e.xp6(2),e.Q6J("disabled",t.disabled||t.isAllSelected(t.available)),e.xp6(1),e.Oqu(t.format.all),e.xp6(1),e.Q6J("disabled",!t.isAnySelected(t.available)),e.xp6(1),e.Oqu(t.format.none),e.xp6(1),e.Q6J("ngStyle",e.WLB(32,k,t.direction()?2:1,t.direction()?"10px":0)),e.xp6(1),e.Q6J("ngClass",t.direction()?"point-left":"point-right")("disabled",0===t.confirmed.pick.length),e.xp6(1),e.Oqu(t.format.remove),e.xp6(1),e.Q6J("ngIf",t.filter),e.xp6(2),e.Q6J("ngStyle",e.WLB(35,x,t.height,t.height))("ngClass",e.VKq(38,M,t.confirmed.dragOver)),e.xp6(1),e.Q6J("ngForOf",t.confirmed.sift),e.xp6(2),e.Q6J("disabled",t.disabled||t.isAllSelected(t.confirmed)),e.xp6(1),e.Oqu(t.format.all),e.xp6(1),e.Q6J("disabled",!t.isAnySelected(t.confirmed)),e.xp6(1),e.Oqu(t.format.none))},dependencies:[o.mk,o.sg,o.O5,o.PC,m._Y,m.Fj,m.JJ,m.JL,m.On,m.F],styles:['div.record-picker[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-button{width:0px;height:0px}div.record-picker[_ngcontent-%COMP%]{scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0 0 1px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#d9edf7}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#c4e3f3}.record-picker[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;background-color:inherit}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.record-picker[_ngcontent-%COMP%]   ul.over[_ngcontent-%COMP%]{background-color:#d3d3d3}.dual-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:flex-start}.dual-list[_ngcontent-%COMP%]   .listbox[_ngcontent-%COMP%]{width:50%;margin:0}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]{margin-top:8px}.point-right[_ngcontent-%COMP%]:after{content:"\\25b6";padding-left:1em}.point-left[_ngcontent-%COMP%]:before{content:"\\25c0";padding-right:1em}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:47%}button.btn-block[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:8px}.filter[_ngcontent-%COMP%]{margin-bottom:-2.2em}.filter[_ngcontent-%COMP%]:after{content:"o";width:40px;color:transparent;font-size:2em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64l192 192v192l128-32V256L512 64H0z"/></svg>\');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}']});let u=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[o.ez,m.u5]}),a})()}}]);
//# sourceMappingURL=252.js.map