"use strict";(self.webpackChunkthincode=self.webpackChunkthincode||[]).push([[932],{6932:(M,n,i)=>{i.r(n),i.d(n,{AdministracionModuleModule:()=>v});var a=i(4666),s=i(7340),u=i(6570),l=i(9857),d=i(8333),e=i(2560);const g=[{path:"usuarios",canActivate:[u.e,d.w],data:{breadcrumb:"Usuarios",privilegio:"102",roles:[l.Iu.ADMIN,l.Iu.COORDINADOR,l.Iu.EJECUTIVO_PROYECTOS]},loadChildren:()=>Promise.all([i.e(767),i.e(907),i.e(317),i.e(759)]).then(i.bind(i,9759)).then(o=>o.UsuariosModule)},{path:"perfiles",canActivate:[u.e,d.w],data:{breadcrumb:"perfiles",privilegio:"264",roles:[l.Iu.ADMIN,l.Iu.COORDINADOR,l.Iu.EJECUTIVO_PROYECTOS]},loadChildren:()=>Promise.all([i.e(767),i.e(80)]).then(i.bind(i,1080)).then(o=>o.PerfilesModule)}];let t=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(g),s.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,t]}),o})()},8333:(M,n,i)=>{i.d(n,{w:()=>d});var a=i(9857),s=i(2560),u=i(7340),l=i(1059);let d=(()=>{class e{constructor(t,v){this.router=t,this.privilegiosService=v,this.temp=[]}canActivate(t,v){let o=new Promise((r,A)=>{setTimeout(()=>{console.log(this.privilegiosService.getAllPrivilegiosArr()),this.temp=[...this.privilegiosService.getAllPrivilegiosArr()];let h=new a.qh(this.privilegiosService.searchTree(this.temp[1],t.data.privilegio)).status??185,m=new a.qh(this.privilegiosService.searchTree(this.temp[0],t.data.privilegio)).status??185;console.log(t.data.privilegio),console.log(h),console.log(m),1==h||1==m?r(!0):A(!1)},3e3)});return o.then(r=>!0,r=>!1),o.then(r=>(console.log("......................................."),!0),r=>(console.log("......................................."),this.router.navigate(["/"]),!1))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.F0),s.LFG(l._))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
//# sourceMappingURL=932.js.map