describe('Cookie tests', () => {
    const sampleDocumentCookie = 'cookieName1=value1; cookieName2=60; cookieName3=2023-01-19T11%3A30%3A45.2020695%2B01%3A00';

    it('should count cookies', () => {
        var splittedCookies = splitCookies(sampleDocumentCookie).length;
        
        expect(splittedCookies).toBe(3);
    });

    it('should evaluate if cookie exists', () => {
        var result = splitCookies(sampleDocumentCookie).some(cookie => cookie.startsWith('cookieName1' + "="));
        
        expect(result).toBe(true);
    });

    it('should evaluate if cookie does not exists', () => {
        var result = splitCookies(sampleDocumentCookie).some(cookie => cookie.startsWith('nonExistingCookie' + "="));
        
        expect(result).toBe(false);
    });

    it('should get cookie value', () => {
        var result = splitCookies(sampleDocumentCookie)?.find(cookie => cookie.startsWith('cookieName1' + "="))?.replace('cookieName1' + "=", '');
        
        expect(result).toBe('value1');
    });

});

function splitCookies(sampleDocumentCookie) {
    return sampleDocumentCookie.split(";").map((value) => value.trim());
}
