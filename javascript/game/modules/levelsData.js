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

define([],function(){function e(e,n){null!=o[n],o[n]=e,f+=e.getMaxPoints()}function n(){return o[c]}function t(){return c}function r(){return f}function u(e){return o[e].getMaxPoints()}function i(e){c=e}var o={},c=0,f=0;return{registerLevel:e,getCurrentLevel:n,getCurrentLevelId:t,getMaxGameScore:r,getLevelMaxScore:u,setCurrentLevel:i}});