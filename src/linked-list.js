const Node = require('./node');

class LinkedList {
    constructor() {
		this.length=0;
	}

    append(data) {
		var node=new Node;
		node.data=data;	
		node.numb=this.length;
		if(this._head==null){
			this._head=node;
			this._tail=node;
			this.length=1;
		}
		else if(this.length==1){
		
			this._head.next=node;
			node.prev=this._head;
			this._tail=node;
			this.length=this.length+1;
		}
		else if(this.length>1){
			this._tail.next=node;
			node.prev=this._tail;
			this._tail=node;
			this.length=this.length+1;
		}
		return this;
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		var el=this._head;
		while(index!=el.numb){
			el=el.next;
		}
		if(index==el.numb){
			return el.data;
		}
		else {
			return;
		}
	}

    insertAt(index, data) {				
		var newList=new LinkedList, elem=new Node;
		if(index==0){
			elem.data=data;
			this._head=elem;
			this._tail=elem;
			this.length=1;
			return;
		}
		var el=this._head;
		while(index!=el.numb){
			if(el.numb==0){
				elem=el;
				newList._head=elem;
			}
			else if(el.numb>0){
			
				elem.next=el;
			}
			el=el.next;
		}
		var node=new Node;
		node.data=data;
		elem=elem.next;
		node.prev=elem;
		node.numb=el.numb;
		elem.next=node;
		el.numb=el.numb+1;
		node.next=el;
		
		while(this.length!=el.numb){
			el=el.next;
			el.numb=el.numb+1;			
		}
		newList._tail=el;
		newList.length=this.length+1;
		return newList;	
	}

    isEmpty() {
		if(this.length==0){
			return true;
		}
		else{
			return false;
		}
	}

    clear() {
		this._head.data=null;
		this._tail.data=null;
		this.length=0;
		return this;
	}

    deleteAt(index) {
		var newList=new LinkedList, elem=new Node;
		if(index==this.length-1){
			newList._head=new Node;
			newList._tail=new Node;			
			return newList;
		}
		
		var el=this._head;
		
		while(index!=el.numb){
			if(el.numb==0){
				elem=el;
				newList._head=elem;
			}
			else if(el.numb>0){
			
				elem.next=el;
			}
			el=el.next;
		}	
		
		while((this.length-2)!=el.numb){
			elem=elem.next;
			
			el=el.next;
			el.numb=el.numb-1;
			elem.next=el;			
		}
		newList._tail=el;
		newList.length=this.length-1;
		return newList;	
	}

    reverse() {	
		var newList= new LinkedList, elem=new Node, element=new Node;
		var el=this._tail;		
		elem.data=el.data;
		elem.next=null;
		elem.prev=null;
		elem.numb=0;
		newList._head=elem;	
		newList.length=1;		
		while((this.length)!=(newList.length)){
			el=el.prev;
			var newEl=new Node;
			elem.next=newEl;
			elem.next.data=el.data;
			element=elem;
			elem=elem.next;
			elem.numb=newList.length;
			elem.prev=element;			
			newList.length=newList.length+1;
		}
		elem.next=null;
		newList._tail=elem;
		
		if(this.length>1){
			this._head=newList._head;
			this._head.next=newList._head.next;
			this._head.next.next=newList._head.next.next;
			this._head.next.next.next=newList._head.next.next.next;
			this._head.next.next.next.next=newList._head.next.next.next.next;
			this._head.next.next.next.next.next=newList._head.next.next.next.next.next;
		}
		this._tail=newList._tail;
		return this;	
	}

    indexOf(data) {
		var el=this._head;
		while(data!=el.data){			
				el=el.next;
				if(el==null){
					return -1;				
				}
		}		
		return el.numb;
	}
}

module.exports = LinkedList;
