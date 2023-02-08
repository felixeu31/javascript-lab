// import moment from 'moment';
describe('Moment dates', () => {    
    const moment = require('moment');  

    // Create dates
    it('create a now date', () => {
        let momentDate = moment.now();

        expect(momentDate).not.toBeNull();
    });

    it(' create a Moment with a pre-existing native Javascript Date object', () => {
        var day = new Date(2011, 9, 16);
        var momentDate = moment(day);

        expect(momentDate.date()).toBe(16);
    });
    
    it('create a date from iso 8601 date string', () => {
        let momentDate = moment('2022-11-03T17:08:00.0000000Z');

        expect(momentDate).not.toBeNull();
    });


    // Get date parts
    it('gets day in month', () => {
        let momentDate = moment('2022-11-03T17:08:00.0000000Z');
        
        expect(momentDate.date()).toBe(3);
    });

    it('gets month index', () => {
        let momentDate = moment('2022-11-03T17:08:00.0000000Z');
        
        expect(momentDate.month()).toBe(10);
    });

    it('gets year', () => {
        let momentDate = moment('2022-11-03T17:08:00.0000000Z');
        
        expect(momentDate.year()).toBe(2022);
    });

    // Format
    it('display format in L formar', () => {
        let momentDate = moment('2022-11-03T17:08:00.0000000Z');
        let displayDate = momentDate.format('L');
        
        expect(displayDate).toBe('11/03/2022');
    });

    
    it('display format in L formar', () => {
        let momentDate = moment('1992-02-02T00:00:00Z');
        let displayDate = momentDate.utc().format('L');
        
        expect(displayDate).toBe('02/02/1992');
    });

    it('display format in L formar', () => {
        let momentDate = moment.utc('1992-02-02T00:00:00Z');
        let displayDate = momentDate.format('L');
        
        expect(displayDate).toBe('02/02/1992');
    });

});