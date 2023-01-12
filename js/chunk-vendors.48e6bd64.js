"use strict";(self["webpackChunkdigital_agenda"]=self["webpackChunkdigital_agenda"]||[]).push([[998],{947:function(e,t,n){n.d(t,{v0:function(){return vr},e5:function(){return dt},w7:function(){return mt}});var r=n(444),s=n(816),i=n(333),o=n(655),a=n(463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new i.Yd("@firebase/auth");function d(e,...t){h.logLevel<=i["in"].ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const s=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.LL("auth","Firebase",s);return i.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function _(e){w(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=(0,s.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,s,i={}){return M(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),D.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function M(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},O),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw j(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(i){if(i instanceof r.ZR)throw i;f(e,"network-request-failed")}}async function F(e,t,n,r,s={}){const i=await P(e,t,n,r,s);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?N(e.config,s):`${e.config.apiScheme}://${s}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),s=await n.getIdToken(t),i=K(s);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:s,authTime:$(z(i.auth_time)),issuedAtTime:$(z(i.iat)),expirationTime:$(z(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function K(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function G(e){const t=K(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof r.ZR&&J(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),s=await W(e,B(n,{idToken:r}));y(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=(0,o._T)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=U(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new re;return n&&(y("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(y("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new X(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:I,stsTokenManager:E}=t;y(w&&E,e,"internal-error");const T=re.fromJSON(this.name,E);y("string"===typeof w,e,"internal-error"),se(l,e.name),se(h,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof _,e,"internal-error"),se(d,e.name),se(f,e.name),se(p,e.name),se(m,e.name),se(g,e.name),se(v,e.name);const k=new ie({uid:w,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(k.providerData=I.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const s=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,s),this.fullPersistenceKey=ce("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||_(ae);const i=ce(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==s&&(o=n),s=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(c){}}))),new ue(s,e,n)):new ue(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ye(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ve(e)||me(e)||ye(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(s){r(s)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new Te(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=Se(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Re(t),{host:o,port:a}=Ne(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Oe()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ne(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:De(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:De(t)}}}function De(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Oe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Le{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class qe extends Le{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=(0,o._T)(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new qe(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Ve(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ve(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ve(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function $e(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function He(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const ze={["USER_NOT_FOUND"]:"user-not-found"};async function Ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),ze)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Le{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return $e(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return He(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||t||e}class Qe{constructor(e){var t,n,s,i,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=We(null!==(s=c["mode"])&&void 0!==s?s:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qe.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return qe._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qe._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return qe._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return qe._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await ie._fromIdTokenResponse(e,n,r),i=it(n),o=new st({user:s,providerId:i,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=it(n);return new st({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function it(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends r.ZR{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ot.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ot(e,t,n,r)}}function at(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ot._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return st._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await W(e,at(r,s,t,e),n);y(i.idToken,r,"internal-error");const o=K(i.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),st._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r="signIn",s=await at(e,r,t),i=await st._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function ht(e,t){return lt(Se(e),t)}function dt(e,t,n){return ht((0,r.m9)(e),Xe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t,n,s){return(0,r.m9)(e).onIdTokenChanged(t,n,s)}function pt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function mt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function yt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const vt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vt,"1"),this.storage.removeItem(vt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){const e=(0,r.z$)();return de(e)||ve(e)}const _t=1e3,It=10;class Et extends wt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bt()&&Ie(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);be()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,It):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),_t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Et.type="LOCAL";const Tt=Et;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends wt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kt.type="SESSION";const St=kt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new At(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await Ct(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.receivers=[];class Nt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Rt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function Ot(e){Dt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return"undefined"!==typeof Dt()["WorkerGlobalScope"]&&"function"===typeof Dt()["importScripts"]}async function xt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Pt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Mt(){return Lt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="firebaseLocalStorageDb",Ut=1,Vt="firebaseLocalStorage",jt="fbase_key";class qt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Bt(e,t){return e.transaction([Vt],t?"readwrite":"readonly").objectStore(Vt)}function $t(){const e=indexedDB.deleteDatabase(Ft);return new qt(e).toPromise()}function Ht(){const e=indexedDB.open(Ft,Ut);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Vt,{keyPath:jt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Vt)?t(n):(n.close(),await $t(),t(await Ht()))}))}))}async function zt(e,t,n){const r=Bt(e,!0).put({[jt]:t,value:n});return new qt(r).toPromise()}async function Kt(e,t){const n=Bt(e,!1).get(t),r=await new qt(n).toPromise();return void 0===r?null:r.value}function Gt(e,t){const n=Bt(e,!0).delete(t);return new qt(n).toPromise()}const Wt=800,Jt=3;class Qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ht()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Jt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=At._getInstance(Mt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await xt(),!this.activeServiceWorker)return;this.sender=new Nt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Pt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ht();return await zt(e,vt,"1"),await Gt(e,vt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>zt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Kt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Bt(e,!1).getAll();return new qt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qt.type="LOCAL";const Xt=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function Zt(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function tn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",en().appendChild(r)}))}function nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nn("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn="recaptcha";async function sn(e,t,n){var r;const s=await n.verify();try{let i;if(y("string"===typeof s,e,"argument-error"),y(n.type===rn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const n=await gt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await Yt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Be(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(e){this.providerId=on.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return sn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return on.credentialFromTaggedObject(t)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e,t){return t?_(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.PROVIDER_ID="phone",on.PHONE_SIGN_IN_METHOD="phone";class cn extends Le{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function un(e){return lt(e.auth,new cn(e),e.bypassAuthState)}function ln(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ut(n,new cn(e),e.bypassAuthState)}async function hn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ct(n,new cn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return un;case"linkViaPopup":case"linkViaRedirect":return hn;case"reauthViaPopup":case"reauthViaRedirect":return ln;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new R(2e3,1e4);class pn extends dn{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Rt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,fn.get())};e()}}pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn="pendingRedirect",gn=new Map;class yn extends dn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gn.get(this.auth._key());if(!e){try{const t=await vn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}gn.set(this.auth._key(),e)}return this.bypassAuthState||gn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function vn(e,t){const n=_n(t),r=bn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function wn(e,t){gn.set(e._key(),t)}function bn(e){return _(e._redirectPersistence)}function _n(e){return ce(mn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t,n=!1){const r=Se(e),s=an(r,t),i=new yn(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const En=6e5;class Tn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Cn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Sn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=En&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(e))}saveEventToCache(e){this.cachedEventUids.add(kn(e)),this.lastProcessedEventTime=Date.now()}}function kn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Sn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Cn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nn=/^https?/;async function Dn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await An(e);for(const r of t)try{if(On(r))return}catch(n){}f(e,"unauthorized-domain")}function On(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Nn.test(n))return!1;if(Rn.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new R(3e4,6e4);function xn(){const e=Dt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Pn(e){return new Promise(((t,n)=>{var r,s,i;function o(){xn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xn(),n(p(e,"network-request-failed"))},timeout:Ln.get()})}if(null===(s=null===(r=Dt().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Dt().gapi)||void 0===i?void 0:i.load)){const t=nn("iframefcb");return Dt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},tn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Mn=null,e}))}let Mn=null;function Fn(e){return Mn=Mn||Pn(e),Mn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new R(5e3,15e3),Vn="__/auth/iframe",jn="emulator/auth/iframe",qn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,jn):`https://${e.config.authDomain}/${Vn}`,i={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=Bn.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Hn(e){const t=await Fn(e),n=Dt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:$n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=p(e,"network-request-failed"),i=Dt().setTimeout((()=>{r(s)}),Un.get());function o(){Dt().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kn=500,Gn=600,Wn="_blank",Jn="http://localhost";class Qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xn(e,t,n,s=Kn,i=Gn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},zn),{width:s.toString(),height:i.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=fe(l)?Wn:n),he(l)&&(t=t||Jn,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(l)&&"_self"!==c)return Yn(t||"",c),new Qn(null);const d=window.open(t||"",c,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Qn(d)}function Yn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="__/auth/handler",er="emulator/auth/handler";function tr(e,t,n,i,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.Jn,eventId:o};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${nr(e)}?${(0,r.xO)(u).slice(1)}`}function nr({config:e}){return e.emulator?N(e,er):`https://${e.authDomain}/${Zn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=St,this._completeRedirectFn=In,this._overrideRedirectResult=wn}async _openPopup(e,t,n,r){var s;w(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=tr(e,t,n,T(),r);return Xn(e,i,Rt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ot(tr(e,t,n,T(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Hn(e),n=new Tn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(rr,{type:rr},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[rr];void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ve()}}const ir=sr;class or{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class ar extends or{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ar(e)}_finalizeEnroll(e,t,n){return yt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Zt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class cr{constructor(){}static assertion(e){return ar._fromCredential(e)}}cr.FACTOR_ID="phone";var ur="@firebase/auth",lr="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fr(e){(0,s.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((t,r)=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const s={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new ke(t,r,s);return E(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s.Xd)(new a.wA("auth-internal",(e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new hr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(ur,lr,dr(e)),(0,s.KN)(ur,lr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=300,mr=(0,r.Pz)("authIdTokenMaxAge")||pr;let gr=null;const yr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mr)return;const s=null===n||void 0===n?void 0:n.token;gr!==s&&(gr=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vr(e=(0,s.Mq)()){const t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I(e,{popupRedirectResolver:ir,persistence:[Xt,Tt,St]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=yr(i);pt(n,e,(()=>e(n.currentUser))),ft(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ae(n,`http://${o}`),n}fr("Browser")},294:function(e,t,n){n.d(t,{ET:function(){return Th},hJ:function(){return ml},JU:function(){return gl},QT:function(){return bh},PL:function(){return Ih},ad:function(){return Rl},IO:function(){return ih},pl:function(){return Eh},ar:function(){return ah}});var r,s=n(816),i=n(463),o=n(333),a=n(444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||m(this)},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var D=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return e<t?-1:e>t?1:0}function L(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function x(e){return-1!=L().indexOf(e)}function P(e){return P[" "](e),e}function M(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}P[" "]=d;var F,U=x("Opera"),V=x("Trident")||x("MSIE"),j=x("Edge"),q=j||V,B=x("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),$=-1!=L().toLowerCase().indexOf("webkit")&&!x("Edge");function H(){var e=h.document;return e?e.documentMode:void 0}e:{var z="",K=function(){var e=L();return B?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(K&&(z=K?K[1]:""),V){var G=H();if(null!=G&&G>parseFloat(z)){F=String(G);break e}}F=z}var W,J={};function Q(){return M((function(){let e=0;const t=D(String(F)).split("."),n=D("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=O(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||O(0==s[2].length,0==i[2].length)||O(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(h.document&&V){var X=H();W=X||(parseInt(F,10)||void 0)}else W=void 0;var Y=W;function Z(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{P(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}I(Z,A);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++ne,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=k(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}ue.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=he(e,t,r,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,i,!!r,s),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,s){if(r&&r.once)return ye(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)pe(e,t[i],n,r,s);return null}return n=Te(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,s):me(e,t,n,!1,r,s)}function me(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Ie(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ye(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ye(e,t[i],n,r,s);return null}return n=Te(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,s):me(e,t,n,!0,r,s)}function ve(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ve(e,t[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=Te(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=he(i,n,r,s),-1<n&&(se(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,s)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(le(n,e),0==n.h&&(n.src=null,t[de]=null)):se(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&we(e),e=n.call(r,t)}return e}function Ie(e){return e=e[de],e instanceof ue?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function ke(){E.call(this),this.i=new ue(this),this.P=this,this.I=null}function Se(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var s=t;t=new A(r,e),ce(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Ce(o,r,!0,t)&&s}if(o=t.g=e,s=Ce(o,r,!0,t)&&s,s=Ce(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Ce(o,r,!1,t)&&s}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&le(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}I(ke,E),ke.prototype[te]=!0,ke.prototype.removeEventListener=function(e,t,n,r){ve(this,e,t,n,r)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ae=h.JSON.stringify;function Re(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var De,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Le),(e=>e.reset()));class Le{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xe(e){h.setTimeout((()=>{throw e}),0)}function Pe(e,t){De||Me(),Fe||(De(),Fe=!0),Ue.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);De=function(){e.then(Ve)}}var Fe=!1,Ue=new Ne;function Ve(){for(var e;e=Re();){try{e.h.call(e.g)}catch(n){xe(n)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function je(e,t){ke.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function qe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function $e(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,$e(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(je,ke),r=je.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(qe(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.X.M.call(this),qe(this),delete this.g};class He extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){E.call(this),this.h=e,this.g={}}I(ze,E);var Ke=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var s=0;s<n.length;s++){var i=pe(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function We(e){ie(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Qe(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ae(n)}catch(a){return t}}ze.prototype.M=function(){ze.X.M.call(this),We(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new ke}function st(e){A.call(this,tt.Pa,e)}function it(e){const t=rt();Se(t,new st(t))}function ot(e,t){A.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Se(t,new ot(t,e))}function ct(e,t){A.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",I(st,A),tt.STAT_EVENT="statevent",I(ot,A),tt.Qa="timingevent",I(ct,A);var lt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){A.call(this,"d")}function vt(){A.call(this,"c")}function wt(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new ze(this),this.O=It,e=q?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}I(yt,A),I(vt,A),I(wt,dt),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var It=45e3,Et={},Tt={};function kt(e,t,n){e.K=1,e.v=Gt(Bt(t)),e.s=n,e.P=!0,St(e,null)}function St(e,t){e.F=Date.now(),Nt(e),e.A=Bt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new He(b(e.La,e,e.g),e.N)),Ge(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),Qe(e.j,e.u,e.A,e.m,e.U,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Rt(e,n),r==Tt){4==t&&(e.o=4,at(14),s=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ye(e.j,e.m,r,null),Pt(e,r)}Ct(e)&&r!=Tt&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),xt(e),Lt(e))}function Rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Tt:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?Tt:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.V=Date.now()+e.O,Dt(e,e.O)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(b(e.gb,e),t)}function Ot(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Lt(e){0==e.l.G||e.I||or(e.l,e)}function xt(e){Ot(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.T),We(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ir(n),Wn(n)}nr(n),at(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((e.J||n.g==e)&&ir(n),!N(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(gn(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Kt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=lr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ot(a),Nt(a)),r.g=o}else tr(r);0<n.i.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}it(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ft(e),r=Mt(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==qn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const l=qn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=l||7==t||it(8==t||0>=d?3:2),Ot(this);var n=this.g.aa();this.Y=n;t:if(Ct(this)){var r=Bn(this.g);e="";var s=r.length,i=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xt(this),Lt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),xt(this),Lt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.P?(At(this,l,o),q&&this.i&&3==l&&(Ge(this.S,this.T,"tick",this.hb),this.T.start())):(Ye(this.j,this.m,o,null),Pt(this,o)),4==l&&xt(this),this.i&&!this.I&&(4==l?or(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),xt(this),Lt(this)}}}catch(l){}},r.hb=function(){if(this.g){var e=qn(this.g),t=this.g.fa();this.C<t.length&&(Ot(this),At(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,xt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(it(),at(17)),xt(this),this.o=2,Lt(this)):Dt(this,this.V-e)};var Vt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=void 0!==t?t:e.h,$t(this,e.j),this.s=e.s,this.g=e.g,Ht(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zt(this,n),this.o=e.o}else e&&(n=String(e).match(Vt))?(this.h=!!t,$t(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),Ht(this,n[4]),this.l=Wt(n[5]||"",!0),zt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Bt(e){return new qt(e)}function $t(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ht(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zt(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Kt(e,t,n){e.i.set(t,n)}function Gt(e){return Kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Qt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Zt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Xt=/[#\/\?@]/g,Yt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=cn(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),S(n)),e.h+=n.length)}function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=cn(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function wn(){}function bn(){this.g=new wn}function _n(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let s=e;p(e)&&(s=Ae(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function In(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=_(En,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(En,n,r,"TestLoadImage: error",!1,t),r.onabort=_(En,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(En,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function En(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Tn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},I(Tn,dt),Tn.prototype.g=function(){return new kn(this.l,this.j)},Tn.prototype.i=function(e){return function(){return e}}({}),I(kn,ke);var Sn=0;function Cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rn(e)}function Rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Sn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Rn(this),3==this.readyState&&Cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,An(this))},r.Ua=function(e){this.g&&(this.response=e,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nn=h.JSON.parse;function Dn(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}I(Dn,ke);var On="",Ln=/^https?$/i,xn=["POST","PUT"];function Pn(e){return V&&Q()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fn(e),Vn(e)}function Fn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=qn(e)||2!=e.aa()))if(e.v&&4==qn(e))Be(e.Ha,0,e);else if(Se(e,"readystatechange"),4==qn(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Vt)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ln.test(s?s.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var o=2<qn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Fn(e)}}finally{Vn(e)}}}function Vn(e,t){if(e.g){jn(e);const r=e.g,s=e.C[0]?d:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function qn(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Cr){return null}}function $n(e){let t="";return ie(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Kt(e,t,n))}function zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zn("baseRetryDelayMs",5e3,e),this.bb=zn("retryDelaySeedMs",1e4,e),this.$a=zn("forwardChannelMaxRetries",2,e),this.ta=zn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gn(e){if(Jn(e),3==e.G){var t=e.U++,n=Bt(e.F);Kt(n,"SID",e.I),Kt(n,"RID",t),Kt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Gt(Bt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nt(t)}ur(e)}function Wn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){Wn(e),e.u&&(h.clearTimeout(e.u),e.u=null),ir(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Qn(e){fn(e.h)||e.m||(e.m=!0,Pe(e.Ja,e),e.C=0)}function Xn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.U++;const r=Bt(e.F);Kt(r,"SID",e.I),Kt(r,"RID",n),Kt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&Hn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),kt(n,r,t)}function Zn(e,t){e.ia&&ie(e.ia,(function(e,n){Kt(t,n,e)})),e.l&&Ut({},(function(e,n){Kt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=t,0>n)t=Math.max(0,s[a].h-100),o=!1;else try{_n(c,e,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Pe(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Kt(t,"RID","rpc"),Kt(t,"SID",e.I),Kt(t,"CI",e.L?"0":"1"),Kt(t,"AID",e.T),Kt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&Hn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Gt(Bt(t)),n.s=null,n.P=!0,St(n,e)}function ir(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){ir(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=rt(),Se(r,new ct(r,n)),Qn(e)}else tr(e);else if(s=t.o,3==s||0==s&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:cr(e,5);break;case 4:cr(e,10);break;case 3:cr(e,6);break;default:cr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function cr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$t(n,"https"),Gt(n)),In(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Jn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=vn(e.h);0==t.length&&0==e.i.length||(C(e.la,t),C(e.la,e.i),e.h.i.length=0,S(e.i),e.i.length=0),e.l.ua()}}function lr(e,t,n){var r=n instanceof qt?Bt(n):new qt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ht(r,r.m);else{var s=h.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new qt(null,void 0);r&&$t(i,r),t&&(i.g=t),s&&Ht(i,s),n&&(i.l=n),r=i}return n=e.D,t=e.za,n&&t&&Kt(r,n,t),Kt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Dn(new Tn({jb:!0})):new Dn(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(V&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){ke.call(this),this.g=new Kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function mr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){vt.call(this),this.status=1}function yr(e){this.g=e}r=Dn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Mn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=h.FormData&&e instanceof h.FormData,!(0<=k(xn,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Mn(this,i)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Vn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Dn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},r.fb=function(){Un(this)},r.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Nn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new bt(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=oe(i),ce(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,s,t),n=Bt(this.F),Kt(n,"RID",e),Kt(n,"CVER",22),this.D&&Kt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String($n(i)))+"&"+t:this.o&&Hn(n,this.o,i)),gn(this.h,s),this.Ya&&Kt(n,"TYPE","init"),this.O?(Kt(n,"$req",t),Kt(n,"SID","null"),s.Z=!0,kt(s,n,null)):kt(s,n,t),this.G=2}}else 3==this.G&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,sr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Wn(this),sr(this))},r.cb=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},I(pr,ke),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lr(e,null,e.V),Qn(e)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new ln(t.ab++,e)),3==t.G&&Qn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.X.M.call(this)},I(mr,yt),I(gr,vt),I(yr,dr),yr.prototype.xa=function(){Se(this.g,"a")},yr.prototype.wa=function(e){Se(this.g,new mr(e))},yr.prototype.va=function(e){Se(this.g,new gr)},yr.prototype.ua=function(){Se(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Dn.prototype.listenOnce=Dn.prototype.O,Dn.prototype.getLastError=Dn.prototype.Oa,Dn.prototype.getLastErrorCode=Dn.prototype.Ea,Dn.prototype.getStatus=Dn.prototype.aa,Dn.prototype.getResponseJson=Dn.prototype.Sa,Dn.prototype.getResponseText=Dn.prototype.fa,Dn.prototype.send=Dn.prototype.da,Dn.prototype.setWithCredentials=Dn.prototype.Ka;var vr=u.createWebChannelTransport=function(){return new fr},wr=u.getStatEventTarget=function(){return rt()},br=u.ErrorCode=lt,_r=u.EventType=ht,Ir=u.Event=tt,Er=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tr=u.FetchXmlHttpFactory=Tn,kr=u.WebChannel=pt,Sr=u.XhrIo=Dn;const Cr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rr="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new o.Yd("@firebase/firestore");function Dr(){return Nr.logLevel}function Or(e,...t){if(Nr.logLevel<=o["in"].DEBUG){const n=t.map(Pr);Nr.debug(`Firestore (${Rr}): ${e}`,...n)}}function Lr(e,...t){if(Nr.logLevel<=o["in"].ERROR){const n=t.map(Pr);Nr.error(`Firestore (${Rr}): ${e}`,...n)}}function xr(e,...t){if(Nr.logLevel<=o["in"].WARN){const n=t.map(Pr);Nr.warn(`Firestore (${Rr}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e="Unexpected state"){const t=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function Fr(e,t){e||Mr()}function Ur(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $r{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ar.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zr{constructor(e){this.t=e,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Or("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fr("string"==typeof t.accessToken),new Br(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fr(null===e||"string"==typeof e),new Ar(e)}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Fr("string"==typeof e.token),this.A=e.token,new Wr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Qr(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function Yr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return es.fromMillis(Date.now())}static fromDate(e){return es.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new es(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ts(e)}static min(){return new ts(new es(0,0))}static max(){return new ts(new es(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,n){void 0===t?t=0:t>e.length&&Mr(),void 0===n?n=e.length-t:n>e.length-t&&Mr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ns.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ns?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rs extends ns{construct(e,t,n){return new rs(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new jr(Vr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new rs(t)}static emptyPath(){return new rs([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class is extends ns{construct(e,t,n){return new is(e,t,n)}static isValidIdentifier(e){return ss.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),is.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new is(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new jr(Vr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new jr(Vr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jr(Vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new jr(Vr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new is(t)}static emptyPath(){return new is([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.path=e}static fromPath(e){return new os(rs.fromString(e))}static fromName(e){return new os(rs.fromString(e).popFirst(5))}static empty(){return new os(rs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rs.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rs.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new os(new rs(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}as.UNKNOWN_ID=-1;function cs(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ts.fromTimestamp(1e9===r?new es(n+1,0):new es(n,r));return new ls(s,os.empty(),t)}function us(e){return new ls(e.readTime,e.key,-1)}class ls{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ls(ts.min(),os.empty(),-1)}static max(){return new ls(ts.max(),os.empty(),-1)}}function hs(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=os.comparator(e.documentKey,t.documentKey),0!==n?n:Yr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(e){if(e.code!==Vr.FAILED_PRECONDITION||e.message!==ds)throw e;Or("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ms(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ms?t:ms.resolve(t)}catch(e){return ms.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ms.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ms.reject(t)}static resolve(e){return new ms(((t,n)=>{t(e)}))}static reject(e){return new ms(((t,n)=>{n(e)}))}static waitFor(e){return new ms(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=ms.resolve(!1);for(const n of e)t=t.next((e=>e?ms.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ms(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ms(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ys.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ws{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ws("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ws&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _s(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Is(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){return null==e}function Ts(e){return 0===e&&1/e==-1/0}function ks(e){return"number"==typeof e&&Number.isInteger(e)&&!Ts(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ss(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ss(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ss.EMPTY_BYTE_STRING=new Ss("");const Cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(e){if(Fr(!!e),"string"==typeof e){let t=0;const n=Cs.exec(e);if(Fr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Rs(e.seconds),nanos:Rs(e.nanos)}}function Rs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ns(e){return"string"==typeof e?Ss.fromBase64String(e):Ss.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Os(e){const t=e.mapValue.fields.__previous_value__;return Ds(t)?Os(t):t}function Ls(e){const t=As(e.mapValue.fields.__local_write_time__.timestampValue);return new es(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ds(e)?4:Js(e)?9007199254740991:10:Mr()}function Ms(e,t){if(e===t)return!0;const n=Ps(e);if(n!==Ps(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ls(e).isEqual(Ls(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=As(e.timestampValue),r=As(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ns(e.bytesValue).isEqual(Ns(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Rs(e.geoPointValue.latitude)===Rs(t.geoPointValue.latitude)&&Rs(e.geoPointValue.longitude)===Rs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Rs(e.integerValue)===Rs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Rs(e.doubleValue),r=Rs(t.doubleValue);return n===r?Ts(n)===Ts(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Ms);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bs(n)!==bs(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ms(n[s],r[s])))return!1;return!0}(e,t);default:return Mr()}}function Fs(e,t){return void 0!==(e.values||[]).find((e=>Ms(e,t)))}function Us(e,t){if(e===t)return 0;const n=Ps(e),r=Ps(t);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Rs(e.integerValue||e.doubleValue),r=Rs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Vs(e.timestampValue,t.timestampValue);case 4:return Vs(Ls(e),Ls(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ns(e),r=Ns(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Yr(n[s],r[s]);if(0!==e)return e}return Yr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Yr(Rs(e.latitude),Rs(t.latitude));return 0!==n?n:Yr(Rs(e.longitude),Rs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Us(n[s],r[s]);if(e)return e}return Yr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===xs.mapValue&&t===xs.mapValue)return 0;if(e===xs.mapValue)return 1;if(t===xs.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Yr(r[o],i[o]);if(0!==e)return e;const t=Us(n[r[o]],s[i[o]]);if(0!==t)return t}return Yr(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Mr()}}function Vs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Yr(e,t);const n=As(e),r=As(t),s=Yr(n.seconds,r.seconds);return 0!==s?s:Yr(n.nanos,r.nanos)}function js(e){return qs(e)}function qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=As(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ns(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,os.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=qs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${qs(e.fields[s])}`;return n+"}"}(e.mapValue):Mr();var t,n}function Bs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function $s(e){return!!e&&"integerValue"in e}function Hs(e){return!!e&&"arrayValue"in e}function zs(e){return!!e&&"nullValue"in e}function Ks(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gs(e){return!!e&&"mapValue"in e}function Ws(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _s(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ws(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ws(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Js(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e,t){this.position=e,this.inclusive=t}}function Xs(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?os.comparator(os.fromName(o.referenceValue),n.key):Us(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ys(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ms(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{}class ei extends Zs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ci(e,t,n):"array-contains"===t?new di(e,n):"in"===t?new fi(e,n):"not-in"===t?new pi(e,n):"array-contains-any"===t?new mi(e,n):new ei(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ui(e,n):new li(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Us(t,this.value)):null!==t&&Ps(this.value)===Ps(t)&&this.matchesComparison(Us(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ti extends Zs{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ti(e,t)}matches(e){return ni(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ni(e){return"and"===e.op}function ri(e){return si(e)&&ni(e)}function si(e){for(const t of e.filters)if(t instanceof ti)return!1;return!0}function ii(e){if(e instanceof ei)return e.field.canonicalString()+e.op.toString()+js(e.value);{const t=e.filters.map((e=>ii(e))).join(",");return`${e.op}(${t})`}}function oi(e,t){return e instanceof ei?function(e,t){return t instanceof ei&&e.op===t.op&&e.field.isEqual(t.field)&&Ms(e.value,t.value)}(e,t):e instanceof ti?function(e,t){return t instanceof ti&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&oi(n,t.filters[r])),!0)}(e,t):void Mr()}function ai(e){return e instanceof ei?function(e){return`${e.field.canonicalString()} ${e.op} ${js(e.value)}`}(e):e instanceof ti?function(e){return e.op.toString()+" {"+e.getFilters().map(ai).join(" ,")+"}"}(e):"Filter"}class ci extends ei{constructor(e,t,n){super(e,t,n),this.key=os.fromName(n.referenceValue)}matches(e){const t=os.comparator(e.key,this.key);return this.matchesComparison(t)}}class ui extends ei{constructor(e,t){super(e,"in",t),this.keys=hi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class li extends ei{constructor(e,t){super(e,"not-in",t),this.keys=hi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hi(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>os.fromName(e.referenceValue)))}class di extends ei{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hs(t)&&Fs(t.arrayValue,this.value)}}class fi extends ei{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fs(this.value.arrayValue,t)}}class pi extends ei{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fs(this.value.arrayValue,t)}}class mi extends ei{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function yi(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.comparator=e,this.root=t||bi.EMPTY}insert(e,t){return new vi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bi.BLACK,null,null))}remove(e){return new vi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wi(this.root,e,this.comparator,!0)}}class wi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bi{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:bi.RED,this.left=null!=r?r:bi.EMPTY,this.right=null!=s?s:bi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new bi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return bi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const e=this.left.check();if(e!==this.right.check())throw Mr();return e+(this.isRed()?0:1)}}bi.EMPTY=null,bi.RED=!0,bi.BLACK=!1,bi.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(e,t,n,r,s){return this}insert(e,t,n){return new bi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(e){this.comparator=e,this.data=new vi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ii(this.data.getIterator())}getIteratorFrom(e){return new Ii(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof _i))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _i(this.comparator);return t.data=e,t}}class Ii{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei{constructor(e){this.fields=e,e.sort(is.comparator)}static empty(){return new Ei([])}unionWith(e){let t=new _i(is.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ei(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.value=e}static empty(){return new Ti({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(t)}setAll(e){let t=is.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Ws(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){_s(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ti(Ws(this.value))}}function ki(e){const t=[];return _s(e.fields,((e,n)=>{const r=new is([e]);if(Gs(n)){const e=ki(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ei(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Si{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Si(e,0,ts.min(),ts.min(),ts.min(),Ti.empty(),0)}static newFoundDocument(e,t,n,r){return new Si(e,1,t,ts.min(),n,r,0)}static newNoDocument(e,t){return new Si(e,2,t,ts.min(),ts.min(),Ti.empty(),0)}static newUnknownDocument(e,t){return new Si(e,3,t,ts.min(),ts.min(),Ti.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ts.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ti.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ti.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ts.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Si&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Si(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ft=null}}function Ai(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Ci(e,t,n,r,s,i,o)}function Ri(e){const t=Ur(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ii(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Es(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>js(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>js(e))).join(",")),t.ft=e}return t.ft}function Ni(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yi(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!oi(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ys(e.startAt,t.startAt)&&Ys(e.endAt,t.endAt)}function Di(e){return os.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Li(e,t,n,r,s,i,o,a){return new Oi(e,t,n,r,s,i,o,a)}function xi(e){return new Oi(e)}function Pi(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Mi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fi(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Ui(e){return null!==e.collectionGroup}function Vi(e){const t=Ur(e);if(null===t.dt){t.dt=[];const e=Fi(t),n=Mi(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new gi(e)),t.dt.push(new gi(is.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new gi(is.keyField(),e))}}}return t.dt}function ji(e){const t=Ur(e);if(!t._t)if("F"===t.limitType)t._t=Ai(t.path,t.collectionGroup,Vi(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Vi(t)){const t="desc"===s.dir?"asc":"desc";e.push(new gi(s.field,t))}const n=t.endAt?new Qs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qs(t.startAt.position,t.startAt.inclusive):null;t._t=Ai(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function qi(e,t){t.getFirstInequalityField(),Fi(e);const n=e.filters.concat([t]);return new Oi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Bi(e,t,n){return new Oi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $i(e,t){return Ni(ji(e),ji(t))&&e.limitType===t.limitType}function Hi(e){return`${Ri(ji(e))}|lt:${e.limitType}`}function zi(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ai(e))).join(", ")}]`),Es(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>js(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>js(e))).join(",")),`Target(${t})`}(ji(e))}; limitType=${e.limitType})`}function Ki(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):os.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Vi(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Xs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Vi(e),t))&&!(e.endAt&&!function(e,t,n){const r=Xs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Vi(e),t))}(e,t)}function Gi(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wi(e){return(t,n)=>{let r=!1;for(const s of Vi(e)){const e=Ji(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Ji(e,t,n){const r=e.field.isKeyField()?os.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Us(r,s):Mr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ts(t)?"-0":t}}function Xi(e){return{integerValue:""+e}}function Yi(e,t){return ks(t)?Xi(t):Qi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this._=void 0}}function eo(e,t,n){return e instanceof ro?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof so?io(e,t):e instanceof oo?ao(e,t):function(e,t){const n=no(e,t),r=uo(n)+uo(e.gt);return $s(n)&&$s(e.gt)?Xi(r):Qi(e.yt,r)}(e,t)}function to(e,t,n){return e instanceof so?io(e,t):e instanceof oo?ao(e,t):n}function no(e,t){return e instanceof co?$s(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ro extends Zi{}class so extends Zi{constructor(e){super(),this.elements=e}}function io(e,t){const n=lo(t);for(const r of e.elements)n.some((e=>Ms(e,r)))||n.push(r);return{arrayValue:{values:n}}}class oo extends Zi{constructor(e){super(),this.elements=e}}function ao(e,t){let n=lo(t);for(const r of e.elements)n=n.filter((e=>!Ms(e,r)));return{arrayValue:{values:n}}}class co extends Zi{constructor(e,t){super(),this.yt=e,this.gt=t}}function uo(e){return Rs(e.integerValue||e.doubleValue)}function lo(e){return Hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof so&&t instanceof so||e instanceof oo&&t instanceof oo?Zr(e.elements,t.elements,Ms):e instanceof co&&t instanceof co?Ms(e.gt,t.gt):e instanceof ro&&t instanceof ro}(e.transform,t.transform)}class fo{constructor(e,t){this.version=e,this.transformResults=t}}class po{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new po}static exists(e){return new po(void 0,e)}static updateTime(e){return new po(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class go{}function yo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Co(e.key,po.none()):new Io(e.key,e.data,po.none());{const n=e.data,r=Ti.empty();let s=new _i(is.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Eo(e.key,r,new Ei(s.toArray()),po.none())}}function vo(e,t,n){e instanceof Io?function(e,t,n){const r=e.value.clone(),s=ko(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Eo?function(e,t,n){if(!mo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ko(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(To(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function wo(e,t,n,r){return e instanceof Io?function(e,t,n,r){if(!mo(e.precondition,t))return n;const s=e.value.clone(),i=So(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Eo?function(e,t,n,r){if(!mo(e.precondition,t))return n;const s=So(e.fieldTransforms,r,t),i=t.data;return i.setAll(To(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return mo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function bo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=no(r.transform,e||null);null!=s&&(null===n&&(n=Ti.empty()),n.set(r.field,s))}return n||null}function _o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>ho(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Io extends go{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Eo extends go{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function To(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ko(e,t,n){const r=new Map;Fr(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,to(o,a,n[s]))}return r}function So(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,eo(e,i,t))}return r}class Co extends go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ao extends go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var No,Do;function Oo(e){switch(e){default:return Mr();case Vr.CANCELLED:case Vr.UNKNOWN:case Vr.DEADLINE_EXCEEDED:case Vr.RESOURCE_EXHAUSTED:case Vr.INTERNAL:case Vr.UNAVAILABLE:case Vr.UNAUTHENTICATED:return!1;case Vr.INVALID_ARGUMENT:case Vr.NOT_FOUND:case Vr.ALREADY_EXISTS:case Vr.PERMISSION_DENIED:case Vr.FAILED_PRECONDITION:case Vr.ABORTED:case Vr.OUT_OF_RANGE:case Vr.UNIMPLEMENTED:case Vr.DATA_LOSS:return!0}}function Lo(e){if(void 0===e)return Lr("GRPC error has no .code"),Vr.UNKNOWN;switch(e){case No.OK:return Vr.OK;case No.CANCELLED:return Vr.CANCELLED;case No.UNKNOWN:return Vr.UNKNOWN;case No.DEADLINE_EXCEEDED:return Vr.DEADLINE_EXCEEDED;case No.RESOURCE_EXHAUSTED:return Vr.RESOURCE_EXHAUSTED;case No.INTERNAL:return Vr.INTERNAL;case No.UNAVAILABLE:return Vr.UNAVAILABLE;case No.UNAUTHENTICATED:return Vr.UNAUTHENTICATED;case No.INVALID_ARGUMENT:return Vr.INVALID_ARGUMENT;case No.NOT_FOUND:return Vr.NOT_FOUND;case No.ALREADY_EXISTS:return Vr.ALREADY_EXISTS;case No.PERMISSION_DENIED:return Vr.PERMISSION_DENIED;case No.FAILED_PRECONDITION:return Vr.FAILED_PRECONDITION;case No.ABORTED:return Vr.ABORTED;case No.OUT_OF_RANGE:return Vr.OUT_OF_RANGE;case No.UNIMPLEMENTED:return Vr.UNIMPLEMENTED;case No.DATA_LOSS:return Vr.DATA_LOSS;default:return Mr()}}(Do=No||(No={}))[Do.OK=0]="OK",Do[Do.CANCELLED=1]="CANCELLED",Do[Do.UNKNOWN=2]="UNKNOWN",Do[Do.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Do[Do.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Do[Do.NOT_FOUND=5]="NOT_FOUND",Do[Do.ALREADY_EXISTS=6]="ALREADY_EXISTS",Do[Do.PERMISSION_DENIED=7]="PERMISSION_DENIED",Do[Do.UNAUTHENTICATED=16]="UNAUTHENTICATED",Do[Do.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Do[Do.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Do[Do.ABORTED=10]="ABORTED",Do[Do.OUT_OF_RANGE=11]="OUT_OF_RANGE",Do[Do.UNIMPLEMENTED=12]="UNIMPLEMENTED",Do[Do.INTERNAL=13]="INTERNAL",Do[Do.UNAVAILABLE=14]="UNAVAILABLE",Do[Do.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return Is(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new vi(os.comparator);function Mo(){return Po}const Fo=new vi(os.comparator);function Uo(...e){let t=Fo;for(const n of e)t=t.insert(n.key,n);return t}function Vo(e){let t=Fo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function jo(){return Bo()}function qo(){return Bo()}function Bo(){return new xo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const $o=new vi(os.comparator),Ho=new _i(os.comparator);function zo(...e){let t=Ho;for(const n of e)t=t.add(n);return t}const Ko=new _i(Yr);function Go(){return Ko}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Wo(ts.min(),r,Go(),Mo(),zo())}}class Jo{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Jo(n,t,zo(),zo(),zo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Xo{constructor(e,t){this.targetId=e,this.Et=t}}class Yo{constructor(e,t,n=Ss.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Zo{constructor(){this.At=0,this.Rt=na(),this.bt=Ss.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=zo(),t=zo(),n=zo();return this.Rt.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Jo(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=na()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ea{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Mo(),this.qt=ta(),this.Ut=new _i(Yr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Mr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Di(e))if(0===n){const n=new os(e.path);this.Qt(t,n,Si.newNoDocument(n,ts.min()))}else Fr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const s=this.Yt(r);if(s){if(n.current&&Di(s.target)){const t=new os(s.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Si.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=zo();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Wo(e,t,this.Ut,this.Lt,n);return this.Lt=Mo(),this.qt=ta(),this.Ut=new _i(Yr),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Zo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new _i(Yr),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Or("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Zo),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ta(){return new vi(os.comparator)}function na(){return new vi(os.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),sa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ia=(()=>{const e={and:"AND",or:"OR"};return e})();class oa{constructor(e,t){this.databaseId=e,this.wt=t}}function aa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ca(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ua(e,t){return aa(e,t.toTimestamp())}function la(e){return Fr(!!e),ts.fromTimestamp(function(e){const t=As(e);return new es(t.seconds,t.nanos)}(e))}function ha(e,t){return function(e){return new rs(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function da(e){const t=rs.fromString(e);return Fr(Pa(t)),t}function fa(e,t){return ha(e.databaseId,t.path)}function pa(e,t){const n=da(t);if(n.get(1)!==e.databaseId.projectId)throw new jr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new jr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new os(va(n))}function ma(e,t){return ha(e.databaseId,t)}function ga(e){const t=da(e);return 4===t.length?rs.emptyPath():va(t)}function ya(e){return new rs(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function va(e){return Fr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function wa(e,t,n){return{name:fa(e,t),fields:n.value.mapValue.fields}}function ba(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Mr()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.wt?(Fr(void 0===t||"string"==typeof t),Ss.fromBase64String(t||"")):(Fr(void 0===t||t instanceof Uint8Array),Ss.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Vr.UNKNOWN:Lo(e.code);return new jr(t,e.message||"")}(o);n=new Yo(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=pa(e,r.document.name),i=la(r.document.updateTime),o=r.document.createTime?la(r.document.createTime):ts.min(),a=new Ti({mapValue:{fields:r.document.fields}}),c=Si.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Qo(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=pa(e,r.document),i=r.readTime?la(r.readTime):ts.min(),o=Si.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Qo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=pa(e,r.document),i=r.removedTargetIds||[];n=new Qo([],i,s,null)}else{if(!("filter"in t))return Mr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Ro(r),i=e.targetId;n=new Xo(i,s)}}return n}function _a(e,t){let n;if(t instanceof Io)n={update:wa(e,t.key,t.value)};else if(t instanceof Co)n={delete:fa(e,t.key)};else if(t instanceof Eo)n={update:wa(e,t.key,t.data),updateMask:xa(t.fieldMask)};else{if(!(t instanceof Ao))return Mr();n={verify:fa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ro)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof so)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof oo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof co)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Mr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ua(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mr()}(e,t.precondition)),n}function Ia(e,t){return e&&e.length>0?(Fr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?la(e.updateTime):la(t);return n.isEqual(ts.min())&&(n=la(t)),new fo(n,e.transformResults||[])}(e,t)))):[]}function Ea(e,t){return{documents:[ma(e,t.path)]}}function Ta(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ma(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ma(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0!==e.length)return La(ti.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Da(e.field),direction:Aa(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.wt||Es(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ka(e){let t=ga(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fr(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Ca(e);return t instanceof ti&&ri(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new gi(Oa(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Es(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Qs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Qs(n,t)}(n.endAt)),Li(t,s,o,i,a,"F",c,u)}function Sa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ca(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Oa(e.unaryFilter.field);return ei.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Oa(e.unaryFilter.field);return ei.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Oa(e.unaryFilter.field);return ei.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Oa(e.unaryFilter.field);return ei.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}(e):void 0!==e.fieldFilter?function(e){return ei.create(Oa(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ti.create(e.compositeFilter.filters.map((e=>Ca(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Mr()}}(e.compositeFilter.op))}(e):Mr()}function Aa(e){return ra[e]}function Ra(e){return sa[e]}function Na(e){return ia[e]}function Da(e){return{fieldPath:e.canonicalString()}}function Oa(e){return is.fromServerFormat(e.fieldPath)}function La(e){return e instanceof ei?function(e){if("=="===e.op){if(Ks(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NAN"}};if(zs(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ks(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NOT_NAN"}};if(zs(e.value))return{unaryFilter:{field:Da(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Da(e.field),op:Ra(e.op),value:e.value}}}(e):e instanceof ti?function(e){const t=e.getFilters().map((e=>La(e)));return 1===t.length?t[0]:{compositeFilter:{op:Na(e.op),filters:t}}}(e):Mr()}function xa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Pa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ua=Fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&vo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=wo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=wo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qo();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=yo(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ts.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),zo())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>_o(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>_o(e,t)))}}class ja{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Fr(e.mutations.length===n.length);let r=$o;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new ja(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,n,r,s=ts.min(),i=ts.min(),o=Ss.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Ba(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.ie=e}}function Ha(e){const t=ka({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Bi(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Rs(e.integerValue));else if("doubleValue"in e){const n=Rs(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Ts(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Ns(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Js(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Mr()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),os.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}za.Ie=new za;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(){this.Je=new Ga}addToCollectionParentIndex(e,t){return this.Je.add(t),ms.resolve()}getCollectionParents(e,t){return ms.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return ms.resolve()}deleteFieldIndex(e,t){return ms.resolve()}getDocumentsMatchingTarget(e,t){return ms.resolve(null)}getIndexType(e,t){return ms.resolve(0)}getFieldIndexes(e,t){return ms.resolve([])}getNextCollectionGroupToUpdate(e){return ms.resolve(null)}getMinOffset(e,t){return ms.resolve(ls.min())}getMinOffsetFromCollectionGroup(e,t){return ms.resolve(ls.min())}updateCollectionGroup(e,t,n){return ms.resolve()}updateIndexEntries(e,t){return ms.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new _i(rs.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new _i(rs.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Wa{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Wa(e,Wa.DEFAULT_COLLECTION_PERCENTILE,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wa.DEFAULT_COLLECTION_PERCENTILE=10,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wa.DEFAULT=new Wa(41943040,Wa.DEFAULT_COLLECTION_PERCENTILE,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wa.DISABLED=new Wa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ja(0)}static vn(){return new Ja(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(){this.changes=new xo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Si.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ms.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&wo(n.mutation,e,Ei.empty(),es.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,zo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=zo()){const r=jo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Uo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=jo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,zo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=Mo();const i=Bo(),o=Bo();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Eo)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),wo(o.mutation,t,o.mutation.getFieldMask(),es.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Xa(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Bo();let r=new vi(((e,t)=>e-t)),s=zo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Ei.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||zo()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=qo();c.forEach((e=>{if(!s.has(e)){const r=yo(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ms.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return os.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ui(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):ms.resolve(jo());let o=-1,a=s;return i.next((t=>ms.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?ms.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,zo()))).next((e=>({batchId:o,changes:Vo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new os(t)).next((e=>{let t=Uo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=Uo();return this.indexManager.getCollectionParents(e,r).next((i=>ms.forEach(i,(i=>{const o=function(e,t){return new Oi(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Si.newInvalidDocument(n)))}));let n=Uo();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&wo(i.mutation,s,Ei.empty(),es.now()),Ki(t,s)&&(n=n.insert(r,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return ms.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:la(n.createTime)}),ms.resolve()}getNamedQuery(e,t){return ms.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Ha(e.bundledQuery),readTime:la(e.readTime)}}(t)),ms.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.overlays=new vi(os.comparator),this.es=new Map}getOverlay(e,t){return ms.resolve(this.overlays.get(t))}getOverlays(e,t){const n=jo();return ms.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),ms.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),ms.resolve()}getOverlaysForCollection(e,t,n){const r=jo(),s=t.length+1,i=new os(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ms.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new vi(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=jo(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=jo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return ms.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new qa(t,n));let s=this.es.get(t);void 0===s&&(s=zo(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.ns=new _i(nc.ss),this.rs=new _i(nc.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new nc(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new nc(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new os(new rs([])),n=new nc(t,e),r=new nc(t,e+1),s=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),s.push(e.key)})),s}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new os(new rs([])),n=new nc(t,e),r=new nc(t,e+1);let s=zo();return this.rs.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new nc(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nc{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return os.comparator(e.key,t.key)||Yr(e._s,t._s)}static os(e,t){return Yr(e._s,t._s)||os.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new _i(nc.ss)}checkEmpty(e){return ms.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Va(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new nc(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ms.resolve(i)}lookupMutationBatch(e,t){return ms.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),s=r<0?0:r;return ms.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ms.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ms.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nc(t,0),r=new nc(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);s.push(t)})),ms.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new _i(Yr);return t.forEach((e=>{const t=new nc(e,0),r=new nc(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),ms.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;os.isDocumentKey(s)||(s=s.child(""));const i=new nc(new os(s),0);let o=new _i(Yr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),i),ms.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Fr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ms.forEach(t.mutations,(r=>{const s=new nc(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new nc(t,0),r=this.gs.firstAfterOrEqual(n);return ms.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ms.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.Es=e,this.docs=new vi(os.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ms.resolve(n?n.document.mutableCopy():Si.newInvalidDocument(t))}getEntries(e,t){let n=Mo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Si.newInvalidDocument(e))})),ms.resolve(n)}getAllFromCollection(e,t,n){let r=Mo();const s=new os(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hs(us(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ms.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Mr()}As(e,t){return ms.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ic(this)}getSize(e){return ms.resolve(this.size)}}class ic extends Qa{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),ms.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.persistence=e,this.Rs=new xo((e=>Ri(e)),Ni),this.lastRemoteSnapshotVersion=ts.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tc,this.targetCount=0,this.vs=Ja.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),ms.resolve()}getLastRemoteSnapshotVersion(e){return ms.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ms.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ms.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),ms.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ja(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,ms.resolve()}updateTargetData(e,t){return this.Dn(t),ms.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,ms.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ms.waitFor(s).next((()=>r))}getTargetCount(e){return ms.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return ms.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),ms.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),ms.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),ms.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return ms.resolve(n)}containsKey(e,t){return ms.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new ys(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new oc(this),this.indexManager=new Ka,this.remoteDocumentCache=function(e){return new sc(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new $a(t),this.Ns=new Za(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ec,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new rc(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Or("MemoryPersistence","Starting transaction:",e);const r=new cc(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return ms.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class cc extends fs{constructor(e){super(),this.currentSequenceNumber=e}}class uc{constructor(e){this.persistence=e,this.Fs=new tc,this.$s=null}static Bs(e){return new uc(e)}get Ls(){if(this.$s)return this.$s;throw Mr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),ms.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),ms.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),ms.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ms.forEach(this.Ls,(n=>{const r=os.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,ts.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return ms.or([()=>ms.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=zo(),r=zo();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new lc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((s=>s||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Pi(t))return ms.resolve(null);let n=ji(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Bi(t,null,"F"),n=ji(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=zo(...r);return this.Ni.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.Fi(t,r);return this.$i(t,i,s,n.readTime)?this.ki(e,Bi(t,null,"F")):this.Bi(e,i,t,n)}))))})))))}Oi(e,t,n,r){return Pi(t)||r.isEqual(ts.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((s=>{const i=this.Fi(t,s);return this.$i(t,i,n,r)?this.Mi(e,t):(Dr()<=o["in"].DEBUG&&Or("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zi(t)),this.Bi(e,i,t,cs(r,-1)))}))}Fi(e,t){let n=new _i(Wi(e));return t.forEach(((t,r)=>{Ki(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(e,t){return Dr()<=o["in"].DEBUG&&Or("QueryEngine","Using full collection scan to execute query:",zi(t)),this.Ni.getDocumentsMatchingQuery(e,t,ls.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new vi(Yr),this.Ui=new xo((e=>Ri(e)),Ni),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ya(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function fc(e,t,n,r){return new dc(e,t,n,r)}async function pc(e,t){const n=Ur(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=zo();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function mc(e,t){const n=Ur(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=ms.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Fr(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=zo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function gc(e){const t=Ur(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function yc(e,t){const n=Ur(e),r=t.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ss.EMPTY_BYTE_STRING,ts.min()).withLastLimboFreeSnapshotVersion(ts.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Mo(),c=zo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(vc(e,i,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(ts.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ms.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.qi=s,e)))}function vc(e,t,n){let r=zo(),s=zo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Mo();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ts.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function wc(e,t){const n=Ur(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function bc(e,t){const n=Ur(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((s=>s?(r=s,ms.resolve(r)):n.Cs.allocateTargetId(e).next((s=>(r=new Ba(t,s,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function _c(e,t,n){const r=Ur(e),s=r.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!gs(e))throw e;Or("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(s.target)}function Ic(e,t,n){const r=Ur(e);let s=ts.min(),i=zo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ur(e),s=r.Ui.get(n);return void 0!==s?ms.resolve(r.qi.get(s)):r.Cs.getTargetData(t,n)}(r,e,ji(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?s:ts.min(),n?i:zo()))).next((e=>(Ec(r,Gi(t),e),{documents:e,Hi:i})))))}function Ec(e,t,n){let r=e.Ki.get(t)||ts.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class Tc{constructor(){this.activeTargetIds=Go()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kc{constructor(){this.Lr=new Tc,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Tc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,s){const i=this.ho(e,t);Or("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(e,i,o,n).then((e=>(Or("RestConnection","Received: ",e),e)),(t=>{throw xr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}_o(e,t,n,r,s,i){return this.ao(e,t,n,r,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Ac[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((s,i)=>{const o=new Sr;o.setWithCredentials(!0),o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case br.NO_ERROR:const t=o.getResponseJson();Or("Connection","XHR received:",JSON.stringify(t)),s(t);break;case br.TIMEOUT:Or("Connection",'RPC "'+e+'" timed out'),i(new jr(Vr.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=o.getStatus();if(Or("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Vr).indexOf(t)>=0?t:Vr.UNKNOWN}(t.status);i(new jr(e,t.message))}else i(new jr(Vr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new jr(Vr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Or("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=vr(),i=wr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Tr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Or("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Rc({Hr:e=>{l?Or("Connection","Not sending because WebChannel is closed:",e):(u||(Or("Connection","Opening WebChannel transport."),c.open(),u=!0),Or("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,kr.EventType.OPEN,(()=>{l||Or("Connection","WebChannel transport opened.")})),d(c,kr.EventType.CLOSE,(()=>{l||(l=!0,Or("Connection","WebChannel transport closed"),h.io())})),d(c,kr.EventType.ERROR,(e=>{l||(l=!0,xr("Connection","WebChannel transport errored:",e),h.io(new jr(Vr.UNAVAILABLE,"The operation could not be completed")))})),d(c,kr.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Fr(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Or("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=No[e];if(void 0!==t)return Lo(t)}(e),n=s.message;void 0===t&&(t=Vr.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,h.io(new jr(t,n)),c.close()}else Or("Connection","WebChannel received:",n),h.ro(n)}})),d(i,Ir.STAT_EVENT,(e=>{e.stat===Er.PROXY?Or("Connection","Detected buffering proxy"):e.stat===Er.NOPROXY&&Or("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e){return new oa(e,!0)}class Lc{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Or("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,n,r,s,i,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Lc(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Vr.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new jr(Vr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Or("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Pc extends xc{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.yt=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ba(this.yt,e),n=function(e){if(!("targetChange"in e))return ts.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ts.min():t.readTime?la(t.readTime):ts.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ya(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Di(r)?{documents:Ea(e,r)}:{query:Ta(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ca(e,t.resumeToken):t.snapshotVersion.compareTo(ts.min())>0&&(n.readTime=aa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=Sa(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ya(this.yt),t.removeTarget=e,this.Bo(t)}}class Mc extends xc{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Fr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=Ia(e.writeResults,e.commitTime),n=la(e.commitTime);return this.listener.Zo(n,t)}return Fr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ya(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>_a(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new jr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.ao(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jr(Vr.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection._o(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jr(Vr.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Uc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lr(t),this.ou=!1):Or("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Wc(this)&&(Or("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ur(e);t._u.add(4),await qc(t),t.gu.set("Unknown"),t._u.delete(4),await jc(t)}(this))}))})),this.gu=new Uc(n,r)}}async function jc(e){if(Wc(e))for(const t of e.wu)await t(!0)}async function qc(e){for(const t of e.wu)await t(!1)}function Bc(e,t){const n=Ur(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Gc(n)?Kc(n):du(n).ko()&&Hc(n,t))}function $c(e,t){const n=Ur(e),r=du(n);n.du.delete(t),r.ko()&&zc(n,t),0===n.du.size&&(r.ko()?r.Fo():Wc(n)&&n.gu.set("Unknown"))}function Hc(e,t){e.yu.Ot(t.targetId),du(e).zo(t)}function zc(e,t){e.yu.Ot(t),du(e).Ho(t)}function Kc(e){e.yu=new ea({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),du(e).start(),e.gu.uu()}function Gc(e){return Wc(e)&&!du(e).No()&&e.du.size>0}function Wc(e){return 0===Ur(e)._u.size}function Jc(e){e.yu=void 0}async function Qc(e){e.du.forEach(((t,n)=>{Hc(e,t)}))}async function Xc(e,t){Jc(e),Gc(e)?(e.gu.hu(t),Kc(e)):e.gu.set("Unknown")}async function Yc(e,t,n){if(e.gu.set("Online"),t instanceof Yo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Or("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zc(e,n)}else if(t instanceof Qo?e.yu.Kt(t):t instanceof Xo?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(ts.min()))try{const t=await gc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.du.get(r);s&&e.du.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ss.EMPTY_BYTE_STRING,n.snapshotVersion)),zc(e,t);const r=new Ba(n.target,t,1,n.sequenceNumber);Hc(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Or("RemoteStore","Failed to raise snapshot:",t),await Zc(e,t)}}async function Zc(e,t,n){if(!gs(t))throw t;e._u.add(1),await qc(e),e.gu.set("Offline"),n||(n=()=>gc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Or("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await jc(e)}))}function eu(e,t){return t().catch((n=>Zc(e,n,t)))}async function tu(e){const t=Ur(e),n=fu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;nu(t);)try{const e=await wc(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,ru(t,e)}catch(e){await Zc(t,e)}su(t)&&iu(t)}function nu(e){return Wc(e)&&e.fu.length<10}function ru(e,t){e.fu.push(t);const n=fu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function su(e){return Wc(e)&&!fu(e).No()&&e.fu.length>0}function iu(e){fu(e).start()}async function ou(e){fu(e).eu()}async function au(e){const t=fu(e);for(const n of e.fu)t.Xo(n.mutations)}async function cu(e,t,n){const r=e.fu.shift(),s=ja.from(r,t,n);await eu(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await tu(e)}async function uu(e,t){t&&fu(e).Yo&&await async function(e,t){if(n=t.code,Oo(n)&&n!==Vr.ABORTED){const n=e.fu.shift();fu(e).Mo(),await eu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await tu(e)}var n}(e,t),su(e)&&iu(e)}async function lu(e,t){const n=Ur(e);n.asyncQueue.verifyOperationInProgress(),Or("RemoteStore","RemoteStore received new credentials");const r=Wc(n);n._u.add(3),await qc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await jc(n)}async function hu(e,t){const n=Ur(e);t?(n._u.delete(2),await jc(n)):t||(n._u.add(2),await qc(n),n.gu.set("Unknown"))}function du(e){return e.pu||(e.pu=function(e,t,n){const r=Ur(e);return r.su(),new Pc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Qc.bind(null,e),Zr:Xc.bind(null,e),Wo:Yc.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Gc(e)?Kc(e):e.gu.set("Unknown")):(await e.pu.stop(),Jc(e))}))),e.pu}function fu(e){return e.Iu||(e.Iu=function(e,t,n){const r=Ur(e);return r.su(),new Mc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:ou.bind(null,e),Zr:uu.bind(null,e),tu:au.bind(null,e),Zo:cu.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await tu(e)):(await e.Iu.stop(),e.fu.length>0&&(Or("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pu{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new pu(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jr(Vr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),gs(e))return new jr(Vr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||os.comparator(t.key,n.key):(e,t)=>os.comparator(e.key,t.key),this.keyedMap=Uo(),this.sortedSet=new vi(this.comparator)}static emptySet(e){return new gu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new gu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.Tu=new vi(os.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Mr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class vu{constructor(e,t,n,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new vu(e,t,gu.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.Au=void 0,this.listeners=[]}}class bu{constructor(){this.queries=new xo((e=>Hi(e)),$i),this.onlineState="Unknown",this.Ru=new Set}}async function _u(e,t){const n=Ur(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new wu),s)try{i.Au=await n.onListen(r)}catch(e){const n=mu(e,`Initialization of query '${zi(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&ku(n)}async function Iu(e,t){const n=Ur(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Eu(e,t){const n=Ur(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(s)&&(r=!0);t.Au=s}}r&&ku(n)}function Tu(e,t,n){const r=Ur(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ku(e){e.Ru.forEach((e=>{e.next()}))}class Su{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new vu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=vu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(e){this.key=e}}class Au{constructor(e){this.key=e}}class Ru{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=zo(),this.mutatedKeys=zo(),this.Gu=Wi(e),this.Qu=new gu(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new yu,r=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ki(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Qu:i,zu:n,$i:o,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const i=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new vu(this.query,e.Qu,r,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=zo(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new Au(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Cu(n))})),t}tc(e){this.qu=e.Hi,this.Ku=zo();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return vu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Nu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Du{constructor(e){this.key=e,this.nc=!1}}class Ou{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new xo((e=>Hi(e)),$i),this.rc=new Map,this.oc=new Set,this.uc=new vi(os.comparator),this.cc=new Map,this.ac=new tc,this.hc={},this.lc=new Map,this.fc=Ja.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Lu(e,t){const n=Yu(e);let r,s;const i=n.ic.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const e=await bc(n.localStore,ji(t));n.isPrimaryClient&&Bc(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await xu(n,t,r,"current"===i,e.resumeToken)}return s}async function xu(e,t,n,r,s){e._c=(t,n,r)=>async function(e,t,n,r){let s=t.view.Wu(n);s.$i&&(s=await Ic(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Ku(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const i=await Ic(e.localStore,t,!0),o=new Ru(t,i.Hi),a=o.Wu(i.documents),c=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=o.applyChanges(a,e.isPrimaryClient,c);Ku(e,n,u.Xu);const l=new Nu(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Pu(e,t){const n=Ur(e),r=n.ic.get(t),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter((e=>!$i(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _c(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),$c(n.remoteStore,r.targetId),Hu(n,r.targetId)})).catch(ps)):(Hu(n,r.targetId),await _c(n.localStore,r.targetId,!0))}async function Mu(e,t,n){const r=Zu(e);try{const e=await function(e,t){const n=Ur(e),r=es.now(),s=t.reduce(((e,t)=>e.add(t.key)),zo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Mo(),c=zo();return n.Gi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=bo(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Eo(e.key,t,ki(t.value.mapValue),po.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Vo(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new vi(Yr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ju(r,e.changes),await tu(r.remoteStore)}catch(e){const t=mu(e,"Failed to persist write");n.reject(t)}}async function Fu(e,t){const n=Ur(e);try{const e=await yc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Fr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Fr(r.nc):e.removedDocuments.size>0&&(Fr(r.nc),r.nc=!1))})),await Ju(n,e,t)}catch(e){await ps(e)}}function Uu(e,t,n){const r=Ur(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const s=r.view.bu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Ur(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.bu(t)&&(r=!0)})),r&&ku(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vu(e,t,n){const r=Ur(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.cc.get(t),i=s&&s.key;if(i){let e=new vi(os.comparator);e=e.insert(i,Si.newNoDocument(i,ts.min()));const n=zo().add(i),s=new Wo(ts.min(),new Map,new _i(Yr),e,n);await Fu(r,s),r.uc=r.uc.remove(i),r.cc.delete(t),Wu(r)}else await _c(r.localStore,t,!1).then((()=>Hu(r,t,n))).catch(ps)}async function ju(e,t){const n=Ur(e),r=t.batch.batchId;try{const e=await mc(n.localStore,t);$u(n,r,null),Bu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ju(n,e)}catch(e){await ps(e)}}async function qu(e,t,n){const r=Ur(e);try{const e=await function(e,t){const n=Ur(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Fr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);$u(r,t,n),Bu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ju(r,e)}catch(n){await ps(n)}}function Bu(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function $u(e,t,n){const r=Ur(e);let s=r.hc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.hc[r.currentUser.toKey()]=s}}function Hu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||zu(e,t)}))}function zu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&($c(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Wu(e))}function Ku(e,t,n){for(const r of n)r instanceof Cu?(e.ac.addReference(r.key,t),Gu(e,r)):r instanceof Au?(Or("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||zu(e,r.key)):Mr()}function Gu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Or("SyncEngine","New document in limbo: "+n),e.oc.add(r),Wu(e))}function Wu(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new os(rs.fromString(t)),r=e.fc.next();e.cc.set(r,new Du(n)),e.uc=e.uc.insert(n,r),Bc(e.remoteStore,new Ba(ji(xi(n.path)),r,2,ys.at))}}async function Ju(e,t,n){const r=Ur(e),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=lc.Ci(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.sc.Wo(s),await async function(e,t){const n=Ur(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ms.forEach(t,(t=>ms.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ms.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!gs(e))throw e;Or("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,s)}}}(r.localStore,i))}async function Qu(e,t){const n=Ur(e);if(!n.currentUser.isEqual(t)){Or("SyncEngine","User change. New user:",t.toKey());const e=await pc(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new jr(Vr.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ju(n,e.ji)}}function Xu(e,t){const n=Ur(e),r=n.cc.get(t);if(r&&r.nc)return zo().add(r.key);{let e=zo();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function Yu(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vu.bind(null,t),t.sc.Wo=Eu.bind(null,t.eventManager),t.sc.wc=Tu.bind(null,t.eventManager),t}function Zu(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ju.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qu.bind(null,t),t}class el{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return fc(this.persistence,new hc,e.initialUser,this.yt)}yc(e){return new ac(uc.Bs,this.yt)}gc(e){return new kc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Uu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qu.bind(null,this.syncEngine),await hu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bu}createDatastore(e){const t=Oc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Nc(r));var r;return function(e,t,n,r){return new Fc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Uu(this.syncEngine,e,0),i=Cc.C()?new Cc:new Sc,new Vc(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Ou(e,t,n,r,s,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ur(e);Or("RemoteStore","RemoteStore shutting down."),t._u.add(5),await qc(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(e,t,n){if(!n)throw new jr(Vr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rl(e,t,n,r){if(!0===t&&!0===r)throw new jr(Vr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sl(e){if(!os.isDocumentKey(e))throw new jr(Vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function il(e){if(os.isDocumentKey(e))throw new jr(Vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ol(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mr()}function al(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jr(Vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ol(e);throw new jr(Vr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cl=new Map;class ul{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new jr(Vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jr(Vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jr(Vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jr(Vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new $r;switch(e.type){case"gapi":const t=e.client;return new Gr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new jr(Vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=cl.get(e);t&&(Or("ComponentProvider","Removing Datastore"),cl.delete(e),t.terminate())}(this),Promise.resolve()}}function hl(e,t,n,r={}){var s;const i=(e=al(e,ll))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&xr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ar.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new jr(Vr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(i)}e._authCredentials=new Hr(new Br(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dl(this.firestore,e,this._key)}}class fl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class pl extends fl{constructor(e,t,n){super(e,t,xi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dl(this.firestore,null,new os(e))}withConverter(e){return new pl(this.firestore,e,this._path)}}function ml(e,t,...n){if(e=(0,a.m9)(e),nl("collection","path",t),e instanceof ll){const r=rs.fromString(t,...n);return il(r),new pl(e,null,r)}{if(!(e instanceof dl||e instanceof pl))throw new jr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rs.fromString(t,...n));return il(r),new pl(e.firestore,null,r)}}function gl(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Xr.R()),nl("doc","path",t),e instanceof ll){const r=rs.fromString(t,...n);return sl(r),new dl(e,null,new os(r))}{if(!(e instanceof dl||e instanceof pl))throw new jr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rs.fromString(t,...n));return sl(r),new dl(e.firestore,e instanceof pl?e.converter:null,new os(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Or("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Or("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=mu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function wl(e,t){e.asyncQueue.verifyOperationInProgress(),Or("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await pc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function bl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await _l(e);Or("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>lu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>lu(t.remoteStore,n))),e.onlineComponents=t}async function _l(e){return e.offlineComponents||(Or("FirestoreClient","Using default OfflineComponentProvider"),await wl(e,new el)),e.offlineComponents}async function Il(e){return e.onlineComponents||(Or("FirestoreClient","Using default OnlineComponentProvider"),await bl(e,new tl)),e.onlineComponents}function El(e){return Il(e).then((e=>e.syncEngine))}async function Tl(e){const t=await Il(e),n=t.eventManager;return n.onListen=Lu.bind(null,t.syncEngine),n.onUnlisten=Pu.bind(null,t.syncEngine),n}function kl(e,t,n={}){const r=new qr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new yl({next:i=>{t.enqueueAndForget((()=>Iu(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new jr(Vr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new jr(Vr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Su(xi(n.path),i,{includeMetadataChanges:!0,Nu:!0});return _u(e,o)}(await Tl(e),e.asyncQueue,t,n,r))),r.promise}function Sl(e,t,n={}){const r=new qr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new yl({next:n=>{t.enqueueAndForget((()=>Iu(e,o))),n.fromCache&&"server"===r.source?s.reject(new jr(Vr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Su(n,i,{includeMetadataChanges:!0,Nu:!0});return _u(e,o)}(await Tl(e),e.asyncQueue,t,n,r))),r.promise}class Cl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Lc(this,"async_queue_retry"),this.Wc=()=>{const e=Dc();e&&Or("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Dc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Dc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new qr;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(I){if(!gs(I))throw I;Or("AsyncQueue","Operation failed with retryable error: "+I)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Lr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=pu.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Mr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class Al extends ll{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Cl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dl(this),this._firestoreClient.terminate()}}function Rl(e,t){const n="object"==typeof e?e:(0,s.Mq)(),r="string"==typeof e?e:t||"(default)",i=(0,s.qX)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,a.P0)("firestore");e&&hl(i,...e)}return i}function Nl(e){return e._firestoreClient||Dl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Dl(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new vs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vl(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ol(Ss.fromBase64String(e))}catch(e){throw new jr(Vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ol(Ss.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jr(Vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new is(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xl{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jr(Vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jr(Vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Yr(this._lat,e._lat)||Yr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=/^__.*__$/;class Fl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Eo(e,this.data,this.fieldMask,t,this.fieldTransforms):new Io(e,this.data,t,this.fieldTransforms)}}function Ul(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Vl{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Xl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Ul(this.sa)&&Ml.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class jl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Oc(e)}da(e,t,n,r=!1){return new Vl({sa:e,methodName:t,fa:n,path:is.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ql(e){const t=e._freezeSettings(),n=Oc(e._databaseId);return new jl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Bl(e,t,n,r,s,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,s);Gl("Data must be an object, but it was:",o,r);const a=zl(r,o);let c,u;if(i.merge)c=new Ei(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Wl(t,r,n);if(!o.contains(s))throw new jr(Vr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Yl(e,s)||e.push(s)}c=new Ei(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Fl(new Ti(a),c,u)}function $l(e,t,n,r=!1){return Hl(n,e.da(r?4:3,t))}function Hl(e,t){if(Kl(e=(0,a.m9)(e)))return Gl("Unsupported field value:",t,e),zl(e,t);if(e instanceof xl)return function(e,t){if(!Ul(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Hl(s,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Yi(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=es.fromDate(e);return{timestampValue:aa(t.yt,n)}}if(e instanceof es){const n=new es(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aa(t.yt,n)}}if(e instanceof Pl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ol)return{bytesValue:ca(t.yt,e._byteString)};if(e instanceof dl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ha(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${ol(e)}`)}(e,t)}function zl(e,t){const n={};return Is(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_s(e,((e,r)=>{const s=Hl(r,t.ra(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Kl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof es||e instanceof Pl||e instanceof Ol||e instanceof dl||e instanceof xl)}function Gl(e,t,n){if(!Kl(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=ol(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Wl(e,t,n){if((t=(0,a.m9)(t))instanceof Ll)return t._internalPath;if("string"==typeof t)return Ql(e,t);throw Xl("Field path arguments must be of type string or ",e,!1,void 0,n)}const Jl=new RegExp("[~\\*/\\[\\]]");function Ql(e,t,n){if(t.search(Jl)>=0)throw Xl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ll(...t.split("."))._internalPath}catch(r){throw Xl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xl(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new jr(Vr.INVALID_ARGUMENT,a+e+c)}function Yl(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new eh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(th("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class eh extends Zl{data(){return super.data()}}function th(e,t){return"string"==typeof t?Ql(e,t):t instanceof Ll?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jr(Vr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rh{}class sh extends rh{}function ih(e,t,...n){let r=[];t instanceof rh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof ch)).length,n=e.filter((e=>e instanceof oh)).length;if(t>1||t>0&&n>0)throw new jr(Vr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const s of r)e=s._apply(e);return e}class oh extends sh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new oh(e,t,n)}_apply(e){const t=this._parse(e);return hh(e._query,t),new fl(e.firestore,e.converter,qi(e._query,t))}_parse(e){const t=ql(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new jr(Vr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){lh(o,i);const t=[];for(const n of o)t.push(uh(r,e,n));a={arrayValue:{values:t}}}else a=uh(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||lh(o,i),a=$l(n,t,o,"in"===i||"not-in"===i);return ei.create(s,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function ah(e,t,n){const r=t,s=th("where",e);return oh._create(s,r,n)}class ch extends rh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ch(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ti.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const s of r)hh(n,s),n=qi(n,s)}(e._query,t),new fl(e.firestore,e.converter,qi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function uh(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new jr(Vr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ui(t)&&-1!==n.indexOf("/"))throw new jr(Vr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(rs.fromString(n));if(!os.isDocumentKey(r))throw new jr(Vr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bs(e,new os(r))}if(n instanceof dl)return Bs(e,n._key);throw new jr(Vr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ol(n)}.`)}function lh(e,t){if(!Array.isArray(e)||0===e.length)throw new jr(Vr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new jr(Vr.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function hh(e,t){if(t.isInequality()){const n=Fi(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new jr(Vr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const s=Mi(e);null!==s&&dh(e,r,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new jr(Vr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new jr(Vr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function dh(e,t,n){if(!n.isEqual(t))throw new jr(Vr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class fh{convertValue(e,t="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Mr()}}convertObject(e,t){const n={};return _s(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Pl(Rs(e.latitude),Rs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Os(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ls(e));default:return null}}convertTimestamp(e){const t=As(e);return new es(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=rs.fromString(e);Fr(Pa(n));const r=new ws(n.get(1),n.get(3)),s=new os(n.popFirst(5));return r.isEqual(t)||Lr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gh extends Zl{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(th("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class yh extends gh{data(e={}){return super.data(e)}}class vh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new mh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new yh(this._firestore,this._userDataWriter,n.key,n,new mh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jr(Vr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new yh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new mh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new yh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new mh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:wh(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bh(e){e=al(e,dl);const t=al(e.firestore,Al);return kl(Nl(t),e._key).then((n=>Sh(t,e,n)))}class _h extends fh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ol(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dl(this.firestore,null,t)}}function Ih(e){e=al(e,fl);const t=al(e.firestore,Al),n=Nl(t),r=new _h(t);return nh(e._query),Sl(n,e._query).then((n=>new vh(t,r,e,n)))}function Eh(e,t,n){e=al(e,dl);const r=al(e.firestore,Al),s=ph(e.converter,t,n);return kh(r,[Bl(ql(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,po.none())])}function Th(e,t){const n=al(e.firestore,Al),r=gl(e),s=ph(e.converter,t);return kh(n,[Bl(ql(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,po.exists(!1))]).then((()=>r))}function kh(e,t){return function(e,t){const n=new qr;return e.asyncQueue.enqueueAndForget((async()=>Mu(await El(e),t,n))),n.promise}(Nl(e),t)}function Sh(e,t,n){const r=n.docs.get(t._key),s=new _h(e);return new gh(e,s,t._key,r,new mh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Rr=e}(s.Jn),(0,s.Xd)(new i.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Al(new zr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jr(Vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(Cr,"3.8.0",e),(0,s.KN)(Cr,"3.8.0","esm2017")}()},444:function(e,t,n){n.d(t,{BH:function(){return k},L:function(){return a},LL:function(){return R},P0:function(){return I},Pz:function(){return T},Sg:function(){return S},ZR:function(){return A},aH:function(){return E},b$:function(){return d},eu:function(){return m},hl:function(){return p},m9:function(){return B},ne:function(){return U},pd:function(){return F},q4:function(){return _},ru:function(){return h},tV:function(){return c},uI:function(){return l},vZ:function(){return L},w1:function(){return f},xO:function(){return P},xb:function(){return O},z$:function(){return u},zd:function(){return M}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){try{return"object"===typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>g().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/IWP/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},w=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},b=()=>{try{return y()||v()||w()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},_=e=>{var t,n;return null===(n=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=e=>{const t=_(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},E=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config},T=e=>{var t;return null===(t=b())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?N(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new A(r,o,n);return a}}function N(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(x(n)&&x(i)){if(!L(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function x(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function M(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function F(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}},262:function(e,t,n){n.d(t,{Bj:function(){return i},Fl:function(){return He},IU:function(){return Ae},Jd:function(){return E},PG:function(){return Te},SU:function(){return Ve},Um:function(){return _e},WL:function(){return qe},X$:function(){return C},X3:function(){return Ce},XI:function(){return Me},Xl:function(){return Re},dq:function(){return xe},iH:function(){return Pe},j:function(){return k},lk:function(){return T},qj:function(){return be},qq:function(){return w},yT:function(){return Se}});var r=n(577);let s;class i{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=s,!e&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(e){if(this.active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){s=this}off(){s=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e,t=s){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];c(s)&&!u(s)?s.delete(e):t[n++]=s,s.w&=~p,s.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?l(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const I=[];function E(){I.push(_),_=!1}function T(){const e=I.pop();_=void 0===e||e}function k(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const s=void 0;S(r,s)}}function S(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function C(e,t,n,s,i,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(s);c.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=F(),L=F(!1,!0),x=F(!0),P=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,s=this.length;t<s;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Ae(this)[t].apply(this,e);return T(),n}})),e}function F(e=!1,t=!1){return function(n,s,i){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_isShallow"===s)return t;if("__v_raw"===s&&i===(e?t?ye:ge:t?me:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(P,s))return Reflect.get(P,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?D.has(s):N(s))?a:(e||k(n,"get",s),t?a:xe(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?e?Ie(a):be(a):a)}}const U=j(),V=j(!0);function j(e=!1){return function(t,n,s,i){let o=t[n];if(ke(o)&&xe(o)&&!xe(s))return!1;if(!e&&(Se(s)||ke(s)||(o=Ae(o),s=Ae(s)),!(0,r.kJ)(t)&&xe(o)&&!xe(s)))return o.value=s,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,s,i);return t===Ae(i)&&(a?(0,r.aU)(s,o)&&C(t,"set",n,s,o):C(t,"add",n,s)),c}}function q(e,t){const n=(0,r.RI)(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&C(e,"delete",t,void 0,s),i}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||k(e,"has",t),n}function $(e){return k(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const H={get:O,set:U,deleteProperty:q,has:B,ownKeys:$},z={get:x,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},H,{get:L,set:V}),G=e=>e,W=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const s=Ae(e),i=Ae(t);n||(t!==i&&k(s,"get",t),k(s,"get",i));const{has:o}=W(s),a=r?G:n?De:Ne;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=Ae(n),s=Ae(e);return t||(e!==s&&k(r,"has",e),k(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function X(e,t=!1){return e=e["__v_raw"],!t&&k(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Y(e){e=Ae(e);const t=Ae(this),n=W(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function Z(e,t){t=Ae(t);const n=Ae(this),{has:s,get:i}=W(n);let o=s.call(n,e);o||(e=Ae(e),o=s.call(n,e));const a=i.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function ee(e){const t=Ae(this),{has:n,get:r}=W(t);let s=n.call(t,e);s||(e=Ae(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&C(t,"delete",e,void 0,i),o}function te(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const s=this,i=s["__v_raw"],o=Ae(i),a=t?G:e?De:Ne;return!e&&k(o,"iterate",y),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function re(e,t,n){return function(...s){const i=this["__v_raw"],o=Ae(i),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...s),h=n?G:t?De:Ne;return!t&&k(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return J(this,e)},get size(){return X(this)},has:Q,add:Y,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return X(this)},has:Q,add:Y,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return X(this,!0)},has(e){return Q.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return X(this,!0)},has(e){return Q.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:ne(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{e[s]=re(s,!1,!1),n[s]=re(s,!0,!1),t[s]=re(s,!1,!0),r[s]=re(s,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,ue]=ie();function le(e,t){const n=t?e?ue:ce:e?ae:oe;return(t,s,i)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,r.RI)(n,s)&&s in t?n:t,s,i)}const he={get:le(!1,!1)},de={get:le(!1,!0)},fe={get:le(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ye=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return ke(e)?e:Ee(e,!1,H,he,pe)}function _e(e){return Ee(e,!1,K,de,me)}function Ie(e){return Ee(e,!0,z,fe,ge)}function Ee(e,t,n,s,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=i.get(e);if(o)return o;const a=we(e);if(0===a)return e;const c=new Proxy(e,2===a?s:n);return i.set(e,c),c}function Te(e){return ke(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return Te(e)||ke(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?be(e):e,De=e=>(0,r.Kn)(e)?Ie(e):e;function Oe(e){_&&g&&(e=Ae(e),S(e.dep||(e.dep=a())))}function Le(e,t){e=Ae(e),e.dep&&A(e.dep)}function xe(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Fe(e,!1)}function Me(e){return Fe(e,!0)}function Fe(e,t){return xe(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return Oe(this),this._value}set value(e){const t=this.__v_isShallow||Se(e)||ke(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ne(e),Le(this,e))}}function Ve(e){return xe(e)?e.value:e}const je={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function qe(e){return Te(e)?e:new Proxy(e,je)}var Be;class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Be]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Oe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function He(e,t,n=!1){let s,i;const o=(0,r.mf)(e);o?(s=e,i=r.dG):(s=e.get,i=e.set);const a=new $e(s,i,o||!i,n);return a}Be="__v_isReadonly"},252:function(e,t,n){n.d(t,{$d:function(){return o},Cn:function(){return M},FN:function(){return pn},Fl:function(){return Nn},HY:function(){return Ot},JJ:function(){return K},Ko:function(){return Ve},P$:function(){return re},Q6:function(){return ue},U2:function(){return ie},Uk:function(){return tn},Us:function(){return St},Wm:function(){return Xt},Y3:function(){return v},Y8:function(){return ee},YP:function(){return J},_:function(){return Qt},aZ:function(){return le},dD:function(){return P},f3:function(){return G},h:function(){return Dn},iD:function(){return $t},ic:function(){return ke},j4:function(){return Ht},kq:function(){return rn},nK:function(){return ce},uE:function(){return nn},up:function(){return Pe},w5:function(){return F},wg:function(){return Ut},wy:function(){return Oe}});var r=n(262),s=n(577);function i(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){a(i,t,n)}return s}function o(e,t,n,r){if((0,s.mf)(e)){const o=i(e,t,n,r);return o&&(0,s.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let s=0;s<e.length;s++)c.push(o(e[s],t,n,r));return c}function a(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const s=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void i(a,null,10,[e,s,o])}c(e,n,s,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,s=S(h[r]);s<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){u||l||(l=!0,y=g.then(A))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,s.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function k(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>S(e)-S(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const S=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){l=!1,u=!0,h.sort(C);s.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&i(e,null,14)}}finally{d=0,h.length=0,k(e),u=!1,y=null,(h.length||f.length)&&A(e)}}new Set;new Map;function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||s.kT;let i=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||s.kT;o&&(i=n.map((e=>(0,s.HD)(e)?e.trim():e))),t&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(t)]||r[u=(0,s.hR)((0,s._A)(t))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(t))]),l&&o(l,e,6,i);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,i)}}function N(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const o=e.emits;let a={},c=!1;if(!(0,s.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((e=>a[e]=null)):(0,s.l7)(a,o),(0,s.Kn)(e)&&r.set(e,a),a):((0,s.Kn)(e)&&r.set(e,null),null)}function D(e,t){return!(!e||!(0,s.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,s.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,s.RI)(e,(0,s.rs)(t))||(0,s.RI)(e,t))}let O=null,L=null;function x(e){const t=O;return O=e,L=e&&e.type.__scopeId||null,t}function P(e){L=e}function M(){L=null}function F(e,t=O,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&qt(-1);const s=x(t);let i;try{i=e(...n)}finally{x(s),r._d&&qt(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=x(e);try{if(4&n.shapeFlag){const e=i||r;v=sn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=sn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:V(l)}}catch(I){Mt.length=0,a(I,e,1),v=Xt(xt)}let _=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(s.tR)&&(w=j(w,c)),_=en(_,w))}return n.dirs&&(_=en(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,x(b),v}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,s.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function q(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?B(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!D(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!D(n,i))return!0}return!1}function $({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,s.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function K(e,t){if(fn){let n=fn.provides;const r=fn.parent&&fn.parent.provides;r===n&&(n=fn.provides=Object.create(r)),n[e]=t}else 0}function G(e,t,n=!1){const r=fn||O;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,s.mf)(t)?t.call(r.proxy):t}else 0}const W={};function J(e,t,n){return Q(e,t,n)}function Q(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=fn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,s.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Z(e):(0,s.mf)(e)?i(e,h,2):void 0))):d=(0,s.mf)(e)?t?()=>i(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[y])}:s.dG,t&&a){const e=d;d=()=>Z(e())}let g,y=e=>{f=I.onStop=()=>{i(e,h,4)}};if(bn){if(y=s.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,y]):d(),"sync"!==c)return s.dG;{const e=Ln();g=e.__watcherHandles||(e.__watcherHandles=[])}}let v=m?new Array(e.length).fill(W):W;const w=()=>{if(I.active)if(t){const e=I.run();(a||p||(m?e.some(((e,t)=>(0,s.aU)(e,v[t]))):(0,s.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===W?void 0:m&&v[0]===W?[]:v,y]),v=e)}else I.run()};let _;w.allowRecurse=!!t,"sync"===c?_=w:"post"===c?_=()=>kt(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),_=()=>b(w));const I=new r.qq(d,_);t?n?w():v=I.run():"post"===c?kt(I.run.bind(I),h&&h.suspense):I.run();const E=()=>{I.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,I)};return g&&g.push(E),E}function X(e,t,n){const r=this.proxy,i=(0,s.HD)(e)?e.includes(".")?Y(r,e):()=>r[e]:e.bind(r,r);let o;(0,s.mf)(t)?o=t:(o=t.handler,n=t);const a=fn;mn(this);const c=Q(i,o.bind(r),n);return a?mn(a):gn(),c}function Y(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Z(e,t){if(!(0,s.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Z(e.value,t);else if((0,s.kJ)(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if((0,s.DM)(e)||(0,s._N)(e))e.forEach((e=>{Z(e,t)}));else if((0,s.PO)(e))for(const n in e)Z(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ee((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=pn(),s=ee();let i;return()=>{const o=t.default&&ue(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==xt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(s.isLeaving)return oe(a);const l=ae(a);if(!l)return oe(a);const h=ie(l,c,s,n);ce(l,h);const d=n.subTree,f=d&&ae(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==xt&&(!Kt(l,f)||p)){const e=ie(f,c,s,n);if(ce(f,e),"out-in"===u)return s.isLeaving=!0,e.afterLeave=()=>{s.isLeaving=!1,!1!==n.update.active&&n.update()},oe(a);"in-out"===u&&l.type!==xt&&(e.delayLeave=(e,t,n)=>{const r=se(s,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},re=ne;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ie(e,t,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),I=se(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,s.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!i)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const s=I[_];s&&Kt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=h,s=d;if(!n.isMounted){if(!i)return;t=v||l,r=w||h,s=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,E(t?s:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let i=!1;const o=t._leaveCb=n=>{i||(i=!0,r(),E(n?g:m,[t]),t._leaveCb=void 0,I[s]===e&&delete I[s])};I[s]=e,p?T(p,[t,o]):o()},clone(e){return ie(e,t,n,r)}};return k}function oe(e){if(de(e))return e=en(e),e.children=null,e}function ae(e){return de(e)?e.children?e.children[0]:void 0:e}function ce(e,t){6&e.shapeFlag&&e.component?ce(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Ot?(128&o.patchFlag&&s++,r=r.concat(ue(o.children,t,a))):(t||o.type!==xt)&&r.push(null!=a?en(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function le(e){return(0,s.mf)(e)?{setup:e,name:e.name}:e}const he=e=>!!e.type.__asyncLoader;const de=e=>e.type.__isKeepAlive;RegExp,RegExp;function fe(e,t){return(0,s.kJ)(e)?e.some((e=>fe(e,t))):(0,s.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function pe(e,t){ge(e,"a",t)}function me(e,t){ge(e,"da",t)}function ge(e,t,n=fn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,r,n),n){let e=n.parent;while(e&&e.parent)de(e.parent.vnode)&&ye(r,t,n,e),e=e.parent}}function ye(e,t,n,r){const i=be(t,e,r,!0);Ce((()=>{(0,s.Od)(r[t],i)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function we(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=fn,s=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const i=o(t,n,e,s);return gn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const _e=e=>(t,n=fn)=>(!bn||"sp"===e)&&be(e,((...e)=>t(...e)),n),Ie=_e("bm"),Ee=_e("m"),Te=_e("bu"),ke=_e("u"),Se=_e("bum"),Ce=_e("um"),Ae=_e("sp"),Re=_e("rtg"),Ne=_e("rtc");function De(e,t=fn){be("ec",e,t)}function Oe(e,t){const n=O;if(null===n)return e;const r=Cn(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=s.kT]=t[o];e&&((0,s.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Z(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Le(e,t,n,s){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const xe="components";function Pe(e,t){return Fe(xe,e,!0,t)||e}const Me=Symbol();function Fe(e,t,n=!0,r=!1){const i=O||fn;if(i){const n=i.type;if(e===xe){const e=An(n,!1);if(e&&(e===t||e===(0,s._A)(t)||e===(0,s.kC)((0,s._A)(t))))return n}const o=Ue(i[e]||n[e],t)||Ue(i.appContext[e],t);return!o&&r?n:o}}function Ue(e,t){return e&&(e[t]||e[(0,s._A)(t)]||e[(0,s.kC)((0,s._A)(t))])}function Ve(e,t,n,r){let i;const o=n&&n[r];if((0,s.kJ)(e)||(0,s.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=t(e[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const je=e=>e?yn(e)?Cn(e)||e.proxy:je(e.parent):null,qe=(0,s.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>je(e.parent),$root:e=>je(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>X.bind(e)}),Be=(e,t)=>e!==s.kT&&!e.__isScriptSetup&&(0,s.RI)(e,t),$e={get({_:e},t){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Be(i,t))return c[t]=1,i[t];if(o!==s.kT&&(0,s.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,s.RI)(h,t))return c[t]=3,a[t];if(n!==s.kT&&(0,s.RI)(n,t))return c[t]=4,n[t];He&&(c[t]=0)}}const d=qe[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==s.kT&&(0,s.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,s.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return Be(i,t)?(i[t]=n,!0):r!==s.kT&&(0,s.RI)(r,t)?(r[t]=n,!0):!(0,s.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||e!==s.kT&&(0,s.RI)(e,a)||Be(t,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(qe,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let He=!0;function ze(e){const t=Je(e),n=e.proxy,i=e.ctx;He=!1,t.beforeCreate&&Ge(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:I,render:E,renderTracked:T,renderTriggered:k,errorCaptured:S,serverPrefetch:C,expose:A,inheritAttrs:R,components:N,directives:D,filters:O}=t,L=null;if(h&&Ke(h,i,L,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,s.mf)(e)&&(i[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Kn)(t)&&(e.data=(0,r.qj)(t))}if(He=!0,a)for(const r in a){const e=a[r],t=(0,s.mf)(e)?e.bind(n,n):(0,s.mf)(e.get)?e.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(e)&&(0,s.mf)(e.set)?e.set.bind(n):s.dG,c=Nn({get:t,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)We(u[r],i,n,r);if(l){const e=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{K(t,e[t])}))}function x(e,t){(0,s.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ge(d,e,"c"),x(Ie,f),x(Ee,p),x(Te,m),x(ke,g),x(pe,y),x(me,v),x(De,S),x(Ne,T),x(Re,k),x(Se,b),x(Ce,I),x(Ae,C),(0,s.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===s.dG&&(e.render=E),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),D&&(e.directives=D)}function Ke(e,t,n=s.dG,i=!1){(0,s.kJ)(e)&&(e=et(e));for(const o in e){const n=e[o];let a;a=(0,s.Kn)(n)?"default"in n?G(n.from||o,n.default,!0):G(n.from||o):G(n),(0,r.dq)(a)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ge(e,t,n){o((0,s.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function We(e,t,n,r){const i=r.includes(".")?Y(n,r):()=>n[r];if((0,s.HD)(e)){const n=t[e];(0,s.mf)(n)&&J(i,n)}else if((0,s.mf)(e))J(i,e.bind(n));else if((0,s.Kn)(e))if((0,s.kJ)(e))e.forEach((e=>We(e,t,n,r)));else{const r=(0,s.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.mf)(r)&&J(i,r,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((e=>Qe(u,e,a,!0))),Qe(u,t,a)):u=t,(0,s.Kn)(t)&&o.set(t,u),u}function Qe(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Qe(e,i,n,!0),s&&s.forEach((t=>Qe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Xe[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Xe={data:Ye,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:rt,provide:Ye,inject:Ze};function Ye(e,t){return t?e?function(){return(0,s.l7)((0,s.mf)(e)?e.call(this,this):e,(0,s.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return nt(et(e),et(t))}function et(e){if((0,s.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,s.l7)((0,s.l7)(Object.create(null),e),t):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,s.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function st(e,t,n,i=!1){const o={},a={};(0,s.Nj)(a,Gt,1),e.propsDefaults=Object.create(null),ot(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function it(e,t,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;ot(e,t,o,a)&&(h=!0);for(const i in u)t&&((0,s.RI)(t,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=at(l,u,i,void 0,e,!0)):delete o[i]);if(a!==u)for(const e in a)t&&(0,s.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(D(e.emitsOptions,i))continue;const c=t[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const t=(0,s._A)(i);o[t]=at(l,u,t,c,e,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ot(e,t,n,i){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,s.Gg)(r))continue;const l=t[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:D(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=at(o,t,c,i[c],e,!(0,s.RI)(i,c))}}return u}function at(e,t,n,r,i,o){const a=e[n];if(null!=a){const e=(0,s.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,s.mf)(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(mn(i),r=s[n]=e.call(null,t),gn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function ct(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},c=[];let u=!1;if(!(0,s.mf)(e)){const r=e=>{u=!0;const[n,r]=ct(e,t,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,s.Kn)(e)&&r.set(e,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,s._A)(o[h]);ut(e)&&(a[e]=s.kT)}else if(o){0;for(const e in o){const t=(0,s._A)(e);if(ut(t)){const n=o[e],r=a[t]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=dt(Boolean,r.type),n=dt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,s.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,s.Kn)(e)&&r.set(e,l),l}function ut(e){return"$"!==e[0]}function lt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function ht(e,t){return lt(e)===lt(t)}function dt(e,t){return(0,s.kJ)(t)?t.findIndex((t=>ht(t,e))):(0,s.mf)(t)&&ht(t,e)?0:-1}const ft=e=>"_"===e[0]||"$stable"===e,pt=e=>(0,s.kJ)(e)?e.map(sn):[sn(e)],mt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>pt(t(...e))),n);return r._c=!1,r},gt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ft(i))continue;const n=e[i];if((0,s.mf)(n))t[i]=mt(i,n,r);else if(null!=n){0;const e=pt(n);t[i]=()=>e}}},yt=(e,t)=>{const n=pt(t);e.slots.default=()=>n},vt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,s.Nj)(t,"_",n)):gt(t,e.slots={})}else e.slots={},t&&yt(e,t);(0,s.Nj)(e.slots,Gt,1)},wt=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=s.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,s.l7)(i,t),n||1!==e||delete i._):(o=!t.$stable,gt(t,i)),a=t}else t&&(yt(e,t),a={default:1});if(o)for(const s in i)ft(s)||s in a||delete i[s]};function bt(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function It(e,t){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=bt(),o=new Set;let a=!1;const c=i.app={_uid:_t++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:xn,get config(){return i.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,s.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,s.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(s,o,u){if(!a){0;const l=Xt(n,r);return l.appContext=i,o&&t?t(l,s):e(l,s,u),a=!0,c._container=s,s.__vue_app__=c,Cn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function Et(e,t,n,o,a=!1){if((0,s.kJ)(e))return void e.forEach(((e,r)=>Et(e,t&&((0,s.kJ)(t)?t[r]:t),n,o,a)));if(he(o)&&!a)return;const c=4&o.shapeFlag?Cn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,l,12,[u,f]);else{const t=(0,s.HD)(h),i=(0,r.dq)(h);if(t||i){const r=()=>{if(e.f){const n=t?(0,s.RI)(p,h)?p[h]:f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,kt(r,n)):r()}else 0}}function Tt(){}const kt=z;function St(e){return Ct(e)}function Ct(e,t){Tt();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=s.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Y(e),G(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Lt:v(e,t,n,r);break;case xt:w(e,t,n,r);break;case Pt:null==e&&_(t,n,r,o);break;case Ot:x(e,t,n,r,s,i,o,a,c);break;default:1&h?C(e,t,n,r,s,i,o,a,c):6&h?P(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,s,i,o,a,c,ee)}null!=l&&s&&Et(l,e&&e.ref,i,t||e,!t)},v=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,s,i,o,a,c):D(e,t,s,i,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&Le(e,null,r,"created"),g){for(const t in g)"value"===t||(0,s.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,X);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&un(p,r,e)}R(f,e,e.scopeId,l,r),w&&Le(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(f),i(f,t,n),((p=g&&g.onVnodeMounted)||b||w)&&kt((()=>{p&&un(p,r,e),b&&v.enter(f),w&&Le(e,null,r,"mounted")}),o)},R=(e,t,n,r,s)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(s){let n=s.subTree;if(t===n){const t=s.vnode;R(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},N=(e,t,n,r,s,i,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?on(e[u]):sn(e[u]);y(null,c,t,n,r,s,i,o,a)}},D=(e,t,n,r,i,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||s.kT,m=t.props||s.kT;let g;n&&At(n,!1),(g=m.onVnodeBeforeUpdate)&&un(g,n,t,e),f&&Le(t,e,n,"beforeUpdate"),n&&At(n,!0);const y=i&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,u,n,r,y,o):c||B(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)L(u,t,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const s=t.dynamicProps;for(let t=0;t<s.length;t++){const o=s[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,i,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||L(u,t,p,m,n,r,i);((g=m.onVnodeUpdated)||f)&&kt((()=>{g&&un(g,n,t,e),f&&Le(t,e,n,"updated")}),r)},O=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Ot||!Kt(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},L=(e,t,n,r,i,o,c)=>{if(n!==r){if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,i,o,X);for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,i,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},x=(e,t,n,r,s,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(h,n,r),i(d,n,r),N(t.children,n,d,s,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,s,o,a,c),(null!=t.key||s&&t===s.subTree)&&Rt(e,t,!0)):B(e,t,n,d,s,o,a,c,l)},P=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):M(t,n,r,s,i,o,c):F(e,t,c)},M=(e,t,n,r,s,i,o)=>{const a=e.component=dn(e,r,s);if(de(e)&&(a.ctx.renderer=ee),_n(a),a.asyncDep){if(s&&s.registerDep(a,V),!e.el){const e=a.subTree=Xt(xt);w(null,e,t,n)}}else V(a,e,t,n,s,i,o)},F=(e,t,n)=>{const r=t.component=e.component;if(q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,i,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:u,vnode:l}=e,h=n;0,At(e,!1),n?(n.el=l.el,j(e,n,c)):n=l,r&&(0,s.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,u,n,l),At(e,!0);const d=U(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&$(e,d.el),i&&kt(i,o),(t=n.props&&n.props.onVnodeUpdated)&&kt((()=>un(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=he(t);if(At(e,!1),l&&(0,s.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&un(r,d,t),At(e,!0),c&&ne){const n=()=>{e.subTree=U(e),ne(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,y(null,r,n,i,e,o,a),t.el=r.el}if(h&&kt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;kt((()=>un(r,d,e)),o)}(256&t.shapeFlag||d&&he(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&kt(e.a,o),e.isMounted=!0,t=n=i=null}},l=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,At(e,!0),h()},j=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,it(e,t.props,s,n),wt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},B=(e,t,n,r,s,i,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,h,n,r,s,i,o,a,c);if(256&f)return void H(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&d(n,h)):16&l?16&p?z(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&d(n,""),16&p&&N(h,n,r,s,i,o,a,c))},H=(e,t,n,r,i,o,a,c,u)=>{e=e||s.Z6,t=t||s.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?on(t[f]):sn(t[f]);y(e[f],r,n,null,i,o,a,c,u)}l>h?X(e,i,o,!0,!1,d):N(t,n,r,i,o,a,c,u,d)},z=(e,t,n,r,i,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],s=t[l]=u?on(t[l]):sn(t[l]);if(!Kt(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],s=t[f]=u?on(t[f]):sn(t[f]);if(!Kt(r,s))break;y(r,s,n,null,i,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,s=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?on(t[l]):sn(t[l]),n,s,i,o,a,c,u),l++}}else if(l>f)while(l<=d)G(e[l],i,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?on(t[l]):sn(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const b=f-m+1;let _=!1,I=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){G(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Kt(r,t[v])){s=v;break}void 0===s?G(r,i,o,!0):(E[s-m]=l+1,s>=I?I=s:_=!0,y(r,t[s],n,null,i,o,a,c,u),w++)}const T=_?Nt(E):s.Z6;for(v=T.length-1,l=b-1;l>=0;l--){const e=m+l,s=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?y(null,s,n,d,i,o,a,c,u):_&&(v<0||l!==T[v]?K(s,n,d,2):v--)}}},K=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Ot){i(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Pt)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),kt((()=>c.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),u=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,t,n)},G=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Et(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!he(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&un(m,t,e),6&l)Q(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Le(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,s,ee,r):u&&(i!==Ot||h>0&&64&h)?X(u,t,n,!1,!0):(i===Ot&&384&h||!s&&16&l)&&X(c,t,n),r&&W(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&kt((()=>{m&&un(m,t,e),f&&Le(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Ot)return void J(n,r);if(t===Pt)return void S(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=e;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,G(a,e,t,n)),c&&kt(c,t),kt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)G(e[o],t,n,r,s)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),T(),k(),t._vnode=e},ee={p:y,um:G,m:K,r:W,mt:M,mc:N,pc:B,pbc:O,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:It(Z,te)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rt(e,t,n=!1){const r=e.children,i=t.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=on(i[s]),t.el=e.el),n||Rt(e,t)),t.type===Lt&&(t.el=e.el)}}function Nt(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=t[o];return n}const Dt=e=>e.__isTeleport;const Ot=Symbol(void 0),Lt=Symbol(void 0),xt=Symbol(void 0),Pt=Symbol(void 0),Mt=[];let Ft=null;function Ut(e=!1){Mt.push(Ft=e?null:[])}function Vt(){Mt.pop(),Ft=Mt[Mt.length-1]||null}let jt=1;function qt(e){jt+=e}function Bt(e){return e.dynamicChildren=jt>0?Ft||s.Z6:null,Vt(),jt>0&&Ft&&Ft.push(e),e}function $t(e,t,n,r,s,i){return Bt(Qt(e,t,n,r,s,i,!0))}function Ht(e,t,n,r,s){return Bt(Xt(e,t,n,r,s,!0))}function zt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",Wt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,s.HD)(e)||(0,r.dq)(e)||(0,s.mf)(e)?{i:O,r:e,k:t,f:!!n}:e:null;function Qt(e,t=null,n=null,r=0,i=null,o=(e===Ot?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wt(t),ref:t&&Jt(t),scopeId:L,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:O};return c?(an(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),jt>0&&!a&&Ft&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ft.push(u),u}const Xt=Yt;function Yt(e,t=null,n=null,i=0,o=null,a=!1){if(e&&e!==Me||(e=xt),zt(e)){const r=en(e,t,!0);return n&&an(r,n),jt>0&&!a&&Ft&&(6&r.shapeFlag?Ft[Ft.indexOf(e)]=r:Ft.push(r)),r.patchFlag|=-2,r}if(Rn(e)&&(e=e.__vccOpts),t){t=Zt(t);let{class:e,style:n}=t;e&&!(0,s.HD)(e)&&(t.class=(0,s.C_)(e)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),t.style=(0,s.j5)(n))}const c=(0,s.HD)(e)?1:H(e)?128:Dt(e)?64:(0,s.Kn)(e)?4:(0,s.mf)(e)?2:0;return Qt(e,t,n,i,o,c,a,!0)}function Zt(e){return e?(0,r.X3)(e)||Gt in e?(0,s.l7)({},e):e:null}function en(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=e,c=t?cn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Wt(c),ref:t&&t.ref?n&&i?(0,s.kJ)(i)?i.concat(Jt(t)):[i,Jt(t)]:Jt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ot?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function tn(e=" ",t=0){return Xt(Lt,null,e,t)}function nn(e,t){const n=Xt(Pt,null,e);return n.staticCount=t,n}function rn(e="",t=!1){return t?(Ut(),Ht(xt,null,e)):Xt(xt,null,e)}function sn(e){return null==e||"boolean"===typeof e?Xt(xt):(0,s.kJ)(e)?Xt(Ot,null,e.slice()):"object"===typeof e?on(e):Xt(Lt,null,String(e))}function on(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:en(e)}function an(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,s.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),an(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Gt in t?3===r&&O&&(1===O.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=O}}else(0,s.mf)(t)?(t={default:t,_ctx:O},n=32):(t=String(t),64&r?(n=16,t=[tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,s.C_)([t.class,r.class]));else if("style"===e)t.style=(0,s.j5)([t.style,r.style]);else if((0,s.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function un(e,t,n,r=null){o(e,t,7,[n,r])}const ln=bt();let hn=0;function dn(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||ln,a={uid:hn++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ct(i,o),emitsOptions:N(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let fn=null;const pn=()=>fn||O,mn=e=>{fn=e,e.scope.on()},gn=()=>{fn&&fn.scope.off(),fn=null};function yn(e){return 4&e.vnode.shapeFlag}let vn,wn,bn=!1;function _n(e,t=!1){bn=t;const{props:n,children:r}=e.vnode,s=yn(e);st(e,n,s,t),vt(e,r);const i=s?In(e,t):void 0;return bn=!1,i}function In(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,$e));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Sn(e):null;mn(e),(0,r.Jd)();const c=i(o,e,0,[e.props,n]);if((0,r.lk)(),gn(),(0,s.tI)(c)){if(c.then(gn,gn),t)return c.then((n=>{En(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else En(e,c,t)}else Tn(e,t)}function En(e,t,n){(0,s.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Tn(e,n)}function Tn(e,t,n){const i=e.type;if(!e.render){if(!t&&vn&&!i.render){const t=i.template||Je(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=vn(t,c)}}e.render=i.render||s.dG,wn&&wn(e)}mn(e),(0,r.Jd)(),ze(e),(0,r.lk)(),gn()}function kn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Sn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=kn(e))},slots:e.slots,emit:e.emit,expose:t}}function Cn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in qe?qe[n](e):void 0},has(e,t){return t in e||t in qe}}))}function An(e,t=!0){return(0,s.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Rn(e){return(0,s.mf)(e)&&"__vccOpts"in e}const Nn=(e,t)=>(0,r.Fl)(e,t,bn);function Dn(e,t,n){const r=arguments.length;return 2===r?(0,s.Kn)(t)&&!(0,s.kJ)(t)?zt(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&zt(n)&&(n=[n]),Xt(e,t,n))}const On=Symbol(""),Ln=()=>{{const e=G(On);return e}};const xn="3.2.45"},963:function(e,t,n){n.d(t,{G2:function(){return ee},nr:function(){return Z},ri:function(){return ie}});var r=n(577),s=n(252);n(262);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?o.createElementNS(i,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const s=a.content;if(r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const s=e.style,i=(0,r.HD)(n);if(n&&!i){for(const e in n)d(s,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(s,e,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=m(e,t);h.test(n)?e.setProperty((0,r.rs)(s),n.replace(h,""),"important"):e[s]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let s=(0,r._A)(t);if("filter"!==s&&s in e)return p[t]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const s=(0,r.Pq)(t);null==n||s&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function v(e,t,n,s,i,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,i,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function _(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=E(t);if(r){const o=i[t]=C(r,s);w(e,n,o,a)}else o&&(b(e,n,o,a),i[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function E(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const k=Promise.resolve(),S=()=>T||(k.then((()=>T=0)),T=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,s.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=S(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,N=(e,t,n,s,i=!1,o,a,c,h)=>{"class"===t?u(e,s,i):"style"===t?l(e,n,s):(0,r.F7)(t)?(0,r.tR)(t)||_(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,s,i))?v(e,t,s,o,a,c,h):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),y(e,t,s,i))};function D(e,t,n,s){return s?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",L="animation",x=(e,{slots:t})=>(0,s.h)(s.P$,U(e),t);x.displayName="Transition";const P={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=(x.props=(0,r.l7)({},s.P$.props,P),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),F=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function U(e){const t={};for(const r in e)r in P||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=V(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=v,onAppear:T=w,onAppearCancelled:k=b}=t,S=(e,t,n)=>{B(e,t?h:c),B(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,B(e,d),B(e,p),B(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:w,i=()=>S(t,e,n);M(r,[t,i]),$((()=>{B(t,e?u:o),q(t,e?h:c),F(r)||z(t,s,g,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){M(v,[e]),q(e,o),q(e,a)},onBeforeAppear(e){M(E,[e]),q(e,u),q(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);q(e,d),J(),q(e,f),$((()=>{e._isLeaving&&(B(e,d),q(e,p),F(_)||z(e,s,y,n))})),M(_,[e,n])},onEnterCancelled(e){S(e,!1),M(b,[e])},onAppearCancelled(e){S(e,!0),M(k,[e])},onLeaveCancelled(e){C(e),M(I,[e])}})}function V(e){if(null==e)return null;if((0,r.Kn)(e))return[j(e.enter),j(e.leave)];{const t=j(e);return[t,t]}}function j(e){const t=(0,r.He)(e);return t}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let H=0;function z(e,t,n,r){const s=e._endId=++H,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=K(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),i()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r(`${O}Delay`),i=r(`${O}Duration`),o=G(s,i),a=r(`${L}Delay`),c=r(`${L}Duration`),u=G(a,c);let l=null,h=0,d=0;t===O?o>0&&(l=O,h=o,d=i.length):t===L?u>0&&(l=L,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?O:L:null,d=l?l===O?i.length:c.length:0);const f=l===O&&/\b(transform|all)(,|$)/.test(r(`${O}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function G(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>W(t)+W(e[n]))))}function W(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function X(e){e.target.composing=!0}function Y(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Z={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Q(i);const o=s||i.props&&"number"===i.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),e._assign(s)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",X),w(e,"compositionend",Y),w(e,"change",Y))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Q(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(s&&e.value.trim()===t)return;if((i||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ee={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=Q(n),w(e,"change",(()=>{e._assign(te(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=Q(s),t!==n&&(e.checked=(0,r.WV)(t,s.props.value))}};function te(e){return"_value"in e?e._value:e.value}const ne=(0,r.l7)({patchProp:N},c);let re;function se(){return re||(re=(0,s.Us)(ne))}const ie=(...e)=>{const t=se().createApp(...e);const{mount:n}=t;return t.mount=e=>{const s=oe(e);if(!s)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function oe(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return h},DM:function(){return L},E9:function(){return se},F7:function(){return k},Gg:function(){return z},HD:function(){return M},He:function(){return ne},Kn:function(){return U},NO:function(){return E},Nj:function(){return te},Od:function(){return A},PO:function(){return $},Pq:function(){return f},RI:function(){return N},S0:function(){return H},W7:function(){return B},WV:function(){return g},Z6:function(){return _},_A:function(){return W},_N:function(){return O},aU:function(){return Z},dG:function(){return I},e1:function(){return i},fY:function(){return r},hR:function(){return Y},hq:function(){return y},ir:function(){return ee},j5:function(){return o},kC:function(){return X},kJ:function(){return D},kT:function(){return b},l7:function(){return C},mf:function(){return P},rs:function(){return Q},tI:function(){return V},tR:function(){return S},yA:function(){return p},yk:function(){return F},zw:function(){return v}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);function o(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=M(r)?l(r):o(r);if(s)for(const e in s)t[e]=s[e]}return t}return M(e)||U(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(M(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=x(e),r=x(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=D(e),r=D(t),n||r)return!(!n||!r)&&m(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex((e=>g(e,t)))}const v=e=>M(e)?e:null==e?"":D(e)||U(e)&&(e.toString===j||!P(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):O(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||D(t)||$(t)?t:String(t),b={},_=[],I=()=>{},E=()=>!1,T=/^on[^a-z]/,k=e=>T.test(e),S=e=>e.startsWith("onUpdate:"),C=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,N=(e,t)=>R.call(e,t),D=Array.isArray,O=e=>"[object Map]"===q(e),L=e=>"[object Set]"===q(e),x=e=>"[object Date]"===q(e),P=e=>"function"===typeof e,M=e=>"string"===typeof e,F=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,V=e=>U(e)&&P(e.then)&&P(e.catch),j=Object.prototype.toString,q=e=>j.call(e),B=e=>q(e).slice(8,-1),$=e=>"[object Object]"===q(e),H=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,W=K((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),J=/\B([A-Z])/g,Q=K((e=>e.replace(J,"-$1").toLowerCase())),X=K((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=K((e=>e?`on${X(e)}`:"")),Z=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const se=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},655:function(e,t,n){n.d(t,{Jh:function(){return i},_T:function(){return r},mG:function(){return s}});function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function s(e,t,n,r){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):s(e.value).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(i&&(i=0,a[0]&&(o=0)),o)try{if(n=1,r&&(s=2&a[0]?r["return"]:a[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;switch(r=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}Object.create;Object.create},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n}},816:function(e,t,n){n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return le},Mq:function(){return ye},ZF:function(){return ge},KN:function(){return ve}});var r=n(463),s=n(333),i=n(444);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(I(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return C.set(t,i),i}w((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const D="@firebase/app",O="0.9.0",L=new s.Yd("@firebase/app"),x="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",q="@firebase/database",B="@firebase/database-compat",$="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",se="9.15.0",ie="[DEFAULT]",oe={[D]:"fire-core",[x]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[q]:"fire-rtdb",[B]:"fire-rtdb-compat",[$]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new i.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=se;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const s=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),o=s.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(s,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,s,c);return ae.set(o,u),u}function ye(e=ie){const t=ae.get(e);if(!t&&e===ie)return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var s;let i=null!==(s=oe[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}le(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="firebase-heartbeat-database",be=1,_e="firebase-heartbeat-store";let Ie=null;function Ee(){return Ie||(Ie=T(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Te(e){try{const t=await Ee();return t.transaction(_e).objectStore(_e).get(Se(e))}catch(t){if(t instanceof i.ZR)L.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});L.warn(e.message)}}}async function ke(e,t){try{const n=await Ee(),r=n.transaction(_e,"readwrite"),s=r.objectStore(_e);return await s.put(t,Se(e)),r.done}catch(n){if(n instanceof i.ZR)L.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});L.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=1024,Ae=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ne(),{heartbeatsToSend:t,unsentEntries:n}=De(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function De(e,t=Ce){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Le(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Le(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){le(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Re(e)),"PRIVATE")),ve(D,O,e),ve(D,O,"esm2017"),ve("fire-js","")}xe("")},463:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return s}});var r=n(444);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){n.d(t,{Yd:function(){return u},in:function(){return s}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}},977:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(816),s="firebase",i="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(s,i,"app")},864:function(e,t,n){n.d(t,{e5:function(){return r.e5},v0:function(){return r.v0},w7:function(){return r.w7}});var r=n(947)},828:function(e,t,n){n.d(t,{ET:function(){return r.ET},IO:function(){return r.IO},PL:function(){return r.PL},ad:function(){return r.ad},ar:function(){return r.ar},hJ:function(){return r.hJ}});var r=n(294)},201:function(e,t,n){n.d(t,{p7:function(){return nt},r5:function(){return j}});var r=n(252),s=n(262);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const s=t[r];n[r]=l(s)?s.map(e):e(s)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&y(t.matched[r],n.matched[s])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const k=/^[^#]+#/;function S(e,t){return e.replace(k,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=C(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function O(e,t){D.set(e,t)}function L(e){const t=D.get(e);return D.delete(e),t}let x=()=>location.protocol+"//"+location.host;function P(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+s}function M(e,t,n,r){let s=[],i=[],o=null;const c=({state:i})=>{const a=P(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){o=n.value}function l(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?A():null}}function U(e){const{history:t,location:n}=window,r={value:P(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:x()+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(s.value.back,e,s.value.forward,!0),n,{position:s.value.position});i(e,o,!0),r.value=e}function c(e,n){const o=a({},s.value,t.state,{forward:e,scroll:A()});i(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);i(e,c,!1),r.value=e}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:o}}function V(e){e=T(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const s=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function j(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),V(e)}function q(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function K(e,t){return a(new Error,{type:e,[H]:!0},t)}function G(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const W="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},J,t),r=[];let s=n.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;i.push({name:e,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),s+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,c=i in t?t[i]:"";if(l(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:i,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,s=t.score;while(n<r.length&&n<s.length){const e=Y(r[n],s[n]);if(e)return e;n++}if(1===Math.abs(s.length-r.length)){if(ee(r))return 1;if(ee(s))return-1}return s.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function se(e,t,n){const r=X(re(e.path),n);const s=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function ie(e,t){const n=[],r=new Map;function s(e){return r.get(e)}function i(e,n,r){const s=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=se(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),s&&e.name&&!ue(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let s,i,o,c={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw K(1,{location:e});0,o=s.record.name,c=a(oe(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,s.keys.map((e=>e.name)))),i=s.stringify(c)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(c=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw K(1,{location:e,currentLocation:t});o=s.record.name,c=a({},t.params,e.params),i=s.stringify(c)}const u=[];let l=s;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:i,params:c,matched:u,meta:le(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ye=/\?/g,ve=/\+/g,we=/%5B/g,be=/%5D/g,_e=/%5E/g,Ie=/%60/g,Ee=/%7B/g,Te=/%7C/g,ke=/%7D/g,Se=/%20/g;function Ce(e){return encodeURI(""+e).replace(Te,"|").replace(we,"[").replace(be,"]")}function Ae(e){return Ce(e).replace(Ee,"{").replace(ke,"}").replace(_e,"^")}function Re(e){return Ce(e).replace(ve,"%2B").replace(Se,"+").replace(fe,"%23").replace(pe,"%26").replace(Ie,"`").replace(Ee,"{").replace(ke,"}").replace(_e,"^")}function Ne(e){return Re(e).replace(ge,"%3D")}function De(e){return Ce(e).replace(fe,"%23").replace(ye,"%3F")}function Oe(e){return null==e?"":De(e).replace(me,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function xe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const e=r[s].replace(ve," "),n=e.indexOf("="),i=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(i in t){let e=t[i];l(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const s=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];s.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol(""),qe=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):q(e)?a(K(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"===typeof e&&i.push(e),o())},u=e.call(r&&r.instances[s],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function He(e,t,n,r){const s=[];for(const i of e){0;for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(ze(a)){const o=a.__vccOpts||a,c=o[t];c&&s.push($e(c,n,r,i,e))}else{let c=a();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&$e(u,n,r,i,e)()}))))}}}return s}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(je),i=(0,r.Fl)((()=>t.resolve((0,s.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,i.value.params)));function l(n={}){return Je(n)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,s.qj)(Ke(e)),{options:i}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=t.default&&t.default(n);return e.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),We=Ge;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],s=e[n];if("string"===typeof r){if(r!==s)return!1}else if(!l(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(qe),o=(0,r.Fl)((()=>e.route||i.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,s.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Fe,l),(0,r.JJ)(qe,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&y(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=o.value,i=e.name,c=l.value,u=c&&c.components[i];if(!u)return et(n.default,{Component:u,route:s});const d=c.props[i],f=d?!0===d?s.params:"function"===typeof d?d(s):d:null,p=e=>{e.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:s})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=ie(e.routes,e),n=e.parseQuery||xe,o=e.stringifyQuery||Pe,h=e.history;const d=Be(),m=Be(),y=Be(),v=(0,s.XI)($);let w=$;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),_=c.bind(null,Oe),E=c.bind(null,Le);function T(e,n){let r,s;return B(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function D(e,r){if(r=a({},r||v.value),"string"===typeof e){const s=f(n,e,r.path),i=t.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:E(i.params),hash:Le(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in e)s=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];s=a({},e,{params:_(e.params)}),r.params=_(r.params)}const i=t.resolve(s,r),c=e.hash||"";i.params=b(E(i.params));const u=p(o,a({},e,{hash:Ae(c),path:i.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Me(e.query):e.query||{}},i,{redirectedFrom:void 0,href:l})}function x(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function P(e,t){if(w!==e)return K(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(x(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=w=D(e),r=v.value,s=e.state,i=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(x(u),{state:"object"===typeof u?a({},s,u.state):s,force:i,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!i&&g(o,r,n)&&(h=K(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch((e=>G(e)?G(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(G(e,2))return V(a({replace:c},x(e.to),{state:"object"===typeof e.to?a({},s,e.to.state):s,force:i}),t||l)}else e=z(l,r,!0,c,s);return H(l,r,e),e}))}function j(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,s,i]=st(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(o),rt(n)})).then((()=>{n=He(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const s of r.beforeEnter)n.push($e(s,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(i,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push($e(r,e,t));return n.push(o),rt(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of y.list())r(e,t,n)}function z(e,t,n,r,s){const o=P(e,t);if(o)return o;const c=t===$,u=i?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},s)):h.push(e.fullPath,s)),v.value=e,ne(e,t,n,c),te()}let W;function J(){W||(W=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=D(e),s=U(r);if(s)return void V(a(s,{replace:!0}),r).catch(u);w=r;const o=v.value;i&&O(N(o.fullPath,n.delta),A()),q(r,o).catch((e=>G(e,12)?e:G(e,2)?(V(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===I.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||z(r,o,!1),e&&(n.delta&&!G(e,8)?h.go(-n.delta,!1):n.type===I.pop&&G(e,20)&&h.go(-1,!1)),H(r,o,e)})).catch(u)})))}let Q,X=Be(),Y=Be();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Q&&v.value!==$?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Q||(Q=!e,J(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,s,o){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!s&&L(N(t.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&R(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let se;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:T,removeRoute:k,hasRoute:C,getRoutes:S,resolve:D,options:e,push:M,replace:F,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(v)}),i&&!se&&v.value===$&&(se=!0,M(h.location).catch((e=>{0})));const n={};for(const s in $)n[s]=(0,r.Fl)((()=>v.value[s]));e.provide(Ve,t),e.provide(je,(0,s.qj)(n)),e.provide(qe,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=$,W&&W(),W=null,v.value=$,se=!1,Q=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function st(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>y(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||s.push(a))}return[n,r,s]}}}]);
//# sourceMappingURL=chunk-vendors.48e6bd64.js.map