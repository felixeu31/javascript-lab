describe('Unique values within an array tests', () => {
    let persons = [
        { Name: "Felix", Age: 30},
        { Name: "Mario", Age: 31},
        { Name: "David", Age: 30},
        { Name: "Ruben", Age: 30}
    ];

    it('should calculate unique values using filter', () => {
        
        let uniqueAges; 

        let ages = persons.map((value) => value.Age);
        uniqueAges = ages.filter((v, i, a) => a.indexOf(v) === i).length; // https://stackoverflow.com/questions/1702762/how-can-i-create-an-empty-file-at-the-command-line-in-windows

        expect(uniqueAges).toBe(2);
    });
    
    it('should calculate unique values using reduce', () => {
        
        let uniqueAges; 

        let ages = persons.map((value) =>  value.Age);
        uniqueAges = ages.reduce((acc, curr) => // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
            acc.find((v) => v === curr) ? acc : [...acc, curr], // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        []).length;

        expect(uniqueAges).toBe(2);
    });

    it('should calculate unique values using set', () => {
        
        let uniqueAges; 

        let ages = persons.map((value) => value.Age);
        uniqueAges = [...new Set(ages)].length;

        expect(uniqueAges).toBe(2);
    });
});