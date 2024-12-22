import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('functions checks', () => {

    test('check if the function getFullYear returns the correct year', () => {
        expect(getFullYear()).toEqual(2021);
    });

    test("check if the function getFooterCopy returns 'Holberton School' if the argument is true", () => {
        expect(getFooterCopy(True)).toEqual('Holberton School');
    });

    test("check if the function getFooterCopy returns 'Holberton School main dashboard' if the argument is false", () => {
        expect(getFooterCopy(False)).toEqual('Holberton School main dashboard');
    });

    test("check if the function getLatestNotification retuns 'Urgent requirement - complete by EOD'", () => {
        expect(getLatestNotification()).toEqual('strong>Urgent requirement</strong> - complete by EOD')
    });

});