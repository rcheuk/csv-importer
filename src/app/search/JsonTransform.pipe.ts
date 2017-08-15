import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'jsonTransform'})
export class JsonTransform implements PipeTransform {
  transform(value:any): String {
    let obj = JSON.parse(value);
    let html = '';
    for (const key of Object.keys(obj)) {
      let header = this.toTitleCase(key.split('_').join(' '));
      html += '<b>' + header + ':</b> ';
      html += (obj[key]) + '<br/>';
    }
    return html;
  }

  toTitleCase(str) {
    if (typeof str === 'string') {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    } else {
      return str;
    }
  }
}