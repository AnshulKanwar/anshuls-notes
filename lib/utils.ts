export function kebabCaseToUpperCase(s: string): string {
    const lowerCase = s.replace('-', ' ')
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
}