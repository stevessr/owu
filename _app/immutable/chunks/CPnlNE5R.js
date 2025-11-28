import"./CWj6FrbW.js";import"./CN51-NxK.js";import{b as De,g as Ne,q as le,u as I,v as Ve,e as je,c as r,j as l,r as o,l as de,a as m,k as d,t as g,w as n,i as b,s as c,p as Oe,f as _,m as C,x as U,n as F}from"./B1aEjIOE.js";import{i as Ue}from"./wWSHsY6k.js";import{r as W,a as z}from"./C-nUi2xk.js";import{b as L}from"./DpC21kL5.js";import{b as ue}from"./D1EpoRID.js";import{p as We}from"./Bfc47y5P.js";import{i as ze}from"./IzogmxPD.js";import{p}from"./DjZmDc7M.js";import{a as Le,s as Ge}from"./bFhncqTJ.js";import{g as Je}from"./JxNQ7cUi.js";import{C as Ke}from"./CxJattCY.js";import{C as Qe}from"./CY8nvp9b.js";import{B as Re}from"./C3i1LWIK.js";import{T as P}from"./BSxK1uxp.js";import{C as Xe}from"./Ddusa4Wb.js";var Ye=_('<button class="w-full text-left text-sm py-1.5 px-1 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850" type="button"><!></button>'),Ze=_('<input class="w-full text-2xl font-medium bg-transparent outline-hidden font-primary" type="text" required/>'),et=_('<div class="text-sm text-gray-500 shrink-0"> </div>'),tt=_('<input class="w-full text-sm disabled:text-gray-500 bg-transparent outline-hidden" type="text" required/>'),rt=_('<input class="w-full text-sm bg-transparent outline-hidden" type="text" required/>'),ot=_('<div class="text-sm text-gray-500"><div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-lg px-4 py-3"><div> </div> <ul class=" mt-1 list-disc pl-4 text-xs"><li> </li> <li> </li></ul></div> <div class="my-3"> </div></div>'),at=_('<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><form class=" flex flex-col max-h-[100dvh] h-full"><div class="flex flex-col flex-1 overflow-auto h-0 rounded-lg"><div class="w-full mb-2 flex flex-col gap-0.5"><div class="flex w-full items-center"><div class=" shrink-0 mr-2"><!></div> <div class="flex-1"><!></div> <div><!></div></div> <div class=" flex gap-2 px-1 items-center"><!> <!></div></div> <div class="mb-2 flex-1 overflow-auto h-0 rounded-lg"><!></div> <div class="pb-3 flex justify-between"><div class="flex-1 pr-3"><div class="text-xs text-gray-500 line-clamp-2"><span class=" font-semibold dark:text-gray-200"> </span> <br/>— <span class=" font-medium dark:text-gray-400"> </span></div></div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></div></form></div></div> <!>',1);function wt(ce,f){De(f,!1);const e=()=>Le(me,"$i18n",fe),[fe,ve]=Ge(),me=Ne("i18n");let k=C(null),M=C(!1),pe=p(f,"onSave",8,()=>{}),x=p(f,"edit",8,!1),G=p(f,"clone",8,!1),y=p(f,"id",12,""),h=p(f,"name",12,""),w=p(f,"meta",28,()=>({description:""})),v=p(f,"content",12,""),$=C("");const _e=()=>{b($,v())};let E=C(),he=`"""
title: Example Filter
author: open-webui
author_url: https://github.com/open-webui
funding_url: https://github.com/open-webui
version: 0.1
"""

from pydantic import BaseModel, Field
from typing import Optional


class Filter:
    class Valves(BaseModel):
        priority: int = Field(
            default=0, description="Priority level for the filter operations."
        )
        max_turns: int = Field(
            default=8, description="Maximum allowable conversation turns for a user."
        )
        pass

    class UserValves(BaseModel):
        max_turns: int = Field(
            default=4, description="Maximum allowable conversation turns for a user."
        )
        pass

    def __init__(self):
        # Indicates custom file handling logic. This flag helps disengage default routines in favor of custom
        # implementations, informing the WebUI to defer file-related operations to designated methods within this class.
        # Alternatively, you can remove the files directly from the body in from the inlet hook
        # self.file_handler = True

        # Initialize 'valves' with specific configurations. Using 'Valves' instance helps encapsulate settings,
        # which ensures settings are managed cohesively and not confused with operational flags like 'file_handler'.
        self.valves = self.Valves()
        pass

    def inlet(self, body: dict, __user__: Optional[dict] = None) -> dict:
        # Modify the request body or validate it before processing by the chat completion API.
        # This function is the pre-processor for the API where various checks on the input can be performed.
        # It can also modify the request before sending it to the API.
        print(f"inlet:{__name__}")
        print(f"inlet:body:{body}")
        print(f"inlet:user:{__user__}")

        if __user__.get("role", "admin") in ["user", "admin"]:
            messages = body.get("messages", [])

            max_turns = min(__user__["valves"].max_turns, self.valves.max_turns)
            if len(messages) > max_turns:
                raise Exception(
                    f"Conversation turn limit exceeded. Max turns: {max_turns}"
                )

        return body

    def outlet(self, body: dict, __user__: Optional[dict] = None) -> dict:
        # Modify or analyze the response body after processing by the API.
        # This function is the post-processor for the API, which can be used to modify the response
        # or perform additional checks and analytics.
        print(f"outlet:{__name__}")
        print(f"outlet:body:{body}")
        print(f"outlet:user:{__user__}")

        return body
`;const ge=async()=>{y(),h(),w(),v().substring(0,100)+"";try{pe()({id:y(),name:h(),meta:w(),content:v()})}catch(t){}},J=async()=>{if(l(E)){v(l($)),await U();const t=await l(E).formatPythonCodeHandler();if(await U(),v(l($)),await U(),t){console.info("✅ [FunctionEditor submitHandler] 代码格式化成功");try{await ge()}catch(s){}}else console.warn("⚠️ [FunctionEditor submitHandler] 代码格式化失败")}else console.warn("⚠️ [FunctionEditor submitHandler] codeEditor 不存在")};le(()=>I(v()),()=>{v()&&_e()}),le(()=>(I(h()),I(x()),I(G())),()=>{h()&&!x()&&!G()&&y(h().replace(/\s+/g,"_").toLowerCase())}),Ve(),ze();var K=at(),q=je(K),Q=r(q),H=r(Q),R=r(H),A=r(R),S=r(A),B=r(S),be=r(B);{let t=F(()=>(e(),n(()=>e().t("Back"))));P(be,{get content(){return l(t)},children:(s,u)=>{var a=Ye(),i=r(a);Xe(i,{strokeWidth:"2.5"}),o(a),de("click",a,()=>{Je("/admin/functions")}),m(s,a)},$$slots:{default:!0}})}o(B);var T=d(B,2),xe=r(T);{let t=F(()=>(e(),n(()=>e().t("e.g. My Filter"))));P(xe,{get content(){return l(t)},placement:"top-start",children:(s,u)=>{var a=Ze();W(a),g(i=>z(a,"placeholder",i),[()=>(e(),n(()=>e().t("Function Name")))]),L(a,h),m(s,a)},$$slots:{default:!0}})}o(T);var X=d(T,2),ye=r(X);{let t=F(()=>(e(),n(()=>e().t("Function"))));Re(ye,{type:"muted",get content(){return l(t)}})}o(X),o(S);var Y=d(S,2),Z=r(Y);{var we=t=>{var s=et(),u=r(s,!0);o(s),g(()=>c(u,y())),m(t,s)},Fe=t=>{{let s=F(()=>(e(),n(()=>e().t("e.g. my_filter"))));P(t,{className:"w-full",get content(){return l(s)},placement:"top-start",children:(u,a)=>{var i=tt();W(i),g(j=>{z(i,"placeholder",j),i.disabled=x()},[()=>(e(),n(()=>e().t("Function ID")))]),L(i,y),m(u,i)},$$slots:{default:!0}})}};Ue(Z,t=>{x()?t(we):t(Fe,!1)})}var ke=d(Z,2);{let t=F(()=>(e(),n(()=>e().t("e.g. A filter to remove profanity from text"))));P(ke,{className:"w-full self-center items-center flex",get content(){return l(t)},placement:"top-start",children:(s,u)=>{var a=rt();W(a),g(i=>z(a,"placeholder",i),[()=>(e(),n(()=>e().t("Function Description")))]),L(a,()=>w().description,i=>w(w().description=i,!0)),m(s,a)},$$slots:{default:!0}})}o(Y),o(A);var D=d(A,2),$e=r(D);ue(Ke($e,{get value(){return v()},lang:"python",boilerplate:he,onChange:t=>{b($,t)},onSave:async()=>{l(k)&&l(k).requestSubmit()},$$legacy:!0}),t=>b(E,t),()=>l(E)),o(D);var ee=d(D,2),N=r(ee),te=r(N),V=r(te),Ee=r(V,!0);o(V);var re=d(V),oe=d(re,3),He=r(oe,!0);o(oe),o(te),o(N);var ae=d(N,2),Ie=r(ae,!0);o(ae),o(ee),o(R),o(H),ue(H,t=>b(k,t),()=>l(k)),o(Q),o(q);var Ce=d(q,2);Qe(Ce,{get show(){return l(M)},set show(t){b(M,t)},$$events:{confirm:()=>{J()}},children:(t,s)=>{var u=ot(),a=r(u),i=r(a),j=r(i,!0);o(i);var ie=d(i,2),O=r(ie),Pe=r(O,!0);o(O);var se=d(O,2),Me=r(se,!0);o(se),o(ie),o(a);var ne=d(a,2),qe=r(ne,!0);o(ne),o(u),g((Ae,Se,Be,Te)=>{c(j,Ae),c(Pe,Se),c(Me,Be),c(qe,Te)},[()=>(e(),n(()=>e().t("Please carefully review the following warnings:"))),()=>(e(),n(()=>e().t("Functions allow arbitrary code execution."))),()=>(e(),n(()=>e().t("Do not install functions from sources you do not fully trust."))),()=>(e(),n(()=>e().t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")))]),m(t,u)},$$slots:{default:!0},$$legacy:!0}),g((t,s,u,a)=>{c(Ee,t),c(re,` ${s??""} `),c(He,u),c(Ie,a)},[()=>(e(),n(()=>e().t("Warning:"))),()=>(e(),n(()=>e().t("Functions allow arbitrary code execution."))),()=>(e(),n(()=>e().t("don't install random functions from sources you don't trust."))),()=>(e(),n(()=>e().t("Save")))]),de("submit",H,We(()=>{x()?J():b(M,!0)})),m(ce,K),Oe(),ve()}export{wt as F};
//# sourceMappingURL=CPnlNE5R.js.map
