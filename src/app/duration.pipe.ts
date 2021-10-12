import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {

    transform(value: number, args?: any) : string {

        if(value < 60){
            if(value < 10){
                return '00:0' + value.toString() + ' hours'
            }else{
                return '00:' + value.toString() + ' hours'
            }
        }else{
            var hour = ~~(value/60);
            var minute = value % 60;
            var result = '';

            if(hour < 10){
                result += '0' + hour.toString();
            }

            if(minute < 10){
                return result + ':' + '0' + (value % 60).toString() + ' hours'
            }

            return (~~(value/60)).toString() + ':' + (value % 60).toString() + ' hours'
        }
    }
}