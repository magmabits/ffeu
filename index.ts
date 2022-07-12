import { randomBytes } from "node:crypto";
const upperCase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase: string = "abcdefghjklmnopqrstuvwxyz";
const numbers: string = "0123456789";
const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const logBase: number = Math.log(1024);

export enum IDType {
    NumberOnly,
    UpperCaseOnly,
    LowerCaseOnly,
}

export function generateID(len: number, type?: IDType | undefined): string {
    if (!Number.isSafeInteger(len) || len <= 0) {
        throw new TypeError("Invalid length.");
    }

    switch (type) {
        case IDType.NumberOnly: {
            return randomBytes(len).reduce((a, b) => a + numbers[Math.floor((b * numbers.length) / 0xFF)], "");
        }
            
        case IDType.UpperCaseOnly: {
            return randomBytes(len).reduce((a, b) => a + upperCase[Math.floor((b * upperCase.length) / 0xFF)], "");
        }
            
        case IDType.LowerCaseOnly: {
            return randomBytes(len).reduce((a, b) => a + lowerCase[Math.floor((b * lowerCase.length) / 0xFF)], "");
        }
            
        default: {
            const ids: string = upperCase + lowerCase + numbers;
            return randomBytes(len).reduce((a, b) => a + ids[Math.floor((b * ids.length) / 0xFF)], "");       
        }
    }
}

export function toCapital(text: string): string {
    return text.toLowerCase().replace(/\b\w/g, x => x.toUpperCase());
}

export function formatBytes(bytes: number): string {
    const exponent: number = Math.floor(Math.log(bytes) / logBase);
    return `${(bytes / Math.pow(1024, exponent)).toFixed()} ${sizes[exponent]}`;
}

export function toOrdinal(num: number): string {
    if (!Number.isSafeInteger(num) || num <= 0) {
        throw new TypeError("Number must be positive - it's not valid!");
    }

    switch (num) {
        case 11: {
            return "11th";
        }

        case 12: {
            return "12th";
        }

        case 13: {
            return "13th";
        }
    }

    let end: string = "th";

    switch (num % 10) {
        case 1: {
            end = "st";
            break;
        }

        case 2: {
            end = "nd";
            break;
        }

        case 3: {
            end = "rd";
        }
    }

    return num.toString() + end;
}

export function timeSince(date: number | Date): string {
    if (typeof date === "number") {
        date = new Date(date);
    }
    
    const seconds = Math.floor(Date.now() / 1000) - Math.floor(date.getTime() / 1000);

    let interval = seconds / 31556000;
    if (interval >= 1) {
        interval = Math.floor(interval);
        return `${interval} year${interval !== 1 ? 's' : ''}`;
    }

    interval = seconds / 2629000;
    if (interval >= 1) {
        interval = Math.floor(interval);
        return `${interval} month${interval !== 1 ? 's' : ''}`;
    }

    interval = seconds / 604800;
    if (interval >= 1) {
        interval = Math.floor(interval);
        return `${interval} week${interval !== 1 ? 's' : ''}`;
    }

    interval = seconds / 86400;
    if (interval >= 1) {
        interval = Math.floor(interval);
        return `${interval} day${interval !== 1 ? 's' : ''}`;
    }

    interval = seconds / 3600;
    if (interval >= 1) {
        interval = Math.floor(interval);
        return `${interval} hour${interval !== 1 ? 's' : ''}`;
    }

    interval = seconds / 60;
    if (interval >= 1) {
        interval = Math.floor(interval);
        return `${interval} minute${interval !== 1 ? 's' : ''}`;
    }

    interval = Math.floor(interval);
    return `${interval} second${interval !== 1 ? 's' : ''}`
}
    
