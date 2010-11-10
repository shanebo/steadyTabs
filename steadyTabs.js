/*
---
name: steadyTabs

description: An extremely tiny Mootools tabs class.

license: MIT-style

authors:
- Shane Thacker (steadymade.com)

requires:
- Mootools Core

...
*/

var steadyTabs = new Class({
	initialize: function(tabs, panes) {
		this.tabs = $$(tabs).addEvent('click', this.click.bind(this));
		this.panes = $$(panes);
		this.newItems = $$(this.tabs[0], this.panes[0]).addClass('active');
	},
	click: function(e){
		this.oldItems = this.newItems.removeClass('active');
		this.newItems = $$(e.target, this.panes[this.tabs.indexOf(e.target)]).addClass('active');
	}
});