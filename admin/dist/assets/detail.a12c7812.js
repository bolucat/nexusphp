var W=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var K=(e,l,r)=>l in e?W(e,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[l]=r,R=(e,l)=>{for(var r in l||(l={}))x.call(l,r)&&K(e,r,l[r]);if(J)for(var r of J(l))ee.call(l,r)&&K(e,r,l[r]);return e},U=(e,l)=>X(e,Z(l));import{B as V,r as P,t as S,e as i,y as A,f as c,q as g,w as a,h as n,k as t,z as E,g as G,A as Q,F as O,E as $,l as v,d as le,u as oe,o as ne,i as z,j as w,p as ae,m as te}from"./vendor.7b1bb722.js";import{_ as q,a as y}from"./index.918d62b3.js";const se={name:"DialogAssignExam",props:{reload:Function},setup(e,l){const r=V(null),o=P({loading:!1,matchExams:[],visible:!1,formData:{uid:0,exam_id:"",time_range:[]},rules:{exam_id:[{required:"true"}]}}),h=async()=>{let d=await y.listUserMatchExams({uid:o.formData.uid});o.matchExams=d.data},D=d=>{o.formData.uid=d,o.matchExams.length==0&&(o.loading=!0,h(),o.loading=!1),o.visible=!0},s=()=>{r.value.validate(async d=>{if(d){let _=await y.storeExamUser(o.formData);o.visible=!1,$.success(_.msg),e.reload&&e.reload()}})};return U(R({},S(o)),{handleSubmit:s,formRef:r,open:D})}},ie=n("div",{class:"time-range-help-text"},"If the time range is not specified, the exam's own configured time range will be used.",-1),de={class:"dialog-footer"},re=v("Cancel"),me=v("Save");function ue(e,l,r,o,h,D){const s=i("el-option"),d=i("el-select"),_=i("el-form-item"),f=i("el-date-picker"),p=i("el-form"),C=i("el-button"),I=i("el-dialog"),k=A("loading");return c(),g(I,{title:"Assign exam to user",modelValue:e.visible,"onUpdate:modelValue":l[3]||(l[3]=m=>e.visible=m),center:"","close-on-click-modal":!1},{footer:a(()=>[n("span",de,[t(C,{onClick:l[2]||(l[2]=m=>e.visible=!1)},{default:a(()=>[re]),_:1}),t(C,{type:"primary",onClick:o.handleSubmit},{default:a(()=>[me]),_:1},8,["onClick"])])]),default:a(()=>[E((c(),g(p,{model:e.formData,"label-width":"100px",ref:"formRef",rules:e.rules},{default:a(()=>[t(_,{label:"Exam",prop:"exam_id"},{default:a(()=>[t(d,{modelValue:e.formData.exam_id,"onUpdate:modelValue":l[0]||(l[0]=m=>e.formData.exam_id=m),placeholder:"Select an exam..."},{default:a(()=>[(c(!0),G(O,null,Q(e.matchExams,m=>(c(),g(s,{key:m.id,label:m.name,value:m.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"Time range",prop:"time_range"},{default:a(()=>[t(f,{modelValue:e.formData.time_range,"onUpdate:modelValue":l[1]||(l[1]=m=>e.formData.time_range=m),type:"datetimerange",format:"YYYY-MM-DD HH:mm:ss","range-separator":"to","start-placeholder":"Begin","end-placeholder":"End"},null,8,["modelValue"]),ie]),_:1})]),_:1},8,["model","rules"])),[[k,e.loading]])]),_:1},8,["modelValue"])}var fe=q(se,[["render",ue]]);const ce={name:"DialogInviteInfo",props:{reload:Function},setup(e,l){const r=V(null),o=P({loading:!1,visible:!1,uid:0,inviteInfo:[]}),h=async()=>{let s=await y.getInviteInfo({uid:o.uid});o.inviteInfo.push(s.data)},D=s=>{o.uid=s,o.inviteInfo.length==0&&(o.loading=!0,h(),o.loading=!1),o.visible=!0};return U(R({},S(o)),{formRef:r,open:D})}};function _e(e,l,r,o,h,D){const s=i("el-table-column"),d=i("el-table"),_=i("el-dialog"),f=A("loading");return c(),g(_,{title:"Invite info",modelValue:e.visible,"onUpdate:modelValue":l[0]||(l[0]=p=>e.visible=p),center:"",width:"65%","close-on-click-modal":!1},{default:a(()=>[E((c(),g(d,{data:e.inviteInfo},{default:a(()=>[t(s,{prop:"id",label:"ID",width:"55"}),t(s,{prop:"inviter_user.username",label:"Inviter",width:"150"}),t(s,{prop:"invitee",label:"Receive email"}),t(s,{prop:"hash",label:"Hash"}),t(s,{prop:"valid_text",label:"Hash valid",width:"100"}),t(s,{prop:"invitee_register_email",label:"Register email"}),t(s,{prop:"time_invited",label:"Time invited",width:"160"})]),_:1},8,["data"])),[[f,e.loading]])]),_:1},8,["modelValue"])}var pe=q(ce,[["render",_e]]);const ve={name:"DialogDisableUser",props:{reload:Function},setup(e,l){const r=V(null),o=P({loading:!1,visible:!1,formData:{uid:0,reason:""},rules:{reason:[{required:"true"}]}}),h=s=>{o.formData.uid=s,o.visible=!0},D=()=>{r.value.validate(async s=>{if(s){let d=await y.disableUser(o.formData);o.visible=!1,$.success(d.msg),e.reload&&e.reload()}})};return U(R({},S(o)),{handleSubmit:D,formRef:r,open:h})}},ge={class:"dialog-footer"},be=v("Cancel"),he=v("Save");function De(e,l,r,o,h,D){const s=i("el-input"),d=i("el-form-item"),_=i("el-form"),f=i("el-button"),p=i("el-dialog"),C=A("loading");return c(),g(p,{title:"Disable user",modelValue:e.visible,"onUpdate:modelValue":l[2]||(l[2]=I=>e.visible=I),center:"","close-on-click-modal":!1},{footer:a(()=>[n("span",ge,[t(f,{onClick:l[1]||(l[1]=I=>e.visible=!1)},{default:a(()=>[be]),_:1}),t(f,{type:"primary",onClick:o.handleSubmit},{default:a(()=>[he]),_:1},8,["onClick"])])]),default:a(()=>[E((c(),g(_,{model:e.formData,"label-width":"100px",ref:"formRef",rules:e.rules},{default:a(()=>[t(d,{label:"Reason",prop:"reason"},{default:a(()=>[t(s,{type:"textarea",modelValue:e.formData.reason,"onUpdate:modelValue":l[0]||(l[0]=I=>e.formData.reason=I)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[C,e.loading]])]),_:1},8,["modelValue"])}var Ie=q(ve,[["render",De]]);const we={name:"DialogModComment",props:{reload:Function},setup(e,l){const r=V(null),o=P({loading:!1,visible:!1,uid:0,modComment:""}),h=async()=>{let s=await y.getUserModComment({uid:o.uid});o.modComment=s.data},D=s=>{o.uid=s,o.loading=!0,h(),o.loading=!1,o.visible=!0};return U(R({},S(o)),{formRef:r,open:D})}},Ce=["innerHTML"];function ye(e,l,r,o,h,D){const s=i("el-card"),d=i("el-dialog"),_=A("loading");return c(),g(d,{title:"Mod comment",modelValue:e.visible,"onUpdate:modelValue":l[0]||(l[0]=f=>e.visible=f),center:"",width:"40%","close-on-click-modal":!1},{default:a(()=>[E((c(),g(s,null,{default:a(()=>[n("div",{innerHTML:e.modComment,class:"pre-line"},null,8,Ce)]),_:1})),[[_,e.loading]])]),_:1},8,["modelValue"])}var Ve=q(we,[["render",ye]]);const ke={name:"DialogResetPassword",props:{reload:Function},setup(e,l){const r=V(null),o=P({loading:!1,visible:!1,formData:{uid:0,password:"",password_confirmation:""},rules:{password:[{required:"true"}],password_confirmation:[{required:"true"}]}}),h=s=>{o.formData.uid=s,o.visible=!0},D=()=>{r.value.validate(async s=>{if(s){let d=await y.resetPassword(o.formData);o.visible=!1,$.success(d.msg),e.reload&&e.reload()}})};return U(R({},S(o)),{handleSubmit:D,formRef:r,open:h})}},$e={class:"dialog-footer"},Re=v("Cancel"),Ue=v("Save");function Ee(e,l,r,o,h,D){const s=i("el-input"),d=i("el-form-item"),_=i("el-form"),f=i("el-button"),p=i("el-dialog"),C=A("loading");return c(),g(p,{title:"Reset password",modelValue:e.visible,"onUpdate:modelValue":l[3]||(l[3]=I=>e.visible=I),center:"","close-on-click-modal":!1},{footer:a(()=>[n("span",$e,[t(f,{onClick:l[2]||(l[2]=I=>e.visible=!1)},{default:a(()=>[Re]),_:1}),t(f,{type:"primary",onClick:o.handleSubmit},{default:a(()=>[Ue]),_:1},8,["onClick"])])]),default:a(()=>[E((c(),g(_,{model:e.formData,"label-width":"200px",ref:"formRef",rules:e.rules},{default:a(()=>[t(d,{label:"Password",prop:"password"},{default:a(()=>[t(s,{modelValue:e.formData.password,"onUpdate:modelValue":l[0]||(l[0]=I=>e.formData.password=I)},null,8,["modelValue"])]),_:1}),t(d,{label:"Password confirmation",prop:"password_confirmation"},{default:a(()=>[t(s,{modelValue:e.formData.password_confirmation,"onUpdate:modelValue":l[1]||(l[1]=I=>e.formData.password_confirmation=I)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[C,e.loading]])]),_:1},8,["modelValue"])}var Me=q(ke,[["render",Ee]]);const Pe={name:"DialogGrantMedal",props:{reload:Function},setup(e,l){const r=V(null),o=P({loading:!1,medals:[],visible:!1,formData:{uid:0,medal_id:"",duration:""},rules:{medal_id:[{required:"true"}]}}),h=async()=>{let d=await y.listMedal();o.medals=d.data.data},D=d=>{o.formData.uid=d,o.medals.length==0&&(o.loading=!0,h(),o.loading=!1),o.visible=!0},s=()=>{r.value.validate(async d=>{if(d){let _=await y.storeUserMedal(o.formData);o.visible=!1,$.success(_.msg),e.reload&&e.reload()}})};return U(R({},S(o)),{handleSubmit:s,formRef:r,open:D})}},Se={class:"dialog-footer"},Ae=v("Cancel"),ze=v("Save");function qe(e,l,r,o,h,D){const s=i("el-option"),d=i("el-select"),_=i("el-form-item"),f=i("el-input"),p=i("el-form"),C=i("el-button"),I=i("el-dialog"),k=A("loading");return c(),g(I,{title:"Grant medal to user",modelValue:e.visible,"onUpdate:modelValue":l[3]||(l[3]=m=>e.visible=m),center:"","close-on-click-modal":!1},{footer:a(()=>[n("span",Se,[t(C,{onClick:l[2]||(l[2]=m=>e.visible=!1)},{default:a(()=>[Ae]),_:1}),t(C,{type:"primary",onClick:o.handleSubmit},{default:a(()=>[ze]),_:1},8,["onClick"])])]),default:a(()=>[E((c(),g(p,{model:e.formData,"label-width":"100px",ref:"formRef",rules:e.rules},{default:a(()=>[t(_,{label:"Medal",prop:"medal_id"},{default:a(()=>[t(d,{modelValue:e.formData.medal_id,"onUpdate:modelValue":l[0]||(l[0]=m=>e.formData.medal_id=m),placeholder:"Select an medal..."},{default:a(()=>[(c(!0),G(O,null,Q(e.medals,m=>(c(),g(s,{key:m.id,label:m.name,value:m.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"Duration",prop:"duration"},{default:a(()=>[t(f,{modelValue:e.formData.duration,"onUpdate:modelValue":l[1]||(l[1]=m=>e.formData.duration=m),placeholder:"Unit: day, if empty, it's valid forever"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[k,e.loading]])]),_:1},8,["modelValue"])}var Fe=q(Pe,[["render",qe]]);const Ge={name:"DialogIncrementDecrement",props:{reload:Function,title:String,valuePlaceholder:String},setup(e,l){const r=V(null),o=P({loading:!1,visible:!1,formData:{uid:0,field:"",reason:"",value:"",action:""},rules:{value:[{required:"true"}],action:[{required:"true"}]}}),h=(s,d)=>{o.formData.uid=s,o.formData.field=d,o.visible=!0},D=()=>{r.value.validate(async s=>{if(s){let d=await y.incrementDecrementUserField(o.formData);o.visible=!1,$.success(d.msg),e.reload&&e.reload()}})};return U(R({},S(o)),{handleSubmit:D,formRef:r,open:h})}},Be={class:"dialog-footer"},He=v("Cancel"),Te=v("Save");function Ne(e,l,r,o,h,D){const s=i("el-radio"),d=i("el-radio-group"),_=i("el-form-item"),f=i("el-input"),p=i("el-form"),C=i("el-button"),I=i("el-dialog"),k=A("loading");return c(),g(I,{title:r.title,modelValue:e.visible,"onUpdate:modelValue":l[4]||(l[4]=m=>e.visible=m),center:"","close-on-click-modal":!1},{footer:a(()=>[n("span",Be,[t(C,{onClick:l[3]||(l[3]=m=>e.visible=!1)},{default:a(()=>[He]),_:1}),t(C,{type:"primary",onClick:o.handleSubmit},{default:a(()=>[Te]),_:1},8,["onClick"])])]),default:a(()=>[E((c(),g(p,{model:e.formData,"label-width":"100px",ref:"formRef",rules:e.rules},{default:a(()=>[t(_,{label:"Action",prop:"action"},{default:a(()=>[t(d,{modelValue:e.formData.action,"onUpdate:modelValue":l[0]||(l[0]=m=>e.formData.action=m)},{default:a(()=>[t(s,{label:"Increment"}),t(s,{label:"Decrement"})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"Value",prop:"value"},{default:a(()=>[t(f,{modelValue:e.formData.value,"onUpdate:modelValue":l[1]||(l[1]=m=>e.formData.value=m),type:"number",placeholder:r.valuePlaceholder},null,8,["modelValue","placeholder"])]),_:1}),t(_,{label:"Reason",prop:"reason"},{default:a(()=>[t(f,{type:"textarea",modelValue:e.formData.reason,"onUpdate:modelValue":l[2]||(l[2]=m=>e.formData.reason=m)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[k,e.loading]])]),_:1},8,["title","modelValue"])}var Le=q(Ge,[["render",Ne]]);const Ye={name:"UserDetail",components:{DialogAssignExam:fe,DialogViewInviteInfo:pe,DialogDisableUser:Ie,DialogModComment:Ve,DialogResetPassword:Me,DialogGrantMedal:Fe,DialogIncrementDecrement:Le},setup(){const e=le();oe();const{id:l}=e.query,r=V(null),o=V(null),h=V(null),D=V(null),s=V(null),d=V(null),_=V(null),f=P({loading:!1,baseInfo:{},examInfo:null,dialogTitle:"",valuePlaceholder:""});ne(()=>{p()});const p=async()=>{f.loading=!0;let u=await y.getUser(l);f.loading=!1,f.baseInfo=u.data.base_info,f.examInfo=u.data.exam_info},C=async u=>{let M=await y.deleteExamUser(u);$.success(M.msg),await p()},I=async u=>{let M=await y.avoidExamUser(u);$.success(M.msg),await p()},k=async u=>{let M=await y.recoverExamUser(u);$.success(M.msg),await p()},m=async()=>{r.value.open(l)},B=async()=>{o.value.open(l)},H=async()=>{h.value.open(l)},T=async()=>{D.value.open(l)},N=async u=>{f.dialogTitle="Change "+u,["uploaded","downloaded"].includes(u)?f.valuePlaceholder="Unit: GB":f.valuePlaceholder="",_.value.open(l,u)},L=async()=>{let u=await y.enableUser({uid:l});$.success(u.msg),await p()},Y=async()=>{s.value.open(l)},j=async()=>{d.value.open(l)},F=async u=>{let M=await y.removeUserMedal(u);$.success(M.msg),await p()};return U(R({},S(f)),{handleRemoveExam:C,handleAvoidExam:I,handleAssignExam:m,handleGrantMedal:B,handleRecoverExam:k,handleEnableUser:L,handleViewInviteInfo:H,handleDisableUser:T,handleGetModComment:Y,handleResetPassword:j,fetchPageData:p,handleRemoveUserMedal:F,handleIncrementDecrement:N,assignExam:r,grantMedal:o,viewInviteInfo:h,disableUser:D,modComment:s,resetPassword:d,incrementDecrement:_})}},b=e=>(ae("data-v-41a37906"),e=e(),te(),e),je={class:"page-user-detail"},Oe=b(()=>n("div",{class:"card-header"},[n("span",null,"Base info")],-1)),Je={class:"table-base-info"},Ke=b(()=>n("tr",null,[n("th",null,"Field"),n("th",null,"Value"),n("th",null,"Actions"),n("th",null,"Other")],-1)),Qe=b(()=>n("td",null,"Username",-1)),We=b(()=>n("td",null,null,-1)),Xe={colspan:"11"},Ze={class:"other-actions"},xe=v("Mod comment"),el=v("Reset password"),ll=v("Assign exam"),ol=v("Grant medal"),nl=b(()=>n("td",null,"Email",-1)),al=b(()=>n("td",null,null,-1)),tl=b(()=>n("td",null,"Enabled",-1)),sl=v("Disable"),il=v("Enable"),dl=b(()=>n("td",null,"Added",-1)),rl=b(()=>n("td",null,"Last access",-1)),ml=b(()=>n("td",null,"Class",-1)),ul=b(()=>n("td",null,"Invite by",-1)),fl=v("View"),cl=b(()=>n("td",null,"Seed points",-1)),_l=b(()=>n("td",null,"H&R inspecting",-1)),pl=v("Remove"),vl=v("Pardon"),gl=b(()=>n("td",null,"Invites",-1)),bl=v("Change"),hl=b(()=>n("td",null,"Uploaded",-1)),Dl=v("Change"),Il=b(()=>n("td",null,"Downloaded",-1)),wl=v("Change"),Cl=b(()=>n("td",null,"Bonus",-1)),yl=v("Change"),Vl=b(()=>n("div",{class:"card-header"},[n("span",null,"Exam on the way")],-1)),kl={class:"table-base-info"},$l=b(()=>n("td",null,"Name",-1)),Rl=b(()=>n("td",null,"Created at",-1)),Ul=b(()=>n("td",null,"Exam time",-1)),El=b(()=>n("td",null,"Status",-1)),Ml=b(()=>n("td",null,"Action",-1)),Pl=v("Remove"),Sl=v("Avoid"),Al=v("Recover"),zl=v("Pass !"),ql=v("Not Pass !"),Fl=b(()=>n("div",{class:"card-header"},[n("span",null,"Medal")],-1)),Gl=b(()=>n("a",{style:{cursor:"pointer"}},"Remove",-1));function Bl(e,l,r,o,h,D){const s=i("el-button"),d=i("el-popconfirm"),_=i("el-card"),f=i("el-col"),p=i("el-table-column"),C=i("el-tag"),I=i("el-table"),k=i("el-row"),m=i("el-image"),B=i("DialogAssignExam"),H=i("DialogGrantMedal"),T=i("DialogViewInviteInfo"),N=i("DialogDisableUser"),L=i("DialogModComment"),Y=i("DialogResetPassword"),j=i("DialogIncrementDecrement"),F=A("loading");return c(),G(O,null,[E((c(),G("div",je,[t(_,null,{header:a(()=>[Oe]),default:a(()=>[n("table",Je,[Ke,n("tr",null,[Qe,n("td",null,w(e.baseInfo.username),1),We,n("td",Xe,[n("div",Ze,[t(s,{type:"primary",size:"default",onClick:o.handleGetModComment},{default:a(()=>[xe]),_:1},8,["onClick"]),t(s,{type:"primary",size:"default",onClick:o.handleResetPassword},{default:a(()=>[el]),_:1},8,["onClick"]),t(s,{type:"primary",size:"default",onClick:o.handleAssignExam},{default:a(()=>[ll]),_:1},8,["onClick"]),t(s,{type:"primary",size:"default",onClick:o.handleGrantMedal},{default:a(()=>[ol]),_:1},8,["onClick"])])])]),n("tr",null,[nl,n("td",null,w(e.baseInfo.email),1),al]),n("tr",null,[tl,n("td",null,w(e.baseInfo.enabled),1),n("td",null,[e.baseInfo.enabled&&e.baseInfo.enabled=="yes"?(c(),g(s,{key:0,size:"small",onClick:o.handleDisableUser},{default:a(()=>[sl]),_:1},8,["onClick"])):z("",!0),e.baseInfo.enabled&&e.baseInfo.enabled=="no"?(c(),g(d,{key:1,title:"Confirm Enable ?",onConfirm:o.handleEnableUser},{reference:a(()=>[t(s,{size:"small"},{default:a(()=>[il]),_:1})]),_:1},8,["onConfirm"])):z("",!0)])]),n("tr",null,[dl,n("td",null,w(e.baseInfo.added),1)]),n("tr",null,[rl,n("td",null,w(e.baseInfo.last_access),1)]),n("tr",null,[ml,n("td",null,w(e.baseInfo.class_text),1)]),n("tr",null,[ul,n("td",null,w(e.baseInfo.inviter&&e.baseInfo.inviter.username),1),n("td",null,[t(s,{size:"small",onClick:o.handleViewInviteInfo},{default:a(()=>[fl]),_:1},8,["onClick"])])]),n("tr",null,[cl,n("td",null,w(e.baseInfo.seed_points),1)]),n("tr",null,[_l,n("td",null,w(e.baseInfo.invites),1),n("td",null,[t(d,{title:"Confirm Remove ?",onConfirm:e.handleRemoveHitAndRun},{reference:a(()=>[t(s,{size:"small"},{default:a(()=>[pl]),_:1})]),_:1},8,["onConfirm"]),t(d,{title:"Confirm Pardon ?",onConfirm:e.handlePardonHitAndRun},{reference:a(()=>[t(s,{size:"small"},{default:a(()=>[vl]),_:1})]),_:1},8,["onConfirm"])])]),n("tr",null,[gl,n("td",null,w(e.baseInfo.invites),1),n("td",null,[t(s,{size:"small",onClick:l[0]||(l[0]=u=>o.handleIncrementDecrement("invites"))},{default:a(()=>[bl]),_:1})])]),n("tr",null,[hl,n("td",null,w(e.baseInfo.uploaded_text),1),n("td",null,[t(s,{size:"small",onClick:l[1]||(l[1]=u=>o.handleIncrementDecrement("uploaded"))},{default:a(()=>[Dl]),_:1})])]),n("tr",null,[Il,n("td",null,w(e.baseInfo.downloaded_text),1),n("td",null,[t(s,{size:"small",onClick:l[2]||(l[2]=u=>o.handleIncrementDecrement("downloaded"))},{default:a(()=>[wl]),_:1})])]),n("tr",null,[Cl,n("td",null,w(e.baseInfo.bonus),1),n("td",null,[t(s,{size:"small",onClick:l[3]||(l[3]=u=>o.handleIncrementDecrement("bonus"))},{default:a(()=>[yl]),_:1})])])])]),_:1}),e.examInfo?(c(),g(_,{key:0},{header:a(()=>[Vl]),default:a(()=>[t(k,null,{default:a(()=>[t(f,{span:12},{default:a(()=>[n("table",kl,[n("tr",null,[$l,n("td",null,w(e.examInfo.exam&&e.examInfo.exam.name),1)]),n("tr",null,[Rl,n("td",null,w(e.examInfo.created_at),1)]),n("tr",null,[Ul,n("td",null,w(e.examInfo.begin)+" ~ "+w(e.examInfo.end),1)]),n("tr",null,[El,n("td",null,w(e.examInfo.status_text),1)]),n("tr",null,[Ml,n("td",null,[t(d,{title:"Confirm Remove ?",onConfirm:l[4]||(l[4]=u=>o.handleRemoveExam(e.examInfo.id))},{reference:a(()=>[t(s,{type:"danger",size:"small"},{default:a(()=>[Pl]),_:1})]),_:1}),e.examInfo.status===0?(c(),g(d,{key:0,title:"Confirm Avoid ?",onConfirm:l[5]||(l[5]=u=>o.handleAvoidExam(e.examInfo.id))},{reference:a(()=>[t(s,{type:"info",size:"small"},{default:a(()=>[Sl]),_:1})]),_:1})):z("",!0),e.examInfo.status===-1?(c(),g(d,{key:1,title:"Confirm Recover ?",onConfirm:l[6]||(l[6]=u=>o.handleRecoverExam(e.examInfo.id))},{reference:a(()=>[t(s,{type:"primary",size:"small"},{default:a(()=>[Al]),_:1})]),_:1})):z("",!0)])])])]),_:1}),t(f,{span:12},{default:a(()=>[t(I,{data:e.examInfo.progress_formatted},{default:a(()=>[t(p,{prop:"name",label:"Index"}),t(p,{prop:"require_value_formatted",label:"Require"}),t(p,{prop:"current_value_formatted",label:"Current"}),t(p,{prop:"result",label:"Result"},{default:a(u=>[u.row.passed?(c(),g(C,{key:0,type:"success"},{default:a(()=>[zl]),_:1})):z("",!0),u.row.passed?z("",!0):(c(),g(C,{key:1,type:"danger"},{default:a(()=>[ql]),_:1}))]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1})):z("",!0),e.baseInfo.valid_medals&&e.baseInfo.valid_medals.length?(c(),g(k,{key:1},{default:a(()=>[t(f,{span:12},{default:a(()=>[t(_,null,{header:a(()=>[Fl]),default:a(()=>[E((c(),g(I,{ref:"multipleTable",data:e.baseInfo.valid_medals,"tooltip-effect":"dark"},{default:a(()=>[t(p,{prop:"name",label:"Name"}),t(p,{prop:"image_large",label:"Image"},{default:a(u=>[t(m,{src:u.row.image_large,style:{"max-height":"200px"}},null,8,["src"])]),_:1}),t(p,{prop:"expire_at",label:"Expire at"}),t(p,{label:"Action",width:"100"},{default:a(u=>[t(d,{title:"Confirm Remove ?",onConfirm:M=>o.handleRemoveUserMedal(u.row.user_medal_id)},{reference:a(()=>[Gl]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[F,e.loading]])]),_:1})]),_:1})]),_:1})):z("",!0)])),[[F,e.loading]]),t(B,{ref:"assignExam",reload:o.fetchPageData},null,8,["reload"]),t(H,{ref:"grantMedal",reload:o.fetchPageData},null,8,["reload"]),t(T,{ref:"viewInviteInfo"},null,512),t(N,{ref:"disableUser",reload:o.fetchPageData},null,8,["reload"]),t(L,{ref:"modComment"},null,512),t(Y,{ref:"resetPassword"},null,512),t(j,{ref:"incrementDecrement",reload:o.fetchPageData,title:e.dialogTitle,valuePlaceholder:e.valuePlaceholder},null,8,["reload","title","valuePlaceholder"])],64)}var Ll=q(Ye,[["render",Bl],["__scopeId","data-v-41a37906"]]);export{Ll as default};