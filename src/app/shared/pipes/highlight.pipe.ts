import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlight'
})

export class HighlightSearch implements PipeTransform {

    transform(value: any, searchStr: any): any {
        if (!searchStr) {return value;}
        var re = new RegExp(searchStr, 'gi'); 
        return value.replace(re, "<span>$&</span>");
    }
}