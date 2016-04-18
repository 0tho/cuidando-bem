/*
This file is part of Cuidando Bem.

    Cuidando Bem is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Cuidando Bem is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Cuidando Bem.  If not, see <http://www.gnu.org/licenses/>.
*/

define([],function(){function e(t){function h(){var t=new e(n);for(scene in r)t.registerScene(r[scene].getClone());for(modal in s)t.registerModalScene(s[modal].getClone());for(flag in u)t.registerFlag(u[flag].getClone());return t.setInitialScene(l),t.setCurrentSceneById(f),t.setSetupScript(c),t}function p(){return n}function d(e){return g(e).getActions()}function v(e){return g(e).getDialogs()}function m(e){return g(e).getInteractiveObjects()}function g(e){return typeof e=="string"?r[i[e]]:r[e]}function y(e){return typeof e=="string"?s[o[e]]:s[e]}function b(){return u}function w(e){return typeof e=="string"?u[a[e]]:u[e]}function E(){return r[l]}function S(){return r[f]}function x(){return f}function T(e){l=e,f=e}function N(e){f=e}function C(e){i[e.getId()]=r.length,r.push(e)}function k(e){o[e.getId()]=s.length,s.push(e)}function L(e,t){r[t].registerAction(e)}function A(e,t){r[t].registerInteractiveObject(e)}function O(e,t){r[t].registerDialog(e)}function M(e){a[e.getName()]=u.length,u.push(e)}var n=t,r=[],i={},s=[],o={},u=[],a={},f=0,l=0,c=function(){};return{getClone:h,getName:p,getActions:d,getFlag:w,getFlags:b,getInteractiveObjects:m,getDialogs:v,getInitialScene:E,getCurrentScene:S,getCurrentSceneId:x,getScene:g,getModalScene:y,setInitialScene:T,setCurrentSceneById:N,setSetupScript:function(e){c=e},setup:function(){c()},registerScene:C,registerModalScene:k,registerAction:L,registerDialog:O,registerFlag:M,registerInteractiveObject:A}}return e});