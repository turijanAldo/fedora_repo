"use strict";(self.webpackChunkthincode=self.webpackChunkthincode||[]).push([[80],{1080:(R,S,l)=>{l.r(S),l.d(S,{PerfilesModule:()=>K});var v=l(4666),u=l(7340),e=l(2560);let p=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-main-perfiles"]],decls:4,vars:0,consts:[[1,"panel"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"main"),e._UZ(3,"router-outlet"),e.qZA()()())},dependencies:[u.lC]}),s})();var E=l(767);let a=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-lista-perfiles"]],decls:3,vars:2,consts:[[3,"setDataForPerfiles","paginado"]],template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"lista-perfiles works!"),e.qZA(),e._UZ(2,"app-table-component",0)),2&t&&(e.xp6(2),e.Q6J("setDataForPerfiles","true")("paginado",10))},dependencies:[E.I]}),s})();var m=l(9857),D=l(4981),C=l(1059),x=l(1755),L=l(5183),f=l(3453),I=l(6317),P=l(8876),T=l(9855),b=l(4792),U=l(5074),M=l(1267),y=l(4522),Z=l(7822);function O(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"mat-tree-node",12),e._UZ(1,"button",13),e.TgZ(2,"mat-checkbox",14),e.NdJ("change",function(){const o=e.CHM(t).$implicit,n=e.oxw();return e.KtG(n.todoLeafItemSelectionToggle(o))}),e._uU(3),e.qZA()()}if(2&s){const t=c.$implicit,i=e.oxw();e.xp6(2),e.Q6J("checked",i.checklistSelection.isSelected(t)),e.xp6(1),e.Oqu(t.item)}}function F(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"mat-tree-node",15),e._UZ(1,"button",13),e.TgZ(2,"mat-form-field",16)(3,"mat-label"),e._uU(4,"New item..."),e.qZA(),e._UZ(5,"input",17,18),e.qZA(),e.TgZ(7,"button",19),e.NdJ("click",function(){const o=e.CHM(t).$implicit,n=e.MAs(6),d=e.oxw();return e.KtG(d.saveNode(o,n.value))}),e._uU(8,"Save"),e.qZA()()}}function k(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"mat-tree-node",15)(1,"button",20)(2,"mat-icon",21),e._uU(3),e.qZA()(),e.TgZ(4,"mat-checkbox",22),e.NdJ("change",function(){const o=e.CHM(t).$implicit,n=e.oxw();return e.KtG(n.todoItemSelectionToggle(o))}),e._uU(5),e.qZA()()}if(2&s){const t=c.$implicit,i=e.oxw();e.xp6(1),e.uIk("aria-label","Toggle "+t.item),e.xp6(2),e.hij(" ",i.treeControl.isExpanded(t)?"expand_more":"chevron_right"," "),e.xp6(1),e.Q6J("checked",i.descendantsAllSelected(t))("indeterminate",i.descendantsPartiallySelected(t)),e.xp6(1),e.Oqu(t.item)}}class G{constructor(c){Object.assign(this,c)}}class B{}let _=[],N=(()=>{class s{constructor(t,i){this.privilegiosService=t,this.loginService=i,this.dataChange=new I.X([]),this.initialize()}get data(){return this.dataChange.value}initialize(){}buildFileTree(t,i){console.log(t);let r=new G;return r.item=t.descripcion,r.children=t.children,console.log("---------------\x3e"),console.log(r),console.log(t),Object.keys(t).reduce((o,n)=>{const d=m.qh[n],h=new m.qh;return h.descripcion=n,void 0!==t.children&&(h.children=t.children),null!=d&&("object"==typeof d?h.children=this.buildFileTree(d,i+1):h.descripcion=d),o.concat(h)},[])}insertItem(t,i){t.children&&(t.children.push({descripcion:i}),this.dataChange.next(this.data))}updateItem(t,i){t.descripcion=i,this.dataChange.next(this.data)}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(C._),e.LFG(T.r))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})(),V=(()=>{class s{constructor(t,i,r,o){this._database=t,this.loginService=i,this.privilegiosService=r,this.route=o,this.flatNodeMap=new Map,this.nestedNodeMap=new Map,this.selectedParent=null,this.newItemName="",this.checklistSelection=new x.Ov(!0),this.getLevel=n=>n.level,this.isExpandable=n=>n.expandable,this.getChildren=n=>n.children,this.hasChild=(n,d)=>d.expandable,this.hasNoContent=(n,d)=>""===d.item,this.transformer=(n,d)=>{const h=this.nestedNodeMap.get(n),g=h&&h.item===n.descripcion?h:new B;return g.item=n.descripcion,g.level=d,g.expandable=!!n.children?.length,this.flatNodeMap.set(g,n),this.nestedNodeMap.set(n,g),g},this.transformer1=(n,d)=>({expandable:!!n.children&&n.children.length>0,name:n.descripcion,level:d}),this.treeFlattener=new f.JZ(this.transformer,this.getLevel,this.isExpandable,this.getChildren),this.treeControl=new L.C2(this.getLevel,this.isExpandable),this.dataSource=new f.kc(this.treeControl,this.treeFlattener),this.dataSource.data=_}ngOnInit(){this.route.params.subscribe(t=>{this.referenceNumber=t.id,this.loginService.getAllPrivilegiosByProfile(this.referenceNumber).subscribe(i=>{this.copiaResult=[...i.data],this.privilegiosService.formatPrivilegios(i.data),_=i.data.filter(n=>0==n.parentprivilegio),this.dataSource.data=_;for(let n of this.treeControl.dataNodes){let d=this.copiaResult.find(h=>h.descripcion==n.item);d.descripcion==n.item&&1==d.status&&this.checklistSelection.select(n)}})})}descendantsAllSelected(t){const i=this.treeControl.getDescendants(t);return i.length>0&&i.every(o=>this.checklistSelection.isSelected(o))}descendantsPartiallySelected(t){return this.treeControl.getDescendants(t).some(o=>this.checklistSelection.isSelected(o))&&!this.descendantsAllSelected(t)}todoItemSelectionToggle(t){this.checklistSelection.toggle(t);const i=this.treeControl.getDescendants(t);this.checklistSelection.isSelected(t)?this.checklistSelection.select(...i):this.checklistSelection.deselect(...i),i.forEach(r=>this.checklistSelection.isSelected(r)),this.checkAllParentsSelection(t)}todoLeafItemSelectionToggle(t){console.log("todoLeafItemSelectionToggle"),this.checklistSelection.toggle(t),this.checkAllParentsSelection(t)}checkAllParentsSelection(t){let i=this.getParentNode(t);for(;i;)this.checkRootNodeSelection(i),i=this.getParentNode(i)}checkRootNodeSelection(t){const i=this.checklistSelection.isSelected(t),r=this.treeControl.getDescendants(t),o=r.length>0&&r.every(n=>this.checklistSelection.isSelected(n));i&&!o?this.checklistSelection.deselect(t):!i&&o&&this.checklistSelection.select(t)}getParentNode(t){const i=this.getLevel(t);if(i<1)return null;for(let o=this.treeControl.dataNodes.indexOf(t)-1;o>=0;o--){const n=this.treeControl.dataNodes[o];if(this.getLevel(n)<i)return n}return null}addNewItem(t){const i=this.flatNodeMap.get(t);this._database.insertItem(i,""),this.treeControl.expand(t)}saveNode(t,i){const r=this.flatNodeMap.get(t);this._database.updateItem(r,i)}getAllStatusData(){console.log(this.getListData()),this.loginService.putUpdateListPrivilegios(this.getListData()).subscribe(t=>{console.log(t)})}getListData(){let t=new P.yw;for(let o of this.treeControl.dataNodes);const r=this.treeControl.dataNodes.filter(o=>this.descendantsPartiallySelected(o));return console.log("============",this.checklistSelection.selected,r),console.log("Partial......",[]),this.copiaResult.forEach(o=>{let n=new P.S4;this.checklistSelection.selected.find(h=>h.item==o.descripcion)||r.find(g=>g.item==o.descripcion)?(n.name=o.descripcion,n.status=!0,t.list.push(n)):(n.name=o.descripcion,n.status=!1,t.list.push(n))}),t.idProfile=this.referenceNumber,t}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(N),e.Y36(T.r),e.Y36(C._),e.Y36(u.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-asignacion-privilegios"]],features:[e._Bn([N])],decls:16,vars:4,consts:[["id","accordionDualist",1,"accordion","mt-4"],[1,"accordion-item"],["id","headingOne",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseDualist","aria-expanded","true","aria-controls","collapseDualist",1,"accordion-button"],["id","collapseDualist","aria-labelledby","headingOne","data-bs-parent","#accordionDualist",1,"accordion-collapse","collapse","show"],[1,"container"],[1,"row","mt-3"],[1,"col-md-12"],[3,"dataSource","treeControl"],["matTreeNodeToggle","","matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],[1,"btn","btn-primary",3,"click"],["matTreeNodeToggle","","matTreeNodePadding",""],["mat-icon-button","","disabled",""],[1,"checklist-leaf-node",3,"checked","change"],["matTreeNodePadding",""],["appearance","fill"],["matInput","","placeholder","Ex. Lettuce"],["itemValue",""],["mat-button","",3,"click"],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"],[3,"checked","indeterminate","change"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._UZ(3,"button",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"mat-tree",8),e.YNc(9,O,4,2,"mat-tree-node",9),e.TgZ(10,"div"),e.YNc(11,F,9,0,"mat-tree-node",10),e.qZA(),e.YNc(12,k,6,5,"mat-tree-node",10),e.qZA()(),e.TgZ(13,"div",7)(14,"button",11),e.NdJ("click",function(){return i.getAllStatusData()}),e._uU(15,"Guardar"),e.qZA()()()()()()()),2&t&&(e.xp6(8),e.Q6J("dataSource",i.dataSource)("treeControl",i.treeControl),e.xp6(3),e.Q6J("matTreeNodeDefWhen",i.hasNoContent),e.xp6(1),e.Q6J("matTreeNodeDefWhen",i.hasChild))},dependencies:[b.oG,U.KE,U.hX,M.Nt,f.fQ,f.ah,f.eu,f.gi,f.uo,y.lW,Z.Hw]}),s})();const Y=[{path:"",component:p,children:[{path:"perfil/:id",component:(()=>{class s{constructor(t,i,r,o){this.router=t,this.route=i,this.userService=r,this.privilegiosService=o,this.userData=null,this.data=null}ngOnInit(){this.route.params.subscribe(t=>{this.referenceNumber=t.id,this.userService.getById(t.id).subscribe(i=>{console.log(i),this.userData=i.data,this.data=i.data,this.userData.userName=i.data.perfil})}),setTimeout(()=>{console.log("-----------------------------------------"),console.log(this.privilegiosService.getAllPrivilegiosArr());let t=this.privilegiosService.getAllPrivilegiosArr().slice(),r=(new m.qh(this.privilegiosService.searchTree(t[1],109)),new m.qh(this.privilegiosService.searchTree(t[1],270)).etiqueta);console.log(r)},5e3)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(D.K),e.Y36(C._))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-vista-perfiles"]],decls:2,vars:0,template:function(t,i){1&t&&(e.ynx(0),e._UZ(1,"app-asignacion-privilegios"),e.BQk())},dependencies:[V]}),s})(),data:{breadcrumb:"Perfil",privilegio:"150"}},{path:"",component:a}],data:{breadcrumb:"Perfil",privilegio:"150"}}];let w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.Bz.forChild(Y),u.Bz]}),s})();var J=l(9709),A=l(2508),z=l(6745);let K=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[v.ez,A.u5,A.UX,w,J.q,z.G]}),s})()},4981:(R,S,l)=>{l.d(S,{K:()=>e});var v=l(7413),u=l(2560);let e=(()=>{class p extends v.y{constructor(a){super(a),this.port=this.PORT_USER}getUserByProfile(a){return super.get(this.URL_MODULE_USER+this.SERVICE_GET_USER_BY_PROFILE+"/"+a)}getUser(a){return super.post(this.URL_MODULE_USER+this.SERVICE_GET_USER_BY_PROFILE,a)}sendUserEmail(a){return super.post(this.URL_MODULE_USER+this.SERVICE_POST_SEND_MAIL,a)}getUserAssigUnAssig(a,m){return super.get(this.URL_MODULE_USER+this.SERVICE_GET_ASSIGN1+"/"+a+this.SERVICE_GET_ASSIGN2+"/"+m)}upDateData(a){return super.post(this.URL_MODULE_USER+this.SERVICE_UPDATE_DATA_USER,a)}getById(a){return super.get(this.URL_MODULE_USER+"/"+a)}getHeaders(){return super.get(this.URL_MODULE_USER+this.SERVICE_GET_HEADERS)}getDataUsers(a){return super.put(this.URL_MODULE_USER+this.SERVICE_GET_DATA_USERS,null)}getDataUsersByConf(a){return super.put(this.URL_MODULE_USER+this.SERVICE_GET_USERS_BY_CONF+"/"+a,null)}getDataFilter(a){return super.put(this.URL_MODULE_USER+this.SERVICE_GET_DATA_FILTER,a)}putResetStatusPass(a,m){return super.put(this.URL_MODULE_USER+this.SERVICE_PUT_RESET_PASS+"/"+a+"/"+m,null)}}return p.\u0275fac=function(a){return new(a||p)(u.LFG(u.zs3))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
//# sourceMappingURL=80.js.map