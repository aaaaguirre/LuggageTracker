// @ts-nocheck

export function format_timestamp(dt_string){
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const ts = new Date(dt_string);
    return ts.toLocaleDateString('en-IE', options);
}